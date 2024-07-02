import React, { useState } from 'react'
import Cards from './Cards'
import { useEffect } from 'react'
import Shimer from './Shimer'
import LoadingBar from 'react-top-loading-bar'

const NewsItem = (props) => {

  
  const [listNews, setListNews] = useState([]);
  const [page, setPage] = useState(1);
  const [progress, setProgress] = useState(0)


  useEffect(() => {
    fetchData();
  },[] );

  const fetchData = async () => {
    const data = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b4fcd9b030c7442ba3ffd70e846fcb3f&page=1&pageSize=10`);
    const json = await data.json();
    console.log(json);
    setListNews(json.articles)
    setProgress(100)
  };

  const handlePreClick = async () => {
    console.log("previous")
    window.scrollTo(0, 0)
    const data = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b4fcd9b030c7442ba3ffd70e846fcb3f&page=${page - 1}&pageSize=10`);
    const json = await data.json();
    console.log(json);
    setListNews(json.articles)
    setPage(page - 1)
    setProgress(100)


  }
  const handleNextClick = async () => {
    console.log("next")
    window.scrollTo(0, 0)
    const data = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b4fcd9b030c7442ba3ffd70e846fcb3f&page=${page + 1}&pageSize=10`);
    const json = await data.json();
    console.log(json);
    setListNews(json.articles)
    setPage(page + 1)
    setProgress(100)



  }

  return  listNews?.length === 0 ? (<Shimer />) :
   (
    <div className='bg-slate-800'>
       <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className='flex flex-wrap justify-center'>
        {listNews?.map((news,id) => (
          <Cards key={id} resData={news}/>
        ))

        }
      </div>
      <div className=' flex justify-between w-2/12 m-auto p-4 '>
        <button disabled={page <= 1} className='text-lg p-2 text-white border border-blue-500 bg-slate-950 rounded-md hover:text-gray-400' onClick={handlePreClick} >
          &laquo; Previous
        </button>
        <button className='text-xl p-2 text-white border border-blue-500 bg-slate-950 rounded-md hover:text-gray-400' onClick={handleNextClick}>
          Next &#8250;&#8250;
        </button>
      </div>
    </div>
  )
}

export default NewsItem
