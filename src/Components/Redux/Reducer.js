
const initialstate=0;

export default function Reducer(state=initialstate,action){
 switch(action.type){
    case "increment":
         return state+=1;
    case "decrement":
        console.log("clicked")
        if(state===0){
         return state;
        }
        
        return state-=1;
        default:
            return state;

    
 }

}