import React from 'react'
import Badge from 'react-bootstrap/Badge';

const Tags = ({color, desc}) => {
  return (
    <>
    
    <h4 className='text-center'>
        <Badge bg={color}>{desc}</Badge>
    </h4>  
    
    </>
  )
}

export default Tags