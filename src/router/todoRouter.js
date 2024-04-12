import {lazy, Suspense} from "react";
import {Navigate} from "react-router-dom";

const Loading =<div className={'bg-amber-700'}>Loading...</div>

const TodoList=lazy(()=> import("../pages/todo/ListPage"));
const TodoAdd = lazy(()=> import("../pages/todo/Addpage"));

const TodoRead = lazy(()=> import("../pages/todo/ReadPage"));

const todoRouter =()=>{
 return [
     {
         path:"list",
         element:<Suspense fallback={Loading}><TodoList/></Suspense>
     },{
     path:"", //path가 없으면 기본적으로 이동할 페이지 "/투두",
         element: <Navigate replace={true} to={'list'}/>
         // Navigate는 페이지 이동을 위한 컴포넌트이다. todo로 가는 순간 list로 navigate 된다
     },
     {
         path:'read/:tno',
         element: <Suspense fallback={Loading}><TodoRead/></Suspense>
     },
     {
         path:"add",
            element:<Suspense fallback={Loading}><TodoAdd/></Suspense>
     }
 ]
}

export default todoRouter()


//리액트에서 컴포넌트를 제외한 나머지 경우는 파일명이 소문자로 시작한다
