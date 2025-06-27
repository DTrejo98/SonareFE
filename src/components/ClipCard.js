import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function ProductCard({ productObj }) {
  return (
    <div className="m-2">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={productObj.imageUrl} /> {/* Assuming you have an imageUrl for each product */}
        <Card.Body>
          <Card.Title>{productObj.name}</Card.Title>
          <Card.Text>{productObj.description}</Card.Text>
          <Card.Text>
            <strong>${productObj.price}</strong>
          </Card.Text>

          {/* View Details Button */}
          <Link href={`/product/details/${productObj.id}`} passHref>
            <Button variant="primary">View Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

// Prop validation using PropTypes
ProductCard.propTypes = {
  productObj: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
  }).isRequired,
};