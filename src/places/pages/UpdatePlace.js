import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import useForm from "../../shared/components/hooks/form-hook";
import { VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH } from "../../shared/util/validators";
import Card from "../../shared/components/UIElements/Card";


const dummyPlaces =[
    {
        id:'p1',
        title:'Satue Of Unity',
        description:'Biggest Statue in world',
        imageUrl:`https://img.freepik.com/free-vector/bokeh-defocused-background_23-2148497833.jpg`,
        address:' Sardar Sarovar Dam, Statue of Unity Rd, Kevadia, Gujarat 393155',
        location:{
            lat:21.8380,
            lng:73.7191,
        },
        creatorID:'u1'
    },
    {
        id:'p2',
        title:' Of Unity',
        description:'Biggest Statue in world',
        imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/1200px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg',
        address:' Sardar Sarovar Dam, Statue of Unity Rd, Kevadia, Gujarat 393155',
        location:{
            lat:21.8380,
            lng:73.7191,
        },
        creatorID:'u1'
    }
]
const UpdatePlace=props=>{
    const [isLoading,setLoading]=useState(true)   
const PlaceId=useParams().placeId;


const [formState,inputChangeHandler,setFormData]=useForm({title:{
    value:'',
    isValid:false
},
description:{
    value:'',
    isValid:false
},

},false)  
const identifyPlaces=dummyPlaces.find(place=>place.id==PlaceId);
useEffect(()=>{
    if(identifyPlaces){
    setFormData({
        title:{
            value:identifyPlaces.title,
            isValid:true
        },
        description:{
            value:identifyPlaces.description,//formState.input.isValid
            isValid:true
        },
        
        },true)};
        setLoading(false)
},[setFormData,identifyPlaces])//identify place wont change every rerender cycle also setFormData was initialised as the component loaded therefore useEffect will insure it only reloads and setFormData Execues when there is change not at initial value
 
const placeUpdateHandler=event=>{
    event.preventDefault();
    console.log(formState.inputs);
}
if(!identifyPlaces){
    return (
        <div className="center">
            <Card>
            <h2>Place Not Found</h2></Card></div>
           )
}
// if(!formState.inputs.title.value){
//     return(
//         <div>Place Not Found and loading</div>
//     )
// }
    if(isLoading){
        return(
            <div>loading</div>
        )
    }

return(//formState.inputs.title.value &&
    <form className="place-form" onSubmit={placeUpdateHandler} >
  <Input id="title" element="input" type="text" label="Title" validator={[VALIDATOR_REQUIRE()]}
  errorText="Please Enter Valid Title"
  onInput={inputChangeHandler}
   initValue={formState.inputs.title.value} //identifyPlaces.title
  initValid={formState.inputs.title.isValid}></Input>

  <Input id="description" element="textarea" label="Description" validator={[VALIDATOR_MINLENGTH(5)]}
  errorText="Please Enter Valid Valid Description"
  onInput={inputChangeHandler}
  initValue={formState.inputs.description.value} //identifyPlaces.description
  initValid={formState.inputs.description.isValid}></Input>
  <Button type="submit" disabled={!formState.isValid}>Update Place</Button>
</form>
)


};

export default UpdatePlace;