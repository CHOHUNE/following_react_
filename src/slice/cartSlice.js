import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getCartItems} from "../api/cartApi";

export const getCartItemsAsync = createAsyncThunk('getCartItemsAsync', () => {
    return getCartItems()
})

export const postChangeCartAsync = createAsyncThunk(' postChangeCartAsync', (param) => {

    return postChangeCartAsync(param)

})

const initState = []

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: initState,
    extraReducers: (builder) => {
        builder.addCase(getCartItemsAsync.fulfilled, (state, action) => {

            console.log("getCartItemAsync.fulfilled")
            console.log(action.payload)

            return action.payload // 진짜 데이터 : 장바구니 안의 아이템들
        })
            .addCase(postChangeCartAsync.fulfilled, (state, action) => {
                console.log("postChangeCartAsync.fulfilled")

                return action.payload // 변경 시에도 위와 동일하게 불러오기

            })
    }
})

export default cartSlice.reducer