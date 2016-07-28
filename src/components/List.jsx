var React = require('react');
var ListItem = require('./Listitem.jsx');

var ingredients = [{"id":1,"text":"ham"}, {"id":2, "text":"cheese"}, {"id":3, "text":"potatoe"}]

var List = React.createClass({
  render: function() {
    var listItems = ingredients.map(function(item) {
      return <ListItem key={item.id} ingredient={item.text} />;
    });

    return (<ul>{listItems}</ul>);
  }
});

module.exports = List;
