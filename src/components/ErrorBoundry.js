import React, {Component} from 'react';

class ErrorBoundry extends Component{
   
    constructor(props){
        super();
        this.state ={
            hasError: false
        }
    }
    
   componetDidCatch(error,info){
  this.state({hassError:true})

   }
   
render(){

    if(this.state.hasError){
        return <h1>ooops. That is not good</h1>
    }
    return this.props.children
}

}

export default ErrorBoundry;
