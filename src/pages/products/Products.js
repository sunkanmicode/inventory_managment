import { useEffect, useState } from 'react';
import Dashboard from '../dashboard/Dashboard';
import './products.css'

function Products() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState("");
    const [items, setItems] = useState([]);



    const handleSubmit = (e)=>{
        e.preventDefault();
        // const data = e.target;
        const user = [ name, price, category]
        localStorage.setItem( 'user', JSON.stringify(user))
        setItems([...items, user]);
        console.log(items);

    }
    // useEffect(() => {
    //   const loggedInUser = localStorage.getItem('user')
    //   if(loggedInUser){
    //       const foundUser =JSON.parse(loggedInUser)
    //       setItems(foundUser)
    //   }
    // }, [])
  
    return (
      <div className="products">
        <h1>Add a Product</h1>

        <form className="formProduct" onSubmit={handleSubmit}>
          <div className="formInput">
            <input
              type="text"
              placeholder="Item Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="formInput">
            <input
              type="text"
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="formInput">
            <input type="text" 
            placeholder="Category" 
            value={category}
            onChange={e=>setCategory(e.target.value)}
            />
          </div>
          <div className="productBtn">
            <button type="submit">Add</button>
          </div>
        </form>
        <Dashboard items={items} />
      </div>
    );
}

export default Products
