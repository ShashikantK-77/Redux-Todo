export const addTodo = (data) =>{
    return{
        type : "ADDTODO",
        payload : {
            id : new Date().getTime().toString(),
            data : data
        }
    }
}

export const delTodo = (id) =>{
    return{
        type : "DELTODO",
        id,
        

    }
}

export const remTodo = () =>{
    return{
        type : "REMTODO"
    }
}
