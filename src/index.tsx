import React from 'react';
/* style import */
import './index.css';
/* routing and ui framework imports*/
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { AppShell, Header } from "@mantine/core";
/* page component imports*/
import HomePage from "./component/pages/HomePage";
import AboutMePage from "./component/pages/AboutMePage";
import CareerPage from "./component/pages/CareerPage";
import EducationPage from "./component/pages/EducationPage";
import CustomHeader from "./component/navigation/CustomHeader";
/* misc import*/
import reportWebVitals from './reportWebVitals';
import ProjectsPage from "./component/pages/ProjectsPage";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppShell
                header={
                <Header height={70}>
                    <CustomHeader />
                </Header>}
            >
                <Routes>
                    <Route path={"/"} element={<HomePage />} />
                    <Route path={"/about"} element={<AboutMePage />} />
                    <Route path={"/education"} element={<EducationPage />} />
                    <Route path={"/career"} element={<CareerPage />} />
                    <Route path={"/projects"} element={<ProjectsPage />} />
                </Routes>
            </AppShell>
        </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
