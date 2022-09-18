import React from './react'; 
import ReactDOM from './react-dom';


class Calculator extends React.Component{

  // handleAdd = (event)=>{
  //   let a = this.refs.a.value;
  //   let b = this.refs.b.value;
  //   this.refs.result.value = parseFloat(a) + parseFloat(b);
  // }

  // render(){
  //   return (
  //     <div>
  //       <input ref1 = 'a' />+<input ref1 ='b' /><button onClick = {this.handleAdd}/>=<input ref1 = 'result'/>
  //     </div>
  //   )
  // }

  constructor(props){
    super(props);
    this.a = React.createRef();
    this.b = React.createRef();
    this.result = React.createRef();
  }

  handleAdd = (event)=>{
    debugger
    let a = this.a.current.value;
    let b = this.b.current.value;
    this.result.current.value = parseFloat(a) + parseFloat(b);
  }

  render(){
    return (
      <div>
        <input ref1 = {this.a} />+<input ref1 = {this.b} /><button onClick = {this.handleAdd}/>=<input ref1 = {this.result}/>
      </div>
    )
  }
}

ReactDOM.render(<Calculator />,document.getElementById('root'));
