/*
 * @Author: Chen Ma ma_chenn@163.com
 * @Date: 2022-09-09 13:38:32
 * @LastEditors: Chen Ma ma_chenn@163.com
 * @LastEditTime: 2022-09-26 14:48:21
 * @FilePath: \react-demo\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import ReactDOM from "react-dom";

// function WithLogger(OldComponent){
//   return class extends React.Component{
//     start = null;

//   UNSAFE_componentWillMount(){
//     this.start = Date.now();
//   }

//   componentDidMount(){
//     console.log(Date.now()- this.start);
//   }

//   render(){
//     return <OldComponent {...this.props} />
//   }
//   } 
// }

// class Hello extends React.Component{

//   render(){
//     return(
//       <div>Hello {this.props.id}</div>
//     );
//   }
// }

// let NewHello = WithLogger(Hello);


function fromLocalStorage(OldComponent,filedName){
  return class extends React.Component{
  
  state ={value:''}  

  componentDidMount(){
    let value = localStorage.getItem(filedName);
    this.setState({value});
  }

  handleChange = (event)=>{
    console.log('1');
    localStorage.setItem(filedName,event.target.value);
    this.setState({value:event.target.value});
  }

  render(){
    return (<OldComponent value ={this.state.value} />);
  }
  }
}


function fromAjax(OldComponent){
  return class extends React.Component{

    state ={value:''};

    componentDidMount(){
      fetch('/dict.json').then(response=>response.json()).then(data=>{
        let value = data[this.props.value];
        this.setState({value});
      });
    }

    render(){
      return (<OldComponent value={this.state.value}/>);
    }
  }
}

// class UserName extends React.Component{

//   // state = {value:''};

//   // componentDidMount(){
//   //   let value = localStorage.getItem('username');
//   //   this.setState({value});
//   // }


//   // onChange=(event)=>{
//   //   this.setState({value:event.target.value});
//   // }

//   render(){
//     return (<input value={this.props.value} onChange={this.props.handleChange}></input>)
//   }
// }


class Filed extends React.Component{

  // state = {value:''};

  // componentDidMount(){
  //   let value = localStorage.getItem('password');
  //   this.setState({value});
  // }


  // onChange=(event)=>{
  //   this.setState({value:event.target.value});
  // }

  render(){
    return (<input defaultValue={this.props.value}></input>)
  }
}

const AjaxUserName = fromAjax(Filed);
const LocalUserName = fromLocalStorage(AjaxUserName,'username');

ReactDOM.render(<><LocalUserName/></>, document.getElementById("root"));
