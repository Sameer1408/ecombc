import axios from "axios";

var token = localStorage.getItem('jwtToken');

export const getAllProducts=()=>{
    return async(dispatch)=>{     
        const result = await axios.get("http://localhost:4000/product/products",  
        {headers: {
            'Content-Type': 'application/json',
             Authorization: `Bearer ${token}`,
        }
        });
        let arr = result.data;
        dispatch({
            type:'GET_PRODUCTS',
            payload:arr
        })
    }
} 

export const setSelectedProduct=(product)=>{
    return (dispatch)=>{
        dispatch({
            type:'SET_PRODUCT',
            payload:product
        })
    }
}