import React from 'react';
// import CartItem from './CartItem'
// import CartResult from './CartResult';
class Cart extends React.Component {
    render() {
        var {children} = this.props;
        return (
            <section className="section">
                    <div className="table-responsive">
                        <table className="table product-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th><h4>Sản Phẩm</h4></th>
                                    <th><h4>Giá</h4></th>
                                    <th><h4>Số Lượng</h4></th>
                                    <th><h4>Tổng Cộng</h4></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {children}
                            </tbody>
                        </table>
                    </div>
                </section>
        );
    }
}
export default Cart;
