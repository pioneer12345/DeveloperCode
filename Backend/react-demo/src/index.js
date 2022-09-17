import React from './react'; 
import ReactDOM from './react-dom';


class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {name:'计数器',number:0};
  }

  handleClick=()=>{
    console.log('click');
    // this.setState({number:this.state.number+1},()=>{console.log(this.state.number);}); 
    // this.setState({number:this.state.number+1},()=>{console.log(this.state.number);});
    // this.state.number = this.state.number +1;
    this.setState(prevState =>({number:prevState.number+1}));
    console.log(this.state.number);
    this.setState(prevState =>({number:prevState.number+1}));
    console.log(this.state.number);
  }

  render(){
    return (
      <div>
        <h1>{this.state.name}:{this.state.number}</h1>
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}

ReactDOM.render(<Clock />,document.getElementById('root'));
