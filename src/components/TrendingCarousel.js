import React from 'react';
import './layout/TrendingCarousel.css'
import TrendingCarouselItemContainer from './../containers/TrendingCarouselItemContainer';
class TrendingCarousel extends React.Component {
    render() {
        var disabledPre = false;
        var disabledNext = false;
        if (this.props.index === 0) {
            disabledPre = true;
        }
        if (this.props.index === this.props.length/4 - 1) {
            disabledNext = true;
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Trending <b>Products</b></h2>
                        <div className="carousel slide" >
                            <TrendingCarouselItemContainer />
                            {/* Carousel controls */}
                            <button className="carousel-control left carousel-control-prev" disabled={disabledPre}  onClick={this.controlPre}  >
                                <i className="fa fa-angle-left" />
                            </button>
                            <button className="carousel-control right carousel-control-next" disabled={disabledNext} onClick={this.controlNext}  >
                                <i className="fa fa-angle-right" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
    controlPre = () => {
        this.props.reduction();
    }
    controlNext = () => {
        this.props.increase();
    }
}
export default TrendingCarousel;
