import MapWidget from "../../components/Map/Map";
import css from "./KontaktPage.module.css"
import { AiFillPhone } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import logo from "../../assets/logo.jpeg?w=400&format=webp&as=src";


function KontaktPage() {

	return (
		<section className={css.KontaktPageWrapper}>
			<div className={css.Wrapper}>
				<div className={css.KontaktWrapper}>
					<h2 className={css.KontaktHeader}>GET IN TOUCH</h2>
					<ul className={css.kontaktList}>
						<li className={css.kontaktItem}>
							<AiFillPhone className={css.pic} />
							<a
								className={css.kontaktLink}
								href='tel: 06181 504 552 0'
							>
								+4961815045520
							</a>
						</li>
						<li className={css.kontaktItem}>
							<MdMail className={css.pic} />
							<a
								className={css.kontaktLink}
								href='mailto: renaldo.klimenko@budderbrood.de'
							>
								E-Mail schreiben
							</a>
						</li>
						<li className={css.kontaktItem}>
							<FaInstagram className={css.pic} />
							<a
								className={css.kontaktLink}
								href='https://www.instagram.com/budderbrood_hanau?igsh=czJuOGx3dTF2aHo='
								target='_blank'
								rel='noopener noreferrer'
							>
								budderbrood_hanau
							</a>
						</li>
						<li>
							<p className={css.text}>
								Keine Reservierungen Mittwochs & Samstags.
							</p>
						</li>
					</ul>
					<h2 className={css.KontaktHeader}>ADRESSE</h2>
					<div className={css.address}>
						<MdLocationPin className={css.pic} />
						<a
							className={css.addressLink}
							href='https://www.google.com/maps/place/BudderBrood+Hanau/@50.1332,8.9163264,340m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47bd17157cb0f17b:0x59b30e28099e1a2e!8m2!3d50.1332!4d8.91741!16s%2Fg%2F11y3r45wg5?hl=de&entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D'
							target='_blank'
							rel='noopener noreferrer'
						>
							Am Markt 14-18, 63450 Hanau.
						</a>
					</div>
					<h2 className={css.KontaktHeader}>ÖFFNUNGZEITEN</h2>
					<p className={css.text}>Mo-Sa 09:00–18:00</p>
					<p className={css.text}>So 10:00–18:00</p>
					<p className={css.text}>Frühstück täglich bis 15:00 Uhr 🍽️</p>
				</div>
				<div className={css.logoWrapper}>
					<img
						className={css.logoImg}
						src={logo}
						alt='Logo'
						width={360}
					/>
				</div>
			</div>
			<MapWidget />
		</section>
	);
}

export default KontaktPage
