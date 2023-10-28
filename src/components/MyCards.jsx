import React from 'react'
import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCards = ({image, name, description, color, desc}) => {
  return (
    <>
    
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className='text-center'>{name}</Card.Title>
        <Card.Text className='text-center'>{description}</Card.Text>
        <Tags color={color} desc={desc}/>
      </Card.Body>
    </Card>
    
    </>
  )
}

export default MyCards