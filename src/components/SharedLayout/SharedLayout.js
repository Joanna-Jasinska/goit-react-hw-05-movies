// import { MainPage } from "pages/MainPage";
import { Routes, Route, NavLink, Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
