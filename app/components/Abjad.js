import React from 'react';


export class Abjad extends React.Component {
    render(){
        const visibility = this.props.visibility ? 'visible': 'hidden';
        const style = {
            background: 'pink',
            padding: 25,
            display: 'inline-block',
            color: 'red',
            margin: 10,
            borderRadius: 15,
            fontSize: "2em",
            fontWeight: 700,
            visibility: visibility
        }
        return (
            <div style={style} onClick={this.props.onClick}>
                { this.props.abjad }
            </div>
        )
    }
}

Abjad.defaultProps = {
    visibility: 'visible'
}
