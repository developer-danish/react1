import React,{useState, useEffect} from 'react'
import  axios  from "axios";
import ProductCard from '../components/ProductCard';
function Home() {
    const [products, setProducts] = useState({
        loading:false,
        data:null,
        error:false
    })
    let content = null
    
    const url = `https://api.github.com/users`;
    useEffect(() => {
        setProducts({
            loading:true,
            data:null,
            error:false
        })
        axios.get(url)
        .then(response =>{
            setProducts({
                loading:false,
                data:response.data,
                error:false
            })
        })
        .catch(error =>{
            setProducts({
                loading:false,
                data:null,
                error:true
            })
        })
         
    },[url])

    if(products.error){
        content =   <div style={{textAlign:'center'}}>
                        <h3>USERS NOT FOUND</h3>
                    </div>
    }

    if(products.loading){
        content =
            <div style={{textAlign:'center'}}>
            <h3>......loading</h3>
            </div>
    }
    

    if(products.data){
         content =  
         products.data.map((product)=>
            <div key={product.id} className="parentCard">
               <ProductCard 
               product = {product}
               />
            </div>
         )
            
    }
    return (
       
        <div style={{textAlign:'center'}}>
            <h1>Selection List</h1>
             {content}
        </div>
    )
}

export default Home
