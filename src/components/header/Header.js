import CartButton from '../cart/CartButton'
import styles from "./Header.module.css";

const Header = ({cartData,onCartOpen}) => {
	return (
		<header className={styles.header}>
			<div className={styles.contents}>
				<span className={styles.title}>ReactMeals</span>
				<CartButton count={cartData.length} onClick={onCartOpen}/>
			</div>
		</header>
	);
};

export default Header;
