/*
 * @Author: Chen Ma ma_chenn@163.com
 * @Date: 2022-10-05 10:33:35
 * @LastEditors: Chen Ma ma_chenn@163.com
 * @LastEditTime: 2022-10-06 15:52:08
 * @FilePath: \react-demo\src\react-router-dom\hashrouter.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import React from "react";
import qs from "qs";
import RouteContext from "./context";

function parseHash (hash) {
    hash = hash.slice(1);
    let index = hash.lastIndexOf('?');
    let pathname = hash.slice(0,index);
    let search = hash.slice(index);
    let query = qs.parse(search.slice(1));
    return {pathname,search,query};
};

export default class extends React.Component{
    static contextType = RouteContext;

    state = {
    location:{...parseHash(window.location.hash || '/')}
    }

    componentDidMount(){
    window.addEventListener('hashchange',(event)=>{
        let {pathname,search,query} = parseHash(window.location.hash);
        this.setState({
            location:{
                ...this.state.location,
                pathname,
                search,
                query,
                state:this.locationState || this.state.location.state
            }
        });
    })
    window.location.hash = window.location.hash || '/';
    }

    render(){
        console.log('hashrouter');
        let value = {
        location:this.state.location,
        history:{
            location:this.state.location,
            push(to){
                if(typeof to === 'object'){

                }else if(typeof to === 'string'){
                    window.location.hash = to;
                }    
            }
        }
    }
    
    return (
        <RouteContext.Provider value={value}>
            {this.props.children}
        </RouteContext.Provider>
    )
}
};

