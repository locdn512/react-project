import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Slider from '../../components/Slider';
import Banner from '../../components/Banner';
import Deal from '../../components/Deal';
import NewArrivals from '../../components/NewArrivals';

class HomePage extends PureComponent {
    render() {
        return (
            <div>
                <Slider />
                <Banner />
                <NewArrivals />
                <Deal />
            </div>
        );
    }
}

HomePage.propTypes = {
};

export default HomePage;