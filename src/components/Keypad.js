import React from 'react'

function keypad() {

    function handleChange() {
        console.log("Entering password...")

    }
    return (
        <input type="password" onChange={handleChange}/>
    )
}

export default keypad
