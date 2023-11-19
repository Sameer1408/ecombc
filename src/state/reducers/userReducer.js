var initailState = {
    products:[],
    selectedProduct:{}
}

export const userReducer=(state = initailState,action)=>{

    if(action.type=='GET_PRODUCTS')
    {   
        return {...state,products:action.payload}
    }
    else if(action.type=='SET_PRODUCT')
    {
        return {...state,selectedProduct:action.payload}
    }
    else{
        return state
    }
}