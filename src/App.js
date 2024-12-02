import './App.scss';
import React from 'react';
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import DOMPurify from 'dompurify';

const defaultText ="# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n" +
"### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n" +
"\`\`\`\n\/\/ this is multi-line code:\nfunction anotherExample(firstLine, lastLine) {\n" +
"if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n\`\`\`\n" +
"You can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\n" +
"And feel free to go crazy ~~crossing stuff out~~.\n" +
"There's also [links](https:\/\/www.freecodecamp.org), and\n> Block Quotes\!\n\n" +
"And if you want to get really crazy, even tables:\nWild Header | Crazy Header | Another Header?\n" +
"------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\n" +
"And here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n" +
"     - With different indentation levels.\n        - That look like this.\n\n\n \n1. And there are numbered lists too.\n" +
"1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n" +
"![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)";

/* This class handles the state */
class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rawText: defaultText,
    };
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  handleTextChange(event) {
    this.setState({
      rawText: event.target.value
    });
}
  render() {
    const html = DOMPurify.sanitize(marked.parse(this.state.rawText), {USE_PROFILES: {html: true}});
    return (
      <div>
        <h1 class="center-text">Markdown Previewer</h1>
        <i>by Jason Ryan Cunnigham</i>
        <div class="row">
          <Editor value = {this.state.rawText} onChange = {this.handleTextChange}/>
          <Previewer value = {html} />
        </div>
      </div>
    );    
  }
}

class Editor extends React.Component {
  render() {
    return (
      <div class="column">
        <h2>Editor</h2>
        <textarea id="editor" value = {this.props.value} onChange = {this.props.onChange}/>
      </div>
    );
  }
}

class Previewer extends React.Component {
  render() {
    return (
      <div class="column">
        <h2>Preview</h2>
        <div id="preview" class="DivWithScroll" dangerouslySetInnerHTML={{__html: this.props.value}} />
      </div>
      
    );
  }
}

export default AppContainer;
