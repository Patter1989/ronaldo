import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'
import clsx from 'clsx';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import Address from './Adress';


const buildLinkClass = ({ isActive }) =>
	clsx(css.NavLink, isActive && css.linkActive)

const Navigation = () => {
	const [modal, setModal] = useState(false);
	const onOpenModal = () => {
		setModal(true);
	};
	const onCloseModal = () => {
		setModal(false);
	};
	
  return (
		<div>
			<Address />
			<section className={css.navSection}>
				<a
					href='https://www.google.com/maps/reserve/v/dine/c/2MG5UIDkuIo?source=pa&opi=79508299&hl=de-DE&gei=EqyPZ93eLMmJ7NYP75fH2Qo&sourceurl=http%3A%2F%2Fwww.google.com%2Fservice%2FMapsPlaceService%2FGetPlace%3Fhl%3Dde%26authuser%3D0%26gl%3Dde%26q%3DBudderBrood%2BHanau&ihs=1'
					target='_blank'
					rel='noopener noreferrer'
					className={css.reservButton}
				>
					Tisch reservieren
				</a>
				<nav className={css.nav}>
					<NavLink
						to='/'
						className={buildLinkClass}
					>
						BudderBrood Hanau
					</NavLink>
					<NavLink
						to='/info'
						className={buildLinkClass}
					>
						Über Uns
					</NavLink>
					<NavLink
						to='/kontakt'
						className={buildLinkClass}
					>
						Kontakt
					</NavLink>
					<button
						type='button'
						className={css.burgerButton}
						onClick={onOpenModal}
						aria-label='Open menu'
					>
						☰
					</button>
					<Modal
						isOpen={modal}
						onCloseModal={onCloseModal}
					/>
				</nav>
				<a
					href='https://cdn.website-editor.net/s/49ca788be87f4e0cb791a49f5e893395/files/uploaded/AW_Speisekarte_2024_V6.pdf?Expires=1738865516&Signature=odcYGVTcRFNzdxULZcWcZRl9eFdZMyAgIAwKjJYjNh8nQsJlA1G20GyAWl8ns~r0upBHwh96obJgRgGZqyXh7bPrJY6OfBNNFvmpqTyn5QmWSvmeY-BQqqVKXmVaW3CvK4Be8AFvEskv85kl~I5NRmyrUCxB1cQxIA3kK-jB4Zy9hLG~eiws8EruKvn7noRbxlZvMzY-UjiOMjixH5agbfJpJxIBrGF6o4zxDwgSuG9jieoeFp5z77ajRATPZeAKWFDAcT9k8QTuUyJru9qhpoXBfjg2dKWwGVJcUryaQvXP75sN5XKDF-l0xUQEIJft7jkiI2~OtzlHGhUtP4Y9~A__&Key-Pair-Id=K2NXBXLF010TJW'
					target='_blank'
					rel='noopener noreferrer'
					className={css.navButton}
				>
					Menu
				</a>
			</section>
		</div>
	);
}

export default Navigation
