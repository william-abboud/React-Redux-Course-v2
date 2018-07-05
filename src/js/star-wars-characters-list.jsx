import React from 'react';
import { getStarWarsCharacters } from './services/star-wars-service';

function LoadingScreen() {
    return (
        <div className="loading-screen">
           ♻️
        </div>
    );
}

export default class StarWarsCharactersList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: [],
            currentPage: 1,
            isLoading: false
        };

        this.getStarWarsCharactersByPage = this.getStarWarsCharactersByPage.bind(this);
        this.loadNextPage = this.loadNextPage.bind(this);
    }

    getStarWarsCharactersByPage(page) {
        if (this.state.isLoading) {
            return;
        }

        this.setState({ isLoading: true }, () => {
            getStarWarsCharacters(page)
                .then(data => {
                    this.setState({
                        characters: data.results,
                        currentPage: page,
                        isLoading: false
                    });
                })
                .catch(() => {
                    this.setState({ isLoading: false });
                })
        });
    }

    loadNextPage() {
        const { currentPage } = this.state;
        this.getStarWarsCharactersByPage(currentPage + 1);
    }

    componentWillReceiveProps({ page }) {
        this.getStarWarsCharactersByPage(page);
    }

    render() {
        const { characters } = this.state;

        if (!characters.length) {
            return <LoadingScreen />;
        }

        return (
            <React.Fragment>
                <ul className={this.props.theme}>
                    {
                        characters.map(character => <li key={character.url}>{character.name}</li>)
                    }
                </ul>

                <button onClick={this.loadNextPage}>Load next page</button>
            </React.Fragment>
        );
    }

    componentDidMount() {
        this.getStarWarsCharactersByPage(this.props.page);
    }
}