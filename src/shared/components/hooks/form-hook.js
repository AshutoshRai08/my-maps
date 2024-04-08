import React,{useCallback,useReducer} from "react";

const formReducer=(state,action)=>{
    switch(action.type){
        case 'INPUT_CHANGE':
            let formIsValid=true;
            for(const inputId in state.inputs){
                if(!state.inputs[inputId]){
                    continue;//if input is undefined then we continue
                }
                if(inputId===action.inputId){
                formIsValid=formIsValid && action.isValid;
                }else{
                    formIsValid=formIsValid && state.inputs[inputId].isValid;
                }
            }
            return{
                ...state,
                inputs:{
                    ...state.inputs,
                    [action.inputId]:{value:action.value,isValid:action.isValid}
                },
                isValid:formIsValid
            };
            case 'SET_DATA':
                 return{
                    inputs:action.inputs,
                    isValid:action.formIsValid 
                 }


        default:
            return state;
    }
}
const useForm=(intitialInputs,initialFormValidity)=>{
    const [formState,dispatch]=useReducer(formReducer,{
        inputs:intitialInputs,
            // title:{
            //     value:'',
            //     isValid:false
            // },
            // description:{
            //     value:'',
            //     isValid:false
            // },
            // address:{
            //     value:'',
            //     isValid:false
            // }   //nested obj stores info regarding validiity of individual inputs

        isValid:initialFormValidity//stores info if overall form is valid
    })
    const setFormData=useCallback((inputData,formValidity)=>{
            dispatch({type:"SET_DATA",inputs:inputData,fromIsValid:formValidity})
    },[])
    const inputChangeHandler=useCallback((id,value,isValid)=>{
        dispatch({type:'INPUT_CHANGE' ,value:value,isValid:isValid,inputId:id})
},[])//can add dispatch as the dependencies that change but react ensure dispatch from useReducer never changes, so we can ommit it
return [formState,inputChangeHandler,setFormData]
}

export default useForm;