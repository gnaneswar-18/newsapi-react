import React, { Component } from 'react'
import NewsItem from './NewsItem'
export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page:1
        }
       document.title=`${this.props.category}-News Monkey`
    }
    async update(){
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=64cc70dd99f949488819dbd4d75097ba&page=${this.state.page}&pageSize=12`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articles: parseData.articles,totalResults:parseData.totalResults })
    }
     componentDidMount() {
        this.update()
    }
    handlePrev=()=>{
        this.setState({ page:this.state.page-1 })
        this.update()
    }
    handleNext=()=>{
       
        this.setState({ page:this.state.page+1 })
        this.update()
    }
    render() {

        return (
            <div className='container my-3'>
                <h2 className='text-center'>{`NewsMonkey-Top ${this.props.category} headlines`}</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col md-3" key={element.id}>
                            <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                   })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark"onClick={this.handlePrev}>&larr; Previous</button>
                    <button disabled={this.state.page+1 >Math.ceil(this.state.totalResults/12)}type="button" className="btn btn-dark"onClick={this.handleNext}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}
