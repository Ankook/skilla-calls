
import { CallsPage } from "../components/pages/callsPage";
import { ResultsPage } from "../components/pages/resultsPage";
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
  KNOWLEDGE_BASE_PAGE,
  COUNTER_PAGE
} from "./consts";
import { OrdersPage } from "../components/pages/ordersPage";
import { DocumentsPage } from "../components/pages/documentsPage";
import { MessagesPage } from "../components/pages/messagesPage";
import { CounterpartiesPage } from "../components/pages/counterpartiesPage";
import { PerformersPage } from "../components/pages/performersPage";
import { ReportsPage } from "../components/pages/reportsPage";
import { KnowledgeBasePage } from "../components/pages/knowledgeBasePage";
import { SettingsPage } from "../components/pages/settingsPage";
import { Counter } from "../components/pages/counterPage";



export const routes = [
  {
    path: HOME_PAGE,
    element: <CallsPage/>,
    name: "Домашная страница",
  },
  {
    path: RESULTS_PAGE,
    element: <ResultsPage/>,
    name: "Итоги",
  },

  {
    path: ORDERS_PAGE,
    element: <OrdersPage/>,
    name: "Заказы",
  },
  {
    path: DOCUMENTS_PAGE,
    element: <DocumentsPage/>,
    name: "Документы",
  },
  {
    path: MESSAGES_PAGE,
    element: <MessagesPage/>,
    name: "Сообщения",
  },
  {
    path: COUNTERPARTIES_PAGE,
    element: <CounterpartiesPage/>,
    name: "Контрагенты",
  },
  {
    path: PERFORMERS_PAGE,
    element: <PerformersPage/>,
    name: "Исполнители",
  },
  {
    path: CALLS_PAGE,
    element: <CallsPage/>,
    name: "Звонки",
  },
  {
    path: REPORTS_PAGE,
    element: <ReportsPage/>,
    name: "Отчёты",
  },
  {
    path: KNOWLEDGE_BASE_PAGE,
    element: <KnowledgeBasePage/>,
    name: "База знаний",
  },
  {
    path: SETTINGS_PAGE,
    element: <SettingsPage/>,
    name: "Настройки"
  },
  {
    path: COUNTER_PAGE,
    element: <Counter />,
    name: "Cчётчик"
  }
];

export const navigationRoutes = [
  {
    path: RESULTS_PAGE,
    name: "Итоги",
    img: <ResultsIcon/>
  },
  {
    path: ORDERS_PAGE,
    name: "Заказы",
    img: <OrdersIcon/>
  },
  {
    path: MESSAGES_PAGE,
    name: "Cообщения",
    img: <MessagesIcon/>
  },
  {
    path: CALLS_PAGE,
    name: "Звонки",
    img: <CallsIcon/>
  },
  {
    path: COUNTERPARTIES_PAGE,
    name: "Контрагенты",
    img: <CounterpartiesIcon/>
  },
  {
    path: DOCUMENTS_PAGE,
    name: "Документы",
    img: <DocumentsIcon/>
  },
  {
    path: PERFORMERS_PAGE,
    name: "Исполнители",
    img: <PerfomersIcon/>
  },
  {
    path: REPORTS_PAGE,
    name: "Отчёты",
    img: <ReportsIcon/>
  },
  {
    path: KNOWLEDGE_BASE_PAGE,
    name: "База знаний",
    img: <KnowledgeBaseIcon/>
  },
  {
    path: SETTINGS_PAGE,
    name: "Итоги",
    img: <SettingsIcon/>
  },
  {
    path: COUNTER_PAGE,
    name: "Cчётчик",
    img: <SettingsIcon/>
  }
]
