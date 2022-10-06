import React from 'react'; 
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class Person extends React.Component{
  static defaultProps ={
    name:'默认名称'
  }
  static propTypes = {
    name:PropTypes.string.isRequired,
    gender:PropTypes.oneOf(['male','female']),
    hobby:PropTypes.arrayOf(PropTypes.string),
    position:PropTypes.shape({
      x:PropTypes.number,
      y:PropTypes.number
    }),
    age(props,propName,componentName){
      let age =props[propName];
      if(age<0||age>120){
        throw new Error('年龄超过范围！');
      }
    }
  }
  render(){
    let {name,age,gender,hobby,position,friends} = this.props
    return (
      <table>
        <thead>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{age}</td>
            <td>{gender}</td>
            <td>{hobby.join(',')}</td>
            <td>{`x:${position.x},y:${position.y}`}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

let props = {
  name:'',
  age:121,
  gender:'male',
  hobby:['smoke','drink'],
  position:{x:10,y:20},
  friends:[
    {name:'张三',age :10},
    {name:'李四',age :20}
  ]
}

let element = <Person {...props}></Person>
ReactDOM.render(element,document.getElementById('root'));
