import React from 'react'; 
import ReactDOM from 'react-dom';


/**
 * 
 * 函数组件的渲染
 */
function Welcome1(props){
  return <h1>hello {props.name}</h1>
}

let element = <Welcome1 name = 'title1'></Welcome1>
ReactDOM.render(element,document.getElementById('root'));

/**
 * 
 * 类组件的渲染
 */
class Welcome2 extends React.Component{
  render(){
    return <h1>hello {this.props.name}</h1>
  }
}

let element1 = <Welcome2 name = "title2"></Welcome2>
ReactDOM.render(element1,document.getElementById('root'));
