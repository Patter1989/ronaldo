import MapWidget from "../../components/Map/Map";
import css from "./KontaktPage.module.css"
import { AiFillPhone } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

function KontaktPage() {

	return (
		<section className={css.KontaktPageWrapper}>
			<div className={css.KontaktWrapper}>
				<address>
					<ul className={css.addressList}>
						<li className={css.addressItem}>
							<AiFillPhone className={css.pic} />
							<a
								className={css.addressLink}
								href='tel: 06181 504 552 0'
							>
								+4961815045520
							</a>
						</li>
						<li className={css.addressItem}>
							<MdMail className={css.pic} />
							<a
								className={css.addressLink}
								href='mailto: info-@mail.com'
							>
								info-@mail.com
							</a>
						</li>
						<li className={css.addressItem}>
							<MdLocationPin className={css.pic} />
							<a
								className={css.addressLink}
								href='https://www.google.com/maps/place/BudderBrood+Hanau/@50.1332,8.9163264,340m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47bd17157cb0f17b:0x59b30e28099e1a2e!8m2!3d50.1332!4d8.91741!16s%2Fg%2F11y3r45wg5?hl=de&entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D'
								target='_blank'
								rel='noopener noreferrer'
							>
								Am Markt 14-18, 63450 Hanau.
							</a>
						</li>
					</ul>
				</address>
			</div>
			<MapWidget />
		</section>
	);
}

export default KontaktPage
