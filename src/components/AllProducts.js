import React from 'react'
import Products from './Products'

function AllProducts({products}) {
  return (
    <div className='allProductsDiv'>
        {products.map(ele=>{
            var base64 = btoa(
                new Uint8Array(ele?.image?.data?.data)
                    .reduce((data, byte) => data + String.fromCharCode(byte), '')
            );
            var src = `data:image/png;base64,${base64}`
           return <Products product={ele} key={ele._id} image={src}></Products>
        })}        
    </div>
  )
}
export default AllProducts