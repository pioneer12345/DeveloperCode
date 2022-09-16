export class Component{
  static isReactComponent = true;
  constructor(props){
    this.props = props;
    this.updateQueue=[];
    this.isBatchingUpdate= false;
  }
  setState(partialState){
    this.updateQueue.push(partialState);
    if(!this.isBatchingUpdate){
      this.forceUpdate();
    }
  }
  forceUpdate(){
    this.state = this.updateQueue.reduce((accumulate,current)=>{
      let nextState = typeof current == 'function'? current(this.state):current;
      accumulate = {...accumulate,...nextState};
      return accumulate;
    },this.state);
    this.updateQueue.length = 0;
  }
}

export function createElement(type,config = {},...children){
    let props = {...config,children};
    return {
      type,
      props
    }
}

export default {createElement,Component}