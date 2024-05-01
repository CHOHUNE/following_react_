import {configureStore} from "@reduxjs/toolkit";
import loginSlice from "./slice/loginSlice";

export default configureStore({

    reducer: {
        "loginSlice": loginSlice
    }
})

// 앱웹 전역에 걸쳐 상태에 영향을 미치므로 App 혹은 그 상위개념인 index.js 에 적용한다. 본 예제에서는 index.js

// store 여러 컴포넌트가 공유하는 상태를 관리하기 위한 라이브러리의 금고 같은 역할

// reducer 금고지기 : store 를 어떻게 나누고 저장하고 처리할지 결정하는 것

// slice