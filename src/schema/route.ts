import { LoadableComponent } from "react-loadable";
import { RouteProps } from "react-router";

export type IRoute = {
	component?: LoadableComponent;
} & RouteProps;
