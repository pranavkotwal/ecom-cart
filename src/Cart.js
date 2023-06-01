import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    constructor(){
        super()
        this.state ={
            products:[
                {
                    price:929,
                    title:'Apple watch',
                    qty:1,
                    img:'',
                    id:1
                },
                {
                    price:224,
                    title:'Noise watch',
                    qty:1,
                    img:'',
                    id:2
                },
                {
                    price:124,
                    title:'Casio watch',
                    qty:1,
                    img:'',
                    id:3
                }
            ]
            

        }
        // this.increaseQuantity = this.increaseQuantity.bind(this)
        // this.testing()

    }
    render(){
        const {products} = this.state
        // const arr = [1,2,3,4,5]
        return (
            <div className="cart">
                
               {products.map((product)=>{
                return (
                <CartItem product={product} 
                key={product.id}
                func={()=> console.log('something')}
                jsx={<h1>Test</h1>}
                />
                )
               })}

            </div>
        )
    }
}

export default Cart;