import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { INew } from '../types/types';



const News: FC = () => {

    const [news, setNews] = useState<INew[]>([])

    useEffect(() => {
        fetchNews()
    },[])

    const fetchNews = async() => {
        try{
            const response = await axios.get<INew[]>('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5');
            setNews(response.data)
          }catch(e){
            alert(e)
          }
    }


    return (
        <div className='w-3/4 px-28'>
            {
                news.map((novelty: INew) => {
                    return (
                        <div className='news-container p-4 mb-5 border border-gray-500 flex flex-col items-center' key={novelty.id}>
                            <p className='text-lg text-left mb-4 '>{novelty.title}</p>
                            <img src={novelty.url} alt={novelty.title} />
                        </div>
                    )
                })
            }
        </div>
    );
        
    
};

export default News;