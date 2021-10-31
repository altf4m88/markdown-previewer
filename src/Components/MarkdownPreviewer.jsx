import React from 'react';
import marked from 'marked';

class MarkdownPreviewer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            markdown : '# Marked in browser\n\nRendered by **marked**.'
        }
        this.initialMarkdown = this.state.markdown;
    }

    componentDidMount(){
        let previewElement = document.querySelector('#preview');

        previewElement.innerHTML = marked(this.state.markdown);
    }

    render(){
        return(
            <div className="main-div d-flex">
                <div class="card mr-2 w-50">
                    <div class="card-header"><h4>Markdown</h4></div>
                    <div class="card-body p-0">
                        <textarea id="editor" className="form-control h-100">{this.state.markdown}</textarea>
                    </div>
                </div>
                <div class="card ml-2 w-50">
                    <div class="card-header"><h4>Preview</h4></div>
                    <div class="card-body">
                        <div id="preview">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MarkdownPreviewer;