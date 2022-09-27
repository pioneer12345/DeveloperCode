/*
 * @Author: Chen Ma ma_chenn@163.com
 * @Date: 2022-09-09 13:38:32
 * @LastEditors: Chen Ma ma_chenn@163.com
 * @LastEditTime: 2022-09-27 09:56:59
 * @FilePath: \react-demo\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import ReactDOM from "react-dom";

class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

function withMouseTracker(OldComponent){
    return props=><MouseTracker render = { value => <OldComponent {...props}{...value}></OldComponent>} ></MouseTracker>
}

const RenderComponet =  props=>(
    <>
        <h1>移动鼠标</h1>
        <p>您当前鼠标的位置为{props.x},{props.y}</p>
    </>
);

const NewMouseTracker = withMouseTracker(RenderComponet);


ReactDOM.render(
    <NewMouseTracker />,
    document.getElementById("root")
  );

// ReactDOM.render(
//     <MouseTracker render={
//         props=>(
//             <>
//                 <h1>移动鼠标</h1>
//                 <p>您当前鼠标的位置为{props.x},{props.y}</p>
//             </>
//         )
//     }/>,
//     document.getElementById("root")
//   );

// ReactDOM.render(
//   <MouseTracker>
//     {
//         props=>(
//             <>
//                 <h1>移动鼠标</h1>
//                 <p>您当前鼠标的位置为{props.x},{props.y}</p>
//             </>
//         )
//     }
//   </MouseTracker>,
//   document.getElementById("root")
// );
