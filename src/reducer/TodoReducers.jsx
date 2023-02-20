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
             
        

        case "DELTODO":

           const newList =  state.list.filter((elem) => elem.id  != action.id)

            return{
                ...state,
               list:newList
            }

            case "REMTODO": return{
                ...state,
                list:[],
            }
                   
                

            default: return state;
    }
}

export default TodoReducers;