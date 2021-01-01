import React,{useState, useEffect} from 'react'
import  axios  from "axios";
import { useParams } from 'react-router-dom';

function Product() {
    
    const [product, setProduct] = useState({
        loading:false,
        data:null,
        error:false
    })
    const { id } = useParams()
    const url = `https://api.github.com/users/${id}`;
    useEffect(() => {
        setProduct({
            loading:true,
            data:null,
            error:false
        })
        axios.get(url)
        .then(response =>{
            setProduct({
                loading:false,
                data:response.data,
                error:false
            })
        })
        .catch(error =>{
            setProduct({
                loading:false,
                data:null,
                error:true
            })
        })
         
    },[url])

    if(product.error){
        return(
            <div style={{textAlign:'center'}}>
                <h3>USER NOT FOUND</h3>
            </div>
        )
    }

    if(product.loading){
        return(
            <div style={{textAlign:'center'}}>
            <h3>......loading</h3>
            </div>
        )
    }
    

    if(product.data){
        return (
            <>
            <div style={{textAlign:'center'}}>
                <h1>{product.data.name}</h1>
            </div>
            <div style={{textAlign:'center'}}>
                <img width="80%" height="80%" src={product.data.avatar_url} alt={product.data.name}/>
            </div>
            </>
        )
    }

    return (
        <div>

        </div>
    )
   
   
}

export default Product
