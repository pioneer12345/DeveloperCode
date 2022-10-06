/*
 * @Author: Chen Ma ma_chenn@163.com
 * @Date: 2022-09-09 13:38:32
 * @LastEditors: Chen Ma ma_chenn@163.com
 * @LastEditTime: 2022-09-23 13:48:54
 * @FilePath: \react-demo\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'; 
import ReactDOM from 'react-dom';


class ScrollList extends React.Component{
  constructor(props){
    super(props);
    this.container = React.createRef();
    this.state = {messages:[]};
  }

  componentDidMount(){
    this.timer = setInterval(() => {
      this.setState({
        messages:[`${this.state.messages.length}`,...this.state.messages]
      });
    }, 1000);
  }

  /**
   * 获取更新前的DOM
   */
  getSnapshotBeforeUpdate(){
    return this.container.current.scrollHeight;

  }

  /**
   * 更新完后DOM改变
   */
  componentDidUpdate(nextProps,nextState,prevScrollHeight){

    let nextScrollTop = this.container.current.scrollTop;
    console.log('nextScrollTop:'+nextScrollTop);
    this.container.current.scrollTop = nextScrollTop + (this.container.current.scrollHeight - prevScrollHeight);
    console.log('newScrollTop:'+this.container.current.scrollTop);
  }

  render(){
    let styleObj = {
      width: '100px',
      height: '100px',
      border:'1px solid red',
      overflow:'auto'
    }
    return(
      <div style ={styleObj} ref={this.container}>
        {

          this.state.messages.map((item, index) => (
            <div key={index}>{item}</div>
          ))
        }
      </div>
    )
  }
}

ReactDOM.render(<ScrollList />,document.getElementById('root'));
