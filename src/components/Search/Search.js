import React, { Component } from 'react';
import './Search.css';

export class Search extends Component {
    render() {
        // const { order } = this.props;

        return (
            <div className="Search">
                <input type="text" placeholder="Название сериала" />
                <button>Найти</button>
            </div>
        );
    }
}

export default Search;
