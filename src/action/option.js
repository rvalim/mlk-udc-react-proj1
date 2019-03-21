export const CREATE_OPTION = 'CREATE_OPTION'
export const DELETE_OPTION = 'DELETE_OPTION'
export const GET_ALL_OPTION = 'GET_ALL_OPTION'

export function addOptionAction (option){
    return {
        type : CREATE_OPTION,
        option
    }
}

export function removeOptionAction (id){
    return {
        type : DELETE_OPTION,
        id
    }
}

export function getAllOptionsAction (){
    return {
        type : GET_ALL_OPTION
    }
}