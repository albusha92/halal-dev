import Loadable from "react-loadable";
import { IRoute } from "../schema/route";
import Loader from "../uikit/loader/Loader";

const Home = Loadable({
  loader: () => import("../features/home-page/pages/HomePage"),
  loading: Loader,
});

const AboutUs = Loadable({
	loader: () => import("../features/about/pages/AboutUs"),
	loading: Loader,
  });
  
const routes: IRoute[] = [
  {
    component: Home,
    path: "/",
    exact: true,
  },
  {
    component: AboutUs,
    path: "/about-go-halal",
    exact: true,
  },
];

export default routes;
