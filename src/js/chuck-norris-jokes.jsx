import React, { Component } from 'react';
import { arrayOf, object, string } from 'prop-types';
import { getAllChuckNorrisJokes } from './services/chuck-norris-service';

function Joke({ joke }) {
    return <p>{joke.joke}</p>;
}

export default class ChuckNorrisJokes extends Component {
    constructor(props) {
        super(props);
  
        this.getChuckNorrisJokes = this.getChuckNorrisJokes.bind(this);
        this.state = {
            jokes: [],
            isLoading: false,
            background: '',
        };
    }

    static getDerivedStateFromProps(props, state) {
        let background = '';
        
        if (props.lang === 'en') {
            background = 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png';
        }

        if (props.lang === 'bg') {
            background = 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg';
        }

        return {
            background
        };
    }

    componentWillUnmount() {
        alert('Are you sure you wanna do this ?');
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.lang !== 'en' && nextProps.lang !== 'bg') {
            return false;
        }

        return true;
    }

    getChuckNorrisJokes() {
        this.setState({ isLoading: true }, () => {
            getAllChuckNorrisJokes().then(jokes => 
                this.setState({ jokes, isLoading: false }));
        });
    }
  
    render() {
        const jokes = this.props.jokes.length ? this.props.jokes : this.state.jokes;

        if (!jokes.length || this.state.isLoading) {
            return <div>Loading jokes ...</div>;
        }

        return (
            <div style={{ backgroundImage: `url(${this.state.background})` }}>
                <h2>Chuck Norris Jokes:</h2>
                <ul>
                    {
                        jokes.map(joke => {
                            return (
                                <li key={joke.id}>
                                    <Joke joke={joke} />
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }

    componentDidMount() {
        this.getChuckNorrisJokes();
    }
}

ChuckNorrisJokes.defaultProps = {
    jokes: []
};

ChuckNorrisJokes.propTypes = {
    jokes: arrayOf(object).isRequired,
    lang: string.isRequired
};