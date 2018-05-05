import React from "react";
import TestCom1 from "./components/TestCom1";
import TestCom2 from "./components/TestCom2";

const urls = [
  'https://api.github.com/repos/facebook/react'
        ,'https://api.github.com/repos/angular/angular'
        ,'https://api.github.com/repos/vuejs/vue'
]

class App extends React.Component {
  state = {
    repo: {},
    name: "test"
  }
  callback() {
    this.setState({ name: "new" })
  }
  
  render() {
    return (
      <div>
        {urls.map(function(url){
          return <TestCom2 url={url} />
        })}
      </div>
    );
  }
}

export default App;
