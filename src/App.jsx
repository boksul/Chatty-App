import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "bob"},
      messages: [
        {
          username: "bob",
          content: "Has anyone seen my marbles?"
        },
        {
          username: "anonymous",
          content: "No, i think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    }
    this.addChat = this.addChat.bind(this);
  }

  addChat(newText) {
    const previousMessages = this.state.messages;
    const newMessage = {
      username: this.state.currentUser.name,
      content: newText
    }
    const allMessage = previousMessages.concat(newMessage)
    this.setState({
      messages: allMessage
    })
  }

componentDidMount() {
  console.log("componentDidMount <App />");
  setTimeout(() => {
    console.log("Simulating incoming message");
    // Add a new message to the list of messages in the data store
    const newMessage = {id: 3, username: "Michelle", content: "Hello there!"}
    const messages = this.state.messages.concat(newMessage)
    // Update the state of the app component.
    // Calling setState will trigger a call to render() in App and all child components.
    this.setState({messages: messages})
  }, 3000);
}

  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={this.state.messages} />
        <Message user={this.state.currentUser} messages={this.state.messages} />
        <ChatBar user={this.state.currentUser} addChat={this.addChat} userInputName={this.userInputName} />
      </div>

    );
  }
}

export default App;
