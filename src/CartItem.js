import React from "react";

class CartItem extends React.Component{
    
    // testing(){
    //     const promise = new Promise((resolove,reject)=>{
    //         setTimeout(()=>{
    //             resolove('done')
    //         },3000)
    //     })

    //     promise.then(()=>{
    //         //set state acts like sync call
    //         this.setState({qty:100})
    //         console.log('state',this.setState)
    //     })
    // }



    increaseQuantity=()=>{
        // console.log('this.state',this.state)
        // setState form 1
        // this.setState({
        //     qty: this.state.qty +1
        // })

        //setstate form 2 - if previous state required use this

        this.setState((prevState)=>{
            return{
                qty:prevState.qty+1
            }
        })
    }
    decreaseQuantity=()=>{
        const {qty} = this.state

        if(qty==0){
            return;
        }
        this.setState((prevState)=>{
            return{
                qty:prevState.qty -1 
            }
        })
        
    }
    render(){
        console.log('this.props',this.props)
        const {price,title,qty} = this.props.product
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
                         onClick={this.decreaseQuantity}
                         />
                        <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                        onClick={this.increaseQuantity}
                        />
                        <img alt="delete" 
                        className="action-icons" 
                        src="	https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
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