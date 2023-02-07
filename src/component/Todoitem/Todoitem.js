import './Todoitem.css'
const Todoitem=(props)=>{
    const {items ,deleteitem}=props;
    const length=items.length;
    const Listitems=length?(
        items.map(item=>{
            return(
                <div key={item.id}>
                    <span>{item.name}</span>
                    <span>{item.age}</span>
                    <span onClick={()=>deleteitem(item.id)}>&times;</span>
                </div>
            )
        })
    ):(
        <div className='p'>
            <p>There is No Item To Show</p>
        </div>
    )
    return(
        <div className="Listitems">
            <div className='head'>
            <span>Name</span>
            <span>Age</span>
            <span>Action</span>
            </div>
            <div className='content'>
            {Listitems}
            </div>
        </div>
    )
}

export default Todoitem