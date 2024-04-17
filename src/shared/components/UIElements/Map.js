import React from "react";
import './Map.css';
import { useRef ,useEffect} from "react";
import mapboxgl from "mapbox-gl";


// const mapboxgl=require('mapbox-gl');
const Map=props=>{
    const mapRef=useRef();
    const {zoom,center}=props;
    useEffect(()=>{

    
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXNoMTQxIiwiYSI6ImNsbnZyb3I4cTAxaGUyam80OWR2b3NsdjMifQ.sukKRUiiY2TeGu387uYrvg';
    const map = new mapboxgl.Map({
        container: mapRef.current, // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: center, //[-74.5, 40], // starting position [lng, lat]
        zoom: zoom //9 // starting zoom
    });
    new mapboxgl.Marker({position:center,map:map});
},[zoom ,center]);
    return <div ref={mapRef} className={`map ${props.className}`}
    style={props.style} id="map"> </div>
    
}
export default Map;