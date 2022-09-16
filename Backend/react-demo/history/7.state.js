import React from 'react'; 
import ReactDOM from 'react-dom';

class Clock extends React.Component{
  state = {date:new Date()}
  constructor(props){
    super(props);
    // this.state = { date: new Date() };
  }
  componetWillMount(){//即将挂载

  }
  componentDidMount(){//挂载完成
    this.timer = setInterval(()=>{
      this.setState({date:new Date()});
    },1000);
  }
  render(){
    return (
      <div>
        <h1>Hello world</h1>
        <h2>当前的时间为：{this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}


ReactDOM.render(<Clock />,document.getElementById('root'));
