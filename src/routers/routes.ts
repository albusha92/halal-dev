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

const MeetOurFounders = Loadable({
  loader: () => import("../features/meet-our-founders/pages/MeetOurFounder"),
  loading: Loader,
});

const Biography = Loadable({
  loader: () => import("../features/biography/pages/Biography"),
  loading: Loader,
});

const Term = Loadable({
  loader: () => import("../features/term/pages/Term"),
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
  {
    component: MeetOurFounders,
    path: "/meet-our-founders",
    exact: true,
  },
  {
    component: Biography,
    path: "/biography",
    exact: true,
  },
  {
    component: Term,
    path: "/term",
    exact: true,
  },
];

export default routes;
