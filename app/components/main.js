var React = require('react');
var SearchBar = require('./searchGithub');
// var ReactDOM = require('react-dom');

var Main = React.createClass({
  render: function() {
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            <SearchBar />
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
});

// ReactDOM.render(<Main />,document.getElementById("app"));
module.exports = Main;
