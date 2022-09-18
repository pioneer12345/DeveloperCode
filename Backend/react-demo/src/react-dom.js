export function updateComponent(componentInstance){
    let element = componentInstance.render();
    let {type,props} = element;
    let dom  = createDOM(type,props,componentInstance);
    componentInstance.dom.parentNode.replaceChild(dom,componentInstance.dom);
    componentInstance.dom = dom;
}

function render(element,container,componentInstance){
    if(typeof element === 'string' || typeof element === 'number'){
        return container.appendChild(document.createTextNode(element))
    }
    let {type,props} = element;
    let isReactComponent = type.isReactComponent;
    if(isReactComponent){
        componentInstance = new type(props);
        if(props.ref1){
            props.ref1.current = componentInstance;
        }
        if(componentInstance.componentWillMount) componentInstance.componentWillMount();
        element = componentInstance.render();
        type = element.type;
        props = element.props;
    }
    else if(typeof type =='function'){
        element = type(props);
        type = element.type;
        props = element.props;
    }
    let dom = createDOM(type,props,componentInstance);
    if(isReactComponent && componentInstance){
        componentInstance.dom = dom;   
    }
    container.appendChild(dom);
    if(isReactComponent && componentInstance && componentInstance.componentDidMount){
        componentInstance.componentDidMount();
    }
}

function addEvent(dom,eventType,listener,componentInstance){
    eventType = eventType.toLowerCase();
    let enventStore = dom.enventStore || (dom.enventStore ={});
    enventStore[eventType] = {listener,componentInstance};
}

document.addEventListener('click',dispatchEvent,false);

function dispatchEvent(event){
    let {type,target} = event;
    while(target){
        let {enventStore} = target;
        if(enventStore){
            let {listener,componentInstance} = enventStore['on'+type];
            if(listener){
                if(componentInstance) componentInstance.isBatchingUpdate = true;
                listener.call(null,event);
                if(componentInstance){
                    componentInstance.isBatchingUpdate = false;
                    componentInstance.forceUpdate();
                }
            }
        }
        target = target.parentNode;
    }
}

function createDOM(type,props,componentInstance){
    let dom = document.createElement(type);
    for(let propName in props){
        if(propName === 'children'){
            if (props.children instanceof Array ){
                props.children.forEach(child => render(child,dom,componentInstance));
            }else{
                render(props.children,dom)
            }
        }else if(propName === 'className'){
            dom.className = props[propName];
        }else if(propName === 'style'){
            let styleObj = props[propName];
            for(let attr in styleObj){
                dom.style[attr] = styleObj[attr];
            } 
        }
        else if(propName.startsWith('on')){
            //dom[propName.toLowerCase()] = props[propName];
            addEvent(dom,propName,props[propName],componentInstance);
        }
        else{
            dom.setAttribute(propName,props[propName]);
        }    
    }
    if(props.ref1)
    {
        if(typeof props.ref1 == 'string'){
            componentInstance.refs[props.ref1] = dom;
        }
        else if(typeof props.ref1 == 'function'){
            props.ref1.call(componentInstance,dom);
        }
        else if(typeof props.ref1 == 'object'){
            props.ref1.current = dom;
        }
    }
    return dom;
}

export default { render }