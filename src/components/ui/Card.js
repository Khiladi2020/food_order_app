import styles from "./Card.module.css";

const Card = ({ children, dark,center, className: new_class }) => {
	return (
		<div
			className={[
				styles.card,
				new_class ? new_class : "",
				dark ? styles.dark : "",
				center ? styles.center:""
			].join(" ")}
		>
			{children}
		</div>
	);
};

export default Card;
