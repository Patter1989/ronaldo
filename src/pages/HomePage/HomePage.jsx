import Dishes from "../../components/Dishes/Dishes";
import Hero from "../../components/Hero/Hero";
import css from "./HomePage.module.css"

function HomePage() {

	return (
		<div className={css.HomePageWrapper}>
			<Hero />
			<Dishes/>
		</div>
	);
}

export default HomePage
