import MapReviews from "../../components/Reviews/Reviews";
import css from "./InfoPage.module.css"


const InfoPage = () => {
			return (
				<section className={css.sectionWrapper}>
					<div className={css.wrapper}>
						<div className={css.infoTextWrapper}>
							<h1 className={css.infoHeader}>Willkommen bei Budderbrood</h1>
							<p className={css.infoText}>
								Willkommen bei BudderBrood – Ihrem guten Café! Starten Sie den
								Tag in unserem modernen, charmanten Ambiente mit einem
								Frühstück, das auf hochwertige, regionale und natürliche
								Produkte setzt. Ob frische Stullen, kreative Focaccias oder
								abwechslungsreiche Frühstücksvariationen – bei uns trifft
								Geschmack auf Qualität.
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
								Erleben Sie ein modernes Ambiente, das zum Verweilen einlädt.
								Perfekt für eine Auszeit oder den Start in den Tag mit einem
								guten Frühstück.
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
								Das Vater-Sohn-Duo hinter BudderBrood hat eine klare Vision: Ein
								Ort zu sein, an dem Menschen zusammenkommen, um hochwertige,
								natürliche und regionale Speisen in einem modernen und
								charmanten Ambiente zu genießen. Wir möchten nicht nur leckeres
								Essen anbieten, sondern ein Gefühl von Gemeinschaft und
								Geborgenheit schaffen – ein Café, das man gerne besucht und
								immer wieder zurückkehrt.
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
