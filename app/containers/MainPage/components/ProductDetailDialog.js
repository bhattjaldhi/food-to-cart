/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-plusplus */
import React, { useState, useImperativeHandle, forwardRef, useEffect } from 'react';
import {
  Button, Col, Image, ListGroup, Modal, Row
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { PencilFill, PatchMinusFll, PatchPlusFll } from 'react-bootstrap-icons';


const ProductDetailDialog = (props, ref) => {
  const [bundle, setBundle] = useState(0);
  let [count, setCount] = useState(1);
  let [amount, setAmount] = useState(bundle.price || 0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useImperativeHandle(ref, () => ({
    show: (bundle) => {
      handleShow();
      setBundle(bundle);
    },
  }));

  useEffect(() => {
    if(bundle.price){
      setAmount(parseFloat(count * bundle.price).toFixed(2));
    }
  }, [count, bundle.price])

  const addToCart = () => {
    props.addToCart({bundle, count, amount});
    setCount(1)
    setAmount(0)
    setShow(false);
  };

  const decrement = () => {
    if (count > 1) {
      const _count = --count;
      setCount(_count);
    }
  };

  const increment = () => {
    if (count < 10) {
      const _count = ++count;
      setCount(_count);
    }
  };

  return (
    <Modal dialogClassName="modal-90w" show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Item To Basket</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md="12" className="banner p-0">
            <Image src={bundle.image}></Image>
          </Col>
          <Col md="12">
            <Row className="justify-content-between p-3">
              <h4 className="product-title">{bundle.title}</h4>
              <h4 className="product-price">$ {bundle.price}</h4>
            </Row>
            <Row className="px-3 product-description pb-2">
              {bundle.description}
            </Row>
            <Row className="product-choose-title pt-3 pb-2">
              <Col>Choose Your Favourite</Col>
            </Row>
            <Row>
              <Col md="10" className="mt-2">
                <div className="favourite-title">Margherita</div>
                <div className="favourite-extra">
                  extra cheese, double salami, mushroom
                </div>
              </Col>
              <Col md="2" className="d-flex align-items-end justify-content-center flex-column">
                <PencilFill color="#7FC411" />
                <div className="favourite-price">$ 2.00</div>
              </Col>
            </Row>
            <ListGroup variant="flush">
              <ListGroup.Item className="choose-pizza pl-0">Choose your second pizza</ListGroup.Item>
              <ListGroup.Item className="choose-pizza pl-0">Choose your drinks</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Row>
          <Col md="5">
            <div className="d-flex add-to-cart-buttons">
              <PatchMinusFll color="#7FC411" className="plus-icon" onClick={() => decrement()} />
              <span>{count}</span>
              <PatchPlusFll color="#7FC411" className="plus-icon" onClick={() => increment()} />
            </div>
          </Col>
          <Col md="7">
            <Button className="d-flex add-to-cart" onClick={() => addToCart()}>
              <div>
                ADD TO CART
              </div>
              <div>
                {amount}
              </div>
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
};

ProductDetailDialog.prototype = {
  addToCart: PropTypes.func,
};

export default forwardRef(ProductDetailDialog);
