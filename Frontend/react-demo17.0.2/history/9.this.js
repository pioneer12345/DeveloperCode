import React from './react'; 
import ReactDOM from './react-dom';


class SubCounter extends React.Component{
  constructor(props){
    super(props);
    this.state = {name:'计数器',number:0};
  }
  render(){
    return (
      <div>
        <h1>SubCounter:{this.props.counter}</h1>
      </div>
    )
  }
}

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {name:'计数器',number:0};
    this.handleClick = this.handleClick.bind(this);
  }

  // componentWillMount(){
  //   this.timer = setInterval(() => {
  //   this.setState(prevState =>({number:prevState.number+1}),()=>{console.log(this.state.number);});
  //   console.log(this.state.number);   
  // }, 1000);
  // }

  handleClick(id,event){
    this.setState(prevState =>({number:prevState.number+id}));
    console.log(this.state.number);
  }

  render(){
    return (
      <div>
        <h1>{this.state.name}:{this.state.number}</h1>
        <ul>
          <li onClick = {(event)=>{ this.handleClick(1,event)}}>1</li>
          <li onClick = {(event)=>{ this.handleClick.bind(this,2)(event)}}>2</li>
          <li onClick = {(event)=>{ this.handleClick.bind(this,3)(event)}}>3</li>
        </ul>
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}

ReactDOM.render(<Clock />,document.getElementById('root'));
