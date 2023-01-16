import React from 'react';
import { Avatar, Image, message } from 'antd';

export default function ChatBoxReciever({ avatar, user, message }) {
  return (
    <div style={{display:'flex', justifyContent: 'flex-start', flexDirection: 'row'}}>
        <Avatar 
            size={50}
            src={<Image
                src={avatar}
                style={{
                    objectFit:'cover',
                    width:45,
                    height:45,
                    borderRadius:'100%'
                }}
                preview={false}
                />}
        />

        <p style={{padding:10, backgroundColor:'#dcf8c6', maxWidth:'60%', borderRadius:10}}>
            <strong style={{fontSize:13}}>
                {user}
            </strong> <br />
                {message}
        </p>
    </div>
  )
}

export function ChatBoxSender({ avatar, user, message }) {
    return (
      <div style={{display:'flex', justifyContent: 'flex-end', flexDirection: 'row'}}>
          <Avatar 
              size={50}
              src={<Image
                  src={avatar}
                  style={{
                      objectFit:'cover',
                      width:45,
                      height:45,
                      borderRadius:'100%'
                  }}
                  preview={false}
                  />}
          />
  
          <p style={{padding:10, backgroundColor:'#fff', maxWidth:'60%', borderRadius:10}}>
              <strong style={{fontSize:13}}>
                  {user}
              </strong> <br />
                  {message}
          </p>
      </div>
    )
  }