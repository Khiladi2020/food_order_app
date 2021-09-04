import styles from "./Button.module.css";

const Button = ({
	title,
	outline,
	square,
	disabled: isdisabled = false,
	onClick: handleClick,
}) => {
	return (
		<button
			className={[
				styles.btn,
				outline ? styles.outline : "",
				square ? styles.square : "",
				isdisabled ? styles.disabled : "",
			].join(" ")}
			onClick={handleClick}
			disabled={isdisabled}
		>
			{title}
		</button>
	);
};

export default Button;
