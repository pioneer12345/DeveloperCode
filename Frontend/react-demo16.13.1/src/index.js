/*
 * @Author: Chen Ma ma_chenn@163.com
 * @Date: 2022-09-09 13:38:32
 * @LastEditors: Chen Ma ma_chenn@163.com
 * @LastEditTime: 2022-10-06 15:58:47
 * @FilePath: \react-demo\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import ReactDOM from "react-dom";
import {Routes} from "react-router-dom";
import {Link,Route,HashRouter} from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import Profile from "./components/Profile";

ReactDOM.render(
  <HashRouter>
    <>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to={{pathname:"/user",state:{id:1}}}>User</Link></li>
      <li><Link to="/profile">Profile</Link></li>
    </ul>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/user" element={<User />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </>
  </HashRouter>
  ,
  document.getElementById('root')
);