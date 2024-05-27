import {atom} from "recoil"

const initState = {
    emial: '',

}

export const signinState = atom({
    key: 'sininState',
    default: initState
})