import { useState } from "react";

import Button from "../ui/Button";

import styles from "./MenuItem.module.css";

const MenuItem = ({ id, title, subtitle, price, count, onAdd }) => {
	const [amount, setAmount] = useState(0);

	const handleAdd = () => {
		if(!amount) return;
		onAdd({id,title,subtitle,price,count: +amount });
	};

	const updateAmount = (e) => {
		setAmount(e.target.value);
	};

	return (
		<div className={styles.menuItem}>
			<div className={styles.details}>
				<span className={styles.title}>{title}</span>
				<span className={styles.subtitle}>{subtitle}</span>
				<span className={styles.price}>$ {price}</span>
			</div>
			<div className={styles.actions}>
				<div>
					<label htmlFor="amount">Amount: </label>
					<input
						className={styles.amount_inp}
						type="number"
						id="amount"
						value={amount}
						onChange={updateAmount}
					/>
				</div>
				<Button title="Add" onClick={handleAdd} />
			</div>
		</div>
	);
};

export default MenuItem;
