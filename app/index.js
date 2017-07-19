var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App').default;
var Input = require('./components/App').Input;

import {Abjad} from './components/Abjad';

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

ReactDOM.render(
    <Input />,
    document.getElementById('app')
);



class Abjads extends React.Component {
    constructor(props){
        super(props);

        this.state = {visibility: true}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({visibility: !this.state.visibility});
    }

    render (){

        return (
            <div>
                {String.fromCharCode(...Array(123).keys()).slice(97).split("").map(
                    (a,i) => 
                        <Abjad abjad={a} key={i.toString()} onClick={this.handleClick} visibility={this.state.visibility}/>
                    )
                }
            </div>
        )
    }

}

ReactDOM.render(<Abjads />, document.getElementById('abjad'));
