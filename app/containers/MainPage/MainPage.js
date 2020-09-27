/* eslint-disable no-alert */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
/*
 * MainPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { createRef, useState, useEffect } from 'react';
import {
  Button,
  Card, Col, Container, Dropdown, DropdownButton, Image, Row
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ProductDetailDialog from './components/ProductDetailDialog';
import './style.scss';

export default function MainPage(props) {
  const dialogRef = createRef();
  const [total, setTotal] = useState(0);

  const { bundles, basket } = props;

  const openDialog = (id) => {
    const bundle = bundles.find((x) => x.id === id);
    dialogRef.current.show(bundle);
  };

  const addToCart = (data) => {
    const mBasket = [...basket];

    if (basket.find((x) => x.productId === data.bundle.id)) return;

    mBasket.push({
      productId: data.bundle.id,
      title: data.bundle.title,
      products: data.bundle.products,
      count: data.count,
      amount: data.amount,
    });
    localStorage.setItem('basket', JSON.stringify(mBasket));
    props.updateBasket(mBasket);
  };

  useEffect(() => {
    if (!basket.length) return;

    const _total = [...basket].reduce((x, y) => parseFloat(x.amount) + parseFloat(y.amount));
    setTotal(_total.amount);
  }, [basket]);

  const clearBasket = () => {
    alert(`You paid ${total} !`);

    localStorage.setItem('basket', '[]');
    props.updateBasket([]);
    alert('Basket cleared');
    setTotal(0);
  };

  return (
    <article>
      <Helmet>
        <title>Main Page</title>
        <meta name="description" content="A React.js Boilerplate application MainPage" />
      </Helmet>
      <div className="page main-page">
        <section>
          <Container>
            <Row>
              <Col md="8">
                <div className="box">
                  <Row className="box-title" id="bundles">
                    <h4 className="pt-2">Bundles</h4>
                  </Row>
                  <Row className="box-content">
                    {bundles.length && bundles.map((item, index) => (
                      <Col md="6" key={`bundle_${index}`} className="mt-3">
                        <Card onClick={() => openDialog(item.id)}>
                          <Card.Body>
                            <Row>
                              <Col md="8">
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                  {item.description}
                                </Card.Text>
                                <Row>
                                  <Col>
                                    <div className="price">$ {item.price}</div>
                                  </Col>
                                </Row>
                              </Col>
                              <Col md="4" className="image-right">
                                <Image src={item.image}></Image>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
                <div className="box">
                  <Row className="box-title" id="starters">
                    <h4>Starters</h4>
                  </Row>
                  <Row className="box-content">
                    {bundles.length && bundles.map((item, index) => (
                      <Col md="6" key={`starters_${index}`} className="mt-3">
                        <Card onClick={() => openDialog(item.id)}>
                          <Card.Body>
                            <Row>
                              <Col md="8">
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                  {item.description}
                                </Card.Text>
                                <Row>
                                  <Col>
                                    <div className="price">$ {item.price}</div>
                                  </Col>
                                </Row>
                              </Col>
                              <Col md="4" className="image-right">
                                <Image src={item.image}></Image>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
                <div className="box">
                  <Row className="box-title" id="desserts">
                    <h4>Desserts</h4>
                  </Row>
                  <Row className="box-content">
                    {bundles.length && bundles.map((item, index) => (
                      <Col md="6" key={`desserts_${index}`} className="mt-3">
                        <Card onClick={() => openDialog(item.id)}>
                          <Card.Body>
                            <Row>
                              <Col md="8">
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                  {item.description}
                                </Card.Text>
                                <Row>
                                  <Col>
                                    <div className="price">$ {item.price}</div>
                                  </Col>
                                </Row>
                              </Col>
                              <Col md="4" className="image-right">
                                <Image src={item.image}></Image>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
                <div className="box">
                  <Row className="box-title" id="main-dishes">
                    <h4>Main Dishes</h4>
                  </Row>
                  <Row className="box-content">
                    {bundles.length && bundles.map((item, index) => (
                      <Col md="6" key={`main-dishes_${index}`} className="mt-3">
                        <Card onClick={() => openDialog(item.id)}>
                          <Card.Body>
                            <Row>
                              <Col md="8">
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                  {item.description}
                                </Card.Text>
                                <Row>
                                  <Col>
                                    <div className="price">$ {item.price}</div>
                                  </Col>
                                </Row>
                              </Col>
                              <Col md="4" className="image-right">
                                <Image src={item.image}></Image>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
                <div className="box">
                  <Row className="box-title" id="sides">
                    <h4>Sides</h4>
                  </Row>
                  <Row className="box-content">
                    {bundles.length && bundles.map((item, index) => (
                      <Col md="6" key={`sides_${index}`} className="mt-3">
                        <Card>
                          <Card.Body>
                            <Row>
                              <Col md="8">
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                  {item.description}
                                </Card.Text>
                                <Row>
                                  <Col>
                                    <div className="price">$ {item.price}</div>
                                  </Col>
                                </Row>
                              </Col>
                              <Col md="4" className="image-right">
                                <Image src={item.image}></Image>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Col>
              <Col md="4">
                <div className="box basket">
                  <Card>
                    <Card.Body>
                      <Row className="mb-3">
                        <Col md="8">
                          <h4>Your basket</h4>
                          <div className="basket-address"><span className="basket-from">From </span> St. Petit Bistrot</div>
                        </Col>
                        <Col md="4">
                          <DropdownButton id="dropdown-item-button" title="Order">
                            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                            <Dropdown.Item as="button">Action</Dropdown.Item>
                            <Dropdown.Item as="button">Another action</Dropdown.Item>
                            <Dropdown.Item as="button">Something else</Dropdown.Item>
                          </DropdownButton>
                        </Col>
                      </Row>
                      {basket.map((item, index) => (
                        <Row key={`basket_${index}`} className="px-2">
                          <Col md="8">
                            <span className="basket-title">{item.count} x {item.title}</span>
                          </Col>
                          <Col md="4">
                            <span className="basket-price d-flex justify-content-end">$ {item.amount}</span>
                          </Col>
                        </Row>
                      ))}
                      <Row className="justify-content-center mt-4">
                        <Button className="basket-checkout" onClick={() => clearBasket()}>
                          Continue to checkout
                        </Button>
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <ProductDetailDialog ref={dialogRef} addToCart={(data) => addToCart(data)}></ProductDetailDialog>
      </div>
    </article>
  );
}

MainPage.propTypes = {
  bundles: PropTypes.array,
  basket: PropTypes.array,
  updateBasket: PropTypes.func
};
