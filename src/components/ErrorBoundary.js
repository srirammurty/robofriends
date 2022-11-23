import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            foundError: false 
        }

    }
    componentDidCatch(error,info){
        this.setState( {foundError : true});
    }
    render(){
        if( this.state.foundError ){
            return <h1>Found Errors ....</h1>
        }
        else{
            return this.props.children ; // any this that ErrorBoundary encloses
        }
    }
    
}

export default ErrorBoundary;