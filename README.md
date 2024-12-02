# Markdown Previewer

An app that display what the entered markdown text looks like in html.

## Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

## Installation

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## User Stories

**User Story #1:** I can see a textarea element with a corresponding id="editor".

**User Story #2:** I can see an element with a corresponding id="preview".

**User Story #3:** When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.

**User Story #4:** When I enter GitHub flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).

**User Story #5:** When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

**User Story #6:** When my markdown previewer first loads, the default markdown in the #editor field should be rendered as HTML in the #preview element.