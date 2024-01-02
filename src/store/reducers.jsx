export const reducer = (state,action)=>{
    switch(action.type){
       case "INC":
        return state+1
        
    case "DEC":
        return state-1

    default:
         state
    }
    
    // if(action.type==="INC"){
    //     return state+1;
    // }
    // if(action.type==="DEC"){
    //     return  state-1;
    // }
    // return state;

}