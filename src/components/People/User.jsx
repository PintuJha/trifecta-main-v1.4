import React from 'react';
import { Link } from 'react-router-dom';
export default class User extends React.Component {
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
                                            <Link to="/User" className="active"><i class="simple-icon-check"></i> User</Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <Link to="/StaffRecord"><i class="simple-icon-calculator"></i> Staff Record</Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <Link to="/AccessReport"><i class="simple-icon-bubbles"></i> Access Report</Link>
                                        </li>

                                    </ol>
                                </nav>
                                <div className="separator mb-5"></div>
                                {/* =================DATA TABLE CODE START================ */}

                                <div className="datatable-code-start card mb-4">
                                    <div className="w-100 mb-3">
                                        <h2 className="float-left mb-0">User</h2>
                                        <div className="room-category-model float-right">
                                            <button type="button" className="btn btn-primary mr-3" data-toggle="modal" data-target="#myModal">Add User
                                              </button>

                                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ControlUserAccess">Control User Access
                                              </button>


                                        </div>
                                        <div classNameName="clearfix"></div>
                                    </div>
                                    <table id="example" className="table table-striped table-bordered" cellspacing="0" width="100%">
                                        <thead>
                                            <tr>
                                                <th>Sr.No</th>
                                                <th>Name</th>
                                                <th>Gender</th>
                                                <th>Email</th>
                                                <th>Mobile</th>
                                                <th>Designation</th>
                                                <th>User Type</th>
                                                <th>User Name</th>
                                                <th>Password</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>

                                    </table>
 {/* =================DATA TABLE CODE END================ */}


                                    {/* =============MODE CODE START============== */}

                                    <div classNameName="model-section">
                                        <div className="modal fade" id="myModal">
                                            <div className="modal-dialog modal-lg">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h4 className="modal-title">Add User</h4>
                                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                    </div>
                                                    <div className="modal-body">



                                                        <form action="javascript:void(0);">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label for="text">Full Name *</label>
                                                                        <input type="text" className="form-control" placeholder="Full Name" id="text" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6">
                                                                    <div class="form-group">
                                                                        <label for="usr">Gender</label>
                                                                        <select class="form-control" id="sel1">
                                                                            <option>Select</option>
                                                                            <option>Male</option>
                                                                            <option>Female</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label for="number">Mobile No.</label>
                                                                        <input type="number" className="form-control" placeholder="Mobile No." id="number" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label for="email">Email</label>
                                                                        <input type="email" className="form-control" placeholder="Email" id="email" />
                                                                    </div>
                                                                </div>


                                                                <div className="col-md-6">
                                                                    <div class="form-group">
                                                                        <label for="usr">Designation *</label>
                                                                        <select class="form-control" id="sel1">
                                                                            <option>Select</option>
                                                                            <option>FRONT OFFICE</option>
                                                                            <option>STEWARD</option>
                                                                            <option>HOUSE KEEPING</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label for="text">User Name *</label>
                                                                        <input type="text" className="form-control" placeholder="User Name" id="text" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label for="password">Password *</label>
                                                                        <input type="password" className="form-control" placeholder="Password" id="password" />
                                                                    </div>
                                                                </div>


                                                                <div className="col-md-6">
                                                                    <div class="form-group">
                                                                        <label for="usr">User Type *</label>
                                                                        <select class="form-control" id="sel1">
                                                                            <option>Select</option>
                                                                            <option>Admin</option>
                                                                            <option>Accounts</option>
                                                                            <option>Store</option>
                                                                        </select>
                                                                    </div>
                                                                </div>


                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label for="file">Profile</label>
                                                                        <input type="file" className="form-control" placeholder="Password" id="file" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6">
                                                                    <div class="form-group">
                                                                        <label for="usr">Status *</label>
                                                                        <select class="form-control" id="sel1">
                                                                            <option>Select</option>
                                                                            <option>Active</option>
                                                                            <option>Un-Active</option>
                                                                        </select>
                                                                    </div>
                                                                </div>



                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-primary">Save</button>
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {/* ============ControlUserAccess Model Start========= */}

                                    <div classNameName="model-section">
                                        <div className="modal fade" id="ControlUserAccess">
                                            <div className="modal-dialog modal-lg">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h4 className="modal-title">Control User Access</h4>
                                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                    </div>
                                                    <div className="modal-body">



                                                        <form action="javascript:void(0);">
                                                            <div className="form-group">
                                                                <label for="text">Add New Designation *</label>
                                                                <input type="text" className="form-control" placeholder="Add New Designation" id="text" />
                                                            </div>

                                                            <table id="example" className="table table-striped table-bordered" cellspacing="0" width="100%">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Sr.No.</th>
                                                                        <th>Designation</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>

                                                            </table>


                                                        </form>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-primary">Save</button>
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ============ControlUserAccess Model END========= */}

                                </div>
                               
                            </div>
                        </div>

                    </div>
                </main>
            </>
        )
    }
}