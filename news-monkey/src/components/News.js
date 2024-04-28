import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  pageSize = 9;

  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      page: 1,
      totalResults: 0,
      loading: false
    };
  }
  fetchArticles = async (category) => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=e015cad3f7294e5d87d2bb4afa316f9d&category=${category}&pageSize=${this.pageSize}&page=1`;
    let data = await fetch(url);
    let result = await data.json();
    console.log(result.articles);
    this.setState({
      articles: result.articles,
      totalResults: result.totalResults,
      loading: false
    });
  };
  fetchMoreData = async () => {
    const nextPage = this.state.page + 1;
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=e015cad3f7294e5d87d2bb4afa316f9d&category=${this.props.category}&pageSize=${this.pageSize}&page=${nextPage}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let result = await data.json();

    this.setState({
      page: nextPage,
      articles: this.state.articles.concat(result.articles), 
      loading: false
    });
   
};

 

  componentDidMount = async () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=e015cad3f7294e5d87d2bb4afa316f9d&category=${this.props.category}&pageSize=${this.pageSize}&page=1`;
    let data = await fetch(url);
    let result = await data.json();
    console.log(result.articles);
    this.setState({
      articles: result.articles,
      totalResults: result.totalResults,
      loading: false
    });
  };
  
  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.fetchArticles(this.props.category);
    }
  }

  render() {
    return (
      <>
        {this.state.loading && (
          <div className="progress" style={{ height: "2px", position: "fixed", top: 0, left: 0, width: "100%", zIndex: 9999 }}>
            <div
              className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
              role="progressbar"
              style={{ width: "10%" }}
              aria-valuenow="10"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
            <div
              className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
              role="progressbar"
              style={{ width: "40%" }}
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
            <div
              className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        )}

        <h2 className="text-center">Top Headlines</h2>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles!==this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="row container mx-3 my-5">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 mb-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.content}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>

            );
          })}
        </div>
        </InfiniteScroll>
        
      </>
    );
  }
}

export default News;
