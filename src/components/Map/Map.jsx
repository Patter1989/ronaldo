import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function MapWidget() {
	const mapContainerStyle = {
		width: "100%",
		height: "400px",
	};

	const center = {
		lat: 50.13320015792827,
		lng: 8.917409370536443,
	};

	const mapOptions = {
		disableDefaultUI: true,
		zoomControl: true,
		styles: [
			{
				featureType: "poi",
				elementType: "labels",
				// stylers: [{ visibility: "off" }],
			},
		],
	};

	return (
		<LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
			<GoogleMap
				mapContainerStyle={mapContainerStyle}
				center={center}
				zoom={20}
				options={mapOptions}
			>
				<Marker position={center} />
			</GoogleMap>
		</LoadScript>
	);
}

export default MapWidget;
