import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Checkbox from "../components/Checkbox";
import {getFacetValues} from "../reducers/facets";
import {changeCurrency, changeTransplantsCount, changeTransplantsCountSingle} from "../actions/index";

const transplantsCountOptions = [
    {
        code: 'all',
        label: 'Все'
    },
    {
        code: 0,
        label: 'Без пересадок'
    },
    {
        code: 1,
        label: '1 пересадка'
    },
    {
        code: 2,
        label: '2 пересадки'
    },
    {
        code: 3,
        label: '3 пересадки'
    },
];
const currency = [
    {
        code: 'RUB',
        label: 'RUB'
    },
    {
        code: 'USD',
        label: 'USD'
    },
    {
        code: 'EUR',
        label: 'EUR'
    },
];

const Facets = ({facetValues, changeCurrency, changeTransplantsCount, changeTransplantsCountSingle}) => (
    <div className="facet-wrapper">
        <div className="facet">
            <div className="facet__title">
                Валюта
            </div>
            <div className="facet__values">
                <div className="chooser">
                    {currency.map(option =>
                        <a className={'chooser__element' + (facetValues.currency === option.code ? ' chooser__element_active' : '' )}
                           onClick={() => changeCurrency(option.code)}
                           key={option.code}>
                            { option.label }
                        </a>
                    )}
                </div>
            </div>
        </div>
        <div className="facet">
            <div className="facet__title">
                КОЛИЧЕСТВО ПЕРЕСАДОК
            </div>
            <div className="facet__values">
                <div className="checkboxes">
                    {transplantsCountOptions.map(option =>
                        <div className="checkboxes__element" key={"facet_checkbox_" + option.code}>
                            <Checkbox label={option.label} id={"facet_checkbox_" + option.code}
                                      checked={facetValues.transplantsCount.indexOf(option.code) !== -1}
                                      onChange={(value) => {
                                          changeTransplantsCount(option.code, value)
                                      }}/>
                            <span className="checkboxes__element-addition" onClick={() => {
                                changeTransplantsCountSingle(option.code)
                            }}>
                                    Только
                        </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
);

Facets.propTypes = {
    facetValues: PropTypes.shape({
        transplantsCount: PropTypes.array.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,
    changeCurrency: PropTypes.func.isRequired,
    changeTransplantsCount: PropTypes.func.isRequired,
    changeTransplantsCountSingle: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    facetValues: getFacetValues(state)
});

export default connect(
    mapStateToProps,
    {changeCurrency, changeTransplantsCount, changeTransplantsCountSingle}
)(Facets)
