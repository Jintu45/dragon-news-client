import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaShareAlt, FaBookmark, FaStar, FaEye } from 'react-icons/fa';

const NewsSummaryCart = ({news}) => {
    const {_id, author, title, total_view, image_url, details, rating} = news;
    return (
        <div>
           <Card className='mb-5'>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                   <div className='text-start d-flex align-items-center'>
                        <Image 
                        roundedCircle	
                        src={author.img}
                        style={{height:'60px'}}
                        ></Image>
                        <div className='ms-2'>
                            <p className='mb-0'>{author.name}</p>
                            <p className='mb-0'>{author.published_date}</p>
                        </div>
                   </div>
                   <div>
                        <FaBookmark></FaBookmark>
                        <FaShareAlt className='ms-3'></FaShareAlt>
                   </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <>
                        {
                            details.length > 200 ? 
                            <span>{details.slice(0, 200) + '... '}
                            <Link to={`/news/${news._id}`}>
                                Read more
                            </Link>
                            </span>
                            :
                            <p>{details}</p>
                        }
                    </>
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                       <div className='d-flex align-items-center'>
                            <FaStar className='text-warning'></FaStar>
                            <p className='mb-0 ms-2'>{rating.number}</p>
                       </div>
                       <div className='d-flex align-items-center'>
                            <FaEye></FaEye>
                            <p className='mb-0 ms-1'>{total_view}</p>
                       </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCart;