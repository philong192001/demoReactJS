import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import ProductsDetail from "../../components/html/ProductsDetail";
import Nav from "../../components/html/Nav";

export default function Detail(){


    const [products,setProduct] = useState([]);
    /*
        this.state= {
            products:[];
        }
     */
    const {id} = useParams();
    useEffect(()=>{
        fetch("https://foodgroup.herokuapp.com/api/food/"+id)
            .then(rs=>rs.json())
            .then(rs=>{
                setProduct(rs.data)
            })
    }) // componentDidUpdate
    console.log(products)
    return (
        <ProductsDetail products ={products}/>

    )
}