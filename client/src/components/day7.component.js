import React, { Component } from 'react';
import './day7component.css';
import axios from 'axios';
export default class day7 extends Component{
    constructor(prop){
        super(prop)

        this.state = {
            selected : '',
            cluster :  '',
            gene:'',
            clustergo:'',
            output : '',
            outputc:'',
            outputg:'',
            outputgo:''     
        }
    }    

    onChangeOption=(e)=>{
        this.setState({[(e.target.name)] : [(e.target.value)]});
    }

    onKeyPress=(e)=>{
        console.log(this.state);
        if(e.key === 'Enter'){
            axios.post('day7g',this.state)
            .then(response => {
                var outimageg = response.data;
                this.setState({outputg : outimageg})
                console.log(outimageg);
            })
        }
    }
    onSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
        axios.post('day7',this.state)
        .then(response =>{
            var outimage = response.data;
            this.setState({output:outimage})
        })
        .catch(error =>{
            console.log(error);
        })
        axios.post('day7c',this.state)
        .then(response => {
            var outimagec = response.data;
            this.setState({outputc : outimagec})
        })
        .catch(error => {
            console.log(error);
        })

        this.setState({[e.target.selected]:""});
        this.setState({[e.target.cluster]:""});
    }
    
    onSubmitgo=(e)=>{
        e.preventDefault();
        console.log(this.state);
        axios.post('day7go',this.state)
        .then( response =>{
            var outimagego = response.data;
            this.setState({outputgo : outimagego})
        })
        .catch(error => {
            console.log(error);
        })
    }

    render(){
        const {selected} = this.state;
        const {cluster} = this.state;
        const {gene} = this.state;
        const {clustergo} = this.state;
        // const outig = this.state.output;
        const image = 'data:image/png;base64,' + this.state.output;
        const imagec ='data:image/png;base64,' + this.state.outputc;
        const imageg = 'data:image/png;base64,' + this.state.outputg;
        const imagego = 'data:image/png;base64,' + this.state.outputgo;
        return(
        <div>
        <div className = "main-container" >
            <div className="form-container">
            <form onSubmit={this.onSubmit}>
                <select className = "dropdown" name = "selected" value={selected} onChange={this.onChangeOption}>
                    <option selected  >Choose Dimension Reduction Method</option>
                    <option >tSNE</option>
                    <option>UMAP</option>
                </select>
                <select className = "dropdown-cluster" name="cluster" value = {cluster} onChange={this.onChangeOption}>
                    <option selected  >Select Cluster</option>
                    <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option>
                    <option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option>
                    <option>13</option><option>14</option><option>15</option>
                </select>

                <button type = "submit"  className="btn btn-secondary">Generate</button>
            </form> 
            </div>
            <div className="img-container-1">
            <img src={image} alt=" HERE" className="Api" onError={(er)=>{er.target.onerror=null;er.target.src="images/Day0_default.png"}}/>
            </div>
            <div className="img-container-2">
            <img src={imagec} alt=" HERE" className="Api" onError={(er)=>{er.target.onerror=null;er.target.src="images/Day0_cluster_default.png"}}/>
            </div>
            </div>
            <div className="gene-container">
            <div className = "gene-style">
            <select className = "dropdown1" name = "selected" value={selected} onChange={this.onChangeOption}>
            <option selected  >Choose Dimension Reduction Method</option>
            <option >tSNE</option>
            <option>UMAP</option>
            </select>
            <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Enter Gene Name</span>
                </div>
                <div className="input-text">
                <input type="text"  name = "gene" value={gene} placeholder="Gene symbol with first letter uppercase, e.g. Cdh5"  onKeyDown={this.onKeyPress} onChange={this.onChangeOption} class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                </div>
            </div>
            </div>
            <div className="imgene">
            <p>
            <img src={imageg} alt=" HERE" className="gene" onError={(er)=>{er.target.onerror=null;er.target.src="images/Day0_gene_default.png"}}/>
            </p>
            </div>
            </div>
            <form onSubmit={this.onSubmitgo}>
            <div className="go-container">
                <div>
                <select className = "dropdown-cluster1" name="clustergo" value = {clustergo} onChange={this.onChangeOption}>
                    <option selected  >Select Cluster</option>
                    <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option>
                    <option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option>
                    <option>13</option><option>14</option><option>15</option>
                </select>
                
                <button type = "submit"  className="btn1" >Generate</button>
                
                </div>
                <div>
                <img src={imagego} alt=" HERE" className="Api1" onError={(er)=>{er.target.onerror=null;er.target.src="images/Day0_GO_default.png"}}/>
                </div>
            </div>
            </form> 
        </div>

        )
    }
}
