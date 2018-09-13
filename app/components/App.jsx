const React = require('react');
const axios = require('axios');


// const ReactDOM = require('react-dom');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { questions: [] };
    this.fetch = this.fetch.bind(this);
  }
    componentDidMount () {
      this.fetch()
    }
    
    fetch() {
      axios.get('/askthecommunity')
        .then((res) => {
          console.log(res.data);
          this.setState({
            questions: res.data
          });
        })
    }
  
   render() {
     return (
       <div>
        <p>
         {JSON.stringify(this.state.questions)}
        </p>
       </div>
     )
   }



  // render() {
  //   return (
  //   <div>  
  //     <h1>Question Goes Here</h1>
  //     <p>Answer will go here</p>
  //     <button type="button" onClick={() => {alert("Do something!")}}>View question details</button>
  //   </div>
  //   )
  // }
};

module.exports = App; 