import React from 'react';
import { Link } from 'react-router-dom'
export default class ViewTariff extends React.Component {
    render() {
        return (
            <>

                <main>
                    <div className="container-fluid">
                        <div className="row ">
                            <div className="col-12">
                                <nav className="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
                                    <ol className="breadcrumb pt-0">
                                        <li className="breadcrumb-item">
                                            <Link to="/RoomCategory"><i class="simple-icon-check"></i> Room Category</Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <Link to="/Floor"><i class="simple-icon-calculator"></i> Floor</Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <Link to="/RoomNo"><i class="simple-icon-bubbles"></i> Room No.</Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <Link to="/ViewTariff"><i class="simple-icon-bubbles"></i> View Tariff</Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <Link to="/EditTariff"><i class="simple-icon-bubbles"></i> Edit Tariff</Link>
                                        </li>

                                    </ol>
                                </nav>
                                <div className="separator mb-5"></div>


                                {/* =============MODE CODE START============== */}

                                {/* <div classNameName="model-section">



                                    <div className="modal fade" id="TariffModuleList">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">


                                                <div className="modal-header">
                                                    <h4 className="modal-title"> Room No.</h4>
                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                </div>


                                                <div className="modal-body">
                                                    <form action="javascript:void(0);">

                                                        <div className="form-group">
                                                            <label for="text">Floor  *</label>
                                                            <select class="form-control" id="sel1">
                                                                <option>--Select Room Floor--</option>
                                                                <option>Basement</option>
                                                                <option>Ground Floor</option>
                                                                <option>First Floor</option>
                                                            </select>
                                                        </div>

                                                        <div className="form-group">
                                                            <label for="text">Room Category *</label>
                                                            <select class="form-control" id="sel2">
                                                                <option>--Select Room Category--</option>
                                                                <option>Standard</option>
                                                                <option>Deluxe Heritage</option>
                                                                <option>Royal Heritage</option>
                                                                <option>Deluxe</option>
                                                            </select>
                                                        </div>

                                                        <div className="form-group">
                                                            <label for="text">Room Type *</label>
                                                            <select class="form-control" id="sel3">
                                                                <option>--Select Room Type--</option>
                                                                <option>A/C</option>
                                                                <option>Non-A/c</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <label for="number">Room No: *</label>
                                                            <input type="number" className="form-control" placeholder="Number Of Rooms" id="number" />
                                                        </div>

                                                        <div className="form-group">
                                                            <label for="number">About Room</label>
                                                            <textarea class="form-control" rows="5" id="comment"></textarea>

                                                        </div>

                                                    </form>
                                                </div>


                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-primary">Add New Room</button>
                                                    <button type="button" className="btn btn-secondary">Reset</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                </div> */}

                                {/* =============MODE CODE END ============== */}

                                {/* =================DATA TABLE CODE START================ */}

                                <div className="datatable-code-start TariffModuleList card mb-4">
                                    <div className="w-100 mb-3">
                                        <h2 className="float-left mb-0"> Add Tarrif Module </h2>
                                        <div className="room-category-model float-right">
                                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#TariffModuleList">Tariff Module List
                                              </button>
                                        </div>
                                        <div classNameName="clearfix"></div>
                                    </div>

                                    <div className="row">
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
                                                <label for="usr">Room Type *</label>
                                                <select class="form-control" id="sel2">
                                                    <option>--Select Room Type--</option>
                                                    <option>A/C</option>
                                                    <option>Non-A/c</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <div class="form-group">
                                                <label for="usr">Set Charge According to *</label>
                                                <select class="form-control" id="sel2">
                                                    <option>--Select Set Charge--</option>
                                                    <option>Single Day</option>
                                                    <option>Your Choice</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <div class="form-group">
                                                <label for="usr">Room Charge: *</label>
                                                <input type="text" placeholder="Enter Standerd Charge.." class="form-control" id="usr" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <div class="form-group">
                                                <label for="usr">Bed Charge: *</label>
                                                <input type="text" placeholder="Enter Bed Charge.." class="form-control" id="usr" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <div class="form-group">
                                                <label for="usr">FOOD services *</label>
                                                <select class="form-control" id="sel2">
                                                    <option>--Select FOOD services--</option>
                                                    <option>Not Include</option>
                                                    <option>Only Breakfast</option>
                                                    <option>M.A.P</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <div class="form-group">
                                                <label for="usr">Date *</label>
                                                <input type="date" class="form-control" id="usr" />
                                            </div>
                                        </div>

                                        <div className="col-md-12 text-center">
                                            <button type="button" className="btn btn-primary mr-3">Submit</button>
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