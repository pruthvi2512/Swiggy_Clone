import { createSlice } from "@reduxjs/toolkit";


const cartslice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
            
        }
    }
});

export const {addItem} = cartslice.actions;
export default cartslice.reducer;