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



	return (
		<LoadScript googleMapsApiKey='AIzaSyDcm03KBJH5Bj6pzN7_eIo-8nHvYN6ijXM'>
			<GoogleMap
				mapContainerStyle={mapContainerStyle}
				center={center}
				zoom={20}
			>
				<Marker position={center} />
			</GoogleMap>
		</LoadScript>
	);
}

export default MapWidget;
