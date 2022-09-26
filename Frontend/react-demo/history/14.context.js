/*
 * @Author: Chen Ma ma_chenn@163.com
 * @Date: 2022-09-09 13:38:32
 * @LastEditors: Chen Ma ma_chenn@163.com
 * @LastEditTime: 2022-09-25 10:20:04
 * @FilePath: \react-demo\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import ReactDOM from "react-dom";
// import ThemeContext from "./context";

function createContext(){
  let value;
  function Provider(props){
    Provider.value = props.value;
    return props.children;
  }

  function Consumer(props){
    return props.children(Provider.value);
  }

  return {Provider,Consumer};
}

let ThemeContext  = React.createContext();
class Main extends React.Component {
  render() {
    console.log('1'+this.props.changeColor);
    return (
      <div
        style={{
          margin: "10px",
          border: `5px solid ${this.props.color}`,
          padding: "5px",
        }}
      >
        Main
        <Content changeColor={this.props.changeColor} color={this.props.color} />
      </div>
    );
  }
}

class Content extends React.Component {
  static contextType = ThemeContext
  render() {
    console.log('2'+this.props.changeColor);
    return (
      <div
        style={{
          margin: "10px",
          border: `5px solid ${this.props.color}`,
          padding: "5px",
        }}
      >
        Content
        <button onClick={() => this.context.changeColor('red')}>红</button>
        <button onClick={() => this.context.changeColor('green')}>绿</button>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div
        style={{
          margin: "10px",
          border: `5px solid ${this.props.color}`,
          padding: "5px",
        }}
      >
        Header
        <Title changeColor={this.props.changeColor} color={this.props.color} />
      </div>
    );
  }
}

// class Title extends React.Component {
//   render() {
//     return (
//       <div
//         style={{
//           margin: "10px",
//           border: `5px solid ${this.props.color}`,
//           padding: "5px",
//         }}
//       >
//         Title
//       </div>
//     );
//   }
// }

function Title(props){
  return(
    <ThemeContext.Consumer>
      {
        value =>(
          <div
          style={{
            margin: "10px",
            border: `5px solid ${value.color}`,
            padding: "5px",
          }}>
          Title
        </div>
        )
      }
    </ThemeContext.Consumer>
  )
}

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }

  changeColor = (color) => {
    this.setState({ color });
  };

  render() {
    let value = {color:this.state.color,changeColor:this.changeColor};
    return (
      <ThemeContext.Provider value = {value}>
        <div
        style={{
          margin: "10px",
          border: `5px solid ${this.state.color}`,
          padding: "5px",
          width: "200px",
        }}
      >
        Panel
        <Header changeColor={this.changeColor} color={this.state.color} />
        <Main changeColor={this.changeColor} color={this.state.color} />
      </div>
      </ThemeContext.Provider>
    );
  }
}

ReactDOM.render(<Panel />, document.getElementById("root"));
