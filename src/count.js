import React , {useState} from 'react'


function Button(){
  const[count,setCount]= useState(0);
  const[name,setName]=useState();
  // const name ='';

  const products = [];
  const numbers = [2,4,5,6,7,7];
  const items = numbers.map(n => ({n}))
  console.log({items});



  const[list,setList] = useState(products);
  const[title,setTitle] = useState();
  const[id,setId] = useState();
  const handleName =(e) => {
    setName(e.target.value);
  }

  const handleTitleChange = (e) =>{
    setTitle(e.target.value);
  };
  const handleIdChange = (e) =>{
    setId(e.target.value);
  };
  const handleAddItem =()=> {
    if(title && id){
      console.log(title,id);
      const newItem = {id,title};
      setList([...list,newItem]);
      setTitle ('');
      setId('');
    }
  };
  return(
    <>

    <center> Button Click  Count:
      <br />
    <button className='ok' tabIndex={0} onClick={() => setCount(count=>(count+1))}>
      <strong>{count}</strong>
      </button><br /><br /><br /><br />
      <input className='ok'
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={handleTitleChange}
        />
        <br /><br /><br />
        <input
          type="text"
          placeholder="Enter ID"
          value={id}
          onChange={handleIdChange}
        />
        <br /><br /><br /><br />
        <button onClick={handleAddItem}>Add Item</button>
        <br /><br /><br />
        <input type='text' placeholder='name' value={name} onChange={handleName} /><br />
        {name}
    
        <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.title} (ID: {item.id})
          </li>
        ))}
      </ul>
      </center>
    </>
    
  );
  
  
}
export default Button;