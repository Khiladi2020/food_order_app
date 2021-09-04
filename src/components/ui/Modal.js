import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const Backdrop = () => <div className={styles.backdrop} />;

const Overlay = ({content}) => <div className={styles.overlay}>{content}</div>;

const Modal = ({ visible, children }) => {
	if (!visible) return null;

	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop />,
				document.getElementById("overlay-root")
			)}
			{ReactDOM.createPortal(
				<Overlay content={children}/>,
				document.getElementById("overlay-root")
			)}
		</>
	);
};

export default Modal;
