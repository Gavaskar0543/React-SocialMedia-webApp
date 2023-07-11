import { Local_Storage_TOKEN_KEY } from "../utils/inde";
//custom api
customFetch = async ()=>{
    try{
const token = windows.localStorage.getItem(Local_Storage_TOKEN_KEY);

    }catch(error){
        console.log(error.message);
    }
}

//getpost
getPost = (pages,limitOfPost) =>{
    return customFetch();
}