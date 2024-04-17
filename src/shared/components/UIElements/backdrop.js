import React from "react";
import { createPortal } from "react-dom";
import './backdrop.css';

const backdrop=props=>{
    const content=<div className="backdrop" onClick={props.onClick}></div>
return createPortal(content,
document.getElementById("backdrop-hook"))
}

export default backdrop;