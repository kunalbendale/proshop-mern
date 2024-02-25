import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Product from "../components/Product.jsx";
// import products from "../products.js";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:8000/api/products");
      console.log(response);
      setProducts(response.data);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product key={product._id} product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
