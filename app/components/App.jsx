const React = require('react');
const axios = require('axios');
// const ReactDOM = require('react-dom');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      answers: []
    }
    this.getQuestions = this.getQuestions.bind(this);
  }

  componentDidMount() {

  }

  getQuestions(restaurantId) {
    // $.ajax ({
    //   type: 'GET',
    //   url: '/askthecommunity',
    //   success: () => console.log('success'),
    //   error: () => console.log("nope")
    // });
    axios.get('/questions')
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      });
  }

  // getAnswers() {
  //   $.ajax({
  //     type: 'G'
  //   })
  // }
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