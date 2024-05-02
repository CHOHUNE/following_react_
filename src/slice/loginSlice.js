import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {loginPost} from "../api/memberApi";

const initState = {
    email: ''
}

export const loginPostAsync = createAsyncThunk('loginPostAsync', (param) => {
    return loginPost(param)
})

const loginSlice = createSlice({
    name: 'LoginSlice',
    initialState: initState,
    reducers: {
        login: (state, action) => { // state : 기존의 상태 , action : 전달하고 싶은 값 ( 파라메터 )
            console.log("login.....", action)
            console.log("---------------------")
            console.log(action.payload)
            console.log("---------------------")
            return {email: action.payload.email} // action 에 있는 payload가 실제 전달하는 loginparam 인데 그 email 값을 쓰겠다는 것
        },
        logout: (state, action) => {
            console.log("logout....")

            return {...initState}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginPostAsync.fulfilled, (state, action) => {
            console.log("fulfilled")
            const payload = action.payload
            return payload


        })
            .addCase(loginPostAsync.pending, (state, action) => {
                console.log("pending")
            })
            .addCase(loginPostAsync.rejected, (state, action) => {
                console.log("rejected")
            })
    }
})
export const {login, logout} = loginSlice.actions
export default loginSlice.reducer