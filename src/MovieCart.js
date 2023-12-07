import React from "react";

class MovieCart extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Avenger",
      plot: "Supernatural powers",
      price: 99,
      rating: 8.9,
      stars: 0,
      fav: true,
      isInCart: false
    };
    // this.addStars=this.addStars.bind(this); if we use Arrow function not need to add this line
  }
  addStars = () => {
    //Method1
    if (this.state.stars >= 5) {
      return;
    }
    this.setState({
      stars: this.state.stars + 0.5
    });

    // Method2
    // this.setState((prevState)=>{
    //   return {
    //     stars:prevState.stars+0.5
    //   }
    // })
  };
  decreaseStars = () => {
    if (this.state.stars <= 0) {
      return;
    }
    this.setState({
      stars: this.state.stars - 0.5
    });
  };

  handleFav = () => {
    this.setState((prevState) => {
      return {
        fav: !prevState.fav
      };
    });
  };

  handleCart = () => {
    this.setState((prevState) => {
      return {
        isInCart: !prevState.isInCart
      };
    });
  };
  render() {
    const { title, plot, price, rating, stars, fav, isInCart } = this.state;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              alt="poster"
              src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
            />
          </div>

          <div className="right">
            <div className="title">{this.state.title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs.{price}</div>
            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  alt="Decrease"
                  src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                  className="str-btn"
                  onClick={this.decreaseStars}
                />
                <img
                  alt="star"
                  src="https://cdn-icons-png.flaticon.com/128/616/616490.png"
                  className="stars"
                />
                <img
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
                  className="str-btn"
                  onClick={this.addStars}
                />
                <span className="starCount">{stars}</span>
              </div>
              {fav ? (
                <button className="unfavourite-btn" onClick={this.handleFav}>
                  Un-favourite
                </button>
              ) : (
                <button className="favourite-btn" onClick={this.handleFav}>
                  Favourite
                </button>
              )}
              <button
                className={isInCart ? "remove-cart" : "cart-btn"}
                onClick={this.handleCart}
              >
                {isInCart ? "Remove from cart" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MovieCart;
