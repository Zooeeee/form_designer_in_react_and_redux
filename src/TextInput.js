import React, { Component } from 'react';

class TextInput extends Component {
  
  deleteThis(){
    this.props.communicate(2,this.props.index)
  }

  render() {
      return (
        <div >
          <input disabled = {this.props.disabled} type = "text" ></input>
          <button  disabled = {this.props.disabled} onClick={this.deleteThis.bind(this)}>删除</button>
        </div>
      );
    }
  }
  
  export default TextInput;