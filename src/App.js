import logo from './logo.svg';
import './App.css';
import AdminProduct from './admin/product/view/View'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AdminProducts from "./admin/product/view/View";
import CreateProducts from "./admin/product/create/Create"
import UpdateProducts from "./admin/product/update/Update"
function App() {
  return (<Router>
    <div className="App">
      
      <Switch>
        <Route path="/admin/product" exact component={AdminProduct}></Route>
        <Route path="/admin/product/create" exact component={CreateProducts}></Route>  
        <Route path="/admin/product/update" exact component={UpdateProducts}></Route>  
      </Switch>
    </div>
  </Router>
  );
}

export default App;
