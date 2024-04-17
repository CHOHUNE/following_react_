import React, {useState} from 'react';
import ResultModal from "../common/ResultModal";
import {postAdd} from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";

const initialState = {
    title: "",
    writer: "",
    dueDate: ""

}

function AddComponent(props) {

    // const [todo, setTodo] = useState(initialState);
    const [todo, setTodo] = useState({...initialState})

    const [result, setResult] = useState()

    const {moveToList} = useCustomMove();

    const handleChangeTodo = (e) => {

        console.log(e.target.name,e.target.value)

        todo[e.target.name]=e.target.value;
        //e.target.name=title, writer, dueDate 처럼 객체의 이름을 지칭하는 것
        // 즉 자바는 순번 밖에 못 쓰지만 js는 이렇게 이름을 직접적으로 처리해줄 수 있다.
        // 객체의 이름이 바뀔 때 마다 실행해주겠다는 뜻


        setTodo({...todo});
    }

    // 위 두개의 차이 : 1 객체 그대로 전달, 2 복사해서 전달
    // 1. 상태객체의 참조가 바뀌어야 변화 감지 2. 상태객체의 내용이 바뀌어도 변화 감지
    // 두 번째가 추천하는 방식 -> 상태변화를 더 정확하게 감지하고 불변성 유지

    const handleClickAdd = (e)=>{

       // console.log(todo);

        postAdd(todo).then(result => {


            // {tno : 104 }
            setResult(result.tno)
            setTodo({...initialState})

        });

    }

    const closeModal = () => {
        setResult(null)
        moveToList()
    }

    return (
        <div className = "border-2 border-sky-200 mt-10 m-2 p-4">

            {/* 모달 처리 */}

            {/*{result ? <ResultModal title={'Add Result'} content={`New ${result} Added`} callbackFn={closeModal}/>: <></>}*/}


            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">TITLE</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
                           name="title"
                           type={'text'}
                           value={todo.title}
                           onChange={handleChangeTodo}
                    >
                    </input>

                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">WRITER</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
                           name="writer"
                           type={'text'}
                           value={todo.writer}
                           onChange={handleChangeTodo}
                    >
                    </input>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">DUEDATE</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
                           name="dueDate"
                           type={'date'}
                           value={todo.dueDate}
                           onChange={handleChangeTodo}
                    >
                    </input>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="relative mb-4 flex p-4 flex-wrap items-stretch">
                    <button type="button"
                            className="rounded p-4 w-36 bg-blue-500 text-xl  text-white "
                            onClick={handleClickAdd}
                    >
                        ADD
                    </button>
                </div>
            </div>
            {result? <ResultModal title={'Add Result'} content={`New ${result} Added`} callbackFn={closeModal}/> : <></>}
        </div>
    );
}

export default AddComponent;