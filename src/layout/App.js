import React from 'react';
import styled from 'styled-components'
import Nav from "./Nav"
import Footer from "./Footer"
import client from "../api/contentful";


function App() {
 
/*  const [posts, setPosts] = React.useState(null);

  React.useEffect(() => {
    client.getEntries({
        content_type: "text",
      })
      .then((entries) => {
        setPosts(entries.items);
      });
  }, []);
   */
    
 
  return (
    <AppContainer>
      <Nav/>
      
      <Footer/>   
    </AppContainer>
  );
}

const AppContainer = styled.div`
width:100wv;
height:100vh;
overflow:hidden;
`

export default App;

