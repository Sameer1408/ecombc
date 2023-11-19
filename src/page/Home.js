import React, { useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getAllProducts } from '../state/action-creators';
import AllProducts from '../components/AllProducts'
import Search from '../components/Search'
function Home() {
  
  const myValue = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [allProducts,setAllProducts] = useState([]);

  const getProducts=()=>{
    dispatch(getAllProducts());
  }

  useEffect(()=>{
  setAllProducts(myValue.products);
  },[myValue.products])

  useEffect(()=>{
    return ()=>{
      getProducts();
    }
  },[])


  return (
    <div>
      <div>
      <Search/>
      </div>
      <div>
        <AllProducts products={allProducts}/>
      </div>
    </div>
  )
}

export default Home