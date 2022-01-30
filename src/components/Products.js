import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../App";

const Products = props => {

    const context = useContext(BooksContext);

    const totalCartCount = context.state.cart.reduce( (total,book) => (total = total + book.count), 0);

    return (
        <div>
            <h2>
                <span>Book List</span>
                <Link to="/cart" >My Cart ({totalCartCount})</Link>
            </h2>
            {context.state.bookList.map(book => (
                <div key={book.id} className="book">
                    <img
                        src={book.image}
                        alt={book.name} />
                    <div className="books">
                        <h4>{book.name}</h4>
                        <p>Author: {book.author}</p>
                        <p>Price: &#8378; {book.price}</p>
                        <button 
                        onClick={() => context.addToCart(book)}
                        className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;