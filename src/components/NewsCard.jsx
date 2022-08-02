import React from "react"
import { Button } from "reactstrap"
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap"

const NewsCard = ({ news }) => {
  return (
    <div>
      <Card className='my-2 shadow'>
        <CardImg
          className='img-fluid'
          alt='Card image cap'
          src={news.urlToImage}
          top
          width='100%'
        />
        <CardBody>
          <CardTitle tag='h5'>{news.title}</CardTitle>
          <CardSubtitle className='mb-2 text-muted' tag='h6'>
            {news.source.name} <br />
            {news.author}
          </CardSubtitle>
          <CardText>{news.description}</CardText>
          <Button color='primary' href={news.url} tag='a'>
            Go to article
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default NewsCard
