import React from "react";
import Card from "../../shared/components/UIElements/Card";
import Modal from "../../shared/components/UIElements/Modal";
import Button from "../../shared/components/FormElements/Button";

import { useState } from "react";
import Map from "../../shared/components/UIElements/Map";
import './PlaceItem.css';


const PlaceItem=props=>{
    const [showMap,setShowMap]=useState(false)
    const [showDelete,setDelete]=useState(false)
    const openMapHandler=()=>setShowMap(true);
    const closeMapHandler=()=>setShowMap(false);
    const toogleDeleteHandler=()=>setDelete(!showDelete)
    const confirmDeleteHandler=()=>{
        setDelete(false)
        console.log("Deleting!!!!");
    }
return (
<React.Fragment>
<Modal
show={showMap}
onCancel={closeMapHandler}
header={props.address}
contentClass="place-item__modal-content"
footerClass="place-item__modal-actions"
footer={<Button onClick={closeMapHandler}>CLOSE</Button>}>
<div className="map-container">
    <Map center={props.coordinates} zoom={9} />
</div>
</Modal>
<Modal 
show={showDelete} 
onCancel={toogleDeleteHandler} 
header="Are you sure?" 

footerClass="place-item__modal-actions" 
footer={
    <React.Fragment>
        <Button inverse onClick={toogleDeleteHandler}>Cancel</Button>
        <Button danger onClick={confirmDeleteHandler}>Delete</Button>
    </React.Fragment>
}>
<p style={{marginLeft:2 +"rem",marginTop:20+"px"}}>Do you Want to proceed? This action Can't be undone</p>
</Modal>
<li className="place-item">
    <Card className="place-item__content" >
    <div className="place-item__image">
        <img src={props.image} alt={props.title} />
    </div>
    <div className="place-item__info">
        <h2>{props.title}</h2>
        <h3>{props.address}</h3>
        <p>{props.description}</p>
    </div>
    <div className="place-item__actions">
        <Button inverse onClick={openMapHandler}>View On Map</Button>
        <Button to={`/places/${props.id}`} >Edit</Button>
        <Button danger onClick={toogleDeleteHandler}>Delete</Button>
    </div>
    </Card>
</li>
</React.Fragment> )
}

export default PlaceItem;