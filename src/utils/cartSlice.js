import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    //name of the slice
    name:'cart',
    //initial value of that specific portion we are building our store for
    initialState:{
        items: []
    },
    reducers:{
        addItem: (state,action)=>{
            //mutating the state over here
             state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state,action)=>{
            // state = [],this will not work as state is a local variable here and it will do the change locally
            
            //RTK say either mutate the exisiting state or return a new state
            //this line actually modifies
            state.items.length = 0;
        },
    }
})

export const{addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;