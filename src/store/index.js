import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter', 
  initialState: { counter: 0 , showCounter: true}, 
  reducers:{
    increment(state){
      state.counter++; 
    }, 
    decrement(state){
      state.counter--; 
    }, 
    increase(state,action){
      state.counter = state.counter + action.payload; 
    }, 
    decrease(state,action){
      state.counter = state.counter - action.payload;
    }, 
    toggleCounter(state){
      state.showCounter = !state.showCounter; 
    }
  }
})
const authSlice = createSlice({
  name: 'authentication', 
  initialState: {isAuthenticated: false}, 
  reducers: {
    login(state){
      state.isAuthenticated = true;
    },
    logout(state){
      state.isAuthenticated = false; 
    }
  }
})


export const counterActions = counterSlice.actions; 
export const authActions = authSlice.actions; 



const store = configureStore({
  reducer: {
    counter: counterSlice.reducer, 
    auth: authSlice.reducer, 
  }
}); 

export default store; 