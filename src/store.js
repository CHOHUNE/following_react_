import {configureStore} from '@reduxjs/toolkit';
import loginSlice from './slice/loginSlice';
import cartSlice from "./slice/cartSlice";

export default configureStore({
    reducer: {
        "loginSlice": loginSlice,
        "cartSlice": cartSlice
    },
});


// 앱웹 전역에 걸쳐 상태에 영향을 미치므로 App 혹은 그 상위개념인 index.js 에 적용한다. 본 예제에서는 index.js

// store 여러 컴포넌트가 공유하는 상태를 관리하기 위한 라이브러리의 금고 같은 역할

// reducer 금고지기 : store 를 어떻게 나누고 저장하고 처리할지 결정하는 것

// slice


// useDispatch : 바뀌어주세요 ~ 웹 전역에 상태 전달을 하는 역할
// useSelector :  내가 관심있는 주제만 구독하게끔 하는 역할