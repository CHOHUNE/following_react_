import React from 'react';
import {createSearchParams, useNavigate, useParams, useSearchParams} from "react-router-dom";
import ReadComponent from "../../components/todo/ReadComponent";

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
        <div className={"font-extrabold w-full bg-white mt-6"}>


            <div className={"text-2xl"}>
                Todo Read Page Component {tno}
            </div>

            <ReadComponent tno={tno} />
        </div>

    );
}

export default ReadPage;