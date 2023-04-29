import React from 'react'
import "./NewsCard.css"

const NewsCard = ({newsItem}) => {
 console.log(newsItem);
 const fulldate=new Date(newsItem.publishedAt);
 var date=fulldate.toString().split(" ");
 const hour=parseInt(date[4].substring(0,2));
 const time=hour>12?true:false;

  return (
    <div className='newsCard'>
    <img alt={newsItem.title} src={newsItem.urlToImage?newsItem.urlToImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"}
      className='newsImage'/>
    <div className='newsText'>
      <div>
        <span className='title'>
          {newsItem.title}
        </span>
        <span className='author'>
          <a href={newsItem.url} target='__blank'>
            <br></br>
            <b>short </b>

          </a>
          <span className='muted'>

          by {newsItem.author?newsItem.author:"unknown"} / { time
            ? `${hour-12}:${date[4].substring(3, 5)}pm`
            :`${hour}:${date[4].substring(3, 5)}am`} on {date[2]} {date[1]} {date[0]}
          
          
        
          </span>
        </span>
      </div>
      <div className='lowerNewstext'>
        <div className='description'>
          {newsItem.description}
          <span className='readmore'>
            <br></br>
            read more at {" "}
            <a href={newsItem.url} target="__blank">
              <b>
                {newsItem.source.name}
              </b>
            </a>
          </span>
        </div>

      </div>

    </div>
    </div>
  )
}

export default NewsCard