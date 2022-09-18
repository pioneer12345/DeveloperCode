import React from './react'; 
import ReactDOM from './react-dom';

function TextInput(props,ref1){
  return <input ref1={ref1}></input>
}

const FowardTextInput = React.forwardRef(TextInput);


class Form extends React.Component{
  constructor(props){
    super(props);
    this.textinput = React.createRef();
  }
   
  getFocus=()=>{
    this.textinput.current.focus();
    this.textinput.current.value = 'focus';
  }

  render(){
    return (
      <div>
        <FowardTextInput ref1 = {this.textinput}></FowardTextInput>
        <button onClick={this.getFocus}>获取焦点</button>
      </div>
    )
  }
}

// function TextInput(props){
//   return <input></input>;
// }

// class TextInput extends React.Component{

//   constructor(props){
//     super(props);
//     this.input = React.createRef();
//   }

//   getFocus=()=>{
//     this.input.current.focus();
//     this.input.current.value = 'focus';
//   }

//   render(){
//     return <input ref1={this.input}></input>
//   }
// }


ReactDOM.render(<Form />,document.getElementById('root'));
