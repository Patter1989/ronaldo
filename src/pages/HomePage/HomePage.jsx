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
						Genießen Sie dieses liebevoll zusammengestellte Frühstück in unserem
						gemütlichen Ambiente. Perfekt für einen besonderen Morgen mit
						Freunden oder Familie. Lassen Sie sich von der Vielfalt inspirieren
						und starten Sie Ihren Tag mit Genuss! Reservieren Sie jetzt Ihren
						Tisch und erleben Sie unser „Budderbrood“-Frühstück!
					</p>
				</div>
			</div>
		</section>
	);
}

export default HomePage
