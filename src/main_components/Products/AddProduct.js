import React from "react"



function AddProduct(props){
    return (
        <div className="addItem">
            <h3>Add product</h3>
            <form className="addItemForm"  >
                <label htmlFor="productName">Product Name</label>
                <input type="text" id="productName" name="name" placeholder="Product Name" onChange={props.inputchange} />

                <label htmlFor="productImage">Product Image URL</label>
                <input type="text" id="productImage" name="img" placeholder="https://host.com/logo.png" onChange={props.inputchange} />

                <label htmlFor="price">Product Name</label>
                <input type="num" id="price" name="pirce" placeholder="15.24 $" onChange={props.inputchange} />

                <label htmlFor="category" onChange={props.inputchange} >Category</label>

                <select name="category" id="category" onChange={props.inputchange}>
                    <option value={1}>Telescopes</option>
                    <option value={2}>Eyepieces</option>
                    <option value={3}>Rangefinders</option>
                </select>

                <input type='submit' value="Add" onClick={props.submit}  />
            </form>
        </div>
    )
}

export default  AddProduct;