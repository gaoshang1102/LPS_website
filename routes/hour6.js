const express = require('express')
const router = express.Router()

const R = require('r-script');

router.post('/hour6',(req,res)=>{
    const out = R('Hour6_Rscripts/plot_2d.R')
            .data(req.body.selected)
            .callSync();
    res.send(out);
})

router.post('/hour6c',(req,res)=>{

    const outc = R('Hour6_Rscripts/check_individual_cluster.R')
            .data(req.body.selected,req.body.cluster)
            .callSync();
    res.send(outc);
})

router.post('/hour6g',(req,res) =>{
    const outg = R('Hour6_Rscripts/gene_expression.R')
            .data(req.body.selected,req.body.gene)
            .callSync();
    res.send(outg);
})

router.post('/hour6go',(req,res) =>{
    const outgo = R('Hour6_Rscripts/Go_analysis.R')
        .data(req.body.clustergo)
        .callSync();
    console.log(outgo);
    res.send(outgo);
})



module.exports = router
