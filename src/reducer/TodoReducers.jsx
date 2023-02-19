import Todo from "../components/Todo";

const initialData = {
    list :[]
}

const TodoReducers = (state=initialData, action) =>{
        switch(action.type){
            case "ADDTODO":
                const {id,data} = action.payload;
                return{
                    ...state,
                    list:[
                        ...state.list,
                    {
                        id:id,
                       data:data,
                    }]
                }
                default: return state;
        }
}

export default TodoReducers;