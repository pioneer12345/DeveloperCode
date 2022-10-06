/*
 * @Author: Chen Ma ma_chenn@163.com
 * @Date: 2022-10-05 10:33:58
 * @LastEditors: Chen Ma ma_chenn@163.com
 * @LastEditTime: 2022-10-05 16:40:32
 * @FilePath: \react-demo\src\react-router-dom\Route.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import RouteContext  from './context';
import pathToRegexp from 'path-to-regexp';

export default class extends React.Component{
    static contextType = RouteContext
    render(){
        let { exact = false,path = "/",component:RouteComponent} = this.props;
        let pathname = this.context.location.pathname;
        let paramNames = [];
        let regexp = pathToRegexp(path,paramNames,{exact});
        let result = pathname.match(regexp);
        if(result){
            return <RouteComponent/>
        }else{
            return null;
        }
    }
}