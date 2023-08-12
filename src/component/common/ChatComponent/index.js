import { useEffect, useRef, useState } from "react";
// import { User_URL } from '../../../utils/sevice';
import "./App.css";
import Convrsation from "./Convrsations/Convrsations";
import ChatOnline from "./chatOnline/ChatOnline";
import Message from "./message/Message";
import axios from "axios";
import {io} from 'socket.io-client'

const User_URL = "http://localhost:9090";

function ChatComponent(props) {
  const [conversation, setConversation] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessages, setNewMessages] = useState("");

  const [arrivalMessages, setArrivalMessages] = useState(null);
  const socket = useRef(io())
  const data = localStorage.getItem("user_id");
  const user = JSON.parse(data);

  const scrollRef = useRef()

  useEffect(()=>{
    socket.current = io("ws://localhost:8900")
    socket.current.on("getMessage",data =>{
      setArrivalMessages({
        senderId:data.senderId,
        text:data.text,
        createdAt:Date.now()
      })
    })
  },[])

  useEffect(()=>{
    arrivalMessages && currentChat?.members.includes(arrivalMessages.senderId) &&
    setMessages((prev) =>[...prev,arrivalMessages])
  },[arrivalMessages,currentChat])

  useEffect(()=>{
    socket.current.emit("addUser",user._id)
    socket.current.on("getUsers",users=>{
   console.log(users,'socketsss')
    })
  },[user])

  // useEffect(()=>{
  //   socket?.on("welcome",message =>{
  //     console.log(message,'welcome')
  //   })
  // },[socket])


  useEffect(() => {
    const Getconversations = async () => {
      try {
        const res = await axios.get(`${User_URL}/chat/` + user?._id);
        setConversation(res?.data);
      } catch (error) {
        console.log(error, "error");
      }
    };
    Getconversations();
  }, [user?._id]);

  console.log(currentChat?._id, "currentChat?._id");

  useEffect(() => {
    if (currentChat?._id) {
      const getMessages = async () => {
        try {
          const res = await axios.get(
            `${User_URL}/chat/messages/${currentChat?._id}`
          );
          console.log(res?.data, "messageres");
          setMessages(res?.data);
        } catch (err) {
          console.error("Error fetching messages:", err);
        }
      };
      getMessages();
    }
  }, [currentChat]);

  // console.log(messages,'messagesmessages')


const  handlesubmit =  async(e)=>{
  e.preventDefault()
  const message = {
    senderId:user._id,
    text:newMessages,
    conversationId:currentChat._id
  };

  const receiverId = currentChat.members.find(member=>member !== user._id)
   socket.current.emit("sendMessage",{
    senderId:user._id,
    receiverId,
    text:newMessages
   })

  try{
    const res = await axios.post(`${User_URL}/chat/messages`,message)
    setMessages([...messages,res.data])
    setNewMessages('')
  }catch(err){
    console.log(err,'err')
  }
}



useEffect(()=>{
  scrollRef.current?.scrollIntoView({behavior:"smooth"})
},[messages])
   return (
    <div className="messenger">
      <div className="chatManu">
        <div className="chatMenuWrapper">
          <input placeholder="Search for friends" className="chatMenuInput" />
          {conversation.map((c) => (
            <div onClick={() => setCurrentChat(c)}>
              <Convrsation conversation={c} currentUser={user} />
            </div>
          ))}
        </div>
      </div>
      <div className="chatBox">
        <div className="chatMenuWrapper">
          {currentChat ? (
            <>
              <div className="chatBoxTop">
                {messages.map((m) => (
                  <div key={m._id}  ref={scrollRef}>
                    <Message message={m} own={m.senderId === user?._id} />
                  </div>
                ))}
              </div>
              <div className="chatBoxBottom">
                <textarea
                  className="chatMessageInput"
                  placeholder="Write something"
                  onChange={(e)=>setNewMessages(e.target.value)}
                  value={newMessages}
                ></textarea>
                <button className="chatSubmitButton" onClick={handlesubmit}>send</button>
              </div>
            </>
          ) : (
            <span className="noConversationText">open a conversation</span>
          )}
        </div>
      </div>
      <div className="chatOnline">
        <div className="chatMenuWrapper">
          <ChatOnline />
        </div>
      </div>
    </div>
  );
}

export default ChatComponent;
