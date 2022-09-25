import React from 'react'; 
import ReactDOM from 'react-dom';

class Counter extends React.Component{
  static defaultProps = {name:"测试"};
  constructor(props){
    super(props);
    this.props = props;
    this.state = {number:0};
    console.log('1.开始初始化！');
  }

  UNSAFE_componentWillMount(){
    console.log('2.组件将要挂载！');
  }

  componentDidMount(){
    console.log('4.组件挂载完成！');
  }

  shouldComponentUpdate(nextProps,nextState){
    return true;
    console.log('5.询问组件是否应该更新！');
    return nextState.number % 2 == 0;
  }
  
  handleClick = ()=>{
    this.setState({number:this.state.number+1});
  }

  UNSAFE_componentWillUpdate(){
    console.log('6.组件将要更新！');
  }

  render(){
    console.log('3.组件开始渲染！');
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={this.handleClick}>+</button>
        <hr></hr>
        {this.state.number>100?null:<SubCounter count={this.state.number} />}
      </div>
    );
  }

  componentDidUpdate(){
    console.log('7.组件更新完成！');
  }

}

class SubCounter extends React.Component{

  constructor(props){
    super(props);
    this.state = {count:0};
  }

  componentWillReceiveProps(){
    console.log("1. 组件接收到属性");
  }

  static getDerivedStateFromProps(nextProps,prevState){
    console.log("3. 从属性中获取继承的状态");
    let {count} = nextProps;
    return {count:prevState.count + count};
  }

  render(){
    console.log("2. 组件开始渲染");
    return(
      <div>
        {this.state.count}
      </div>
    );
  }

  componentWillUnmount(){
    console.log('3.组件将要卸载');
  }
}

ReactDOM.render(<Counter />,document.getElementById('root'));