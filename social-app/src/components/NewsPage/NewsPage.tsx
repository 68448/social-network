import React, {FC} from 'react';
import Navbar from '../Navbar/Navbar';
import News from '../News';

interface NewsPageProps{
    children?: React.ReactNode
}

const NewsPage: FC<NewsPageProps> = ({children}) => {
    return (
        <div className='flex mx-auto relative'>
            <Navbar />
            <News />
        </div>
    );
};

export default NewsPage;