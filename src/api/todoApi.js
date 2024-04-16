import axios from "axios";


export const API_SERVER_HOST='http://localhost:8080'



const prefix = `${API_SERVER_HOST}/api/todo` //

export const getOne = async (tno) =>{

    const res = await axios.get(`${prefix}/${tno}`)

    return res.data
}

export const getList = async (pageParams) =>{

    const {page,size} = pageParams

    const res = await axios.get(`${prefix}/list`,{params:{...pageParams}})

    return res.data
}

//비동기 처리를 하는 이유 :사용자 인터페이스 응답성 향상 : 순차적으로 실행되고 작업 간의 의존성이 높은 경우가 아니기 때문에 비동기 처리 한다.
