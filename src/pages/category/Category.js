import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Nav from "../../components/html/Nav";

export default function Category() { // reactHook
    const [products,setProduct] = useState([]);
    /*
        this.state= {
            products:[];
        }
     */
    const {id} = useParams();
    useEffect(()=>{
        fetch("https://foodgroup.herokuapp.com/api/category/"+id)
            .then(rs=>rs.json())
            .then(rs=>{
                setProduct(rs.data.foods)
            })
    }) // componentDidUpdate
    return (
        <Nav products ={products}/>
    )

}