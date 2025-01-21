import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense } from "react";
import { ProgressBar } from "react-loader-spinner";
import Layout from "./components/Layout/Layout";



const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const InfoPage = lazy(() => import("./pages/InfoPage/InfoPage"));
const KontaktPage = lazy(() => import("./pages/KontaktPage/KontaktPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const App = () => {
	
	return (
		<div>
			<Toaster
				position='top-center'
				containerStyle={{
					top: 40,
					left: 20,
					bottom: 20,
					right: 20,
				}}
				toastOptions={{
					style: {
						color: "red",
						backgroundColor: "rgb(119, 118, 118)",
					},
				}}
			/>
			<Suspense fallback={<ProgressBar />}>
				<Routes>
					<Route
						path='/'
						element={<Layout />}
					>
						<Route
							index
							element={<HomePage />}
						/>
						<Route
							path='/info'
							element={<InfoPage />}
						/>
						<Route
							path='/kontakt'
							element={<KontaktPage/>}
						/>
						<Route
							path='*'
							element={<NotFoundPage />}
						/>
					</Route>
				</Routes>
			</Suspense>
		</div>
	);
}

export default App
