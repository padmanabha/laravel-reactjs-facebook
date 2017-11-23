import React,{Component} from 'react';
import './loader.css';
class Loader extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            
                <ul className="loader d-inline-flex">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
           

        )
    }
}

export default Loader;