import { actionAttributes, initialStateAttributes, productsAttrubutes, toastAttributes, userAttributes } from "../utilities/typedec";

  
  const Reducer = (state: initialStateAttributes, action: actionAttributes) => {
    switch (action.type) {
      case "STORE_USER":
        return {
          ...state,
          user: action.payload as userAttributes,
        };
  
      case "SET_TOAST":
        return {
          ...state,
          isToastState: action.payload as toastAttributes,
        };
  
      case "CLEAR_TOAST":
        return {
          ...state,
          isToastState: action.payload as toastAttributes,
        };
  
      case "CLEAR_USER":
        return {
          ...state,
          user: null,
        };
  
      case "ADD_CARTCOUNT":
        return {
          ...state,
          cartCount: Number(state?.cartCount) + Number(1),
        };
  
      case "SUBTRACT_CARTCOUNT":
        return {
          ...state,
          cartCount: Number(state?.cartCount) - Number(1),
        };
  
      case "SET_REGISTER_USER":
        let tempUsers = [...state?.users] as userAttributes[];
  
        tempUsers.push(action.payload);
        return {
          ...state,
          users: tempUsers,
        };
  
      case "SET_CREATE_PRODUCT":
        let tempProducts: productsAttrubutes[] = [...state?.products];
        tempProducts?.push(action.payload);
  
        return {
          ...state,
          products: tempProducts,
        };
  
      case "DELETE_PRODUCT":
        let tempItems = [...state.products] as productsAttrubutes[];
  
        const updatedProducts = tempItems?.filter(
          (item, index) => item?.id !== action.payload
        );
  
        return {
          ...state,
          products: updatedProducts,
        };
      default:
        return state;
    }
  };
  
  export default Reducer;
  