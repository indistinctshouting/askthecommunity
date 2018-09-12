const $ = require('jquery');
const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.get = this.get.bind(this);
  }

  get() {
    $.ajax ({
      type: 'GET',
      url: '/askthecommunity',
      success: () => console.log('success'),
      error: () => console.log("nope")
    });
  }
  render() {
    return (
      <div>
        just TAKE IT FROM MY HANDS
      </div>
    )
  }
};

// class App extends React.Component {
//   render() {
//     return <h1>YUHHHH!HH!H</h1>
//   }
// };

module.exports = App; 