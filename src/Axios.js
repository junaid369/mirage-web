import axios from "axios";
const API_KEY = "cqb5dn9r01qmfd85t0ogcqb5dn9r01qmfd85t0p0"; // Replace with your actual finhub.io API key
const NEWSAPI_KEY = "d06c14de80fb4817b0f9d98b9b79ce2b"; // Replace with your actual newsapi.org API key
const ALPHA_VANTAGE_API_KEY = "d06c14de80fb4817b0f9d98b9b79ce2b";
const SYMBOL = "MSFT"; // Example stock symbol

const NIFTY_FIFTY_SYMBOLS = [
  [
    "RELIANCE",
    "TCS",
    "HDFCBANK",
    "INFY",
    "HINDUNILVR",
    "ICICIBANK",
    "KOTAKBANK",
    "HDFC",
    "SBI",
    "ITC",
    "L&T",
    "HCLTECH",
    "AXISBANK",
    "BHARTIARTL",
    "WIPRO",
    "NTPC",
    "SUNPHARMA",
    "POWERGRID",
    "ONGC",
    "TATAMOTORS",
    "TECHM",
    "ULTRACEMCO",
    "JSWSTEEL",
    "DIVISLAB",
    "ADANIGREEN",
    "CIPLA",
    "DRREDDY",
    "EICHERMOT",
    "BRITANNIA",
    "M&M",
    "SHREECEM",
  ],
];
export const fetchLatestNews = async () => {
  try {
    const response = await axios.get(
      `https://finnhub.io/api/v1/news?category=general&token=${API_KEY}`
    );

    return response.data.slice(0, 10); // Return only the latest 10 news articles
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

// Fetch general stock market news
export const fetchStockMarketNews = async () => {
  try {
    const response = await axios.get(
      `https://finnhub.io/api/v1/news?category=stock&token=${API_KEY}`
    );
    // const response = await axios.get(
    //   `https://finnhub.io/api/v1/news?category=market&token=${API_KEY}`
    // );
    return response.data.slice(0, 10); // Return only the latest 10 news articles
  } catch (error) {
    console.error("Error fetching stock market news:", error);
    return [];
  }
};

// Fetch company news
export const fetchCompanyNews = async (symbol) => {
  try {
    const response = await axios.get(
      `https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=2024-07-12&to=2024-07-13&token=${API_KEY}`
    );
    return response.data.slice(0, 30); // Return only the latest 10 news articles
  } catch (error) {
    console.error("Error fetching company news:", error);
    return [];
  }
};

// Fetch Nifty Fifty news (or another index)
export const fetchNiftyFiftyNews = async () => {
  try {
    const response = await axios.get(
      `https://finnhub.io/api/v1/news?category=nifty50&token=${API_KEY}`
    );
    return response.data.slice(0, 10); // Return only the latest 10 news articles
  } catch (error) {
    console.error("Error fetching Nifty Fifty news:", error);
    return [];
  }
};

// Fetch Indian stock market news
// export const fetchIndianStockNews = async () => {
//   try {
//     const response = await axios.get(`https://finnhub.io/api/v1/news?category=stock_market&token=${API_KEY}`);
//     return response.data.slice(0, 20); // Return only the latest 10 news articles
//   } catch (error) {
//     console.error('Error fetching Indian stock market news:', error);
//     return [];
//   }
// };

// Fetch Indian stock market news from newsapi.org
// export const fetchNewsAPIIndianStockNews = async () => {
//   try {
//     const response = await axios.get(`https://newsapi.org/v2/everything?q=indian%20stock%20market&apiKey=${NEWSAPI_KEY}`);
//     return response.data.articles.slice(0, 10); // Return only the latest 10 news articles
//   } catch (error) {
//     console.error('Error fetching Indian stock market news from NewsAPI:', error);
//     return [];
//   }
// };
export const NewsNew = async () => {
  
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?category=business&q=stock&apiKey=${NEWSAPI_KEY}`
    );
    console.log(response.data.articles.length, "in axios");
    // const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=business&apiKey=${NEWSAPI_KEY}`);
    return response.data.articles.slice(0, 10); // Return only the latest 10 news articles
  } catch (error) {
    console.error(
      "Error fetching Indian stock market news from NewsAPI:",
      error
    );
    return [];
  }
};

export const fetchCompanyNewsForNiftyFifty = async () => {
  const newsPromises = NIFTY_FIFTY_SYMBOLS.map((symbol) =>
    axios.get(
      `https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=2024-07-22&to=2024-07-23&token=${API_KEY}`
    )
  );

  try {
    const responses = await Promise.all(newsPromises);
    return responses.flatMap((response) => response.data.slice(0, 1)); // Modify slice according to your needs
  } catch (error) {
    console.error("Error fetching company news:", error);
    return [];
  }
};
