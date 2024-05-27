import React from 'react';
import {createSearchParams, Navigate, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginPostAsync, logout} from "../slice/loginSlice";
import {useRecoilState, useResetRecoilState} from "recoil";
import {signinState} from "../atoms/singinState";
import {removeCookie, setCookie} from "../util/cookieUtil";
import {loginPost} from "../api/memberApi";

const useCustomLogin = () => {

    const [loginState, setLoginState] = useRecoilState(signinState)

    const resetState = useResetRecoilState(signinState)

    const isLogin = loginState.email ? true : false //----------로그인 여부

    const navigate = useNavigate()

    // const dispatch = useDispatch()

    // const loginState = useSelector(state => state.loginSlice) //---로그인 상태


    const doLogin = async (loginParam) => { //----------로그인 함수
        // const action = await dispatch(loginPostAsync(loginParam))
        // return action.payload

        const result = await loginPost(loginParam)

        saveAsCookie(result)

        return result

    }

    const saveAsCookie = (data) => {
        setCookie('member', JSON.stringify(data), 1)
        setLoginState(data)
    }

    const exceptionHandle = (ex) => {
        console.log("-----Exception-----")
        console.log(ex)

        const errorMsg = ex.response.data.error
        const errorStr = createSearchParams({error: errorMsg}).toString()

        if (errorMsg === 'REQUIRE_LOGIN') {
            alert("로그인 해야 합니다")

            navigate({pathname: "/member/login", search: errorStr})

            return
        }

        if (ex.response.data.error === 'ERROR_ACCESSDENIED') {

            alert("해당 메뉴를 사용할 수 있는 권한이 없습니다.")
            navigate({pathname: '/member/login', search: errorStr})

            return
        }
    }

    const doLogout = () => { //---------------로그아웃 함수
        // dispatch(logout())

        removeCookie('member')
        resetState()
    }
    const moveToPath = (path) => { //----------------페이지 이동
        navigate({pathname: path}, {replace: true})
    }
    const moveToLogin = () => { //----------------------로그인 페이지로 이동
        navigate({pathname: '/member/login'}, {replace: true})
    }
    const moveToLoginReturn = () => { //--------로그인 페이지로 이동 컴포넌트
        return <Navigate replace to="/member/login"/>
    }
    return {loginState, isLogin, doLogin, doLogout, moveToPath, moveToLogin, moveToLoginReturn, saveAsCookie}
}
export default useCustomLogin