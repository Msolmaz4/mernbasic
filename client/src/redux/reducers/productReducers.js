import * as actionsTypes from "../contansts/productConstansts";

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionsTypes.GET_PRODUCTS_DETAILS_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case actionsTypes.GET_PRODUCTS_DETAILS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case actionsTypes.GET_PRODUCTS_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const getProductDetailsReducer = (state= {product:{}},action )=>{
    switch(action.type){
        case actionsTypes.GET_PRODUCTS_DETAILS_REQUEST:
            return{
                loading:false,
                product:action.payload,
            }
            case actionsTypes.GET_PRODUCTS_DETAILS_FAIL:
                return{
                    loading:false,
                    error:action.payload
                }
             case actionsTypes.GET_PRODUCTS_DETAILS_RESET:
                return{
                    product:{}
                }   
                default:
                    return state
    }

}