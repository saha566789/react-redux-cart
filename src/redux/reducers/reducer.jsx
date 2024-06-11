

const INIT_STATE ={
    carts :[]
}




export const cartreducer = (state=INIT_STATE,action)=>{
    switch(action.type){
        case"ADD_Cart":
        return{
            ...state,
            carts:[...state.carts,action.payload]
        }
        default :
        return state
    }
}