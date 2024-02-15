import { createSlice } from "@reduxjs/toolkit"


const initialState={
    mode:"dark"
}

const themeSlice=createSlice({
    name:"theme",
    initialState,
    reducers:{
        setMode:(state)=>{
            state.mode=state.mode==="loght"?"dark":"light"
        }
    }
})

export const { setMode }=themeSlice.actions;

export default themeSlice;