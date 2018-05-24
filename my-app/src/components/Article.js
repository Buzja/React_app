import React, {Component} from 'react'

class Article extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
        }
    }
    
    render(){
    const {article,isOpen,onCloseButtonClick} = this.props
    const body = isOpen && <div className="card_text">{article.text}</div>
    return(
    <div className = "card"> 
        <div className="card_header">
         <div className="card_title">{article.title}</div>
         <div className="card_date">date: {(new Date(article.date)).toDateString()}</div>
        </div>
       
            {body}
<button className="closebtn" onClick={onCloseButtonClick}>{isOpen ? 'close' : 'open'}</button>    
</div>
        )
    }
    
}

export default Article