import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOMTest from 'react-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// let element = <h1>hello</h1>
// let element = <h1 id = 'title'>hello<h2>world</h2></h1>
// let element = /*#__PURE__*/React.createElement("h1", {
//   id: "title"
// }, "hello", /*#__PURE__*/React.createElement("h2", null, "world"));
function createElement(type,config={},...children){
  return {
    type,
    props:{...config,children}
  }
}


let element = createElement("h1", {id:'title'}, "hello");
console.log(element);

ReactDOMTest.render(
  <h1>hello</h1>, document.getElementById('root')
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
