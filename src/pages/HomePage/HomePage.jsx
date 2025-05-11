import Dishes from "../../components/Dishes/Dishes";
import Hero from "../../components/Hero/Hero";
import css from "./HomePage.module.css"

function HomePage() {

	return (
		<div className={css.HomePageWrapper}>
			<Hero />
			<Dishes />
			<a
				href='https://www.google.com/menu.pdf'
				target='_blank'
				rel='noopener noreferrer'
				className={css.navButton}
			>
				Menu
			</a>
		</div>
	);
}

export default HomePage
