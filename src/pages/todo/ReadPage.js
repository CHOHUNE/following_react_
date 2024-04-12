import React from 'react';
import {createSearchParams, useNavigate, useParams, useSearchParams} from "react-router-dom";

function ReadPage(props) {

    const navigate = useNavigate();
    const{tno}= useParams();

    const [queryParams] = useSearchParams()
    const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10

    const queryStr = createSearchParams({page, size}).toString();



    const moveToModify=(tno)=>{
        navigate({
            pathname:`/todo/modify/${tno}`,
            search: queryStr
        //http://localhost:3000/todo/modify/13?page=1&size=10 이런식으로 나온다.
        });
    }

    const moveToList=()=>{
        navigate(({
            pathname:'/todo/list',
            search: queryStr

        }))
    }

    return (
        <div className={"text-3xl"}>
            Todo Read Page {tno}

            <div>
                <button onClick={moveToList}>List</button>
                {/*파라메터가 없으면 위 처럼 객체를 직접 지정, 있으면 아래 처럼 화살표 함수*/}
                <button onClick={()=>moveToModify(tno)}>Test Modify </button>
            </div>
        </div>

    );
}

export default ReadPage;