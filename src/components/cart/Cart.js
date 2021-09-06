import CartItem from "./CartItem";
import Modal from "../ui/Modal";
import Card from "../ui/Card";
import Button from "../ui/Button";

import styles from "./Cart.module.css";

const Cart = ({ cartData, onInc, onDec, isOpen, onClose: closeCart }) => {
	let totalPrice = cartData
		.reduce((total, val) => total + val.price * val.count, 0)
		.toFixed(2);

	const handleOrder = () => {
		console.log("Ordering..");
		console.log("Total Price:", totalPrice);
	};

	return (
		<Modal visible={isOpen}>
			<Card>
				{cartData.map((val) => (
					<CartItem
						key={val.id}
						id={val.id}
						title={val.title}
						price={val.price}
						count={val.count}
						onAdd={onInc}
						onRemove={onDec}
					/>
				))}
				<div className={styles.total}>
					<span>Total Amount</span>
					<span>$ {totalPrice}</span>
				</div>
				<div className={styles.actions}>
					<Button title="Cancel" onClick={closeCart} outline />
					<Button
						title="Order"
						disabled={Math.ceil(totalPrice) === 0}
						onClick={handleOrder}
					/>
				</div>
			</Card>
		</Modal>
	);
};

export default Cart;
