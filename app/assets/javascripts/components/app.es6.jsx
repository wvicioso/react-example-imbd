class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: ''
    }
    this.handleMovie = this.handleMovie.bind(this)
  }

  handleMovie(movie){
    $.ajax({
      url: 'http://www.omdbapi.com/?t=' + movie.value,
      method: 'get'
    }).done((response) => {
      this.setState({
        movies: response
      })
      movie.value = ''
    }).fail((error) => {
      console.log(error)
    })
  }

  render(){
    return(
      <div>
        <SearchBar showMovie={this.handleMovie}/>
        <Movies data={this.state.movies}/>
      </div>
    )
  }
}
