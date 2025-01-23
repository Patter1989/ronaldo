import axios from "axios";

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export const fetchPlaceDetails = async () => {
	try {
		
		const url = `/api/maps/api/place/details/json?place_id=ChIJe_GwfBUXvUcRLhqeCSgOs1k&fields=name,rating,reviews&key=${GOOGLE_API_KEY}&timestamp=${new Date().getTime()}`;
				// const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJe_GwfBUXvUcRLhqeCSgOs1k&fields=name,rating,reviews&key=${GOOGLE_API_KEY}&timestamp=${new Date().getTime()}`;

		const response = await axios.get(url);
		console.log(response);
		// Перевіряємо статус відповіді
		if (response.data.status !== "OK") {
			throw new Error(`Error fetching place details: ${response.data.status}`);
		}

		// Повертаємо результат
		return response.data.result;
	} catch (error) {
		console.error("Error fetching place details:", error.message);
		throw error;
	}
};
