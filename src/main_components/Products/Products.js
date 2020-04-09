import React from "react"
import ErrorBoundary from "../ErrorBoundary"
import Product from "./Product"
import './Products.css'



function Products(props){
    return (
        <div>
            <table id="products">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map(product => {
                        return (
                            <ErrorBoundary key={`${product.category}-${product.id}`}>
                                <Product product={product} deletehandler={props.deletehandler} />
                            </ErrorBoundary>
                        )
                    })}
                </tbody>
                
            </table>
        </div>
        
    )
}

export default Products;