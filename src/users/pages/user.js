import React from "react";
import UserList from "../components/UserList";

const user=()=>{
    const USERS=[
    {
        name:"Ashutosh",
        id:"u1",
        image:'https://img.freepik.com/free-vector/bokeh-defocused-background_23-2148497833.jpg',
        places:3,
        email:'rai.ashu0tosh11@gmail.com'
    },
    {
        name:"Ashutosh",
        id:"u1",
        image:'https://img.freepik.com/free-vector/bokeh-defocused-background_23-2148497833.jpg',
        places:3,
        email:'rai.ashu0tosh11@gmail.com'
    }
];
    return (
        <UserList items={USERS} / >
    );
}

export default user;