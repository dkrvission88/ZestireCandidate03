import Main from "./Components/Main";
import Applied from "./Components/down/Applied";
import Notshortlisted from "./Components/down/Notshortlisted";


import {BrowserRouter ,Routes,Route,Link} from "react-router-dom"
import Shortlisted from "./Components/down/Shortlisted";


function App() {
  return (
    <>

    <BrowserRouter>
    <Main/>

    <Routes>
      <Route  path='/' element= { <Shortlisted/> }></Route>
      <Route  path='/notshortlisted' element= { <Notshortlisted/> }></Route>
      <Route  path='/applied' element= { <Applied/> }></Route>
      


    </Routes>
    
    
    </BrowserRouter>








    {/* <Main/>
    <Shortlisted/>
    <Notshortlisted/>
    <Applied/> */}
    
    </>
  );
}

export default App;
