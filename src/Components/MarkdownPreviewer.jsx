import React from 'react';

class MarkdownPreviewer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            markdown : ''
        }
    }

    render(){
        return(
            <div>Guten abend!</div>
        )
    }
}

export default MarkdownPreviewer;