import CartItem from "./CartItem";
import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
class App extends React.Component {
  
   constructor(){
        super()
        this.state ={
            products:[
                {
                    price:929,
                    title:'Apple watch',
                    qty:1,
                    img:'https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
                    id:1
                },
                {
                    price:224,
                    title:'Noise watch',
                    qty:1,
                    img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
                    id:2
                },
                {
                    price:124,
                    title:'Casio watch',
                    qty:1,
                    img:'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=788&q=80',
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
    getCartCount=()=> {
      const{products} = this.state

      let count = 0
      products.forEach((product )=> {
        count += product.qty;


        
      });
      return count
    }
    getCartTotal=()=>{
      const {products} = this.state
      let cartTotal = 0
      products.map((product)=>{
        cartTotal = cartTotal + product.qty * product.price

      })
      return cartTotal

    }
  
  render(){
    const {products} = this.state
  
  return (
    <div className="App">
      <Navbar count={this.getCartCount()} />
      
      <Cart
      products = {products}
      onIncreaseQuantity = {this.handleIncreaseQuantity}
      onDecreaseQuantity = {this.handleDeceraseQuantity}
      onDeleteProduct = {this.handleDeleteProduct}
      
      
      
      
      />
      <div style={{fontSize:20, padding:10}}>TOTAL : {this.getCartTotal()}</div>

     
    </div>
  );
  }
}

export default App;
