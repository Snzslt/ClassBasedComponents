import {Component} from 'react';
class ErrorBoundry extends Component{
    constructor(){
        super();
        this.state = {hasError : false};
    }

    componentDidCatch(error){
        this.setState({hasError: true})
    }
    render(){
        if(this.state.hasError){
            return <p>
                Somthing went wrong!
            </p>
        }
        return this.props.children;
    }
}
export default ErrorBoundry;