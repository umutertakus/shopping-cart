import react, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../App";

const Cart = () => {

    const context = useContext(BooksContext)

    const totalCartAmount = context.state.cart.reduce( (total,book) => total = total + (book.price * book.count ), 0 );

    const totalCartCount = context.state.cart.reduce( (total,book) => (total = total + book.count), 0);

    return (
        <div>
            <h2>
                <Link to="/" >Book List</Link>
                <span>My Cart ({totalCartCount})</span>
            </h2>

            <h3>Total Cart Amount: &#8378; {totalCartAmount}</h3>

            {context.state.cart.map(book => <div key={book.id} className="book">
                <img
                    src={book.image}
                    alt={book.name} />
                <div className="books">
                    <h4>{book.name}</h4>
                    <p>Author: {book.author}</p>
                    <p>Price: &#8378; {book.price}</p>
                    <p>Total Amount: &#8378; {book.price * book.count}</p>
                    <p>There are {book.count} book(s) on your cart.</p>
                    <button onClick={() => context.increase(book.id)} className="btn btn-outline-success">Increase</button>
                    <button onClick={() => context.removeFromCart(book.id)} className="btn btn-outline-primary">Remove From Cart</button>
                    <button onClick={() => context.decrease(book.id)} className="btn btn-outline-danger">Decrease</button>
                </div>
            </div>)}
        </div>
    );
};

export default Cart;