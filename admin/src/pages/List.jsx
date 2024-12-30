import axios from "axios"
import React, { useEffect, useState } from "react"
import { backendUrl, currency } from "../App"

const List=()=>{


    const [list,setList]=useState([])

    const fetchList=async()=>{
    try {
        const response=await axios.get(backendUrl+'/api/product/list')
        if(response.data.success)
            {setList(response.data.products);
            }
        else{
            toast.error(response.data.message)
        }
    } catch (error) {
        console.log(error)
        toast.error(error.message)
    }
    }

    useEffect(()=>{
      fetchList()
    },[])
  return(
  <>
   <p className="mb-2">All Products</p>
   <div className="flex flex-col gap-2">
    {/*-----------------List Table Title-------------- */}
    <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b className="text-center">Action</b>

    </div>
    {/*--------------Product List----------- */}
    {
        list.map((item,index) =>(
        <div key={index}> 
        <img src={item.image[0]} alt="" /> 
        <p>{item.name}</p> 
        <p>{item.category}</p> 
        <p>{currency}{item.price}</p> 
        <p>X</p> 
        </div>
        ))
    }


   </div>
   </>
  )
}

export default List