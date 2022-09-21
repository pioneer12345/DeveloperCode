import {updateComponent} from "./react-dom";

export class Component{
  static isReactComponent = true;
  constructor(props){
    this.props = props;
    this.updateQueue=[];
    this.callBack=[];
    this.isBatchingUpdate= false;
    this.refs ={};
  }
  setState(partialState,callBack){
    if(callBack) this.callBack.push(callBack);
    this.updateQueue.push(partialState);
    if(!this.isBatchingUpdate){
      this.forceUpdate();
    }
  }
  forceUpdate(){
    if(this.updateQueue.length == 0){
      return;
    }
    this.state = this.updateQueue.reduce((accumulate,current)=>{
      let nextState = typeof current == 'function'? current(accumulate):current;
      accumulate = {...accumulate,...nextState};
      return accumulate;
    },this.state);
    this.updateQueue.length = 0;
    this.callBack.forEach(cb=>cb());
    this.callBack.length = [];
    if(this.shouldComponentUpdate && !this.shouldComponentUpdate(this.props,this.state)){
      return;
    }
    this.UNSAFE_componentWillUpdate();
    updateComponent(this);
    this.componentDidUpdate();
  }
}

export function createRef(){
  return {current:null}
}

export function forwardRef(functionComponent){
  return class extends Component{
    render(){
      return functionComponent(this.props,this.props.ref1);
    }
  }
}

export function createElement(type,config = {},...children){
    let props = {...config,children};
    return {
      type,
      props
    }
}

export default {createElement,Component,createRef,forwardRef}