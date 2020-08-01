const express = require('express')
const router = express.Router()

const R = require('r-script');

router.post('/day0',(req,res)=>{
    const out = R('Day0_Rscripts/plot_2d.R')
            .data(req.body.selected)
            .callSync();
    res.send(out);
})

router.post('/day0c',(req,res)=>{

    const outc = R('Day0_Rscripts/check_individual_cluster.R')
            .data(req.body.selected,req.body.cluster)
            .callSync();
    res.send(outc);
})

router.post('/day0g',(req,res) =>{
    const outg = R('Day0_Rscripts/gene_expression.R')
            .data(req.body.selected,req.body.gene)
            .callSync();
    res.send(outg);
})

router.post('/day0go',(req,res) =>{
    const outgo = R('Day0_Rscripts/Go_analysis.R')
        .data(req.body.clustergo)
        .callSync();
    console.log(outgo);
    res.send(outgo);
})



module.exports = router
