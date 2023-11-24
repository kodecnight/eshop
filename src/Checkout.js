import React from 'react'
import Header from './Header';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import './Checkout.css';

function Checkout() {
  return (
    <div className='checkout__root'>
        <Header/>
        <div className='checkout'>
            <div className='checkout__left'>
                <img src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' style={{width:'100%', height:'100px'}}  alt='' className='checkout__ad' />
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    <CheckoutProduct 
                        id="12321341"
                        title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)"
                        price={11.96}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                    />
                    <CheckoutProduct
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                </div>
            </div>

            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    </div>
  )
}

export default Checkout