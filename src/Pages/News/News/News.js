import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const News = () => {
    const news = useLoaderData()
    console.log(news)
    const {category_id, title, total_view, image_url, details, rating} = news;
    return (
        <div>
            <h2 className='mb-4'>this is news details</h2>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body className='text-start'>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <p>{details}</p>
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="primary">Go To home page</Button></Link>
                </Card.Body>
            </Card>     
        </div>
    );
};

export default News;