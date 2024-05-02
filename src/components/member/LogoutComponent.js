import React from 'react';
import {useDispatch} from "react-redux";
import {logout} from "../../slice/loginSlice";

function LogoutComponent(props) {

    const dispatch = useDispatch()

    const handleClickLogout = () => {

        dispatch(logout())
    }

    // dispatch 로 상태를 뿌린다 - > reducer 인 loginSlice 의 logout() 을 호출 한다
    // logout 은 파라메터가 필요 없기 때문에 호출만 한다

    return (
        <div className="border-2 border-red-200 mt-10 m-2 p-4">
            <div className="flex justify-center">
                <div className="text-4xl m-4 p-4 font-extrabold text-red-500">
                    Logout Component
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full justify-center">
                    <div className="w-2/5 p-6 flex justify-center font-bold">
                        <button
                            className="rounded p-4 w-36 bg-red-500 text-xl  text-white"
                            onClick={handleClickLogout}
                        >
                            LOGOUT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogoutComponent;