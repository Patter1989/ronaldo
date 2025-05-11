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
		<div className={css.navSectionWrapper}>
			<Address />
			<section className={css.navSection}>
				<a
					href='https://www.google.com'
					// href='https://www.google.com/maps/reserve/v/dine/c/2MG5UIDkuIo?source=pa&opi=79508299&hl=de-DE&gei=EqyPZ93eLMmJ7NYP75fH2Qo&sourceurl=http%3A%2F%2Fwww.google.com%2Fservice%2FMapsPlaceService%2FGetPlace%3Fhl%3Dde%26authuser%3D0%26gl%3Dde%26q%3DBudderBrood%2BHanau&ihs=1'
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
						Startseite
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
					{/* <NavLink
						to='/info'
						className={buildLinkClass}
					>
						Katering
					</NavLink> */}
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
					href='https://www.google.com/menu.pdf'
					target='_blank'
					rel='noopener noreferrer'
					className={css.navButton}
					onClick={onCloseModal}
				>
					Menu
				</a>
			</section>
		</div>
	);
}

export default Navigation
