import React from 'react';
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
Modal.setAppElement('#root')
 
class View extends React.Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  
  addOneDateInput(){
    
    this.props.communicate(1)
    e=>e.preventDefault()
  }
  addOneTextInput(){
    this.props.communicate(2)
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>添加</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={subtitle => this.subtitle = subtitle}>对话框</h2>
          <button onClick={this.closeModal}>关闭</button>
          <div>请选择你要添加的输入框</div>
          <form>
            <button onClick = {this.addOneDateInput.bind(this)}>日期框</button>
            <button onClick = {this.addOneTextInput.bind(this)}>文本框</button>
          </form>
        </Modal>
      </div>
    );
  }
}
 
export default View