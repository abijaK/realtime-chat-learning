import React from 'react'
import { CommentOutlined } from '@ant-design/icons'
import _ from 'lodash'

const button = {
    width:'10%',
    height:50,
    fontWeight:'bold',
    borderRadius:10,
    fontSize:18,
    backgroundColor:'#34b7f1',
    borderWidth:0,
    color:'#fff'
  }

const UserLogin = ({ setUser }) => {

const [user, setAUser] = useState("");

    const handleSetUser = () => {
        // Validate that user is not empty
        if(!user) return
        localStorage.setItem('user', user );
        setUser(user);
        const randomPhoto = `https://picsum.photos/id/${_.random(1, 1000)}/200/300`;
        localStorage.setItem('avatar', `${randomPhoto}`)

    }

  return (
    <div>
        <h1 style={{margin:10, textAlign:'center'}}><CommentOutLine color={'green'}>Super Chat</CommentOutLine></h1>
        <input type="text" 
            style={{margin:10, height:30, width:'25%', borderRadius:10, fontSize:24}}
            value={user}
            onChange={e => setAUser(e.target.value)}
            placeholder='Whrite a random name'
            ></input>
        <button
            onClick={() => handleSetUser()}
            style={button}
            >
                Login
            </button>
    </div>
  )
}

export default UserLogin;
