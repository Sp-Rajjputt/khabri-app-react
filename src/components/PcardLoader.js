import React, { Component } from "react";
import PlaceholderCard from "./PlaceholderCard";

export default class PcardLoader extends Component {
  render() {
    return (
      <>
        <div className="container my-3">
          <div className="row">
            <div className="col-md-4">
              <PlaceholderCard />
            </div>
            <div className="col-md-4">
              <PlaceholderCard />
            </div>
            <div className="col-md-4">
              <PlaceholderCard />
            </div>   
          </div>
        </div>
      </>
    );
  }
}
