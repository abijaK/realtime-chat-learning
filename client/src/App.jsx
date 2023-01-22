import './App.css'
import { ChatBoxReciever, ChatBoxSender } from './components/ChatBox.jsx';
import InputText from './components/InputText';

function App() {
  return (
    <div style={{backgroundColor:'#ece5dd', height:'100vh'}}>
      <h1>Super chat</h1>
      <ChatBoxReciever  user='kody' avatar='https://picsum.photos/200' message='Hello world'/>
      <ChatBoxSender user='koder' avatar='https://picsum.photos/200/300' message='Hi, how are you doing?'/>
      <InputText addMessage = {(message) => console.log(message.message)}/>
    </div>
  );
}

export default App
