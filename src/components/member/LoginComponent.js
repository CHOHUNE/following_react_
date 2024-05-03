import {useState} from "react"
import {useDispatch} from "react-redux";
import {login, loginPostAsync} from "../../slice/loginSlice";
import {useNavigate} from "react-router-dom";
import {unwrapResult} from '@reduxjs/toolkit';
import useCustomLogin from "../../hooks/useCustomLogin";
import KakaoLoginComponent from "./KakaoLoginComponent";


const initState = {
    email: '',
    pw: ''
}

function LoginComponent(props) {

    const [loginParam, setLoginParam] = useState({...initState})

    const {doLogin, moveToPath} = useCustomLogin()


    const handleChange = (e) => {
        loginParam[e.target.name] = e.target.value

        setLoginParam({...loginParam})
    }

    const handleClickLogin = (e) => {

        doLogin(loginParam).then(data => {
            if (data.error) {
                alert("이메일 패스워드를 확인 해주세요 ")
            } else {
                moveToPath("/")
            }
        })

    }


    return (
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">
            <div className="flex justify-center">
                <div className="text-4xl m-4 p-4 font-extrabold text-blue-500">Login Component</div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-full p-3 text-left font-bold">Email</div>
                    <input className="w-full p-3 rounded-r border border-solid border-neutral-500 shadow-md"
                           name="email"
                           type={'text'}
                           value={loginParam.email}
                           onChange={handleChange}
                    >
                    </input>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-full p-3 text-left font-bold">Password</div>
                    <input className="w-full p-3 rounded-r border border-solid border-neutral-500 shadow-md"
                           name="pw"
                           type={'password'}
                           value={loginParam.pw}
                           onChange={handleChange}
                    >
                    </input>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full justify-center">
                    <div className="w-2/5 p-6 flex justify-center font-bold">
                        <button
                            className="rounded p-4 w-36 bg-blue-500 text-xl  text-white"
                            onClick={handleClickLogin}
                        >
                            LOGIN
                        </button>
                    </div>
                </div>
            </div>
            <KakaoLoginComponent/>
        </div>
    );
}

export default LoginComponent;