import css from './Dishes.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import foodItems from "../../data/foodData.json";



const Dishes = () => {
  return (
		<div className={css.container}>
			<h2 className={css.title}>Unsere Spezialitäten</h2>
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={20}
				slidesPerView={1}
				loop={true}
				autoplay={{ delay: 5000 }}
				// navigation
				pagination={{ clickable: true }}
				breakpoints={{
					769: {
						slidesPerView: 2,
					},
				}}
			>
				{foodItems.map((food) => (
					<SwiperSlide
						key={food.id}
						className={css.slide}
					>
						<img
							src={food.image}
							alt={food.title}
							className={css.image}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};



export default Dishes
