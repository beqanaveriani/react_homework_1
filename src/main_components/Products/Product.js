import React from "react"


function Product({product, ...props}){
    return (
        <tr id={product.id}>
            <td>{product.name}</td>
            <td><img src={product.img} alt="" /></td>
            <td>{product.pirce}</td>
            <td><input type='button' value="X" onClick={props.deletehandler} style={{backgroundColor: '#f71616cf', border: 0}} data-id={product.id}/></td>
        </tr>
    )
}


export default Product;