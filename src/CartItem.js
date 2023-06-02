import React from "react";

class CartItem extends React.Component{
    render(){
        console.log('this.props',this.props)
        const {price,title,qty} = this.props.product
        const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct} = this.props
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>

                <div className="right-block">
                    <div style={ {fontSize:25}}>{title}</div>
                    <div style={ {color:"gray"}}>Rs {price}</div>
                    <div style={ {color:"gray"}}>Qty: {qty}</div>

                    <div className="cart-item-actions">
                        {/* Buttons */}
            
                        <img
                         alt="decrease"
                         className="action-icons" 
                         src="https://cdn-icons-png.flaticon.com/512/150/150508.png	"
                         onClick={()=>onDecreaseQuantity(product)}
                         />
                        <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                        onClick={()=> onIncreaseQuantity(product)}
                        />
                        <img alt="delete" 
                        className="action-icons" 
                        src="	https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                        onClick={()=>onDeleteProduct(product.id)}
                        />
                    </div>
                </div>

            </div>
        )
    }
}

const styles = {
    image:{
        height:130,
        width:130,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;