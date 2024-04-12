import React from 'react';
import {useSearchParams} from "react-router-dom";

function ListPage(children) {

    const [queryParams] = useSearchParams()
    const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10



    return (
        <div className={"p-4 w-full bg-white"}>
            <div className={"text-3xl font-extrabold"}>
              Todo List Page Component --{page}--{size}--
            </div>
        </div>
    );
}



//특이한 점은 basicLayOut을 적용을 안했다.->  OUTLET의 장점
//다른 내용은 하나도 없이 구조만 서술했음에도 투두 리스트 페이지가 렌더링 된다. -> OUTLET의 효과
// basicLayOut 에서 1depth 인덱스 페이지에서 서브레이어를 잡아준다.
// 레이아웃을 잡아줌으로서 필요한 코드만으로 코드를 구성할 수 있게 된다.

export default ListPage;