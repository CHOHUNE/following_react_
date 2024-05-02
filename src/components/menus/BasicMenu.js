import {Link} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
const BasicMenu = () => {

    const loginState = useSelector(state => (
        state.loginSlice
    ));

    // const dispatch = useDispatch()

    console.log("--------------------------")
    console.log(loginState)

    // const loginState = useSelector(state => state.loginSlice.email);

    //여기서 이 state는  컴포넌트의 state 가 아니라 앱의 state ( 전역 ) 이다.

    // setTimeout(() => {
    //
    //     console.log("distpach")
    //
    //     //
    //
    // }, 3000)

    return (
        <nav id='navbar' className=" flex  bg-blue-300">

            <div className="w-4/5 bg-gray-500">
                <ul className="flex p-4 text-white font-bold">
                    <li className="pr-6 text-2xl">
                        <Link to={'/'}>Main</Link>
                    </li>

                    {/* 핵심 부분 -> BasicLayOut에서 import 해서 써야함*/}
                    <li className="pr-6 text-2xl">
                        <Link to={'/about'}>About</Link>
                    </li>

                    {loginState.email ?
                        <>
                    <li className="pr-6 text-2xl">
                        <Link to={'/todo/'}>Todo</Link>
                    {/*    todo에 슬래쉬가 붙어있는 이유?  strict 가 아니라 inclusive 한 경로를 만들기 위함 -> 로그인 화면이라던가 */}
                    </li>
                {/*  투두 내에서만 사용하는 레이아웃을 만들 기 위해 OUTLET 이라는 기능을 쓴다 */}
                    <li className={"pr-6 text-2xl"}>
                        <Link to={'/products/'}>Products</Link>
                    </li>
                        </> :
                        <></>
                    }
                </ul>
            </div>


            <div className="w-1/5 flex justify-end bg-orange-300 p-4 font-medium">
                {!loginState.email ?
                <div className="text-white text-sm m-1 rounded">
                    <Link to={'/member/login'}>Login</Link>
                </div> :
                    <div className="text-white text-sm m-1 rounded">
                        <Link to={'/member/logout'}>Logout
                        </Link>
                    </div>
                }</div>
        </nav>
    );
}

export default BasicMenu;