import css from './Adress.module.css'
import { AiFillPhone } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo.jpeg?w=400&format=webp&as=src";


const Address = () => {
  return (
		<section className={css.addressSection}>
			<NavLink to='/'>
				<img
					className={css.logoImg}
					src={logo}
					alt='logo'
					width='25'
				/>
			</NavLink>
			<address>
				<ul className={css.addressList}>
					<li className={css.addressItem}>
						<AiFillPhone className={css.pic} />
						<a
							className={css.addressLink}
							href='tel: 05000 500 5000 0'
							// href='tel: 06181 504 552 0'
						>
							+495000 500 5000 0{/* +4961815045520 */}
						</a>
					</li>
					<li className={css.addressItem}>
						<MdMail className={css.pic} />
						<a
							className={css.addressLink}
							// href='mailto: renaldo.klimenko@budderbrood.de'
							href='mailto: @budderbrood.de'
						>
							E-Mail schreiben
						</a>
					</li>
					<li className={css.addressItem}>
						<MdLocationPin className={css.pic} />
						<a
							className={css.addressLink}
							href='https://www.google.com/maps/'
							// href='https://www.google.com/maps/place/BudderBrood+Hanau/@50.1332,8.9163264,340m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47bd17157cb0f17b:0x59b30e28099e1a2e!8m2!3d50.1332!4d8.91741!16s%2Fg%2F11y3r45wg5?hl=de&entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D'
							target='_blank'
							rel='noopener noreferrer'
						>
							BudderBrood
							{/* Am Markt 14-18, 63450 Hanau. */}
						</a>
					</li>
				</ul>
				<ul className={css.socList}>
					<li className={css.socItem}>
						<a
							className={css.socLink}
							// href='https://www.instagram.com/budderbrood_hanau?igsh=czJuOGx3dTF2aHo='
							href='https://www.instagram.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaInstagram className={css.socIcon} />
						</a>
					</li>
					<li>
						<a
							className={css.socLink}
							href='tel: 05000 500 5000 0'
						>
							<BiSolidPhoneCall className={css.socIcon} />
						</a>
					</li>
				</ul>
			</address>
		</section>
	);
}

export default Address
