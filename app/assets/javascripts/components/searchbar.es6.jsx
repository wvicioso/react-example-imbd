
class SearchBar extends React.Component{
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    let movie = this.refs['input']
    this.props.showMovie(movie);
    }

  render(){
    return(
      <form id="search-form" onSubmit={this.handleSubmit}>
        <input ref="input" id="search" type="text" name="movie" />
        <input type="submit" value='search'/>
      </form>
    )
  }
}
