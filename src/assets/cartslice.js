import { createSlice } from "@reduxjs/toolkit";


const cartslice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
            
        },
        removeItem:(state,action)=>{
            state.items.splice(action.payload,1);

        }

    }
});

export const {addItem,removeItem} = cartslice.actions;
export default cartslice.reducer;