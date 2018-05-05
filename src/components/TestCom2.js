import React from "react";

class TestCom2 extends React.Component {
  state = {
      repo: {}
  }
  
  async componentWillMount(){
    const res = await fetch(this.props.url);
    this.setState({ repo: await res.json() })
  }

  /*
 * ให้ดึงค่าจาก GitHub API ดังนี้
 * https://api.github.com/repos/facebook/react
 * https://api.github.com/repos/angular/angular
 * https://api.github.com/repos/vuejs/vue
 * 
 * โดยนำค่ามาแสดงดังนี้
 * Name: `${full_name}`
 * Stars: `${stargazers_count}`
 * Watcher: `${watchers_count}`
 * Issue: `${open_issues_count}`
 * 
 * 
 * */

  render(){
    return (
    <div>
      <div>
          Name: {this.state.repo.full_name}
    </div>
    <div>
          Stars: {this.state.repo.stargazers_count}
    </div>
    <div>
          Watcher: {this.state.repo.watchers_count}
    </div>
    <div>
          Issue: {this.state.repo.open_issues_count}
      </div>
      <br />
    </div>
    );
  }
}

export default TestCom2