import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Slider from '../../components/Slider';
import Banner from '../../components/Banner';

class HomePage extends PureComponent {
    render() {
        return (
            <div>
                <Slider />
                <Banner />
            </div>
        );
    }
}

HomePage.propTypes = {
};

export default HomePage;