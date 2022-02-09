import React, { Component } from "react";

export class Item extends Component {
  render() {
    let { name, price, imgUrl, iurl, id } = this.props;
    return (
      <div className="container my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{price}</p>
            <a href={iurl} target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
