import {apiCall, apiCallGet,setTokenHeader} from "../../services/api";
import{SET_CURRENT_USER} from "../actionTypes";
import{addError, removeError} from "./error"


export function setCurrentUser(user){
    return{
        type:SET_CURRENT_USER,
        user
    }
}
export function setAuthorizationToken(token){
    return setTokenHeader(token);
}
export function logout(){
    return dispatch =>{
        localStorage.clear();
        setAuthorizationToken(false)
        dispatch(setCurrentUser({}));
    }
}



 export  const authUser=(type,userData)=>{
    return dispatch =>{
        return new Promise ((resolve, reject)=>{
            console.log(type)
            return apiCall("POST",`/api/auth/${type}`, userData).then(({token,...user})=>{
                localStorage.setItem("jwtToken",token)
                setAuthorizationToken(token)
                dispatch(setCurrentUser(user));
                dispatch(removeError());
                resolve();
            }).catch(err=>{
                console.log(err)
                dispatch(addError(err.Message))
                return reject();
            });
        
        })}}

