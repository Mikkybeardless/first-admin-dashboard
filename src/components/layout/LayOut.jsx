import moment from "moment";
import css from "./LayOut.module.css";
import { BiSearch } from "react-icons/bi";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import SideBar from "../sideBar/SideBar";

const LayOut = () => {
  const { pathname } = useLocation();
  return (
    <div className={css.container}>
      <SideBar />
      {/* making dashboard the default route */}
      {pathname === "/" && <Navigate to='/dashboard' />}
      <div className={css.dashboard}>
        <div className={css.topBaseGradient}>
          <div className='gradient-red'></div>
          <div className='gradient-orange'></div>
          <div className='gradient-blue'></div>
        </div>

        <div className={css.header}>
          <span>{moment().format("dddd, Do MMM YYYY")}</span>

          <div className={css.searchBar}>
            <BiSearch size={18} />
            <input type='text' placeholder='Search' />
          </div>

          <div className={css.profile}>
            <img src='./profile.png' alt='' />
            <div className={css.details}>
              <span>Igashi Israel</span>
              <span>igashiisrael@gmail.com</span>
            </div>
          </div>
        </div>
        <div className={css.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayOut;
