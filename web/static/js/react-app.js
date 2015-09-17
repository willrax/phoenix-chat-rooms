import MessageList from './message-list';
import MessageInput from './message-input';

export default React.createClass({
  render() {
    return(
      <div id='messages'>
        <div id='output'>
          <MessageList channel={this.props.channel} />
        </div>

        <div id='input'>
          <MessageInput channel={this.props.channel} />
        </div>
      </div>
    )
  }
});
