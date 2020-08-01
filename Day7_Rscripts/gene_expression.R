suppressMessages(library(ggplot2))
suppressMessages(library(rhdf5))
suppressMessages(library(magick))

datDay7_2 <- cbind(h5read("./Day7_hdf5file.h5", name = "Dimension_reduction/UMAP/df_2D"), 
                   h5read("./Day7_hdf5file.h5", name = "Dimension_reduction/TSNE/df_2D"))
expressions <- h5read("./Day7_hdf5file.h5", name = "Normalized_Data/Normalized_Data_matrix")
rownames(expressions) <- h5read("./Day7_hdf5file.h5", name = "Gene_meta/Gene_Names")
colnames(datDay7_2)[1:2] <- c("UMAP_1","UMAP_2")
p_2d_plot <- function(rd_method, gene_name){
  plot_2d <- ggplot(datDay7_2, aes(datDay7_2[, paste0(rd_method, "_1")], datDay7_2[, paste0(rd_method, "_2")], 
                      color = expressions[gene_name, ])) + geom_point() + theme_bw() +
  xlab(paste0(rd_method, "_1")) + ylab(paste0(rd_method, "_2")) +
  scale_colour_gradient(name = paste0(gene_name, "\n expression"), 
                        low = "#FFEDED", high = "red",
                        na.value = "red")
  return(plot_2d)
}

p <- p_2d_plot(input[[1]], input[[2]])
fig <- image_graph(width = 400, height=400, res=96)
print(p)
dev.off()
figpng <- image_write(fig, path=NULL, format="png")
do.call(print, list(figpng))
