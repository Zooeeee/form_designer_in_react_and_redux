import React, { Component } from 'react';

class Add extends Component{

    addOneDateInput(){
    
        this.props.communicate(1)
      }
    addOneTextInput(){
        this.props.communicate(2)
      }
    
    
      render(){
        return (<div>
            <button onClick = {this.addOneDateInput.bind(this)} disabled = {this.props.disabled}>添加日期框</button>
            <button onClick = {this.addOneTextInput.bind(this)} disabled = {this.props.disabled}>添加文本框</button>
        </div>)
    }



}

export default Add 