import React from "react";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import Button from '../../shared/components/FormElements/Button'
import './NewPlace.css'
import useForm from "../../shared/components/hooks/form-hook";
import Input from "../../shared/components/FormElements/Input";



const NewPlace=()=>{
const [formState,inputChangeHandler]=useForm({title:{
        value:'',
        isValid:false
    },
    description:{
        value:'',
        isValid:false
    },
    address:{
        value:'',
        isValid:false
    }
    },false)        
    //nested obj stores info regarding validiity of individual inputs


    const placeSubmitHandle=event=>{

            event.preventDefault();
            console.log(formState.inputs,formState.isValid);
    }
        return(
        <form className="place-form" onSubmit={placeSubmitHandle}>
            <Input id="title" element="input" type="text" label="Title" validator= {[VALIDATOR_REQUIRE()]} errorText="Please Enter a Valid Title" onInput={inputChangeHandler} />

            <Input id="description" element="textarea" type="text" label="Title" validator= {[VALIDATOR_MINLENGTH(5)]} errorText="Please Enter a Valid description (length 5)" onInput={inputChangeHandler} />

            <Input id="address" element="input" type="text" label="Address" validator= {[VALIDATOR_REQUIRE()]} errorText="Please Enter a Valid Address" onInput={inputChangeHandler} />

            <Button type="submit" disabled={!formState.isValid}>ADD PLACE</Button>
        </form>
        )
    }

export default NewPlace;