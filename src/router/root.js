import {createBrowserRouter, Route} from "react-router-dom";
import {lazy, Suspense} from "react";
import todoRouter from "./todoRouter";


const Loading =<div className={'bg-amber-700'}>Loading...</div>
const Main = lazy(() => import("../pages/MainPage"));
const About =lazy(()=> import("../pages/AboutPage"));
const TodoIndex= lazy(()=> import("../pages/todo/indexPage"));

//라우터를 사용할 때에는 a 태그를 쓸 수 없고 링크를 통해서 이동 해야 한다.
//브라우저는 기본적으로 주소창을 바꾸게 되면 기존의 데이터를 지우고 새로운 데이터를 불러오게 된다.
// 이를 방지하기 위해 쓰는 게 링크 컴포넌트다.
const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={Loading}><Main/></Suspense>
    },
    {
        path: "about",
        element: <Suspense fallback={Loading}><About/></Suspense>
    },{
        path: "todo",
        element: <Suspense fallback={Loading}><TodoIndex/></Suspense>
        ,children: todoRouter
        /*이전에는 배열로 직접 선언 해줬었는데 투두 라우터의 함수 실행 결과값을 대신 적어 넣어 분리 시켜 놓음 */


    }
])

// 배열이 엄청나게 많으면 리액트 입장에서는 데이터를 보여주고 이 컴포넌트들을 다 초기화 시켜야되는 상황이 온다
// 예를 들어 100개의 페이지를 다 처리하고 나서 1페이지를 보여주는 상황이 오게 되는데, 이때 사용하는 것이 코드 스플린팅이다.
// 코드 스플링팅은 필요한 상황까지 페이지를 로딩하지 않는 것이다.
// 리액트에 레이지와 서스펜스가 리액트에 있기 때문에 활용한다
// 삽시간에 지나가지만 Loading 이라는 메세지가 먼저 나오고 Main 페이지가 나온다.
// 리액트는 기본적으로 싱글페이지 어플리케이션인데, MS워드 프로그램을 껐다 켰다 라고 생각하면 된다.
// 그렇게 되면 굉장히 느려지게 될텐데, 로딩을 지연켜 의도한 화면을 보여주고, 필요할 때만 화면을 보여주는 게 코드 스플린팅이라고 한다.



export default root;
