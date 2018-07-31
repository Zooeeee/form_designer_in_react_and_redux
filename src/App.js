import React, { Component } from 'react';
//import View from './Confirm'
import DateInput from './DateInput';
import TextInput from './TextInput'
import Add from './Add'
import {createStore} from 'redux'

//定义一个初始的state
const init_state = {
  dateInput:[{
    id:0
  },
],
  textInput:[{
    id:0
  }]
}

//建立一个reducer

const reducer =(state = init_state,action)=>{
  switch (action.type){
    case "ADD_A_DATE_INPUT"  :
      {
      state.dateInput.push({id:action.count})
      console.log(state)
      return state}
    case "ADD_A_TEXT_INPUT"  :
      {
        state.textInput.push({id:action.count})
        console.log(state)
        return state
      }
    case "DELETE_A_DATE_INPUT"  :
      {
        state.dateInput.splice(action.id,1)
        return state
      }
    case "DELETE_A_TEXT_INPUT"  :
      {
        state.textInput.splice(action.id,1)
        return state
      }
    default:
      return state
  }
}


class App extends Component {
  constructor(){
    super();
    this.data_count = 0 ;
    this.text_count = 0 ;
    this.state = {
      preview :"预览"
    }
    this.store = createStore(reducer);
    this.store.subscribe(()=>{
      this.setState({
        dateInput:this.store.getState().dateInput,
        textInput:this.store.getState().textInput
      })
    })

  }

  
//获取应该添加日期还是文本
  getAddInformation(a){
    if (a === 1 )
    {this.data_count ++ ;
    this.addDateInput()}
    else 
    {
    this.text_count ++ 
    this.addTextInput()
    }
  }

//获取应该删除的东西
  getDeleteInformation(a,index){
    if (a===1)
      this.deleteDateInput(index)
    else 
      this.deleteTextInput(index)
  }
  
//Action
//删除日期
  deleteDateInput(index){
    this.store.dispatch({
      type : "DELETE_A_DATE_INPUT",
      id:index
    })
  }
//删除文本
  deleteTextInput(index){
    this.store.dispatch({
      type : "DELETE_A_TEXT_INPUT",
      id:index
    })
  }

//添加日期
  addDateInput(){
    this.store.dispatch({
      type : "ADD_A_DATE_INPUT",
      count:this.data_count
    })
  }
//添加文本
  addTextInput(){
    this.store.dispatch({
      type : "ADD_A_TEXT_INPUT",
      count:this.text_count
    })
  }

  EditOrPreview(){
    if (this.state.preview === "预览")
    {
      this.setState({
        preview : "编辑",
        disabled : "disabled"
      })
    }
    else
    {
      this.setState({
        preview : "预览",
        disabled : ""
      })
    }


  }

  render() {
    return (
      <div className="App">
        <Add communicate = {this.getAddInformation.bind(this)} disabled={this.state.disabled}/>
        <button onClick={this.EditOrPreview.bind(this)} >{this.state.preview}</button>
        {this.store.getState().dateInput.map((item,index)=>
         <DateInput disabled={this.state.disabled} key = {index} index = {index} communicate = {this.getDeleteInformation.bind(this)} />
        )}
        {this.store.getState().textInput.map((item,index)=>
         <TextInput disabled={this.state.disabled} key = {index} index = {index} communicate = {this.getDeleteInformation.bind(this)}/>
        )}
        
      </div>
    );
  }
}

export default App;
