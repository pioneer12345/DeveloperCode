/*
 * @Author: Chen Ma ma_chenn@163.com
 * @Date: 2022-10-05 10:34:08
 * @LastEditors: Chen Ma ma_chenn@163.com
 * @LastEditTime: 2022-10-06 15:48:57
 * @FilePath: \react-demo\src\react-router-dom\Link.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import RouteContext from "./context";

export default class extends React.Component{
    render(){
      return <h1>hello {this.props.name}</h1>
    }
}








// class Link extends React.Component{
//     static contextType = RouteContext;
//     render(){
//         return (
//             <a onClick={
//                 ()=>this.context.history.push(this.props.to)}>
//                 {this.props.children}
//             </a>
//         )
//     }
// }
