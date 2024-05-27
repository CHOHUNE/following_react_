import {atom} from "recoil";


const initState = {
    email: ' '
}

export const signinState = atom({
    key: 'initState',
    default: initState
})