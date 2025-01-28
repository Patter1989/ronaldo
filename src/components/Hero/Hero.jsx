import css from "./Hero.module.css";

const Hero = () => {
  return (
		<section className={css.heroSectionWrapper}>
			<div className={css.leftSectionWrapper}>
				<img
					className={css.heroImg}
					src='/haupt-hero.jpeg'
					alt='Helles Café mit modernen Holztischen und gemütlichen Stühlen, großen Fenstern, die einen Blick auf den Stadtplatz bieten, und einem farbenfrohen Hundegemälde an der Wand.'
				/>
				<div className={css.titleWrapper}>
					<img
						className={css.logoImg}
						src='/logo-lange.jpeg'
						alt='logo'
					/>
				</div>
			</div>
			<div className={css.leftSectionWrapperGor}>
				<img
					className={css.logoImg}
					src='/logo_goris.jpeg'
					alt='logo'
				/>
				<img
					className={css.heroImgGor}
					src='/haupt-hero.jpeg'
					alt='Helles Café mit modernen Holztischen und gemütlichen Stühlen, großen Fenstern, die einen Blick auf den Stadtplatz bieten, und einem farbenfrohen Hundegemälde an der Wand.'
				/>
			</div>
			<div className={css.breakfast}>
				<div className={css.breakfastFotoWrapper}>
					<img
						className={css.breakfastFoto}
						src='/Frühstück_Hero.jpg'
						alt='Frühstückstisch mit einer Auswahl an frischen Speisen, darunter Obst, Gemüse, Eier, Aufschnitt und Säfte, stilvoll serviert auf einer Etagere in einem gemütlichen Café.'
					></img>
				</div>
				<div className={css.breakfastTitleWrapper}>
					<p className={css.breakfastTitle}>
						Guter Kaffee – ein wichtiger Bestandteil bei BudderBrood Ein guter
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
