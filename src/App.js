import React from "react";
import Utama from './Components/utama';
import {Link} from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <div>
        <div className="navbar navbar-expand-lg bg-primary navbar-light">
                <a className="navbar-brand" href="#">
                    Tugas React 3 List
                </a>

                {/* show and hide menu */}
                <button className="navbar-toggler" data-toggle="collapse"
                data-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* menu */}
                <div id="menu" className="navbar-collapse collpase">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Beranda
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gallery" className="nav-link">
                                Gallery
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/lingkungan" className="nav-link">
                                Lingkungan Hidup
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/belanja" className="nav-link">
                                Belanja
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        <Utama/>
      </div>
    );
  }
}

export default App;
