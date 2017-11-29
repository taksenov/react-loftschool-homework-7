import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { searchRequest } from '../../actions/searchActions';

import './Search.css';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = { searchInput: '' };
    }

    hanleInputChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }; //hanleInputChange

    handleSearch = () => {
        this.props.searchRequest(this.state.searchInput);
    }; //handleSearch

    render() {
        const { isFetching, films, test } = this.props;
        const { searchInput } = this.state;

        return (
            <div className="Search">
                <div className="SearchForm">
                    <input
                        type="text"
                        placeholder="Название сериала"
                        name="searchInput"
                        value={searchInput}
                        onChange={this.hanleInputChange}
                    />
                    <button onClick={this.handleSearch}>Найти</button>
                </div>
                <div className="SearсhResult">
                    {isFetching ? (
                        <div>
                            <p>Загрузка...</p>
                        </div>
                    ) : (
                        <div>
                            {films.map(film => (
                                <article className="results-item" key={film.id}>
                                    <h3>
                                        <Link to={`/shows/${film.id}`}>
                                            {film.name}
                                        </Link>
                                    </h3>
                                    {film.image && (
                                        <img
                                            src={film.image.original}
                                            alt={film.name}
                                        />
                                    )}
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: film.summary
                                        }}
                                    />
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    } //render
}

const mapStateToProps = state => ({
    isFetching: state.search.isFetching,
    films: state.search.films
});

const mapDispatchToProps = {
    searchRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
