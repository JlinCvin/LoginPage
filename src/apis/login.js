import request from '@/utils/request'
export function loginReq(username,password) {
    return request.get('/login.json',{
        loginName: username,
        loginPassword: password
    })
}