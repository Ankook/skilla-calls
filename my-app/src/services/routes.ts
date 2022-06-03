
import { CallsPage } from "../components/callsPage";
import { ReactComponent as CallsIcon } from "../assets/Sidebar/calls.svg"
import { ReactComponent as CounterpartiesIcon} from "../assets/Sidebar/counterparties.svg"
import { ReactComponent as DocumentsIcon } from "../assets/Sidebar/documents.svg"
import { ReactComponent as KnowledgeBaseIcon } from "../assets/Sidebar/knowledgeBase.svg"
import { ReactComponent as MessagesIcon } from "../assets/Sidebar/messages.svg";
import { ReactComponent as OrdersIcon } from "../assets/Sidebar/orders.svg";
import { ReactComponent as PerfomersIcon } from "../assets/Sidebar/performers.svg";
import { ReactComponent as ReportsIcon } from "../assets/Sidebar/reports.svg";
import { ReactComponent as ResultsIcon } from "../assets/Sidebar/results.svg";
import { ReactComponent as SettingsIcon } from "../assets/Sidebar/settings.svg";


import {
  HOME_PAGE,
  RESULTS_PAGE,
  ORDERS_PAGE,
  MESSAGES_PAGE,
  COUNTERPARTIES_PAGE,
  DOCUMENTS_PAGE,
  PERFORMERS_PAGE,
  CALLS_PAGE,
  REPORTS_PAGE,
  SETTINGS_PAGE,
  KNOWLEDGE_BASE_PAGE
} from "./consts";


export const routes = [
  {
    path: HOME_PAGE,
    component: CallsPage,
    name: "Домашная страница",
  },
  {
    path: RESULTS_PAGE,
    component: CallsPage,
    name: "Итоги",
  },

  {
    path: ORDERS_PAGE,
    component: CallsPage,
    name: "Заказы",
  },
  {
    path: DOCUMENTS_PAGE,
    component: CallsPage,
    name: "Документы",
  },
  {
    path: MESSAGES_PAGE,
    component: CallsPage,
    name: "Сообщения",
  },
  {
    path: COUNTERPARTIES_PAGE,
    component: CallsPage,
    name: "Контрагенты",
  },
  {
    path: PERFORMERS_PAGE,
    component: CallsPage,
    name: "Исполнители",
  },
  {
    path: CALLS_PAGE,
    component: CallsPage,
    name: "Звонки",
  },
  {
    path: REPORTS_PAGE,
    component: CallsPage,
    name: "Отчёты",
  },
  {
    path: KNOWLEDGE_BASE_PAGE,
    component: CallsPage,
    name: "База знаний",
  },
  {
    path: SETTINGS_PAGE,
    component: CallsPage,
    name: "Настройки",
  },
];

export const navigationRoutes = [
  {
    path: RESULTS_PAGE,
    name: "Итоги",
    img: <ResultsIcon>
  }
]
