import React from 'react'
import { Link } from 'react-router-dom'
export default class Home extends React.Component{
    render(){
        return(
            <>
        
        <main>
            <div className="container-fluid">
                        <div className="row ">
                            <div className="col-12">
                                {/* =================DATA TABLE CODE START================ */}
                                <div className="datatable-code-start card mb-4">
                                    <div className="w-100 mb-3">
                                        <h2 className="float-left mb-0">Home</h2>
                                        {/* <div className="room-category-model float-right">
                                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#AddFloor">Add Floor
                                              </button>
                                        </div> */}
                                        <div classNameName="clearfix"></div>
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