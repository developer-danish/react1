import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard(props) {
    return (
        <div className="card">
            <Link to={`/product/${props.product.id}`}>
            <div style={{textAlign:'center'}}>
                <img width="100%" height="50%" src={props.product.avatar_url} alt={props.product.name}/>
            </div>
            </Link>
        </div>
    )
}

export default ProductCard
