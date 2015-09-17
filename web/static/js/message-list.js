import Message from './message';

export default React.createClass({
  getInitialState() {
    return {
      messages: []
    }
  },

  componentDidMount() {
    this.subscribeToNewMessages();
  },

  subscribeToNewMessages() {
    this.props.channel.on('new:message', message => {
      console.log('message received');
      this.injectNewMessage(message)
    });
  },

  injectNewMessage(message) {
    this.setState({ messages: this.state.messages.concat([message]) });
  },

  render() {
    return(
      <div id="output">
        {
          this.state.messages.map(function(message) {
            return <Message text={message.body} />
          })
        }
      </div>
    )
  }
});
