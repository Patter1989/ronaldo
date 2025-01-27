import css from "./HomePage.module.css"

function HomePage() {

	return (
		<section className={css.HomePageWrapper}>
			<div className={css.heroSectionWrapper}>
				<img
					className={css.heroImg}
					src='/sall_vormittag.jpeg'
					alt='Helles Café mit modernen Holztischen und gemütlichen Stühlen, großen Fenstern, die einen Blick auf den Stadtplatz bieten, und einem farbenfrohen Hundegemälde an der Wand.'
				/>
				<div className={css.titleWrapper}>
					<img
						className={css.logoImg}
						src='/logo-lange.jpeg'
						alt='logo'
					/>
					{/* <p className={css.titleText}>PERFEKTE FRÜHSTÜCK</p> */}
				</div>
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
						Wir legen Wert auf natürliche und regionale Produkte, denn guter
						Geschmack beginnt bei der Qualität. Jedes Brot, jeder Belag und jede
						Zutat erzählt bei uns eine Geschichte der Frische und Sorgfalt.
					</p>
				</div>
			</div>
		</section>
	);
}

export default HomePage
