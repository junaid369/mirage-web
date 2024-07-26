import React, { useEffect, useState } from "react";
import {
  fetchLatestNews,
  fetchStockMarketNews,
  fetchCompanyNews,
  fetchNiftyFiftyNews,
  NewsNew,
  fetchCompanyNewsForNiftyFifty,
} from "../../Axios";
import axios from "axios";
import "../News/News.css";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import Footer from "../../components/Footer/Footer";

function News() {
  const [stocks, setStocks] = useState([]);
  const [news, setNews] = useState([]);
  useEffect(() => {
    try {
    } catch (error) {}
    const getNews = async () => {
      const latestNews = await fetchLatestNews();
      const stockMarketNews = await fetchStockMarketNews();
      const copanyNews = await fetchCompanyNews();
      const niftyNews = await fetchNiftyFiftyNews();
      const News = await NewsNew();
      console.log(latestNews,"news")
      // Combine and sort news by date
      const combinedNews = [
        ...latestNews,
        // ...stockMarketNews,
        // ...copanyNews,
        // ...niftyNews,
      ].sort((a, b) => 
        new Date(b.datetime) - new Date(a.datetime));

      setNews(combinedNews.slice(0, 100)); // Only keep the latest 10 articles
    };
    const fetchStocks = async () => {
      const response = await axios.get(
        "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=cqb5dn9r01qmfd85t0ogcqb5dn9r01qmfd85t0p0"
      );

      const topStocks = response.data.slice(0, 100).map((stock) => ({
        ...stock,
        price: (Math.random() * 100).toFixed(2), // Mock price, replace with real data
        change: Math.random() > 0.5 ? 1 : -1, // Mock change, replace with real data
      }));
      setStocks(topStocks);
    };
    getNews();
    fetchStocks();
  }, []);

  return (
    <div className="mt-24">
      <section className="mainbanner">
        <div
          className="relative  bg-cover bg-center mb-20"
          style={{
            height: "30em",

            backgroundImage:
              "url('https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/diverse-businesspeople-discussing-financial-profit-analyzing-stock-data.jpg')",
          }}
        >
          <div className="relative pt-64">
            <h1 className="text-center text-white text-5xl md:text-6xl font-semibold">
              Article & News
            </h1>
          </div>
          <h2 className="relative text-2xl text-white text-center pt-10 font-semibold">
            Empowering Traders with Innovative Solutions
          </h2>

          <nav className="pt-6 flex justify-center">
            <ol className="flex text-white">
              <li>
                <a href="/" className="hover:text-teal-800  font-bold">
                  Home
                </a>
              </li>
              <li className="mx-2">/</li>
              <li className="text-gray-300">News</li>
            </ol>
          </nav>
          {/* Gradient overlay  */}
        </div>
      </section>

      {/* top stocks */}
      <section className=" p-8 overflow-hidden">
        {/* <h1 className="text-2xl font-bold mb-6">Top Stocks</h1> */}
        <div className="relative w-full">
          {stocks.length > 0 ? (
            <h1 className="text-black text-3xl font-medium">Top Stocks</h1>
          ) : null}
          <div className="flex animate-marquee whitespace-nowrap mt-10">
            {stocks.map((stock) => (
              <div
                key={stock.symbol}
                className="bg-white m-2 p-4 rounded-lg shadow-md flex-shrink-0 w-64 bg-gradient-to-br from-blue-400   to-red-500 "
              >
                <h2 className="text-md font-serif text-white mb-2">
                  {stock.symbol}
                </h2>
                <p
                  className={`text-md font-semibold ${
                    stock.change > 0 ? "text-teal-600" : "text-red-500"
                  }`}
                >
                  ${stock.price}
                  {stock.change > 0 ? (
                    <FiArrowUp className="inline-block ml-2" />
                  ) : (
                    <FiArrowDown className="inline-block ml-2" />
                  )}
                </p>

                <div className="flex justify-center items-center">
                  <p className="text-black text-center text-sm font-sans">
                    {stock.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* end */}
      <div className="container mx-auto py-8">
        {news.length > 0 ? (
          <h1 className="text-3xl font-bold text-center mb-8">
            Latest Indian Stock Market and Trading News
          </h1>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-4 md:gap-4  lg:gap-8  max-sm:gap-8 lg:mx-28 max-sm:mx-5 mb-10">
          {news.map((article, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden  hover:border border-1 border-teal-800"
            >
              <img
                src={article.urlToImage || article.image}
                alt={article.title || article.headline}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">
                  {article.title || article.headline}
                </h2>
                <p className="text-gray-600 mb-4">
                  {article.description || article.summary}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-500 hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* stock new
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4">Stock Data</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(stockData).map(([date, data]) => (
          <div key={date} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <h3 className="text-xl font-bold mb-2">Date: {date}</h3>
            <p><strong>Open:</strong> ${data['1. open']}</p>
            <p><strong>High:</strong> ${data['2. high']}</p>
            <p><strong>Low:</strong> ${data['3. low']}</p>
            <p><strong>Close:</strong> ${data['4. close']}</p>
            <p><strong>Volume:</strong> {data['5. volume']}</p>
          </div>
        ))}
      </div>
    </div> */}
      <Footer />
    </div>
  );
}

export default News;
