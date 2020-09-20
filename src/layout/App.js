import React from 'react';
import styled from 'styled-components'
import Nav from "./Nav"
import client from "../api/contentful";


function App() {
 
 const [posts, setPosts] = React.useState(null);

  React.useEffect(() => {
    client.getEntries({
        content_type: "text",
      })
      .then((entries) => {
        setPosts(entries.items);
      });
  }, []);
  
    
    console.log(posts)
  return (
    <AppContainer>
      
     <Nav>
      
     </Nav>

    </AppContainer>
  );
}

const AppContainer = styled.div`
width:100wv;
height:100vh;
`

export default App;

