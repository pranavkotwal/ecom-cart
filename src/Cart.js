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
        

    }

    handleIncreaseQuantity=(product)=>{
        console.log('Hey Please increase the quantity of ',product)
        const {products} = this.state
        const index = products.indexOf(product)

        products[index].qty += 1 
        this.setState({
            products: products
        })
    }
    handleDeceraseQuantity=(product)=>{
        // console.log('Hey Please increase the quantity of ',product)
        const {products} = this.state
        const index = products.indexOf(product)

        if(products[index].qty == 1){
            return;
        }
        products[index].qty -= 1
           this.setState({
            products: products
        })
              
    }

    handleDeleteProduct = (id) =>{
        const {products} = this.state;
        const items = products.filter((item)=> item.id !== id)
        this.setState({
            products:items
        })
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
                onIncreaseQuantity = {this.handleIncreaseQuantity}
                onDecreaseQuantity = {this.handleDeceraseQuantity}
                onDeleteProduct = {this.handleDeleteProduct}
                />
                )
               })}

            </div>
        )
    }
}

export default Cart;