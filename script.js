marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: true });


var TextBox = React.createClass({ displayName: "TextBox",
  getInitialState: function () {
    return {
      text: "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Brad Rispone](https://freecodecamp.com/brispone)*" };

  },
  handleChange: function (event) {
    this.setState({
      text: event.target.value });

  },
  render: function () {
    return /*#__PURE__*/(
      React.createElement("row", null, /*#__PURE__*/
      React.createElement("div", { className: "col-md-2" }), /*#__PURE__*/
      React.createElement("div", { className: "col-md-4 col-sm-6" }, /*#__PURE__*/
      React.createElement("textarea", { rows: "26", className: "form-control", value: this.state.text, onChange: this.handleChange })), /*#__PURE__*/

      React.createElement("div", { className: "col-md-4 col-sm-6 preview-area", dangerouslySetInnerHTML: { __html: marked(this.state.text) } }), /*#__PURE__*/

      React.createElement("div", { className: "col-md-2" })));


  } });


ReactDOM.render( /*#__PURE__*/React.createElement(TextBox, null), document.getElementById("container"));