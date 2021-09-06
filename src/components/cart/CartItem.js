import Button from '../ui/Button'

import styles from './CartItem.module.css'

const CartItem = ({id,title,price,count,onAdd,onRemove})=>{

	const handleIncrement = ()=>{
		onAdd(id)
	}

	const handleDecrement = ()=>{
		onRemove(id)
	}

	return(
		<div className={styles.cartItem}>
			<div className={styles.details}>
				<span className={styles.title}>{title}</span>
				<div>
					<span className={styles.price}>$ {price}</span>
					<span className={styles.count}>x {count}</span>
				</div>
			</div>
			<div className={styles.actions}>
				<Button title="+" onClick={handleIncrement} outline square />
				<Button title="-" onClick={handleDecrement} outline square />
			</div>
		</div>
	)
}

export default CartItem