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
          <h1 className={css.title}>Dashboard</h1>
        </NavLink>

        <NavLink to='calendar' className={css.item} title='Calender'>
          <AiFillCalendar size={30} />
          <h1 className={css.title}>Calendar</h1>
        </NavLink>

        <NavLink to='board' className={css.item} title='Trello Board'>
          <FaTasks size={30} />
          <h1 className={css.title}>Board</h1>
        </NavLink>

        <NavLink to='users' className={css.item} title='User'>
          <AiOutlineTable size={30} />
          <h1 className={css.title}>Users</h1>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
