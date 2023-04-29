
import { useEffect, useState } from 'react';
import './App.css';
import Navinshorts from './components/Navinshorts';
import NewsContent from './components/newscontent/NewsContent';
import axios from "axios";
import apikey from './data/config';
import Footer from './components/Footer/Footer';

function App() {
    const [category, setcategory] = useState("general");
    const [newsArray, setnewsArray] = useState([]);
    const [newsResults, setnewsResults] = useState();
    const [loadmore, setLoadmore] = useState(20);

    const newsApi=async()=>{
        try {
            const proxyUrl="https://cors-anywhere.herokuapp.com/";
            const news=await axios.get(`https://${proxyUrl}newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadmore}`);

            setnewsArray(news.data.articles);
            setnewsResults(news.data.totalResults);
             
        } catch (error) {
            console.log(error);
            
        }
    };
    useEffect(() => {
        newsApi();
        //eslint-disable-next-line
      }, [newsResults,category,loadmore]);

    return(
    <div>
        <Navinshorts setcategory={setcategory}/>
        <NewsContent  setLoadmore={setLoadmore} loadmore={loadmore} newsArray={newsArray} newsResults={newsResults}/>
        <Footer/>
        
    </div>
    
    )
}


export default App;
