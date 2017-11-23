import React,{Component} from 'react';
export class InlineError extends Component{
    constructor(props){
        super(props);
        this.state = {message:props.errorMessage};
    }
    render(){
        return(<span className="text-danger">{this.state.message}</span>);
    }
}

export class SuccessMessage extends Component{
    constructor(props){
        super(props);
        this.state = {message: props.message};
    }
    render(){
        return(<span className="text-success">{this.state.message}</span>);
    }
}
