suppressMessages(library(ggplot2))
suppressMessages(library(rhdf5))
suppressMessages(library(magick))

cluster_GO9 <- h5read("./Day0_hdf5file.h5", 
                      paste0("GO_analysis/Cluster", input[[1]]))
cluster_GO9 <- cluster_GO9[1:min(30, nrow(cluster_GO9)), ]

p_2d_plot <- function(){
  plot_2d <-ggplot(cluster_GO9, aes(y = Gene_ratio, x = factor(cluster_GO9$Term, levels = rev(cluster_GO9$Term[order(cluster_GO9$Pvalue)])))) +
  geom_col(aes(fill = Pvalue)) + theme_bw() + coord_flip() +
  theme(legend.title = element_text(size=14,face="bold"),
        plot.title = element_text(color="black", size=16, face="bold.ariel", hjust = 0.5),
        axis.title=element_text(size=14,face="bold"),
        axis.text=element_text(size=14, face="bold", color = "black",  family="Arial"),
        legend.text=element_text(size=12, face="bold"),
        panel.border = element_rect(colour = "black", fill=NA, size=2)) + ylab("") +
  scale_fill_gradient(low = "#FF3333", high = "#FF9999") +
  guides(colour = guide_colourbar(order = 1),
         size = guide_legend(order = 2)) + xlab("")
  return(plot_2d)
}

p <- p_2d_plot()
fig <- image_graph(width = 800, height=600, res=96)
print(p)
dev.off()
figpng <- image_write(fig, path=NULL, format="png")
do.call(print, list(figpng))
