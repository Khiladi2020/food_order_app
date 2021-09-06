import CartButton from "../cart/CartButton";
import styles from "./Header.module.css";

import mealImg from '../../assets/meals.jpg'

const Header = ({ cartData, onCartOpen }) => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.contents}>
					<span className={styles.title}>ReactMeals</span>
					<CartButton count={cartData.length} onClick={onCartOpen} />
				</div>
			</header>
			<div className={styles['main-image']}>
				<img src={mealImg} alt="Meal Image" />
			</div>
		</>
	);
};

export default Header;
