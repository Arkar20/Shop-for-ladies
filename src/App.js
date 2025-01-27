import { Link } from "react-router-dom";
import "./App.css";
import ClothesPage from "./components/Body/ClothesPage";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import BodyPage from "./components/Body/BodyPage";
import BagPage from "./components/Body/Bags/BagPage";
import AccessoriesPage from "./components/Body/Accessories/AccessoriesPage";
import DiscountPage from "./components/Body/Sales/DiscountPage";
import { NotFound } from "./NotFound";
import HelpCenter from "./components/Body/Help/helpCenter";
import SignInPage from "./components/Body/Login/SignInPage";
import ResgisterPage from "./components/Body/Login/ResgisterPage";
import ShoppingBagPage from "./components/Body/Shopping/BagPage";

function App() {
  return (
    <div >
      
      <Header/>
      <Routes>
      <Route path="/" element = {<BodyPage/> }></Route>

      <Route path="/clothes" element={<ClothesPage />}>
      </Route>

      <Route path="/bags" element={<BagPage />}>
        
      </Route>
      <Route path="/accessories" element={<AccessoriesPage/>}></Route>
      
      <Route path="/sales" element = {<DiscountPage/>}>

      </Route>
      
      <Route path="/help-center" element ={<HelpCenter />}>
        {/* <Route path= ":deliever-issues" element={<DelieverIssues />}></Route>
        <Route path=":product-issues" element={<ProductIssues/>}></Route>
        <Route path=":contact-admin" element={<ContactAdmin/>}></Route> */}
      </Route>
      <Route path="/login" element={<SignInPage/>}/>
      <Route path="/shopping-bag" element={<ShoppingBagPage/>}/>
      <Route path="/sign-up" element={<ResgisterPage/>}/>
      <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
