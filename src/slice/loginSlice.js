import {createSlice} from "@reduxjs/toolkit";

const initState = {
    email: ''
}
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
        }
    }
})
export const {login, logout} = loginSlice.actions
export default loginSlice.reducer