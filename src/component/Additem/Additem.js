import React, { Component } from 'react'
import './Additem.css'
class Additem extends Component {

    state={
        name:'',
        age:''
    }
    handelChange = (e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
       
    }
    handelSubmit=(e)=>{
        e.preventDefault();
        if(this.state.name !== '' && this.state.age !== ''){
        this.props.AddItem(this.state)
        this.setState({
            name:'',
            age:''
        })
    }
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
        <input type="text" placeholder='Enter name...' id="name" onChange={this.handelChange} value={this.state.name}/>
        <input type="text" placeholder='Enter age...' id="age" onChange={this.handelChange} value={this.state.age}/>
        <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

export default Additem