import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard/DashBoard";
import LayOut from "./components/layout/LayOut";
import Calendar from "./pages/calendar/Calendar";
import BoardPage from "./components/board/Board";
import DataGrid from "./pages/dataGrid/DataGrid";

const App = () => {
  return (
    <div id='dashboard'>
      <Router>
        <Routes>
          <Route path='/' element={<LayOut />}>
            <Route path='dashboard' element={<DashBoard />} />
            <Route path='calendar' element={<Calendar />} />
            <Route path='board' element={<BoardPage />} />
            <Route path='users' element={<DataGrid />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
