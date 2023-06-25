import CartItem from "./CartItem";
import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';



class App extends React.Component {
  
   constructor(){
        super()
        this.state ={
            products:[],
            loading:true
        }
        // Get the Firestore instance
        this.db = firebase.firestore()
    }


     componentDidMount() {
    // const db = firebase.firestore(); // Get the Firestore instance
    // db.collection('products') // Pass the collection name directly as a string
    //   .get()
    //   .then((snapshot) => {
    //     // console.log(snapshot);
    //     snapshot.docs.map((doc)=>{
    //       console.log(doc.data())
    //     })
    //     const products = snapshot.docs.map((doc)=>{
    //       const data=doc.data()
    //       data['id'] = doc.id
    //       return data
    //     })
    //     this.setState({
    //       products:products,
    //       loading:false
    //     })
    //   });



    
    this.db.collection('products') // Pass the collection name directly as a string
    // .where('price','<',5100) 
    .orderBy('price')
    .onSnapshot((snapshot) => {
        // console.log(snapshot);
        snapshot.docs.map((doc)=>{
          console.log(doc.data())
        })
        const products = snapshot.docs.map((doc)=>{
          const data=doc.data()
          data['id'] = doc.id
          return data
        })
        this.setState({
          products:products,
          loading:false
        })
      })
  }


  

    handleIncreaseQuantity=(product)=>{
        console.log('Hey Please increase the quantity of ',product)
        const {products} = this.state
        const index = products.indexOf(product)

        // products[index].qty += 1 
        // this.setState({
        //     products: products
        // })
      const docRef = this.db.collection('products').doc(products[index].id)
      docRef.update({
        qty:products[index].qty + 1
      })
      .then(()=>{
        console.log('document Updated sucessfuly')
      }).catch((err)=>{
        console.log('Error',err)
      })

    }
    handleDeceraseQuantity=(product)=>{
        // console.log('Hey Please increase the quantity of ',product)
        const {products} = this.state
        const index = products.indexOf(product)

        if(products[index].qty == 1){
            return;
        }
        // products[index].qty -= 1
        //    this.setState({
        //     products: products
        // })
        const docRef = this.db.collection('products').doc(products[index].id)

        docRef.update({
          qty:products[index].qty-1
        })
        .then(()=>{
          console.log("document updated sucessfully")
        }).catch((err)=>{
          console.log('Error',err)
        })
              
    }

    handleDeleteProduct = (id) =>{
        const {products} = this.state;
        // const items = products.filter((item)=> item.id !== id)
        // this.setState({
        //     products:items
        // })

        const docRef = this.db.collection('products').doc(id)

        docRef.delete()
        .then(()=>{
          console.log('Deleted Sucessfully')
        }).catch((err)=>{
          console.log('Error',err)
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

    addProduct = ()=>{
      this.db
      .collection('products')
      .add({
        img:'',
        price:900,
        qty:3,
        title:'Washing Machine'
      })
      .then((docref)=>{
        console.log('Product has been added',docref)

      })
      .catch((err)=>{
        console.log('Error :',err)
      })
    }
  
  render(){
    const {products,loading} = this.state
  
  return (
    <div className="App">
      <Navbar count={this.getCartCount()} />
      {/* <button onClick={this.addProduct} style={{padding:10,fontSize:20}}>Add a Product</button> */}
      
      <Cart
      products = {products}
      onIncreaseQuantity = {this.handleIncreaseQuantity}
      onDecreaseQuantity = {this.handleDeceraseQuantity}
      onDeleteProduct = {this.handleDeleteProduct}
      
      
      
      
      />
      {loading && <h1>Loading Products...</h1>}
      <div style={{fontSize:20, padding:10}}>TOTAL : {this.getCartTotal()}</div>

     
    </div>
  );
  }
}

export default App;
