"use client";
import React from 'react';
import IR from "./ir"
import IrResult from './irResult';
import irLogic1 from './irLogic1';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
      oldData: null,
      irResult: null
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  getData = (data) => {

    const irResult1 = irLogic1(data);

    if (this.isUpdatedData (data)) {
       this.setState({ isShown: true, irResult: irResult1, oldData: data });
    }
    
  }

  isUpdatedData = (data) => {
    let old = this.state.oldData;

    if (old?.insuline0 !== data?.insuline0) {
      return true;
    } else if (old?.insuline60 !== data?.insuline60) {
      return true;
    } else if (old?.insuline120 !== data?.insuline120) {
      return true;
    } else if (old?.glucose0 !== data?.glucose0) {
      return true;
    } else if (old?.glucose60 !== data?.glucose60) {
      return true;
    } else if (old?.glucose120 !== data?.glucose120) {
      return true;
    }

    return false;    
  }

  render() {
    return (
      <div className="min-h-screen">
        <br></br>
        <IR handleSubmitFunc={this.getData} />
        {(this.state.isShown) ? <IrResult result={this.state.irResult} /> : <></>}
      </div>
    )
  }
}
export default Page;