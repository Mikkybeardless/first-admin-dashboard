import css from "./DashBoard.module.css";
import { cardsData, groupNumber } from "../../data";
import Statistics from "../../components/statistics/Statistics";
import Orders from "../../components/orders/Orders";

const DashBoard = () => {
  return (
    <div className={css.container}>
      {/* left side */}
      <div className={css.dashboard}>
        <div className={`${css.dashboardHead} theme-container`}>
          <div className={css.head}>
            <span>Dashboard</span>

            <div className={css.durationButton}>
              <select>
                <option>1 week</option>
                <option>1 month</option>
                <option>1 year</option>
              </select>
            </div>
          </div>
          <div className={css.cards}>
            {cardsData.map((card, index) => (
              <div key={index} className={css.card}>
                <div className={css.cardHead}>
                  <span>{card.title}</span>
                  <span>+{card.change}</span>
                </div>

                <div className={css.cardAmount}>
                  <span>$</span>
                  <span>{groupNumber(card.amount)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Statistics />
      </div>

      {/* right side */}
      <div className={css.orders}>
        <Orders />
      </div>
    </div>
  );
};

export default DashBoard;
