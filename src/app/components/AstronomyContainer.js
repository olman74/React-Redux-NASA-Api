import React, { Component } from 'react';
import AstronomyCard from './AstronomyCard';
import axios from 'axios';
import { connect } from 'react-redux';
import fetchData from '../../actions/fetch_data'

class AstronomyContainer extends Component {

    constructor() {
        super();
        this.state = {
            astronomy: []
        }
    }

    componentDidMount() {
        this.props.fetchData();
    }
    render() {
        return (<AstronomyCard data={this.props.astronomy} />);
    }
}

function mapStateToProps(state) {
    return { astronomy: state.astronomy };
}

export default connect(mapStateToProps, { fetchData })(AstronomyContainer);