import React from 'react'

const styles = {
  button: {
    width:'10%',
    height:50,
    fontWeight:'bold',
    borderRadius:10,
    fontSize:18,
    backgroundColor:'#34b7f1',
    borderWidth:0,
    color:'#fff'
  },
  textarea:{
    width:'60%',
    height:50,
    borderRadius:0,
    borderWidth:0,
    padding:10,
    fontSize:18
  },
  textContainer:{
    display:'flex',
    justifyContent:'space-evenly',
    alignItems:'center'
  }
}

export default function InputText() {

  const [message, setMessage] = useState();

  const addAmessage = () => {
    addAmessage({
      message
    })
    setMessage('')
  }

  return (
    <div style={styles.textContainer}>
      <textarea
      style={styles.textarea}
      rows={6}
      placeholder='Write something here...'
      value={message}
      onChange={e => setMessage(e.target.value) }
      >
      </textarea>
      <button style={styles.button}
      onClick={() => addAmessage()}>

      </button>
    </div>
  )
}
