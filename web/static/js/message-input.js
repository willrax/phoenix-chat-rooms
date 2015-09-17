export default React.createClass({
  getInitialState() {
    return { text: '' }
  },

  keyUp(key) {
    if (key.keyCode === 13) {
      this.props.channel.push('new:message', { body: this.state.text});
      this.setState(this.getInitialState);
    }
  },

  handleChange(event) {
    this.setState({ text: event.target.value });
  },

  render() {
    return(
      <input onKeyUp={this.keyUp} value={this.state.text} onChange={this.handleChange} id='input' className='form-control' />
    )
  }
});
