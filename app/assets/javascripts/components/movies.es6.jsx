const Movies => {
  const { Title, Actors } = this.props.data
  return(
    <div>
      {Title}
      {Actors}
    </div>
  )
}
