import React, { useEffect, useReducer, useState } from "react";
import useForm from "../../shared/components/hooks/form-hook";
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH,VALIDATOR_EMAIL, VALIDATOR_DATE } from "../../shared/util/validators";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import { AuthContext } from "../../shared/context/auth-context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
//can add Authentication.css from lecture



const Authentication=()=>{
  let auth=useContext(AuthContext)
  let navigate=useNavigate();
    const [isLoginMode ,setIsLoginMode]=useState(true);
  
 const [formState,inputChangeHandler,setFormData] =useForm({
 
  
  email:{
        value:'',
        isValid:false
    },
    
    password:{
        value:'',
        isValid:false
    }
  },false)
    const switchLogin=()=>{
      auth.isLoggedIn=true;
      debugger;
    }
  const switchModeHandler=()=>{
    if(!isLoginMode){debugger
   
        setFormData( 
          {...formState.inputs, 
            name1:undefined,
            confirmPassword:undefined,
            date:undefined
          },
          formState.inputs.email.isValid && formState.inputs.password.isValid
        )
    debugger} else{debugger
        setFormData(
          {...formState.inputs,
        
        },false)
        debugger;
    }
        setIsLoginMode(!isLoginMode)
  }
  const submitHandler=event=>{
      event.preventDefault();
      console.log(formState.inputs);
      auth.login();
      // navigate("/")

      
  }
return(<Card>
    <h2 className="center">Enter your Login Credentialas</h2>
    <form className="place-form" onSubmit={submitHandler} >



     <Input id="email" element="input" type="email" label="E-mail" validator={[VALIDATOR_EMAIL()]}
    errorText="Please Enter Valid Email"
    onInput={inputChangeHandler}
     //identifyPlaces.title
   ></Input>
  
    <Input id="password" element="input" label="Password" validator={[VALIDATOR_MINLENGTH(8)]}
    type="password"
    errorText="Please Enter Valid Valid Password"
    onInput={inputChangeHandler}
    //identifyPlaces.description
    ></Input>

    {!isLoginMode && <div>
      <Input id="name1" element="input" type="text" label="Name" validator={[VALIDATOR_REQUIRE()]}
    errorText="Please Enter Valid Title"
    onInput={inputChangeHandler}
     //identifyPlaces.title
   ></Input>
    <Input id="confirmPassword" element="input" label="Confirm Password" validator={[VALIDATOR_MINLENGTH(8)]}
    type="password"
    errorText="Please Enter Valid Valid Password"
    onInput={inputChangeHandler}
    //identifyPlaces.description
    ></Input>
    
    <Input id="date" element="input" label="D.O.B" validator={[VALIDATOR_DATE()]}
    type="date"
    errorText="Please Enter Valid Valid Date"
    onInput={inputChangeHandler}
    //identifyPlaces.description
    ></Input>
    </div>}
    <Button type="submit" /*onClick={switchLogin}*/ disabled={!formState.isValid}>{isLoginMode?"Authenticate":"SignUp"}</Button>
  </form>
  <Button inverse onClick={switchModeHandler}>Switch to {isLoginMode?"SignUp":"Authentication"}</Button>
  </Card>   
)
}

export default Authentication;