import React, { Component } from 'react'


export default class NewsItem extends Component {

  render() {
    let {title,description,imageUrl,url,author,date,source}=this.props
    return (
       <div className="card my-3 " style={{width: "18rem"}}>
           <img src={imageUrl} className="card-img-top" alt="..."/>
           <div className="card-body">
             <h5 className="card-title">{title}...
             <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"style={{left:'85%',zIndex:'1'}}>{source}</span>
             </h5>
             <p className="card-text">{description}...</p>
             <p className="card-text"><small className="text-body-secondary">By {author?author:'Unknown'} on {new Date(date).toGMTString()}</small></p>
             <a href={url} target="_blank"  rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a>
           </div>
      </div>
    )
  }
}
