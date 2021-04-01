import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Header from "./components/Home/Header";
import Navbar from "./components/Home/Navbar";
import Footer from "./components/Home/Footer";
import Home from "./components/Home/Home";
import User from "./components/People/User";
import StaffRecord from "./components/People/StaffRecord";
import AccessReport from "./components/People/AccessReport";
import RoomCategory from "./components/RoomManagement/RoomCategory";
import Floor from "./components/RoomManagement/Floor";
import RoomNo from "./components/RoomManagement/RoomNo";
import ViewTariff from "./components/RoomManagement/ViewTariff";
import EditTariff from "./components/RoomManagement/EditTariff";
import NewReservation from "./components/Reservation/NewReservation";
import ViewReservation from "./components/Reservation/ViewReservation";
import CancelList from "./components/Reservation/CancelList";
import TravelAgentThirdParty from "./components/Reservation/TravelAgentThirdParty";
import StayView from "./components/FrontOffice/StayView";
import CheckIn from "./components/FrontOffice/CheckIn";
import CheckOut from "./components/FrontOffice/CheckOut";
import RoomShifting from "./components/FrontOffice/RoomShifting";
import EditBooking from "./components/FrontOffice/EditBooking";
import EarlyCheckOut from "./components/FrontOffice/EarlyCheckOut";
import EodSaleReport from "./components/FrontOffice/EodSaleReport";
import MealReport from "./components/FrontOffice/MealReport";
import OccupancyReport from "./components/FrontOffice/OccupancyReport";
import DirectBookingReport from "./components/FrontOffice/DirectBookingReport";
import Salary from "./components/Configuration/Salary";
import Rental from "./components/Configuration/Rental";
import CommissionList from "./components/Configuration/CommissionList";
import NewExpense from "./components/Configuration/NewExpense";
import NewPurchase from "./components/Configuration/NewPurchase";
import DaySummary from "./components/Configuration/DaySummary";
import SaleReport from "./components/Configuration/SaleReport";
import Statement from "./components/Configuration/Statement";
import GstInfo from "./components/Menu/GstInfo";
import Gst from "./components/Menu/Gst";

function App() {
  return (


    <div className="app">

      <div className="top-header">
        <Header />
      </div>


      <Router basename='/'>
        <div className="container-fluid pl-0 pr-0">

          <div className="left-menu-section">
            <Navbar />
          </div>


          <div className="body-section-code">
            <Route exact path="/"><Home /></Route>
            <Route path="/User"><User /></Route>
            <Route path="/StaffRecord"><StaffRecord /></Route>
            <Route path="/AccessReport"><AccessReport /></Route>
            <Route path="/RoomCategory"><RoomCategory /></Route>
            <Route path="/Floor"><Floor /></Route>
            <Route path="/RoomNo"><RoomNo /></Route>
            <Route path="/ViewTariff"><ViewTariff /></Route>
            <Route path="/EditTariff"><EditTariff /></Route>
            <Route path="/NewReservation"><NewReservation /></Route>
            <Route path="/ViewReservation"><ViewReservation /></Route>
            <Route path="/CancelList"><CancelList /></Route>
            <Route path="/TravelAgentThirdParty"><TravelAgentThirdParty /></Route>
            <Route path="/StayView"><StayView /></Route>
            <Route path="/CheckIn"><CheckIn /></Route>
            <Route path="/CheckOut"><CheckOut /></Route>
            <Route path="/RoomShifting"><RoomShifting /></Route>
            <Route path="/EditBooking"><EditBooking /></Route>
            <Route path="/EarlyCheckOut"><EarlyCheckOut /></Route>
            <Route path="/EodSaleReport"><EodSaleReport /></Route>
            <Route path="/MealReport"><MealReport /></Route>
            <Route path="/OccupancyReport"><OccupancyReport /></Route>
            <Route path="/DirectBookingReport"><DirectBookingReport /></Route>
            <Route path="/Salary"><Salary /></Route>
            <Route path="/Rental"><Rental /></Route>
            <Route path="/CommissionList"><CommissionList /></Route>
            <Route path="/NewExpense"><NewExpense /></Route>
            <Route path="/NewPurchase"><NewPurchase /></Route>
            <Route path="/DaySummary"><DaySummary /></Route>
            <Route path="/SaleReport"><SaleReport /></Route>
            <Route path="/Statement"><Statement /></Route>
            <Route path="/GstInfo"><GstInfo /></Route>
            <Route path="/Gst"><Gst /></Route>
          </div>

        </div>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
