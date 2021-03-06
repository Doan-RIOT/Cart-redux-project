
import React from 'react';
import './../layout/admin.css'
class Dashboard extends React.Component {
    render() {
        var {lengthProducts} = this.props;
        return (
            <div className="col-sm-9">
                <div className="well">
                    <h4>Dashboard</h4>
                    <p>Some text..</p>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="well">
                            <h4>Product</h4>
                            <p><b>{lengthProducts}</b> Items</p>
                            <a href="#">View Details:<span className="glyphicon">&#xe032;</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="well">
                            <h4>Catagories</h4>
                            <p>24 Thousand</p>
                            <a href="#">View Details:<span className="glyphicon">&#xe032;</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="well">
                            <h4>New Orders</h4>
                            <p>12400 Orders</p>
                            <a href="#">View Details:<span className="glyphicon">&#xe032;</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="well">
                            <h4>Revenue</h4>
                            <p>Up 30%<span className="glyphicon">&#xe093;</span></p>
                            <a href="#">View Details:<span className="glyphicon">&#xe032;</span>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-sm-4">
                        <div className="well">
                            <p>Text</p>
                            <p>Text</p>
                            <p>Text</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="well">
                            <p>Text</p>
                            <p>Text</p>
                            <p>Text</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="well">
                            <p>Text</p>
                            <p>Text</p>
                            <p>Text</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8">
                        <div className="well">
                            <p>Text</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="well">
                            <p>Text</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Dashboard;
