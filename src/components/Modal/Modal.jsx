import { useEffect} from "react";
import css from "./Modal.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { AiFillPhone } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

const buildLinkClass = ({ isActive }) =>
  clsx(css.NavLink, isActive && css.linkActive);


const Modal = ({ isOpen, onCloseModal }) => {
	useEffect(() => {
		

		const handleKeydown = (event) => {
			if (event.code === "Escape") {
				onCloseModal();
			}
		};
		if (isOpen) {
			window.addEventListener("keydown", handleKeydown);
		}

		return () => {
			window.removeEventListener("keydown", handleKeydown);
		};
	}, [isOpen, onCloseModal]);

	const onHandleBackDropClick = (event) => {
		if (event.target === event.currentTarget) {
			onCloseModal();
		}
	};
	

	return (
		<div
			className={`${css.backdrop} ${isOpen ? css.show : ""}`}
			onClick={onHandleBackDropClick}
		>
			<div className={`${css.modal} ${isOpen ? css.show : ""}`}>
				<button
					type='button'
					className={css.closeBtn}
					onClick={onCloseModal}
					aria-label='Close button'
				>
					X
				</button>
				<a
					href='https://www.google.com/maps/reserve/v/dine/c/2MG5UIDkuIo?source=pa&opi=79508299&hl=de-DE&gei=EqyPZ93eLMmJ7NYP75fH2Qo&sourceurl=http%3A%2F%2Fwww.google.com%2Fservice%2FMapsPlaceService%2FGetPlace%3Fhl%3Dde%26authuser%3D0%26gl%3Dde%26q%3DBudderBrood%2BHanau&ihs=1'
					target='_blank'
					rel='noopener noreferrer'
					className={css.reservButton}
					onClick={onCloseModal}
				>
					Tisch reservieren
				</a>
				<nav className={css.nav}>
					<NavLink
						to='/'
						className={buildLinkClass}
						onClick={onCloseModal}
					>
						Startseite
					</NavLink>
					<NavLink
						to='/info'
						className={buildLinkClass}
						onClick={onCloseModal}
					>
						Über Uns
					</NavLink>
					<NavLink
						to='/kontakt'
						className={buildLinkClass}
						onClick={onCloseModal}
					>
						Kontakt
					</NavLink>
				</nav>
				<a
					href='https://cdn.website-editor.net/s/49ca788be87f4e0cb791a49f5e893395/files/uploaded/AW_Speisekarte_2024_V6.pdf?Expires=1738865516&Signature=odcYGVTcRFNzdxULZcWcZRl9eFdZMyAgIAwKjJYjNh8nQsJlA1G20GyAWl8ns~r0upBHwh96obJgRgGZqyXh7bPrJY6OfBNNFvmpqTyn5QmWSvmeY-BQqqVKXmVaW3CvK4Be8AFvEskv85kl~I5NRmyrUCxB1cQxIA3kK-jB4Zy9hLG~eiws8EruKvn7noRbxlZvMzY-UjiOMjixH5agbfJpJxIBrGF6o4zxDwgSuG9jieoeFp5z77ajRATPZeAKWFDAcT9k8QTuUyJru9qhpoXBfjg2dKWwGVJcUryaQvXP75sN5XKDF-l0xUQEIJft7jkiI2~OtzlHGhUtP4Y9~A__&Key-Pair-Id=K2NXBXLF010TJW'
					target='_blank'
					rel='noopener noreferrer'
					className={css.navButton}
					onClick={onCloseModal}
				>
					Menu
				</a>

				<address className={css.addressWrapper}>
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
								href='mailto: renaldo.klimenko@budderbrood.de'
								>
								E-Mail schreiben
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
								Am Markt 14-18, 63450 Hanau
							</a>
						</li>
					</ul>
				</address>
			</div>
		</div>
	);
};

export default Modal;
