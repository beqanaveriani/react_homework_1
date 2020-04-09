import React, { useState } from 'react';
import NoParent from '../NoParent';
import Products from './Products'
import Filter from './Filter';
import AddProduct from "./AddProduct"


/*
    1 - Telescopes
    2 - eyepieces
    3 - rangefinders
*/
const productList = [
    {
        id: 1,
        name: "Celestron CPC Deluxe 800 HD Computerized Telescope",
        img: "https://www.buytelescopes.com/images/products/59e6f0ccfedcf6d557036cf35589f44d1add08dc_celestron-cpc-deluxe-800-hd-computerized-telescope_250.jpg",
        pirce: 2.449, 
        category: 1
    },

    { 
        id: 2,
        name: "Celestron EdgeHD 14 Optical Tube Assembly",
        img: "https://www.buytelescopes.com/images/products/0061565_celestron-edgehd-14-optical-tube-assembly.jpeg",
        pirce: 5.999, 
        category: 1
    },

    { 
        id: 3,
        name: "Lunt Solar Systems Solar Eyepiece Set 1.25",
        img: "https://www.buytelescopes.com/images/products/0048756_lunt-solar-systems-solar-eyepiece-set-125.jpeg",
        pirce: 329, 
        category: 2
    },

    { 
        id: 4,
        name: "Meade Series 4000 12.4mm Super Plossl 1.25",
        img: "https://www.buytelescopes.com/images/products/0051843_meade-series-4000-124mm-super-plossl-125.jpeg",
        pirce: 31.99, 
        category: 2
    },

    { 
        id: 5,
        name: "Bushnell 4x20 Bone Collector LRF, RealTree Xtra Vertical, Box 202208",
        img: "https://www.buytelescopes.com/images/products/8de0a1b5c7575166c076d7b9551689ce3f1af20e_4x20-bone-collector-lrf-realtree-xtra-113457_250.png",
        pirce: 173.42, 
        category: 3
    },


]


function Product(props){
    const [products, setProducts] = useState(productList)
    const [productObject, setProductObject] = useState({"category": 1});

    const onSubmitHandler = (event) => {
        event.preventDefault();
        let newProduct = {id: products.length > 0 ?  products[products.length - 1].id + 1 : 1, ...productObject}
        setProducts([...products, newProduct])
    }

    const handleInputChange = ({target}) => {
        const newObject = {
          [target.name]: target.value
        }
        setProductObject({...productObject, ...newObject});
      }

    const deleteHandler = ({target}) => {
        setProducts([...products].filter(function(v, i, a) { return v.id !=  target.getAttribute("data-id")}));
    }

    const sortByCategoryHandler = ({target}) => {

        function compare(a, b) {
            if ( a.category == target.value && b.category != target.value){
              return -1;
            } else {
              return 0;
            }
          }
        
        setProducts([...products.sort(compare)])
    }

    return (
        <NoParent>
            <AddProduct inputchange={handleInputChange} submit={onSubmitHandler} />
            <Filter sort={sortByCategoryHandler} />
            <Products products={products} deletehandler={deleteHandler} />
        </NoParent>
    )

}


export default Product;