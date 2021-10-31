import React from 'react';
import marked from 'marked';

marked.setOptions({
    breaks: true
})

class MarkdownPreviewer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            markdown : "# Head 1\n\n## Head 2\n\n### Head 3\n\n`<div>code</div>`.\n\n```// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) { \nif (firstLine == '```' && lastLine == '```') multiLineCode;\n}```\n\n**bold**\n_italic_\n**_bold italic_**\n~~strikehrought~~\n\nlink [how to make markdown like this](http://www.lasesp.com/article/16356884645458737/how-to-create-markdown-previewer)\n\n- And of course there are lists.\n- Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n1. numbered list.\n\n![haha you got rickrolled](https://64.media.tumblr.com/3859905044dd8b2d5fb2f8f079df42b6/c0d7a6a0f4bde1bc-58/s1280x1920/52dd9e0326038e29d37b8e1acdcf7e11cac8a529.jpg)\n\n![doge wif hat](https://urbandigital.id/wp-content/uploads/2021/07/rickroll.jpg)"
        }
        this.initialMarkdown = this.state.markdown;
        this.compileMarkdown = this.compileMarkdown.bind(this)
        this.renderPreview = this.renderPreview.bind(this)
        this.resetMarkdown = this.resetMarkdown.bind(this)
    }

    componentDidMount(){
        this.renderPreview();
    }

    compileMarkdown = () => {
        let input = document.querySelector('#editor').value;

        this.renderPreview(input);
        
        this.setState({
            markdown: input
        });
    }

    resetMarkdown = () => {
        this.setState({
            markdown: this.initialMarkdown
        });

        this.renderPreview(this.initialMarkdown);
    }

    renderPreview = (markdown = this.state.markdown) => {
        let previewElement = document.querySelector('#preview');

        previewElement.innerHTML = marked(markdown);
    }

    render(){
        return(
            <div className="main-div d-flex">
                <div className="card mr-2 w-50 border-primary">
                    <div className="card-header border-primary d-flex justify-content-between">
                        <h4>Your Markdown</h4>
                        <button onClick={this.resetMarkdown} className="btn btn-outline-secondary">Reset</button>
                    </div>
                    <div className="card-body p-0">
                        <textarea id="editor" onChange={this.compileMarkdown} className="form-control h-100" value={this.state.markdown}></textarea>
                    </div>
                </div>
                <div className="card ml-2 w-50 border-success">
                    <div className="card-header border-success"><h4>Preview</h4></div>
                    <div className="card-body pr-0 pb-0">
                        <div id="preview">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MarkdownPreviewer;