import { useState } from "react";

import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Cart from "./components/cart/Cart";

import "./App.css";

const rawData = [
    {
        id: "1a",
        title: "Sushi",
        tagline: "Finest fish with veggies",
        price: 22.99,
    },
    {
        id: "2a",
        title: "Schnitzel",
        tagline: "A german specialty!",
        price: 16.5,
    },
    {
        id: "3a",
        title: "Barbecue Burger",
        tagline: "American,raw,meaty",
        price: 12.99,
    },
    {
        id: "4a",
        title: "Green Bowl",
        tagline: "Healthy ...and green ...",
        price: 18.99,
    },
];

function App() {
    const [menuData, setMenuData] = useState(rawData);
    const [cartItems, setCartItems] = useState([]);
    const [cartOpen,setCartOpen] = useState(false);

    const toggleCartOpen = ()=>{
        setCartOpen(!cartOpen)
    }

    const handleAddToCart = (item) => {
        if (cartItems.filter((val) => val.id === item.id).length > 0) return;
        setCartItems((prev) => [...prev, item]);
    };

    const incrementCart = (id) => {
        setCartItems((prev) =>
            prev.map((val) =>
                val.id === id
                    ? Object.assign({}, val, { count: val.count + 1 })
                    : val
            )
        );
    };

    const decrementCart = (id) => {
        setCartItems((prev) =>
            prev.map((val) =>
                val.id === id
                    ? Object.assign({}, val, { count: val.count ? val.count-1: 0 })
                    : val
            )
        );
    };

    return (
        <div className="App">
            <Header cartData={cartItems} onCartOpen={toggleCartOpen}/>
            <Menu items={menuData} onAdd={handleAddToCart} />
            <Cart
                cartData={cartItems}
                onInc={incrementCart}
                onDec={decrementCart}
                isOpen={cartOpen}
                onClose={toggleCartOpen}
            />
        </div>
    );
}

export default App;
