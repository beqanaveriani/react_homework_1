import React from "react"


function Filter(props) {
    return (
        <div style={{marginTop: 15, margin: "0.5vw 5vw"}}>
            <label>Sort by category</label>
            <select style={{marginLeft: 10}} name="sortCategory" id="sortCategory" onChange={props.sort}>
                <option value={-1}>---</option>
                <option value={1}>Telescopes</option>
                <option value={2}>Eyepieces</option>
                <option value={3}>Rangefinders</option>
            </select>
        </div>
    )
}

export default Filter;