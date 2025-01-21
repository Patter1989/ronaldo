import css from "./InfoPage.module.css"


const InfoPage = () => {
			return (
				<section className={css.wrapper}>
					<div className={css.infoTextWrapper}>
						<h1 className={css.infoHeader}>
							Budderbrood - Ihr gemütliches Frühstücksrestaurant mit exquisitem
							Kaffee
						</h1>
						<p className={css.infoText}>
							Willkommen bei Budderbrood - dem Ort, an dem jeder Morgen mit
							Geschmack und Herzlichkeit beginnt. Unser Restaurant ist auf
							Frühstück spezialisiert und bietet Ihnen eine breite Auswahl an
							Köstlichkeiten: von klassischen Croissants und frisch gebackenem
							Brot bis hin zu reichhaltigen Käseplatten, feinem Lachs und
							frischer Avocado. Genießen Sie unsere exquisiten
							Kaffeespezialitäten, die aus den besten Bohnen zubereitet werden,
							oder wählen Sie aus unserem vielfältigen Angebot an Tees - von
							klassischem Darjeeling bis hin zu exotischem Moroccan Mint. Unser
							freundliches und aufmerksames Personal sorgt dafür, dass Sie sich
							bei uns rundum wohlfühlen. Für ein ganz besonderes Frühstück
							bieten wir Gruppen ab zwei Personen ein Glas Prosecco oder frisch
							gepressten Orangensaft gratis dazu. Besuchen Sie uns bei
							Budderbrood und erleben Sie den perfekten Start in den Tag mit
							kulinarischer Harmonie!
						</p>
					</div>
					<img
						className={css.img}
						src='/src/images/hero_Img.png'
						alt='Bar'
					/>
				</section>
			);
}

export default InfoPage
