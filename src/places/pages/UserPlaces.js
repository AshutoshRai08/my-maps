import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

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
        title:'Satue Of Unity',
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
const UserPlaces = () => {
    const userId=useParams().userId
    // debugger;
    const filtered=dummyPlaces.filter(place=>place.creatorID==userId)
  return <PlaceList items={filtered}/>;
};
export default UserPlaces
