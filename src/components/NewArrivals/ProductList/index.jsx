import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './ProductList.css';

class ProductList extends PureComponent {
    render() {
        const { productList } = this.props;
        return (
            <div className="row">
                <div className="col">
                    <div className="product-grid" data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'>
                        {
                            productList.data.map(
                                product => {
                                    return (
                                        <div className="product-item men">
                                            <div className="product product_filter">
                                                <div className="product_image">
                                                    <img src={product.images[0]} alt="" />
                                                </div>
                                                <div className="favorite"></div>
                                                <div className="product_info">
                                                    <h6 className="product_name"><a href="single.html">{product.name}</a></h6>
                                                    <div className="product_price">{product.salePrice}đ</div>
                                                </div>
                                            </div>
                                            <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>

                </div>
            </div>
        );
    }
}

ProductList.propTypes = {
    productList: PropTypes.array,
};

ProductList.defaultProps = {
    productList: [],
};

export default ProductList;