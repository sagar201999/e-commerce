// import { PaymentElement , useStripe , useElements} from '@stripe/react-stripe-js'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'
import Checkout from './Checkout'


const Cart = ({ cartItems, removeFromCart }) => {

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.count, 0);
  const totalQuantity = cartItems.reduce((total_Order, item) => total_Order + item.count, 0);


  return (

    <>
      <div className="cart-container" style={{ marginTop: '5rem' }}>
        <h2 className='text-center'>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            <div className='d-flex flex-wrap justify-content-center'>
              <div>
                {cartItems.map((item) => (
                  <div key={item.productId} className="cart-item border">
                    <img src={item.image} alt={`Product ${item.productId}`} style={{ width: '80px' }} />
                    <p className='d-inline fs-5'>{item.title}</p>
                    <p className='d-inline fs-5'>₹{item.price}</p>
                    <p className='d-inline fs-5'>{item.count}</p>
                    <div>
                      <button className='btn btn-danger d-inline' onClick={() => removeFromCart(item.productId)}>Remove</button>
                    </div>

                  </div>
                ))}
              </div>

              <div className="cart-total border">
                <h4>Total Items: {cartItems.length}</h4>
                <h4>{totalQuantity}</h4>
                <h4>total : ₹ {totalPrice}</h4>
                <Checkout totalPrice={totalPrice}  />
              </div>

            </div>
            <hr />

          </div>
        )}
        <Link to="/">Back to Home</Link>
      </div>
    </>
  )

}

export default Cart;