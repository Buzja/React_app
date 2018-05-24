import React, {PureComponent} from 'react'
import Article from './Article'

export default class ArticleList extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            openArticleId: null
        }
    }
    render(){
    const articleElements = this.props.articles.map((article,index) => 
         <div className="card_wrapper" key = {article.id}>
            <Article article = {article} 
                    isOpen = {this.state.openArticleId === article.id} 
                    onCloseButtonClick = {this.closeArticle.bind(this,article.id)}/>
        </div>                               
    )
    return(
    <div>
        {articleElements}
    </div>
    )
    }
    closeArticle = openArticleId => this.setState({
        openArticleId: this.state.openArticleId === openArticleId? null:openArticleId
    })
}