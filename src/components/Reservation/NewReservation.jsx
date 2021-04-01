import React from 'react';
import { Link } from 'react-router-dom'
export default class NewReservation extends React.Component{
    render(){
        return(
            <>
             <main>
            <div className="container-fluid">
                        <div className="row ">
                            <div className="col-12">
                                <nav className="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
                                <ol className="breadcrumb pt-0">
                                        <li className="breadcrumb-item">
                                            <Link to="/NewReservation"><i class="simple-icon-check"></i> New Reservation</Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <Link to="/ViewReservation"><i class="simple-icon-calculator"></i>  View Reservation Details  </Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <Link to="/CancelList"><i class="simple-icon-bubbles"></i> Cancel List </Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <Link to="/TravelAgentThirdParty"><i class="simple-icon-bubbles"></i> Travel Agent/Third Party Side </Link>
                                        </li>
                                       

                                    </ol>
                                </nav>
                                <div className="separator mb-5"></div>


                              {/* =================DATA TABLE CODE START================ */}

                              <div className="datatable-code-start TariffModuleList card mb-4">
                                    <div className="w-100 mb-3">
                                        <h2 className="float-left mb-0">New  Reservation</h2>
                                        <div classNameName="clearfix"></div>
                                    </div>

                                    <div className="row">

                                    <div className="col-md-12 mb-3">
                                            <div class="form-group">
                                                <label for="usr">Room Category *</label>
                                                <select class="form-control" id="sel1">
                                                    <option>--Select Room Category--</option>
                                                    <option>Standard</option>
                                                    <option>Deluxe Heritage</option>
                                                    <option>Royal Heritage</option>
                                                    <option>Deluxe</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-md-4 mb-3">
                                            <div class="form-group">
                                                <label for="usr">Room Category *</label>
                                                <select class="form-control" id="sel1">
                                                    <option>--Select Room Category--</option>
                                                    <option>Standard</option>
                                                    <option>Deluxe Heritage</option>
                                                    <option>Royal Heritage</option>
                                                    <option>Deluxe</option>
                                                 </select>
                                            </div>
                                        </div>

                                        <div className="col-md-4 mb-3">
                                            <div class="form-group">
                                                <label for="usr">Room Charge:</label>
                                                <input type="text" placeholder="Enter Standerd Charge.." class="form-control" id="usr" />
                                            </div>
                                        </div>

                                        <div className="col-md-4 mb-3">
                                            <div class="form-group">
                                                <label for="usr">Extra Bed Charge:</label>
                                                <input type="text" placeholder="Enter Bad Charge.." class="form-control" id="usr" />
                                            </div>
                                        </div>

                                        <div className="col-md-4 mb-3">
                                            <div class="form-group">
                                                <label for="usr">MEAL PLAN</label>
                                                <select class="form-control" id="sel2">
                                                    <option>--Select Meal Plan----</option>
                                                    <option>NO MEAL</option>
                                                    <option>ONLY BREAKFAST</option>
                                                    <option>ALL MEAL</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-md-4 mb-3">
                                            <div class="form-group">
                                                <label for="usr">From</label>
                                                <input type="date" class="form-control" id="usr" />
                                            </div>
                                        </div>

                                        <div className="col-md-4 mb-3">
                                            <div class="form-group">
                                                <label for="usr">To</label>
                                                <input type="date" class="form-control" id="usr" />
                                            </div>
                                        </div>

                                        <div className="col-md-12 text-center">
                                        <button type="button" className="btn btn-primary mr-3">Update</button>
                                                    <button type="button" className="btn btn-secondary">Reset</button>     </div>


                                    </div>






                                </div>




                                {/* =================DATA TABLE CODE END================ */}



                            </div>
                        </div>

                    </div>
            </main>
            </>
        )
    }
}