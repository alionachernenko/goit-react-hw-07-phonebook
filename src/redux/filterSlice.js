import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {value: ''}

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        changeFilter: {
            reducer(state, action) {
            return {value: action.payload}
        },
        prepare(value) {
            return {
                payload: value
            }
        }
        }
        

    }
})

export const {changeFilter} = filterSlice.actions
export const filterReducer = filterSlice.reducer
export const getFilter = (state) => state.filter.value