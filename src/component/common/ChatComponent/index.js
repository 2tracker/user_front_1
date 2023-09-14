import { useEffect, useRef, useState } from "react";
// import { User_URL } from '../../../utils/sevice';
import "./App.css";
import Convrsation from "./Convrsations/Convrsations";
import ChatOnline from "./chatOnline/ChatOnline";
import Message from "./message/Message";
import axios from "axios";
import { io } from "socket.io-client";
import { Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { BiMicrophone } from "react-icons/bi";
import { AiOutlineSend } from "react-icons/ai";
import EmojiPicker, {
  Emoji,
  EmojiStyle,
  EmojiClickData,
} from "emoji-picker-react";

const User_URL = "http://localhost:9090";

function ChatComponent(props) {
  const [conversation, setConversation] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessages, setNewMessages] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [typemsg, setTypeMsg] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [emojiSelect,setEmojiSelect] = useState(false)

  const [arrivalMessages, setArrivalMessages] = useState(null);
  const socket = useRef(io());
  const data = localStorage.getItem("user_id");
  const user = JSON.parse(data);

  const scrollRef = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessages({
        senderId: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessages &&
      currentChat?.members.includes(arrivalMessages.senderId) &&
      setMessages((prev) => [...prev, arrivalMessages]);
  }, [arrivalMessages, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user?._id);
    socket.current.on("getUsers", (users) => {
      console.log(users, "socketsss");
    });
  }, [user]);

  // useEffect(()=>{
  //   socket?.on("welcome",message =>{
  //     console.log(message,'welcome')
  //   })
  // },[socket])

  function onClick(emojiData, event) {
    console.log(emojiData,"emojidata");
    setSelectedEmoji(emojiData.unified);
  }

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

  const handlesubmit = async (e) => {
    e.preventDefault();
    const message = {
      senderId: user?._id,
      text: newMessages,
      conversationId: currentChat?._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user?._id
    );
    socket.current.emit("sendMessage", {
      senderId: user?._id,
      receiverId,
      text: newMessages,
    });

    try {
      const res = await axios.post(`${User_URL}/chat/messages`, message);
      setMessages([...messages, res.data]);
      setNewMessages("");
    } catch (err) {
      console.log(err, "err");
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleMessage = (event) => {
    if (event.target.value) {
      setTypeMsg(true);
    } else {
      setTypeMsg(false);
    }
  };
  const handleClickEmoji = () =>{
    setEmojiSelect(true)
  }
  return (
    <div className="container mx-auto">
      <div className="p-6">
        <div className="messenger grid grid-cols-12 gap-2">
          <div className="col-span-9 grid grid-cols-12 rounded-lg border  max-[834px]:col-span-8 max-[576px]:col-span-1">
            <div className="chatManu col-span-3 border-r">
              <div className="flex gap-3 p-5">
                <div className="w-10 h-10 rounded-full ">
                  <img
                    alt="profileImage"
                    src="https://i.pinimg.com/originals/a4/d0/d8/a4d0d8acc60e373785ff6914f91c840f.jpg"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#2a3547]">
                    {user?.firstName} {user?.lastName}
                  </p>
                  <p className="text-[12px] text-[#2a3547]">{user?.role}</p>
                </div>
              </div>
              <div className="chatMenuWrapper  h-full">
                <TextField
                  id="search"
                  type="search"
                  placeholder="Search for friends"
                  className=""
                  value={searchTerm}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <div className="pt-5">
                  {conversation.map((c) => (
                    <div onClick={() => setCurrentChat(c)}>
                      <Convrsation conversation={c} currentUser={user} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="chatBox relative col-span-9">
              <div className="chatMenuWrapper h-[75vh] ">
                {currentChat ? (
                  <>
                <div className="sticky top-0 bg-white px-3 py-3 shadow-md ">
                <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full ">
                  <img
                    alt="profileImage"
                    src="https://i.pinimg.com/originals/a4/d0/d8/a4d0d8acc60e373785ff6914f91c840f.jpg"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="text-[14px] font-semibold text-[#2a3547]">
                    {user?.firstName} {user?.lastName}
                  </p>
                  <p className="text-[12px] text-[#2a3547]">online</p>
                </div>
              </div>
                </div>
                    <div className="chatBoxTop">
                      {messages.map((m) => (
                        <div key={m?._id} ref={scrollRef}>
                          <Message message={m} own={m.senderId === user?._id} />
                        </div>
                      ))}
                    </div>
                    <div className="chatBoxBottom absolute bottom-0 p-2.5 w-full h-[50px] bg-[#f0f2f5] left-0">
                      {/* <div>
                        <EmojiPicker
                          onEmojiClick={onClick}
                          autoFocusSearch={false}
                        
                        />
                      </div>
                      {emojiSelect ? (
                            <Emoji
                              unified={selectedEmoji}
                              emojiStyle={EmojiStyle.APPLE}
                              size={22}
                              onClick={handleClickEmoji}
                            />
                          ) : null} */}
                      <textarea
                        className="chatMessageInput rounded-lg focus:outline-none"
                        placeholder="Write something"
                        onChange={(e) => {
                          setNewMessages(e.target.value);
                          handleMessage(e);
                        }}
                        defaultValue={newMessages}
                        value={
                          newMessages 
                        }
                      ></textarea>
                      {typemsg ? (
                        <Button
                          onClick={handlesubmit}
                          className=" hover:rounded-full  hover:inline-flex"
                        >
                          <AiOutlineSend className="text-[#54656f] w-[24px] h-[24px]" />
                        </Button>
                      ) : (
                        <Button className=" hover:rounded-full  hover:inline-flex">
                          <BiMicrophone className="text-[#54656f] w-[24px] h-[24px]" />
                        </Button>
                      )}
                    </div>
                  </>
                ) : (
                  <span className="noConversationText top-[10%] text-[50px] text-[#e0dcdc] cursor-default">
                    open a conversation
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="chatOnline col-span-3 rounded-lg border p-[30px] max-[834px]:col-span-8 max-[576px]:col-span-1">
            <div className="chatMenuWrapper p-2.5 h-full">
              <ChatOnline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatComponent;
