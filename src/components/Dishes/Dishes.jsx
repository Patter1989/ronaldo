import css from './Dishes.module.css'
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import dish3 from "../../assets/dishes/dish3.jpeg?w=400&format=webp&as=src";
import dish6 from "../../assets/dishes/dish6.jpeg?w=400&format=webp&as=src";
import dish4 from "../../assets/dishes/dish4.jpeg?w=400&format=webp&as=src";
import dish5 from "../../assets/dishes/dish5.jpeg?w=400&format=webp&as=src";
// import foodItems from "../../data/foodData.json";



const Dishes = () => {
	return (
		<div className={css.container}>
			<h1 className={css.title}>Unsere Spezialitäten</h1>
			<div className={css.collage}>
				<div className={css.column}>
					<img
						src={dish3}
						alt='Image 1'
						className={css.img}
					/>
					<img
						src={dish6}
						alt='Image 2'
						className={css.img}
					/>
				</div>
				<div className={css.column}>
					<img
						src={dish4}
						alt='Image 3'
						className={css.img}
					/>
					<img
						src={dish5}
						alt='Image 4'
						className={css.img}
					/>
				</div>
			</div>
		</div>
		// <div className={css.container}>
		// 	<h2 className={css.title}>Unsere Spezialitäten</h2>
		// 	<Swiper
		// 		modules={[Navigation, Pagination, Autoplay]}
		// 		spaceBetween={20}
		// 		slidesPerView={1}
		// 		loop={true}
		// 		autoplay={{ delay: 5000 }}
		// 		// navigation
		// 		pagination={{ clickable: true }}
		// 		breakpoints={{
		// 			769: {
		// 				slidesPerView: 2,
		// 			},
		// 			1025: {
		// 				slidesPerView: 3,
		// 			},
		// 			1440: {
		// 				slidesPerView: 4,
		// 			},
		// 		}}
		// 	>
		// 		{foodItems.map((food) => (
		// 			<SwiperSlide
		// 				key={food.id}
		// 				className={css.slide}
		// 			>
		// 				<img
		// 					src={food.image}
		// 					alt={food.title}
		// 					className={css.image}
		// 				/>
		// 			</SwiperSlide>
		// 		))}
		// 	</Swiper>
		// </div>
	);
};



export default Dishes
