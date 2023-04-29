import { Container } from '@material-ui/core'
import React from 'react';
import "./NewsContent.css";
import NewsCard from '../NewsCard/NewsCard';

const NewsContent = ({newsArray,newsResults,loadmore,setLoadmore}) => {
  return (
    <Container maxWidth="md">
        <div className='content'>
            <div className='downloadMessage'>
            <span className='downloadtext'>
                 For the best experience use inshorts app on your smartphone
            </span>
                <img 
                    alt="appstore"
                    height="80%"
                    src='https://assets.inshorts.com/website_assets/images/appstore.png'
                />
                <img 
                    alt="appstore"
                    height="80%"
                    src='https://assets.inshorts.com/website_assets/images/playstore.png'
                />
    </div>
    {
        newsArray.map((newsItem)=>(
        <NewsCard newsItem={newsItem} key={newsItem.title}/>
        )
        )
    }
    {
        loadmore<=newsResults &&
        (
            <>
            <hr />
            <button className='Loadmore' onClick={()=>setLoadmore(loadmore+20)}>
                Loadmore
            </button>
            </>
                
)    }
</div>
</Container>
  );
};

export default NewsContent