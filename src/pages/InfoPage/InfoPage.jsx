import css from "./InfoPage.module.css"


const InfoPage = () => {
			return (
				<section className={css.wrapper}>
					<div className={css.infoTextWrapper}>
						<h1 className={css.infoHeader}>Willkommen bei Budderbrood</h1>
						<p className={css.infoText}>
							Starten Sie Ihren Tag mit einem Frühstück, das keine Wünsche
							offenlässt. Bei Budderbrood dreht sich alles um genussvolle
							Morgende und eine gemütliche Atmosphäre. Unser Fokus liegt auf
							hochwertigen Frühstücksvariationen, begleitet von aromatischen
							Kaffeespezialitäten, die mit Liebe und Sorgfalt zubereitet werden.
						</p>
					</div>
					<div className={css.imgWrapper}>
						<img
							className={css.img}
							src='/info_img.jpeg'
							alt='Bar'
						/>
					</div>
				</section>
			);
}

export default InfoPage
