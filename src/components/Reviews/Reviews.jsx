import { useEffect, useState } from "react";
import { fetchPlaceDetails } from "../../services/api.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import css from "./Reviews.module.css";

function Reviews() {
	const [placeDetails, setPlaceDetails] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getPlaceDetails = async () => {
			try {
				const data = await fetchPlaceDetails();
				setPlaceDetails(data);
			} catch (err) {
				setError(err.message);
			}
		};

		getPlaceDetails();
	}, []);

	if (error) {
		return <div className={css.error}>Error: {error}</div>;
	}

	if (!placeDetails) {
		return <div className={css.loading}>Loading...</div>;
	}

	return (
		<div className={css.container}>
			<h2 className={css.heading}>Bewertungen unserer Gäste</h2>
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={30}
				slidesPerView={1}
				navigation={false}
				pagination={{ clickable: true }}
				autoplay={false}
				className={css.swiper}
				breakpoints={{
					320: {
						slidesPerView: 1,
					},
					426: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 3,
					},
					1024: {
						slidesPerView: 5,
					},
				}}
			>
				{placeDetails.reviews.map((review, index) => (
					<SwiperSlide
						key={index}
						className={css.slide}
					>
						<div className={css.reviewItem}>
							{/* <img
								src={review.profile_photo_url}
								alt={`${review.author_name}'s profile`}
								className={css.profileImage}
							/> */}
							<p className={css.author}>
								<a
									href={review.author_url}
									target='_blank'
									rel='noopener noreferrer'
								>
									{review.author_name}
								</a>
							</p>
							<p className={css.text}>{review.text}</p>
							<p className={css.text}>Rating: {review.rating}</p>
							<p className={css.text}>
								Reviewed: {review.relative_time_description}
							</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default Reviews;
