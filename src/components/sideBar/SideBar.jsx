import css from "./SideBar.module.css";
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillCalendar, AiOutlineTable } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className={css.container}>
      <img src='./logo.png' alt='logo' className={css.logo} />
      <div className={css.menu}>
        <NavLink to='dashboard' className={css.item} title='Dashboard'>
          <MdSpaceDashboard size={30} />
          <a className={css.title}>Dashboard</a>
        </NavLink>

        <NavLink to='calendar' className={css.item} title='Calender'>
          <AiFillCalendar size={30} />
          <a className={css.title}>Calendar</a>
        </NavLink>

        <NavLink to='board' className={css.item} title='Trello Board'>
          <FaTasks size={30} />
          <a className={css.title}>Board</a>
        </NavLink>

        <NavLink to='users' className={css.item} title='User'>
          <AiOutlineTable size={30} />
          <a className={css.title}>Users</a>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
