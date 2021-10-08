import React, { Component } from 'react';
import "./App.scss";
import "./functionApp";

export interface IApp {
  passState: number;

}

export default class App extends Component {
  state: IApp = {
    passState: 0,
  }


  componentDidMount(){
  }

  incFun(){
    this.setState({
      passState: this.state.passState + 1
    })
  }

  decFun(){
    if(this.state.passState !== 0){
      this.setState({
        passState: this.state.passState - 1
      })
    }
    else{
      return;
    }
  }

  gamefun(){
    console.log(this.state.passState)
    if(this.state.passState === 0){
      return("let Start");
    }
    else if(this.state.passState % 3 === 0){
      return("fizz");
    }
    else if(this.state.passState % 5 === 0){
      return("buzz");
    }
    else{
      return(
        this.state.passState
      );
    }
  }

  render() {
    return (
      <div className="row" style={{margin:"0px"}}>
          <div className="col-xl-5 offset-xl-3 block">
          <div className="col-12" style={{fontWeight:"bolder", fontSize:"25px", textDecoration:"underline"}}> Fizz & Buzz Game</div>
          <div style={{marginBottom:"15px", paddingTop:"25px"}}></div>
            <div style={{marginBottom:"15px"}}> {this.gamefun()}</div>
            <div>
                <button style={{marginRight:"15px"}} onClick={() => {this.incFun()}}>inc</button>
                <button onClick={() => {this.decFun()}}>Dec</button>
            </div>
            <div style={{paddingTop:"25px", fontSize:"14px"}}>Note:-<span>divisable by 3 "fizz" & divisable by 5 "buzz"</span></div>
          </div>
      </div>
    )
  }
}
