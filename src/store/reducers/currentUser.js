
import {SET_CURRENT_USER } from "../actionTypes"

const DEFAULT_STATE ={
    isAuthenticated:false , // hopefully be true, when loggen in
    user:{}  // all the user info when loggen in
}

export default(state= DEFAULT_STATE, action)=>{
    switch(action.type){
        case SET_CURRENT_USER:
            return{
                //turn emppty object into false or if there are keys, true
                //isAuthenticated:Object.keys(action.user).length>0
                //isAuthenticated:Bolean(Object.keys(action.user).length)
                isAuthenticated:!!Object.keys(action.user).length,
                user:action.user
            };
        default :
        return state
    }
}

