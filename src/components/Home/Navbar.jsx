import React from 'react';
import { Link } from 'react-router-dom'
export default class Navbar extends React.Component {

    render() {
        return (
            <div className="Menu-sectioccccn">
                 {/* <!-- ======================ASSIDE MENU CODE START====================== --> */}
                <div class="sidebar">
                    <div class="main-menu">
                        <div class="scroll">
                            <ul class="list-unstyled">
                                <li class="active">
                                    <Link to="/"><i class="iconsmind-Shop-4"></i>Home</Link>
                                </li>
                                <li>
                                <Link to="/user"><i class="iconsmind-Digital-Drawing"></i>People</Link>
                                </li>
                                <li>
                                    <Link to="/RoomCategory"><i class="iconsmind-Air-Balloon"></i>Room Management</Link>
                                </li>
                                <li>
                                   <Link to="/newreservation"><i class="iconsmind-Pantone"></i>Reservation</Link>
                                </li>
                                <li>
                                <Link to="/stayview"><i class="iconsmind-Space-Needle"></i>Front Office</Link>
                                </li>
                                <li>
                                <Link to="/salary"><i class="iconsmind-Three-ArrowFork"></i>Accounts</Link>
                                </li>
                                <li>
                                <Link to="/salary"><i class="iconsmind-Three-ArrowFork"></i>Configuration</Link>
                                   
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- ======================ASSIDE MENU CODE END====================== --> */}
            </div>
        )
    }
}