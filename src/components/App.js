import React from "react";
import celeba from "../api/celeba";
import "../styles/App.css";
import Numpad from "./Numpad";

class App extends React.Component {
  state = { image: {} };

  onKeyDown = (event) => {
    const rating = event.keyCode - 96;
    if (rating >= 0 && rating < 10) this.sendRating(rating);
  };

  componentDidMount() {
    document.body.addEventListener("keydown", this.onKeyDown);
    this.loadNext();
  }

  componentWillUnmount() {
    document.body.removeEventListener("keydown", this.onKeyDown);
  }

  getTitle = () => this.state.image.title;

  sendRating = (rating) => {
    celeba.post("/img", {
      name: this.state.image.title,
      rating: rating,
    });
    this.loadNext();
  };

  loadNext = async () => {
    const { data } = await celeba.get("/img");
    this.setState({
      image: data,
    });
  };

  render() {
    return (
      <div className="ui center aligned grid">
        <div className="ui compact segment">
          <h1>celeba</h1>
          <img
            className="ui large image"
            src={this.state.image.src}
            alt={this.state.image.title}
          ></img>
          <div className="ui horizontal divider"></div>
          <button
            className="ui right floated button"
            onClick={() => this.sendRating(0)}
          >
            Skip
          </button>
          <Numpad getTitle={this.getTitle} sendRating={this.sendRating} />
        </div>
      </div>
    );
  }
}

export default App;
