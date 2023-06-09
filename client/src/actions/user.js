import * as api from '../api/index';
export const addStock=(info)=>async(dispatch)=>{
    try{
        const {data}=await api.buystock(info);
        console.log(data);
        dispatch({type:'BUY',payload:data});
    }catch(err){
        console.log(err);
    }
}
export const sellStock=(info)=>async(dispatch)=>{
    try{
        const {data}=await api.sellstock(info);
        console.log(data);
        dispatch({type:'BUY',payload:data});
    }catch(err){
        console.log(err);
    }
}
export const getinfo=(info)=>async(dispatch)=>{
    try{
        const {data}=await api.getinfo(info);
        console.log(data);
        console.log(data);
        dispatch({type:'SET_USER',payload:data});
    }catch(err){
        console.log(err);
    }
}