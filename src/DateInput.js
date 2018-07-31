import React, { Component } from 'react';

class DateInput extends Component {
    deleteThis(){
      this.props.communicate(1,this.props.index)
    }

    render() {
      return (
        <div >
          <input disabled = {this.props.disabled} type = "date" ></input>
          <button disabled = {this.props.disabled} onClick={this.deleteThis.bind(this)}>删除</button>
        </div>
      );
    }
  }
  
  export default DateInput;
  
