import React from 'react';
import './../layout/admin.css'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import DashboardContainer from '../../containers/admin/DashboardContainer';
import Chart from './Chart';
class AdminPage extends React.Component {
    render() {
        var { lengthProducts } = this.props
        console.log(lengthProducts)
        return (

            <Router>
                <div>

                    <div className="container-fluid">
                        <div className="row content">
                            <div className="col-sm-3 sidenav hidden-xs">
                                <h2><Link to="/admin">LOGO</Link></h2>
                                <ul className="nav nav-pills nav-stacked">
                                    <li className="active"><Link to="/admin/dashboard">Dashboard</Link></li>
                                    <li><Link to="/admin/chart">Chart</Link></li>
                                    <li><a href="#section3">Log Out</a></li>
                                </ul><br />
                            </div>
                            <br />
                            {/* <DashboardContainer /> */}
                            <Switch>
                                <Route path="/admin/dashboard" component={DashboardContainer} />
                                <Route path="/admin/chart" component={Chart} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}
export default AdminPage;
