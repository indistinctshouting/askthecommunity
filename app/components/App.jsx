const React = require('react');
const axios = require('axios');


// const ReactDOM = require('react-dom');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: []
    }
    this.getQuestions = this.getQuestions.bind(this);
  }

  // componentDidMount() {

  // }

  getQuestions(Id) {
    axios.get(`http://localhost:3000/askthecommunity`)
      .then(function (reponse) {
        console.log(response);
      })
      .catch(function (error){
        console.log(error);
      })
  }

  //   //based on the restaurant id: i wanna display all the questions that are stored in the database
  //   //with the according answers
  //   axios.post('/askthecommunity')
  //     .then(function(response) {
  //       console.log(response);
  //     })
  //     .catch(function(error){
  //       console.log(error);
  //     });
  // }

  // getAnswers() {
  //   $.ajax({
  //     type: 'G'
  //   })
  // }
  render() {
    return (
      // <div>
      //   just TAKE IT FROM MY HANDS
   <div>  
    <h1>Question Goes Here</h1>
    <p>Answer will go here</p>
    <button type="button" onClick={() => {alert("Do something!")}}>View question details</button>
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