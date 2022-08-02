import React, { useState, useEffect } from "react"
import NewsCard from "../components/NewsCard"
import axios from "axios"
import { Row, Col } from "reactstrap"

const HomePage = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    return () => {
      const fetchNews = async () => {
        try {
          const response = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}`,
            { headers: { Authorization: "" } }
          )

          setNews(response.data.articles)
        } catch (error) {
          console.log(error.message)
        }
      }
      fetchNews()
    }
  }, [])
  return (
    <div>
      <h1>Top headlines</h1>
      <Row xs='1' md='3'>
        {news.map((news, index) => (
          <Col key={index}>
            <NewsCard news={news} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomePage
