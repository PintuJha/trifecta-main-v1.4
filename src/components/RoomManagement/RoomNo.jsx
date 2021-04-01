import React from 'react';
import { Link } from 'react-router-dom'
export default class RoomNo extends React.Component {
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

                                <div classNameName="model-section">



                                    <div className="modal fade" id="AddFAddNewRoomloor">
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


                                </div>

                                {/* =============MODE CODE END ============== */}

                                {/* =================DATA TABLE CODE START================ */}

                                <div className="datatable-code-start card mb-4">
                                    <div className="w-100 mb-3">
                                        <h2 className="float-left mb-0"> Room No.</h2>
                                        <div className="room-category-model float-right">
                                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#AddFAddNewRoomloor">Add New Room
                                              </button>
                                        </div>
                                        <div classNameName="clearfix"></div>
                                    </div>


                                    <table id="example" className="table table-striped table-bordered" cellspacing="0" width="100%">
                                        <thead>
                                            <tr>
                                                <th>Sr.no</th>
                                                <th>Room No.</th>
                                                <th>Category</th>
                                                <th>Type</th>
                                                <th>Floor</th>
                                                <th>Room Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>101</td>
                                                <td>Royal Heritage</td>
                                                <td>ac</td>
                                                <td>GROUND FLOOR </td>
                                                <td>Vacant</td>
                                                <td><button type="button" className="btn btn-primary btn-xs mb-1 mr-2" data-toggle="modal" data-target="#edit">Edit</button>
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>2</td>
                                                <td>101</td>
                                                <td>Royal Heritage</td>
                                                <td>ac</td>
                                                <td>GROUND FLOOR </td>
                                                <td>Vacant</td>
                                                <td><button type="button" className="btn btn-primary btn-xs mb-1 mr-2" data-toggle="modal" data-target="#edit">Edit</button>
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>3</td>
                                                <td>101</td>
                                                <td>Royal Heritage</td>
                                                <td>ac</td>
                                                <td>GROUND FLOOR </td>
                                                <td>Vacant</td>
                                                <td><button type="button" className="btn btn-primary btn-xs mb-1 mr-2" data-toggle="modal" data-target="#edit">Edit</button>
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>101</td>
                                                <td>Royal Heritage</td>
                                                <td>ac</td>
                                                <td>GROUND FLOOR </td>
                                                <td>Vacant</td>
                                                <td><button type="button" className="btn btn-primary btn-xs mb-1 mr-2" data-toggle="modal" data-target="#edit">Edit</button>
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>5</td>
                                                <td>101</td>
                                                <td>Royal Heritage</td>
                                                <td>ac</td>
                                                <td>GROUND FLOOR </td>
                                                <td>Vacant</td>
                                                <td><button type="button" className="btn btn-primary btn-xs mb-1 mr-2" data-toggle="modal" data-target="#edit">Edit</button>
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>101</td>
                                                <td>Royal Heritage</td>
                                                <td>ac</td>
                                                <td>GROUND FLOOR </td>
                                                <td>Vacant</td>
                                                <td><button type="button" className="btn btn-primary btn-xs mb-1 mr-2" data-toggle="modal" data-target="#edit">Edit</button>
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td>101</td>
                                                <td>Royal Heritage</td>
                                                <td>ac</td>
                                                <td>GROUND FLOOR </td>
                                                <td>Vacant</td>
                                                <td><button type="button" className="btn btn-primary btn-xs mb-1 mr-2" data-toggle="modal" data-target="#edit">Edit</button>
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>8</td>
                                                <td>101</td>
                                                <td>Royal Heritage</td>
                                                <td>ac</td>
                                                <td>GROUND FLOOR </td>
                                                <td>Vacant</td>
                                                <td><button type="button" className="btn btn-primary btn-xs mb-1 mr-2" data-toggle="modal" data-target="#edit">Edit</button>
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>9</td>
                                                <td>101</td>
                                                <td>Royal Heritage</td>
                                                <td>ac</td>
                                                <td>GROUND FLOOR </td>
                                                <td>Vacant</td>
                                                <td><button type="button" className="btn btn-primary btn-xs mb-1 mr-2" data-toggle="modal" data-target="#edit">Edit</button>
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>10</td>
                                                <td>101</td>
                                                <td>Royal Heritage</td>
                                                <td>ac</td>
                                                <td>GROUND FLOOR </td>
                                                <td>Vacant</td>
                                                <td><button type="button" className="btn btn-primary btn-xs mb-1 mr-2" data-toggle="modal" data-target="#edit">Edit</button>
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>11</td>
                                                <td>101</td>
                                                <td>Royal Heritage</td>
                                                <td>ac</td>
                                                <td>GROUND FLOOR </td>
                                                <td>Vacant</td>
                                                <td><button type="button" className="btn btn-primary btn-xs mb-1 mr-2" data-toggle="modal" data-target="#edit">Edit</button>
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>
                                                </td>
                                            </tr>






                                        </tbody>
                                    </table>



                                    {/* ============EDIT Mode COde Start=========== */}
                                    <div classNameName="model-section">
                                        <div className="modal fade" id="edit">
                                            <div className="modal-dialog modal-lg">
                                                <div className="modal-content">


                                                    <div className="modal-header">
                                                        <h4 className="modal-title">Add Room Category</h4>
                                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                    </div>


                                                    <div className="modal-body">
                                                        <form action="javascript:void(0);">

                                                            <div className="form-group">
                                                                <label for="text">Floor  *</label>
                                                                <select class="form-control" id="sel1">
                                                                    <option>--Select Room Floor--</option>
                                                                    <option>Basement</option>
                                                                    <option selected>Ground Floor</option>
                                                                    <option>First Floor</option>
                                                                </select>
                                                            </div>

                                                            <div className="form-group">
                                                                <label for="text">Room Category *</label>
                                                                <select class="form-control" id="sel2">
                                                                    <option>--Select Room Category--</option>
                                                                    <option>Standard</option>
                                                                    <option selected>Deluxe Heritage</option>
                                                                    <option>Royal Heritage</option>
                                                                    <option>Deluxe</option>
                                                                </select>
                                                            </div>

                                                            <div className="form-group">
                                                                <label for="text">Room Type *</label>
                                                                <select class="form-control" id="sel3">
                                                                    <option>--Select Room Type--</option>
                                                                    <option selected>A/C</option>
                                                                    <option>Non-A/c</option>
                                                                </select>
                                                            </div>
                                                            <div className="form-group">
                                                                <label for="number">Room No: *</label>
                                                                <input type="number" value="101" className="form-control" placeholder="Number Of Rooms" id="number" />
                                                            </div>

                                                            <div className="form-group">
                                                                <label for="number">About Room</label>
                                                                <textarea class="form-control" value="Royal" rows="5" id="comment"></textarea>

                                                            </div>

                                                        </form>
                                                    </div>


                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-primary">Submit</button>
                                                        <button type="button" className="btn btn-secondary">Reset</button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                    {/* ============EDIT Mode COde END=========== */}
                                    {/* ============Delete Mode COde Start=========== */}
                                    <div className="modal fade" id="Delete">
                                        <div className="modal-dialog modal-sm">
                                            <div className="modal-content">

                                                <div className="modal-body">

                                                    <p classNameName="mb-0"><b>Are You Sure Want to delete?</b></p>
                                                </div>

                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-primary">Ok</button>
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ============Delete Mode COde END=========== */}

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