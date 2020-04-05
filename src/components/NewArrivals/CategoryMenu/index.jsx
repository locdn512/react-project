import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './CategoryMenu.css';

class CategoryMenu extends PureComponent {
    render() {
        const { activeCategoryMenu, categoryMenu } = this.props;
        return (
            <div className="row align-items-center">
                <div className="col text-center">
                    <div className="new_arrivals_sorting">
                        <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                            {/* <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked" data-filter="*">all</li>
                            <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".women">women's</li>
                            <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".accessories">accessories</li>
                            <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".men">men's</li> */}
                            {
                                categoryMenu.map(
                                    category => {
                                        const isActive = category.id === activeCategoryMenu;
                                        const classNameli = 'grid_sorting_button button d-flex flex-column justify-content-center align-items-center ';
                                        return (
                                            <li
                                                className={isActive ? classNameli + 'active is-checked' : classNameli}
                                                data-filter={'.' + category.searchTerm}
                                            >
                                                {category.name}
                                            </li>
                                        );
                                    }
                                )
                            }

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

CategoryMenu.propTypes = {
    activeCategoryMenu: PropTypes.string,
    categoryMenu: PropTypes.array,
};
CategoryMenu.defaultProps = {
    activeCategoryMenu: '',
    categoryMenu: [],
}

export default CategoryMenu;