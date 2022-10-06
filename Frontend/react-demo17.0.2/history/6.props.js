import React from './react'; 
import ReactDOM from './react-dom';


// let element = (
//   <h1 className='title' style={{color:'red'}}>
//     hello
//     <span>world</span>
//   </h1>
// )

// let element = /*#__PURE__*/React.createElement("h1", {
//   className: "title",
//   style: {
//     color: 'red'
//   }
// }, "hello", /*#__PURE__*/React.createElement("span", null, "world"));
// console.log(element);

// function Welcome(props){
//   return React.createElement("h1", {
//     className: "title",
//     style: {
//       color: 'red'
//     }
//   }, "hello", /*#__PURE__*/React.createElement("span", null, "world"));
// }

class Welcome extends React.Component{
  render(){
    return React.createElement("h1", {
      className: "title",
      style: {
        color: 'red'
      }
    }, "hello", /*#__PURE__*/React.createElement("span", null, "world1"));
  }
}
// let element = <Welcome />
let element = React.createElement(Welcome,{});
console.log(element);


ReactDOM.render(element,document.getElementById('root'));
