import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setSelectedProduct } from '../state/action-creators';

function Products({ product, image }) {

  const history = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    history('/product');
    let obj = {
      ...product,
      src:image
    }
    dispatch(setSelectedProduct(obj));
  }

  return (
    <div className='card' onClick={handleClick}>
      <div id='cardImage'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div style={{ display: "flex",
                  justifyContent: "space-between",
                  width: "100%", 
                  border: "1px solid red" }}>
        <p> {product?.name}</p>
        <p>{`Rs ${product?.price}`}</p>
      </div>
    </div>
  )
}

export default Products