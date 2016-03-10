var React = require('react');

var note = React.createClass({
  render: function() {
    return (
      <p>{this.props.text}</p>
    );
  }
});

module.exports = note;
