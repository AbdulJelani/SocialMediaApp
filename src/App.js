import React from 'react'
import {Link,Routes,Route, useNavigate,} from "react-router-dom";
import About from './About'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import NewPost from './NewPost'
import Missing from './Missing'
import Nav from './Nav'
import PostPage from "./PostPage"
import EditPost from './EditPost'
import { DataProvider } from './context/DataContext';

 function App(){
 
      return(

    <div className="App">
   <DataProvider>
            <Header tittle="Abdul" />
            <Nav />
            <Routes>
              <Route path="/" element = {
                <Home />}/>   

              <Route path= "post" >
                  <Route index element = { <NewPost />}/>
                  <Route path=":id" element={<PostPage />}/>
              </Route>

              <Route path="/edit/:id"element = {<EditPost  />}/>
              <Route path="About" element={<About/>}/>
              <Route path ="*" element={<Missing/>}/>
            </Routes>

            <Footer/>
     </DataProvider>
    </div>
  );
 }

export default App;
