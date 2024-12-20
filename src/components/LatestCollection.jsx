import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'; 
import Productitem from './Productitem';

const LatestCollection = () => {
    const {products}=useContext(ShopContext);
    const[latestproducts,setLatestProducts]=useState([]);
    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[])
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST '} text2={'COLLECTIONS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe numquam, expedita tenetur totam qui voluptatem. Quam maxime inventore aut nihil sed sint libero corporis numquam eius maiores dolor, eaque fugiat.</p>

        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
         { latestproducts.map((item,index)=>(
          <Productitem key={index} id={item.id} image={item.image} name={item.name} price={item.price}/>
        ))
         

         }
        </div>
      
    </div>
  )
}

export default LatestCollection