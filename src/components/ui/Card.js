import styles from "./Card.module.css";

const Card = ({ children, className: new_class }) => {
	return (
		<div className={[styles.card, new_class ? new_class : ""].join(" ")}>
			{children}
		</div>
	);
};

export default Card;
