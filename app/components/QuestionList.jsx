var React = require('react');
var Questions = require('./Question.jsx');

const QuestionList = (props) => (
  <div className="question-list">
    <ul>
      {
        props.questions.map(function(question) {
          return <Questions key = {question.id} question = {question} />
        });
      }
    </ul>
  </div>
);

module.exports = QuestionList;