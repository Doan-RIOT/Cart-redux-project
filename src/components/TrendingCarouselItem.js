import React from 'react';
import './layout/TrendingCarousel.css'
class TrendingCarouselItem extends React.Component {
    render() {

        var rate = Math.floor(Math.random() * 5) + 1;
        var sale = Math.floor(Math.random() *100);
        var { products, trendingcarousel } = this.props;
        var active = 'active'
        return (
            <div className="carousel-inner">
                {this.showTrendingItem(products, rate,sale, trendingcarousel)}
            </div>
        );

    }
    showTrendingItem = (products, rate,sale, trendingcarousel) => {
        var result = [];
        for (let i = 0; i < products.length; i += 4) {
            var active = '';
            if ((i) / 4 === trendingcarousel) {
                active = 'active'
            }
            result.push(this.showContent(products.slice(i, i + 4), rate,sale, active,i));
        }
        return result;
    }
    showContent = (products, rate,sale, active, i) => {
        return (
            <div key ={i}className={`item carousel-item ${active}`}>
                <div className="row">
                    {products.map((product, index) => {
                        return (
                            <div key={index} className="col-sm-3">
                                <div className="thumb-wrapper">
                                    <div className="img-box">
                                        <img src={product.image} className="img-responsive img-fluid" alt={product.name} />
                                    </div>
                                    <div className="thumb-content">
                                        <h4>{product.name}</h4>
                                        <p className="item-price"><strike>${product.price/20000}</strike> <span>${(product.price*(1-sale/100)/20000).toFixed(1)}</span></p>
                                        <div className="star-rating">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    {this.showRating(rate)}
                                                </li>
                                            </ul>
                                        </div>
                                        <a href="#" className="btn btn-primary">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
    showRating = (rate) => {
        if (rate > 0) {
            var result = [];
            for (let i = 1; i <= rate; i++) {
                result.push(<i key={i} className="fa fa-star" />);
            }
            for (let i = 1; i <= 5 - rate; i++) {
                result.push(<i key={i + rate} className="fa fa-star-o" />);
            }
            return result;
        }
    }
}
export default TrendingCarouselItem;
