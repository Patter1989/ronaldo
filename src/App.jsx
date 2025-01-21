import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense } from "react";
import { ProgressBar } from "react-loader-spinner";
import Layout from "./components/Layout/Layout";


const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
	import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReview = lazy(() => import("./components/MovieReviews/MovieReview"));


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
								path='/movies'
								element={<MoviesPage />}
							/>
							<Route
								path='/movies/:topRatedMovieId'
								element={<MovieDetailsPage />}
							>
								<Route
									path='cast'
									element={<MovieCast />}
								/>
								<Route
									path='reviews'
									element={<MovieReview />}
								/>
							</Route>
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
