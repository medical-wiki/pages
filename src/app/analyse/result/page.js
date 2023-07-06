"use client";
import React from 'react';
import Results from "./Results"

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="min-h-screen">
        <br></br>
        <Results />
      </div>
    )
  }
}
export default Page;