import React from 'react';

class App extends React.Component{
    render(){
        return <p>Hei kamu kenapa</p>
    }
}

export class Input extends React.Component {
    render(){
        return <input type='text' placeholder='bagaimana kabarmu'/>
    }
}

export default App;
