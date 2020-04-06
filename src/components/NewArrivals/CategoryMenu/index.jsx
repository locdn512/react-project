import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './CategoryMenu.css';

class CategoryMenu extends PureComponent {
    handleCategoryClick = (category) => {
        const { onSelectedCategoryChange } = this.props;
        if (onSelectedCategoryChange) {
            onSelectedCategoryChange(category);
        }
    };

    render() {
        const { selectedCategoryId, categoryList } = this.props;
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
                                categoryList.map(
                                    category => {
                                        const isActive = category.id === selectedCategoryId;
                                        const classNameli = 'grid_sorting_button button d-flex flex-column justify-content-center align-items-center';
                                        return (
                                            <li
                                                key={category.id}
                                                className={isActive ? classNameli + ' active is-checked' : classNameli}
                                                onClick={() => this.handleCategoryClick(category)}
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
    selectedCategoryId: PropTypes.string,
    categoryList: PropTypes.array,
    onSelectedCategoryChange: PropTypes.func,
};
CategoryMenu.defaultProps = {
    selectedCategoryId: '',
    categoryList: [],
    onSelectedCategoryChange: null,
}

export default CategoryMenu;