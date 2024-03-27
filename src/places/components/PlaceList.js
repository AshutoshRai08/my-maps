import React from "react";
import Card from "../../shared/components/UIElements/Card";
import './PlaceList.css'
import PlaceItem from "./PlaceItem";
import Button from "../../shared/components/FormElements/Button";



const PlaceList=props=>{
if(props.items.length==0){
return <div className="place-list center"><Card >
    <h2>No PLaces Found!! Create On2</h2>
        <Button to='/places/new'>Share</Button>
</Card>
</div>
}

return (
    <ul className="place-list">
        
        {props.items.map(place=>(
            <PlaceItem
            key={place.id}
            id={place.id}
            address={place.address}
            coordinates={place.location}
            creatorId={place.creator}
            description={place.description}
            image={place.imageUrl}
            title={place.title}
 
            />
        ))}
    </ul>
)
}

export default PlaceList;