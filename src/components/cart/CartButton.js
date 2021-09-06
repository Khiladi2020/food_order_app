import styles from './CartButton.module.css'

const CartButton = ({count,onClick:handleClick})=>{
	return (
		<button className={styles.button} onClick={handleClick}>
			<span>Your Cart</span>
			<span className={styles.badge}>{count}</span>
		</button>
	)
}

export default CartButton