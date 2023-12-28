import { groupNumber } from "../../data";
import StatisticsChart from "../statisticsChart/StatisticsChart";
import css from "./Statistics.module.css";
import { BsArrowUpShort } from "react-icons/bs";

const Statistics = () => {
  return (
    <div className={`${css.container} theme-container`}>
      <span className={css.title}>Overview Statistics</span>

      <div className={`${css.cards} grey-container`}>
        <div>
          <div className={css.arrowIcon}>
            <BsArrowUpShort />
          </div>

          <div className={css.card}>
            <span>Top item this month</span>
            <span>Office camps</span>
          </div>
        </div>

        <div className={css.card}>
          <span>Items</span>
          <span>{groupNumber(453)}</span>
        </div>

        <div className={css.card}>
          <span>Profit</span>
          <span>{groupNumber(7600)}</span>
        </div>

        <div className={css.card}>
          <span>Daily Avarage</span>
          <span>{groupNumber(4500)}</span>
        </div>
      </div>

      <StatisticsChart />
    </div>
  );
};

export default Statistics;
