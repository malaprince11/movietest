import React from 'react';
import { List } from './component/MovieList';
import { Details } from './component/Details'
import SearchBox from './component/SearchBox';
import Navbar from './component/Navbar'
import Footer from './component/Footer'

import './App.css';


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            searchfieald: '',
            details: ''
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=eb2da9f4865b11165c5751549731b90a&language=en-US&page=1%27')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({ movies: users.results })
                console.log("++", this.state.movies);
            })
    }

    onSearchChange = (event) => {
        this.setState({ searchfieald: event.target.value })
    }

    handleClick(event) {
        console.log(this.state.details);
        if (this.state.details === '') {
            this.setState({ details: 'show' }, () => { console.log(this.state.details); });
        } else if (this.state.details === 'show') {
            this.setState({ details: '' }, () => { console.log(this.state.details); });
        }

    }
render() {
        const filteredMovies = this.state.movies.filter(movie => {

            return movie.title.toLowerCase().includes(this.state.searchfieald.toLowerCase())
        });
        // const id = this.state.movies.map(id => {
        //     console.log("GGGGGGGGG", id.id);
        //     return id.id
        // })

        let manage;
        if (this.state.details === 'show') {
            manage = <Details movies={filteredMovies} />
        }
        return (
            <div class='tc'>
                <Navbar />
                <h1>Movie app</h1>
                <hr className="hr" />
                <SearchBox searchChange={this.onSearchChange} />
                <div className="content">
                    <List className= "list" movies={filteredMovies} click={this.handleClick.bind(this)} select={this.state.details}  />
                </div>
                <div className="details">
                    {manage}
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;