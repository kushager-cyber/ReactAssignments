import React, { Component } from "react";
import Item from "./Item.js";
import { articles } from "./Data";
export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      articles: articles,
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(e) {
    let a = e.target.value;
    console.log(a);
    if (a !== "") {
      let res = articles.filter((val) =>
        val.name.toLowerCase().includes(a.toLowerCase())
      );
      if (res.length === 0) {
        alert("No Item Found");
      }
      this.setState({
        articles: res,
      });
      console.log(
        articles.filter((val) =>
          val.name.toLowerCase().includes(a.toLowerCase())
        )
      );
    } else {
      this.setState({
        articles: articles,
      });
    }
  }

  render() {
    return (
      <>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="index.html">
                Vastra
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="index.html"
                    >
                      Home
                    </a>
                  </li>
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2 "
                    type="search"
                    onChange={this.handleSearch}
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </div>
            </div>
          </nav>
        </header>
        <div className="container my-3">
          <h2>Buy the Best</h2>

          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Item
                    name={element.name}
                    price={element.price}
                    imgUrl={element.image}
                    iurl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
