suppressMessages(library(ggplot2))
suppressMessages(library(rhdf5))
suppressMessages(library(magick))
gg_color_hue <- function(n) { hues = seq(15, 375, length = n + 1) 
                            hcl(h = hues, l = 65, c = 100)[1:n] }
datDay2_1 <- cbind(h5read("./Day2_hdf5file.h5", name = "Dimension_reduction/UMAP/df_2D"), 
                   h5read("./Day2_hdf5file.h5", name = "Dimension_reduction/TSNE/df_2D"))
datDay2_1$cluster <- as.factor(h5read("./Day2_hdf5file.h5", name = "Cell_meta/Default_clustering"))
colnames(datDay2_1)[1:2] <- c("UMAP_1","UMAP_2")
p_2d_plot <- function(rd_method, cluster_no){
  plot_2d <- ggplot(datDay2_1, aes(datDay2_1[, paste0(rd_method, "_1")], datDay2_1[, paste0(rd_method, "_2")], 
                                   color = factor(ifelse(datDay2_1$cluster==as.integer(cluster_no), as.integer(cluster_no), 0)))) +
    geom_point(size=0.7) + theme_bw() +  xlab(paste0(rd_method, "_1")) + ylab(paste0(rd_method, "_2")) + 
    guides(colour = guide_legend(override.aes = list(size=4))) + 
    scale_color_manual(name = paste0("cluster ", cluster_no), 
                       values = c("#F1F1F1", gg_color_hue(length(table(datDay2_1$cluster)))[as.integer(cluster_no)] ))
  return(plot_2d)
}

p <- p_2d_plot(input[[1]], input[[2]])
fig <- image_graph(width = 400, height=400, res=96)
print(p)
dev.off()
figpng <- image_write(fig, path=NULL, format="png")
do.call(print, list(figpng))
