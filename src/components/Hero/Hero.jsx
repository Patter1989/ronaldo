import css from "./Hero.module.css";

// Імпорт оптимізованих зображень (розмір + формат webp)
import heroImg from "../../assets/haupt-hero.jpeg?w=1000&format=webp&as=src";
import logoLange from "../../assets/logo-lange.jpeg?w=400&format=webp&as=src";
import logoGoris from "../../assets/logo_goris.jpeg?w=400&format=webp&as=src";
import breakfastImg from "../../assets/Frühstück_Hero.jpg?w=1000&format=webp&as=src";

const Hero = () => {
	return (
		<section className={css.heroSectionWrapper}>
			<div className={css.leftSectionWrapper}>
				<img
					className={css.heroImg}
					src={heroImg}
					alt='Helles Café mit modernen Holztischen und gemütlichen Stühlen, großen Fenstern, die einen Blick auf den Stadtplatz bieten, und einem farbenfrohen Hundegemälde an der Wand.'
					loading='lazy'
				/>
				<div className={css.titleWrapper}>
					<img
						className={css.logoImg}
						src={logoLange}
						alt='logo'
						loading='lazy'
					/>
				</div>
			</div>

			<div className={css.leftSectionWrapperGor}>
				<img
					className={css.logoImg}
					src={logoGoris}
					alt='logo'
					loading='lazy'
				/>
				<img
					className={css.heroImgGor}
					src={heroImg}
					alt='Helles Café mit modernen Holztischen und gemütlichen Stühlen, großen Fenstern, die einen Blick auf den Stadtplatz bieten, und einem farbenfrohen Hundegemälde an der Wand.'
					
				/>
			</div>

			<div className={css.breakfast}>
				<div className={css.breakfastFotoWrapper}>
					<img
						className={css.breakfastFoto}
						src={breakfastImg}
						alt='Frühstückstisch mit einer Auswahl an frischen Speisen, darunter Obst, Gemüse, Eier, Aufschnitt und Säfte, stilvoll serviert auf einer Etagere in einem gemütlichen Café.'
						loading='lazy'
					/>
				</div>
				<div className={css.breakfastTitleWrapper}>
					<p className={css.breakfastTitle}>
						Guter Kaffee – ein wichtiger Bestandteil bei BudderBrood. Ein guter
						Start in den Tag beginnt mit einer Tasse Kaffee. Unsere Bohnen
						stammen aus sorgfältig ausgewählten Anbaugebieten und werden nach
						unseren Vorgaben geröstet, um ein harmonisches Aroma zu entfalten.
						Ob Espresso oder Cappuccino – bei uns steht der Geschmack im
						Mittelpunkt.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
