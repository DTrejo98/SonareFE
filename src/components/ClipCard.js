import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function ClipCard({ clipObj }) {
  return (
    <div className="m-2">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={clipObj.imageUrl} />
        <Card.Body>
          <Card.Title>{clipObj.name}</Card.Title>
          <Card.Text>{clipObj.description}</Card.Text>
          <Card.Text>
            <strong>${clipObj.price}</strong>
          </Card.Text>

          {/* View Details Button */}
          <Link href={`/product/details/${clipObj.id}`} passHref>
            <Button variant="primary">View Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

// Prop validation using PropTypes
ClipCard.propTypes = {
  clipObj: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
  }).isRequired,
};
