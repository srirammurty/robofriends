import React from "react" ;
/*
function App() {
  return ( ... )
  // wrap existing return inside the render() method
}
*/

/*

class Hello extends React.Component {
  render(){
    return (
        <h1 className="tc"> {this.props.greetings}</h1>
    );
  }
}
*/
const Hello = (props) => {
  return (
    <h1 className="tc"> {props.greetings}</h1>
  );

}

export default Hello;