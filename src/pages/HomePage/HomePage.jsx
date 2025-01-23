import css from "./HomePage.module.css"

function HomePage() {

	return (
		<section className={css.HomePageWrapper}>
			<div className={css.heroSectionWrapper}>
				<img
					className={css.heroImg}
					src='/hero_Img.png'
					alt='Bar'
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
						alt='Französisches Frühstück'
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
