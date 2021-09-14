import { SET_TOKEN, 
    REQUEST_PENDING, 
    REQUEST_SUCCESSED, 
    REQUEST_FAILED, 
    GET_ARTICLES, 
    ADD_ARTICLE, 
    DELETE_ARTICLE 
} from "./actionType";


export function setToken({token}){
    return{
        type: SET_TOKEN,
        payload: {
            token
        }
    }
}

export function getArticles(){
    return{
        type: GET_ARTICLES,
    }
}

export function postArticle({Article}){
    return{
        type: ADD_ARTICLE,
        payload: {
            Article
        }
    }
}

export function deleteArticle({Article}){
    return{
        type: DELETE_ARTICLE,
        payload: {
            Article
        }
    }
}

export function requestPending(){
    return{
        type: REQUEST_PENDING
    }
}

export function requestSuccessed(posts){
    return{
        type: REQUEST_SUCCESSED,
        payload:{
            posts
        }
    }
}

export function requestFailed({err}){
    return{
        type: REQUEST_FAILED,
        payload:{
            err
        }
    }
}