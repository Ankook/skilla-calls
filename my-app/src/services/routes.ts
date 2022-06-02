import { CallsPage } from "../components/callsPage";
import { CALLS_PAGE, HOME_PAGE } from "./consts";

export const routes = [
  {
    path: HOME_PAGE,
    component: CallsPage,
    name: "Домашняя страница"
  },
  {
    path: CALLS_PAGE,
    component: CallsPage,
    name: "Звонки"
  }
]