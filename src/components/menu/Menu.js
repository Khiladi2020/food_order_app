import Card from "../ui/Card";
import MenuItem from "./MenuItem";
import MenuSummary from "./MenuSummary";

import styles from "./Menu.module.css";

const Menu = ({ items, onAdd: handleAdd }) => {
	return (
		<>
			<MenuSummary />
			<Card className={styles.menu_list}>
				{items.map((val) => (
					<MenuItem
						key={val.id}
						id={val.id}
						title={val.title}
						subtitle={val.tagline}
						price={val.price}
						count={val.count}
						onAdd={handleAdd}
					/>
				))}
			</Card>
		</>
	);
};

export default Menu;
