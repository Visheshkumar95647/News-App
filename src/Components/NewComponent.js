import React, { useEffect, useState } from "react";
import NewitemCompponent from "./NewitemCompponent";
import Load from "./Load";
import InfiniteScroll from "react-infinite-scroll-component";

const NewComponent = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalArticles, setTotalArticles] = useState(0);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.countryName}&category=${props.c}&apiKey=6ef752ec4953415198fbc49cfb9d2bca&page=${page}&pageSize=${props.pageSize}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setArticles([...articles, ...data.articles]);
      setTotalArticles(data.totalResults);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const fetchMoreData = () => {
    if (page < Math.ceil(totalArticles / props.pageSize)) {
      setPage(page + 1);
      fetchData();
    }
  };

  return (
    <>
      <h1 className="text-center" style={{ color: "white",
      marginTop: '2rem' }}>
        News-App : Top-Headlines
      </h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalArticles}
        loader={<Load/> && loading}
      >
        <div className="container">
          <div className="row">
            {articles.map((article, index) => (
              <div className="col-md-3 my-5" key={index}>
                <NewitemCompponent
                  title={article.title ? article.title.slice(0, 88) : ""}
                  description={article.description ? article.description.slice(0, 88) : ""}
                  imgurl={article.urlToImage}
                  url={article.url}
                  author={article.author ? article.author : "NILL"}
                  publish={article.publishedAt}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default NewComponent;
