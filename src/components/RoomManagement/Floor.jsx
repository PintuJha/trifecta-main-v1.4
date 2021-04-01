import React from 'react';
import { Link } from 'react-router-dom'
export default class Floor extends React.Component{
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



                                    <div className="modal fade" id="myModal">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">


                                                <div className="modal-header">
                                                    <h4 className="modal-title">Add Room Category</h4>
                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                </div>


                                                <div className="modal-body">
                                                    <form action="javascript:void(0);">
                                                        <div className="form-group">
                                                            <label for="text">Room Category *</label>
                                                            <input type="text" className="form-control" placeholder="Room Category" id="text" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label for="number">Number Of Rooms</label>
                                                            <input type="number" className="form-control" placeholder="Number Of Rooms" id="number" />
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

                                {/* =============MODE CODE END ============== */}

                                {/* =================DATA TABLE CODE START================ */}

                                <div className="datatable-code-start card mb-4">
                                    <div className="w-100 mb-3">
                                        <h2 className="float-left mb-0">Floor</h2>
                                        <div className="room-category-model float-right">
                                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#AddFloor">Add Floor
                                              </button>
                                        </div>
                                        <div classNameName="clearfix"></div>
                                    </div>


                                    <table id="example" className="table table-striped table-bordered" cellspacing="0" width="100%">
                                        <thead>
                                            <tr>
                                                <th>Floor</th>
                                                <th>Title</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>First Floor</td>
                                               
                                                <td>
                                                
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td>2</td>
                                                <td>Second Floor</td>
                                               
                                                <td>
                                                
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td>3</td>
                                                <td>First Floor</td>
                                               
                                                <td>
                                                
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td>4</td>
                                                <td>First Floor</td>
                                               
                                                <td>
                                                
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td>5</td>
                                                <td>First Floor</td>
                                               
                                                <td>
                                                
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td>6</td>
                                                <td>First Floor</td>
                                               
                                                <td>
                                                
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td>7</td>
                                                <td>First Floor</td>
                                               
                                                <td>
                                                
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td>8</td>
                                                <td>First Floor</td>
                                               
                                                <td>
                                                
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td>9</td>
                                                <td>First Floor</td>
                                               
                                                <td>
                                                
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td>10</td>
                                                <td>First Floor</td>
                                               
                                                <td>
                                                
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td>11</td>
                                                <td>First Floor</td>
                                               
                                                <td>
                                                
                                                    <button type="button" className="btn btn-danger btn-xs mb-1" data-toggle="modal" data-target="#Delete">Delete</button>

                                                </td>
                                            </tr>

                                          



                                        </tbody>
                                    </table>


                                    {/* ============Add Floor Mode COde Start=========== */}
                                    <div classNameName="model-section">
                                        <div className="modal fade" id="AddFloor">
                                            <div className="modal-dialog modal-lg">
                                                <div className="modal-content">


                                                    <div className="modal-header">
                                                        <h4 className="modal-title">Add Floor</h4>
                                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                    </div>


                                                    <div className="modal-body">
                                                        <form action="javascript:void(0);">
                                                            <div className="form-group">
                                                                <label for="text">Floor No. *</label>
                                                                <input type="text" className="form-control" placeholder="Floor No." id="text" />
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

                                    {/* ============Add Floor Mode COde END=========== */}
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
