suppressMessages(library(ggplot2))
suppressMessages(library(rhdf5))
suppressMessages(library(magick))
datDay <- cbind(h5read("./Day1_hdf5file.h5", name = "Dimension_reduction/UMAP/df_2D"), 
                   h5read("./Day1_hdf5file.h5", name = "Dimension_reduction/TSNE/df_2D"))
datDay$cluster <- as.factor(h5read("./Day1_hdf5file.h5", name = "Cell_meta/Default_clustering"))
colnames(datDay)[1:2] <- c("UMAP_1", "UMAP_2")
p_2d_plot <- function(rd_method){
  plot_2d <- ggplot(datDay, aes(datDay[, paste0(rd_method, "_1")], datDay[, paste0(rd_method, "_2")], color = cluster)) + geom_point(size=0.7) + theme_bw() +
    xlab(paste0(rd_method, "_1")) + ylab(paste0(rd_method, "_2")) + guides(colour = guide_legend(override.aes = list(size=4)))
  return(plot_2d)
}

p <- p_2d_plot(input[[1]])
fig <- image_graph(width = 400, height=400, res=96)
print(p)
dev.off()
figpng <- image_write(fig, path=NULL, format="png")
do.call(print, list(figpng))
