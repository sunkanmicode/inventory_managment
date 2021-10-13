import './dashboard.css'
import { Link } from 'react-router-dom'

function Dashboard({items}) {
  // console.log(items);
    return (
      <div>
        <h1> Welcome Oluwaseun !!!</h1>
        <div>
          <button>
            <Link to="products">Add New Product</Link>
          </button>
        </div>
        <div className="table">
          <table className="tableContainer">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Price</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bible</td>
                <td>N100.00</td>
                <td>Religous</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default Dashboard
