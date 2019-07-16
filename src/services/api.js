import * as axios from "axios";

export function apiCall(method,path, data){
    return new Promise((resolve, reject)=>{
        console.log("hello")
        return axios[method.toLowerCase()](`https://sswallow.herokuapp.com${path}`,data)
        .then(res=>{
           
            return resolve(res.data);
        })
        .catch(err=>{
            return reject(err.response.data.error);
        });
    });
}

export function apiCallGet(path){
    return new Promise((resolve, reject)=>{
        console.log("hello")
        return axios.get(path)
        .then(res=>{
           
            return resolve(res.data);
        })
        .catch(err=>{
            return reject(err.response.data.error);
        });
    });
}


export function setTokenHeader(token){
    if(token){
        return axios.defaults.headers.common["Authorization"]=`Bearer ${token}`;

    }else{
        delete axios.defaults.headers.common["Authorization"];
    }
}