// 'use client';

// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import { Button } from 'react-bootstrap';
// import { getSingleProduct, deleteProduct } from '../../../../api/ProductData'; // API function to get product details
// import { useAuth } from '../../../../utils/context/authContext';

// export default function ViewProductDetails({ params }) {
//   const [productDetails, setProductDetails] = useState({});
//   const { id } = params;
//   const { user } = useAuth();

//   useEffect(() => {
//     getSingleProduct(id).then((data) => {
//       setProductDetails(data); // Set product details when fetched
//     });
//   }, [id]);

//   const isOwner = user.uid === productDetails.sellerId;

//   const deleteThisProduct = () => {
//     if (window.confirm(`Are you sure you want to delete this product?`)) {
//       deleteProduct(id).then(() => {
//         alert('Product deleted');
//         // You can redirect to the product list or another page after deletion
//       });
//     }
//   };

//   return (
//     <div className="mt-5 d-flex flex-wrap">
//       <div className="text-white ms-5 details">
//         <h3>{productDetails.name}</h3>
//         <ul>
//           <li>
//             <strong>Description:</strong> {productDetails.description}
//           </li>
//           <li>
//             <strong>Price:</strong> ${productDetails.price}
//           </li>
//           <li>
//             <strong>Quantity:</strong> {productDetails.quantity}
//           </li>
//           <li>
//             <strong>Category:</strong> {productDetails.category}
//           </li>
//         </ul>
//         <div>
//           {/* Edit Button: Only visible if the user is the seller */}
//           {isOwner && (
//             <Button variant="primary" href={`/products/edit/${id}`} className="m-2">
//               Edit Product
//             </Button>
//           )}
//           {/* Delete Button: Only visible if the user is the seller */}
//           {isOwner && (
//             <Button variant="danger" onClick={deleteThisProduct} className="m-2">
//               Delete Product
//             </Button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// ViewProductDetails.propTypes = {
//   params: PropTypes.shape({
//     id: PropTypes.string.isRequired, // Ensure id is passed as a string
//   }).isRequired,
//   productDetails: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     quantity: PropTypes.number.isRequired,
//     category: PropTypes.string.isRequired,
//     sellerId: PropTypes.string.isRequired,
//   }).isRequired,
// };
