var Greeting = React.createClass({
  render: function() {
    return (
      React.createElement('h1', null, 'Hello, world! from React.')
    );
  }
});

window.addEventListener('load', function() {
  React.render(
    React.createElement(Greeting, null),
    document.body
  );
});
