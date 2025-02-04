import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    //apps big reducer, 
    //reducer to maintain the slices
    reducer:{
       cart: cartReducer,
    }
});

export default appStore;