import React from "react";

function Input({ addUsername }) {
return(
    <div className="Input">
        <div className="Input__header">Login</div>
        <input className="Input__username" type="text"/>
        <input className="Input__password" type="text" />
    </div>

)
}

export default Input;