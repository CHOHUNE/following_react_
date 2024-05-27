import {atom} from "recoil"
import {getCookie} from "../util/cookieUtil";

const initState = {
    emial: '',
    nickname: '',
    social: false,
    accessToken: '',
    refreshToken: ''

}

const loadMemberCookie = () => {

    const memberInfo = getCookie('member')

    if (memberInfo && memberInfo.nickname) {
        memberInfo.nickname = decodeURIComponent(memberInfo.nickname)
    }

    return memberInfo;
}


export const signinState = atom({
    key: 'sininState',
    default: loadMemberCookie() || initState
})