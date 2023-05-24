import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

const { Component } = require('react');

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    const stat = { ...this.state };
    const total = stat.bad + stat.good + stat.neutral;
    const positivePercentage = total
      ? Math.round((stat.good / total) * 100)
      : 0;

    return (
      <div
        style={{
          width: '600px',
          display: 'block',
          margin: '30px',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
          {/* <FeedbackOptions
            handleIncrementGood={this.handleIncrementGood}
            handleIncrementNeutral={this.handleIncrementNeutral}
            handleIncrementBad={this.handleIncrementBad}
          /> */}
        </Section>
        <Section title={'Statistics'}>
          {total > 0 && (
            <Statistics
              good={stat.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
          {!total && (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}

export default App;
