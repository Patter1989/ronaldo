import MapReviews from "../../components/Reviews/Reviews";
import css from "./InfoPage.module.css"


const InfoPage = () => {
			return (
				<section className={css.sectionWrapper}>
					<div className={css.wrapper}>
						<div className={css.infoTextWrapper}>
							<h1 className={css.infoHeader}>Willkommen bei Budderbrood</h1>
							<p className={css.infoText}>
								Willkommen bei BudderBrood – Ihrem Café für guten Geschmack!
								Starten Sie den Tag in unserem modernen, gemütlichen Ambiente
								mit einer Tasse Kaffee und einem Frühstück, das auf hochwertige,
								natürliche Zutaten setzt. Ob frische Stullen, kreative Focaccias
								oder abwechslungsreiche Frühstücksvariationen – bei uns treffen
								Genuss und Qualität aufeinander.
							</p>
						</div>
						<div className={css.imgWrapper}>
							<img
								className={css.img}
								src='/vordembartisch.jpeg'
								alt='Gemütlicher Tisch mit modernen grauen Stühlen vor einer Bar mit Kaffeemaschine, Spirituosenregal und dekorativer Beleuchtung'
							/>
						</div>
					</div>
					<div className={css.wrapper}>
						<div className={css.infoTextWrapper}>
							<h1 className={css.infoHeader}>
								&quot;BudderBrood&quot; – mehr als ein Café
							</h1>
							<p className={css.infoText}>
								Unser modernes Ambiente lädt dazu ein, den Alltag hinter sich zu
								lassen, ob bei einem schnellen Frühstück oder einem entspannten
								Moment mit einer Tasse Kaffee. Mit frischen Zutaten und viel
								Liebe zum Detail möchten wir jeden Besuch zu einem besonderen
								Erlebnis machen.
							</p>
						</div>
						<div className={css.imgWrapper}>
							<img
								className={css.img}
								src='/Tisches_vormittag.jpeg'
								alt='Reihe von Tischen mit modernen Stühlen in einem Café mit großen Fenstern, durch die man auf den Stadtplatz blickt'
							/>
						</div>
					</div>
					<div className={css.wrapper}>
						<div className={css.infoTextWrapper}>
							<h1 className={css.infoHeader}>Unsere Vision</h1>
							<p className={css.infoText}>
								Wir möchten ein Ort sein, an dem hochwertige Speisen und
								Getränke in einer entspannten Atmosphäre genossen werden können.
								Dabei setzen wir auf natürliche Produkte von vertrauenswürdigen
								Partnern und schaffen eine Umgebung, in die man gerne
								zurückkehrt – für ein genussvolles Frühstück, eine herzhafte
								Stulle oder einfach eine gute Tasse Kaffee.
							</p>
						</div>
						<div className={css.imgWrapper}>
							<img
								className={css.img}
								src='/sall.jpeg'
								alt='Gemütliche Sitzecke in einem Café mit Holztischen und modernen Stühlen, dekoriert mit einem farbenfrohen Gemälde eines Hundes an der Wand'
							/>
						</div>
					</div>
					<MapReviews />
				</section>
			);
}

export default InfoPage
