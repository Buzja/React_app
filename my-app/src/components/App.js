import React, {Component} from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import './components.css'

class App extends Component{
    constructor(props){
        super(props)
        this.state ={
            reverted:false
        }
    }
    render(){
    return (
<div className="react_container">
        <div className="header">
         <div className="htext">NEWS</div> 
        </div>
    <div className="container">
        <button className="btnOldNew" onClick={this.revert}>{this.state.reverted?"New first":"Old first"}</button>
    <ArticleList articles = {this.state.reverted? articles.slice().reverse():articles} />
    </div> 
</div> 
    )
    }
    revert = () => this.setState({
        reverted: !this.state.reverted
    })
}

export default App