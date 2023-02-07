import React ,{Component} from 'react'
import './App.css'
import Todoitem from './component/Todoitem/Todoitem';
import Additem from './component/Additem/Additem';
class App extends Component {

  state={
    items:[
      {id:1,name:"Hagar",age:21},
      {id:2,name:"Ahmed",age:24},
    ]
  }
  deleteitem=(id)=>{
    // const items=this.state.items;
    // const i=items.findIndex(item=> item.id===id)
    // items.splice(i,1)
    // this.setState({items})
    //////////////////////////////orr
    const items=this.state.items.filter(item=>{
      return item.id !== id;
    })
    this.setState({items})
  }
  AddItem=(item)=>{
    item.id=Math.random()*10;
    let items=this.state.items;
    items.push(item)
    this.setState({items})
  }
  render(){
    const {items}=this.state;
  return (
    <div className="App">
      <h2 className='header'>Todo List</h2>
      <Todoitem items={items} deleteitem={this.deleteitem}/>
      <Additem AddItem={this.AddItem}/>

    </div>
  );
  }
}

export default App;
