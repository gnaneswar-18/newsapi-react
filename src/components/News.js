import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const News = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    useEffect(() => {
        document.title = `${category} - NewsPulse`;
        updateNews();
    }, [category, page]);

    const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${page}&pageSize=12`;
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
    };

    return (
        <div className='container my-3'>
            <h2 className='text-center'>{`NewsPulse - Top ${category} Headlines`}</h2>
            <div className="row">
                {articles.map((element, index) => (
                    <div className="col md-3" key={index}>
                        <NewsItem
                            title={element.title ? element.title.slice(0, 40) : ""}
                            description={element.description ? element.description.slice(0, 80) : ""}
                            imageUrl={element.urlToImage}
                            url={element.url}
                            author={element.author}
                            date={element.publishedAt}
                            source={element.source.name}
                        />
                    </div>
                ))}
            </div>
            <div className="container d-flex justify-content-between">
                <button
                    disabled={page <= 1}
                    type="button"
                    className="btn btn-dark"
                    onClick={() => setPage(page - 1)}
                >
                    &larr; Previous
                </button>
                <button
                    disabled={page + 1 > Math.ceil(totalResults / 12)}
                    type="button"
                    className="btn btn-dark"
                    onClick={() => setPage(page + 1)}
                >
                    Next &rarr;
                </button>
            </div>
        </div>
    );
};

export default News;
