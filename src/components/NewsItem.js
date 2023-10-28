import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title,description,imageurl,newsUrl,author,date,source}=this.props;
    let d=new Date(date).toGMTString
    return (
      <div style={{display:'inline',height: "529px"}}>
        <div className="card" >
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',marginLeft: "-40px"}}>
          {source}
  
   
  </span>

  <img src={imageurl} className="card-img-top" alt="..." style={{height: "251px"}}/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By author {author?author:"author"} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} className="btn btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
