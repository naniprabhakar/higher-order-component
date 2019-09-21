import React, { Component } from 'react';  
import HOC from './HOC';  
  
class App extends Component {  
  render() {  
    return (  
      <div>  
        <h2>HOC Example</h2>  
        JavaTpoint provides best CS tutorials.  
      </div>  
    )  
  }  
}  
App = HOC(App);  
export default App;  