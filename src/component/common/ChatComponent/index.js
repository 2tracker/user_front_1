// import React, { useState } from "react";
// import { InputAdornment, TextField } from "@mui/material";
// import { RxDotFilled } from "react-icons/rx";
// import { AiOutlineSearch, AiOutlineSend } from "react-icons/ai";
// import { IoCallOutline } from "react-icons/io5";
// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import { HiChevronDown } from "react-icons/hi";
// import { BiSolidMicrophoneAlt } from "react-icons/bi";
// import { BsEmojiSmileFill } from "react-icons/bs";
// import { render } from "react-dom";

// function ChatComponent(props) {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [sendPop, setSendPop] = useState(false);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleChange = (event) => {
//     if (event.target.value) {
//       setSendPop(true)
//     }else{
//       setSendPop(false)
      
//     }
//     setSearchTerm(event.target.value);
//   };




  // function detectURL(message) {
  //   var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
  //   return message.replace(urlRegex, function (urlMatch) {
  //     return '<a href="' + urlMatch + '">' + urlMatch + '</a>';
  //   });
  // }
  
  // function Title({ owner }) {
  //   return (
  //     <div className={"chatApp__convTitle"}>{owner}'s display</div>
  //   );
  // }
  
  // function InputMessage({ isLoading, owner, ownerAvatar, sendMessageLoading, typing, resetTyping }) {
  //   const [messageInput, setMessageInput] = useState('');
  
  //   function handleSendMessage(event) {
  //     event.preventDefault();
  //     /* Disable sendMessage if the message is empty */
  //     if (messageInput.length > 0) {
  //       sendMessageLoading(owner, ownerAvatar, messageInput);
  //       /* Reset input after send*/
  //       setMessageInput('');
  //     }
  //   }
  
  //   function handleTyping(event) {
  //     /* Tell users when another user has at least started to write */
  //     if (messageInput.length > 0) {
  //       typing(owner);
  //     } else {
  //       /* When there is no more character, the user no longer writes */
  //       resetTyping(owner);
  //     }
  //   }
  
  //   /* If the chatbox state is loading, loading class for display */
  //   var loadingClass = isLoading ? 'chatApp__convButton--loading' : '';
  //   let sendButtonIcon = <i className={"material-icons"}>send</i>;
  
  //   return (
  //     <form onSubmit={handleSendMessage}>
  //       <input
  //         type="hidden"
  //         value={owner}
  //       />
  //       <input
  //         type="hidden"
  //         value={ownerAvatar}
  //       />
  //       <input
  //         type="text"
  //         value={messageInput}
  //         className={"chatApp__convInput"}
  //         placeholder="Text message"
  //         onChange={(e) => setMessageInput(e.target.value)}
  //         onKeyDown={handleTyping}
  //         onKeyUp={handleTyping}
  //         tabIndex="0"
  //       />
  //       <div className={'chatApp__convButton ' + loadingClass} onClick={handleSendMessage}>
  //         {sendButtonIcon}
  //       </div>
  //     </form>
  //   );
  // }
  
  // function TypingIndicator({ owner, isTyping }) {
  //   let typersDisplay = '';
  //   let countTypers = 0;
  
  //   /* for each user writing messages in chatroom */
  //   for (var key in isTyping) {
  //     /* retrieve the name if it isn't the owner of the chatbox */
  //     if (key !== owner && isTyping[key]) {
  //       typersDisplay += ', ' + key;
  //       countTypers++;
  //     }
  //   }
  
  //   /* formatting text */
  //   typersDisplay = typersDisplay.substr(1);
  //   typersDisplay += countTypers > 1 ? ' are ' : ' is ';
  
  //   /* if at least one other person writes */
  //   if (countTypers > 0) {
  //     return (
  //       <div className={"chatApp__convTyping"}>{typersDisplay} writing
  //         <span className={"chatApp__convTypingDot"}></span>
  //       </div>
  //     );
  //   }
  
  //   return (
  //     <div className={"chatApp__convTyping"}></div>
  //   );
  // }
  
  // function MessageList({ owner, messages }) {
  //   return (
  //     <div className={"chatApp__convTimeline"}>
  //       {messages.slice(0).reverse().map(
  //         messageItem => (
  //           <MessageItem
  //             key={messageItem.id}
  //             owner={owner}
  //             sender={messageItem.sender}
  //             senderAvatar={messageItem.senderAvatar}
  //             message={messageItem.message}
  //           />
  //         )
  //       )}
  //     </div>
  //   );
  // }
  
  // function MessageItem({ owner, sender, senderAvatar, message }) {
  //   /* message position formatting - right if I'm the author */
  //   let messagePosition = owner === sender ? 'chatApp__convMessageItem--right' : 'chatApp__convMessageItem--left';
  
  //   return (
  //     <div className={"chatApp__convMessageItem " + messagePosition + " clearfix"}>
  //       <img src={senderAvatar} alt={sender} className="chatApp__convMessageAvatar" />
  //       <div className="chatApp__convMessageValue" dangerouslySetInnerHTML={{ __html: message }}></div>
  //     </div>
  //   );
  // }
  
  // function ChatBox({ owner, ownerAvatar, sendMessage, typing, resetTyping, messages, isTyping }) {
  //   const [isLoading, setIsLoading] = useState(false);
  
  //   function sendMessageLoading(sender, senderAvatar, message) {
  //     setIsLoading(true);
  //     sendMessage(sender, senderAvatar, message);
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 400);
  //   }
  
  //   return (
  //     <div className={"chatApp__conv"}>
  //       <Title owner={owner} />
  //       <MessageList owner={owner} messages={messages} />
  //       <div className={"chatApp__convSendMessage clearfix"}>
  //         <TypingIndicator owner={owner} isTyping={isTyping} />
  //         <InputMessage
  //           isLoading={isLoading}
  //           owner={owner}
  //           ownerAvatar={ownerAvatar}
  //           sendMessage={sendMessage}
  //           sendMessageLoading={sendMessageLoading}
  //           typing={typing}
  //           resetTyping={resetTyping}
  //         />
  //       </div>
  //     </div>
  //   );
  // }
  
  // function ChatRoom() {
  //   const [messages, setMessages] = useState([
  //     {
  //       id: 1,
  //       sender: 'Shun',
  //       senderAvatar: 'https://i.pravatar.cc/150?img=32',
  //       message: 'Hello 👋'
  //     },
  //     {
  //       id: 2,
  //       sender: 'Gabe',
  //       senderAvatar: 'https://i.pravatar.cc/150?img=56',
  //       message: 'Hey!'
  //     },
  //     {
  //       id: 3,
  //       sender: 'Gabe',
  //       senderAvatar: 'https://i.pravatar.cc/150?img=56',
  //       message: 'How are you?'
  //     },
  //     {
  //       id: 4,
  //       sender: 'Shun',
  //       senderAvatar: 'https://i.pravatar.cc/150?img=32',
  //       message: 'Great! It\'s been a while... 🙃'
  //     },
  //     {
  //       id: 5,
  //       sender: 'Gabe',
  //       senderAvatar: 'https://i.pravatar.cc/150?img=56',
  //       message: 'Indeed.... We\'re gonna have to fix that. 🌮🍻'
  //     }
  //   ]);
  
  //   const [isTyping, setIsTyping] = useState({});
  
  //   function sendMessage(sender, senderAvatar, message) {
  //     setTimeout(() => {
  //       let messageFormat = detectURL(message);
  //       let newMessageItem = {
  //         id: messages.length + 1,
  //         sender: sender,
  //         senderAvatar: senderAvatar,
  //         message: messageFormat
  //       };
  //       setMessages([...messages, newMessageItem]);
  //       resetTyping(sender);
  //     }, 400);
  //   }
  
  //   function typing(writer) {
  //     if (!isTyping[writer]) {
  //       setIsTyping(prevTyping => ({ ...prevTyping, [writer]: true }));
  //     }
  //   }
  
  //   function resetTyping(writer) {
  //     setIsTyping(prevTyping => ({ ...prevTyping, [writer]: false }));
  //   }
  
  //   let users = {
  //     0: { name: 'Shun', avatar: 'https://i.pravatar.cc/150?img=32' },
  //     1: { name: 'Gabe', avatar: 'https://i.pravatar.cc/150?img=56' },
  //     /* test with two other users :)
  //     2: { name: 'Kate', avatar: 'https://i.pravatar.cc/150?img=47' },
  //     3: { name: 'Patrick', avatar: 'https://i.pravatar.cc/150?img=14' },
  //     */
  //   };
  
  //   return (
  //     <div className={"chatApp__room"}>
  //       {Object.keys(users).map(function (key) {
  //         var user = users[key];
  //         return (
  //           <ChatBox
  //             key={key}
  //             owner={user.name}
  //             ownerAvatar={user.avatar}
  //             sendMessage={sendMessage}
  //             typing={typing}
  //             resetTyping={resetTyping}
  //             messages={messages}
  //             isTyping={isTyping}
  //           />
  //         );
  //       })}
  //     </div>
  //   );
  // }
  
  // setTimeout(() => {
  //   render(<ChatRoom />, document.getElementById("chatApp"));
  // }, 400);

//--------------------------------------------------------------------------------------------------------
  // return (
  //   <div className="container mx-auto">
  //     <div className="p-6">
  //       <div className="p-[30px] bg-[#ecf2ff] rounded-lg text-left mb-6 flex items-center relative overflow-hidden">
  //         <div className="w-full">
  //           <h4 className="text-[22px] text-[#2A3547] font-semibold">Chats</h4>
  //         </div>
  //         <div className="w-1/3 flex justify-end">
  //           <div className="absolute top-0">
  //             <img
  //               src="images/bredcrumb-bg.png"
  //               className=" w-[165px] h-[165px] "
  //             />
  //           </div>
  //         </div>
  //       </div>

  //       <div>
  //         <div className="grid grid-cols-12 border rounded-lg ">
  //           <div className="col-span-3 border-r">
  //             <div className="flex gap-3 items-center p-6">
  //               <div className="w-[54px] h-[54px] rounded-full relative">
  //                 <img
  //                   alt="profileImage"
  //                   src="/images/user-1.jpg"
  //                   className="rounded-full"
  //                 />
  //                 <div className="absolute -bottom-2 -right-1">
  //                   <RxDotFilled className="text-[#13deb9] w-7 h-7 " />
  //                 </div>
  //               </div>
  //               <div className="text-left">
  //                 <p className="text-[14px] font-semibold text-[#2a3547]">
  //                   Sunil Joshi
  //                 </p>
  //                 <p className="text-[12px] font-normal text-[#2a3547]">
  //                   Marketing Manager
  //                 </p>
  //               </div>
  //             </div>
  //             <div className="px-6 py-2">
  //               <TextField
  //                 id="search"
  //                 type="search"
  //                 placeholder="Search Contact"
  //                 className="contact-search w-full"
  //                 value={searchTerm}
  //                 onChange={handleChange}
  //                 InputProps={{
  //                   endAdornment: (
  //                     <InputAdornment position="end">
  //                       <AiOutlineSearch />
  //                     </InputAdornment>
  //                   ),
  //                 }}
  //               />
  //             </div>
  //             <div className="py-2">
  //               <div className="px-6 pb-2 text-left">
  //                 <Button
  //                   id="basic-button"
  //                   aria-controls={open ? "basic-menu" : undefined}
  //                   aria-haspopup="true"
  //                   aria-expanded={open ? "true" : undefined}
  //                   onClick={handleClick}
  //                   className="flex items-center gap-1 hover:!bg-[#2a354705] !text-black"
  //                 >
  //                   Recent Chats
  //                   <HiChevronDown />
  //                 </Button>
  //                 <Menu
  //                   id="basic-menu"
  //                   anchorEl={anchorEl}
  //                   open={open}
  //                   onClose={handleClose}
  //                   MenuListProps={{
  //                     "aria-labelledby": "basic-button",
  //                   }}
  //                 >
  //                   <MenuItem onClick={handleClose}>Profile</MenuItem>
  //                   <MenuItem onClick={handleClose}>My account</MenuItem>
  //                   <MenuItem onClick={handleClose}>Logout</MenuItem>
  //                 </Menu>
  //               </div>
  //               <div className="relative h-full">
  //                 <div className="h-[400px] overflow-y-auto">
  //                   <div className="flex gap-3 items-center px-6 py-4 chat-user-info ">
  //                     <div className="w-[42px] h-[42px] rounded-full relative">
  //                       <img
  //                         alt="profileImage"
  //                         src="/images/user-2.jpg"
  //                         className="rounded-full"
  //                       />
  //                       <div className="absolute -bottom-2 -right-1">
  //                         <RxDotFilled className="text-[#13deb9] w-7 h-7 " />
  //                       </div>
  //                     </div>
  //                     <div className="text-left">
  //                       <p className="text-[14px] font-semibold text-[#2a3547]">
  //                         Sunil Joshi
  //                       </p>
  //                       <p className="text-[12px] font-normal text-[#2a3547]">
  //                         Marketing Manager
  //                       </p>
  //                     </div>
  //                     <div className="">
  //                       <p className="text-[12px] font-normal text-[#2a3547]">
  //                         10 minutes
  //                       </p>
  //                     </div>
  //                   </div>
  //                   <div className="flex gap-3 items-center px-6 py-4  chat-user-info ">
  //                     <div className="w-[42px] h-[42px] rounded-full relative">
  //                       <img
  //                         alt="profileImage"
  //                         src="/images/user-2.jpg"
  //                         className="rounded-full"
  //                       />
  //                       <div className="absolute -bottom-2 -right-1">
  //                         <RxDotFilled className="text-[#13deb9] w-7 h-7 " />
  //                       </div>
  //                     </div>
  //                     <div className="text-left">
  //                       <p className="text-[14px] font-semibold text-[#2a3547]">
  //                         Sunil Joshi
  //                       </p>
  //                       <p className="text-[12px] font-normal text-[#2a3547]">
  //                         Marketing Manager
  //                       </p>
  //                     </div>
  //                     <div className="">
  //                       <p className="text-[12px] font-normal text-[#2a3547]">
  //                         10 minutes
  //                       </p>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="col-span-9 relative">
  //             <div className="sticky top-0 p-6 border-b flex">
  //               <div className="flex gap-3 items-center  w-full">
  //                 <div className="w-[40px] h-[40px] rounded-full relative">
  //                   <img
  //                     alt="profileImage"
  //                     src="/images/user-1.jpg"
  //                     className="rounded-full"
  //                   />
  //                   <div className="absolute -bottom-2 -right-1">
  //                     <RxDotFilled className="text-[#13deb9] w-7 h-7 " />
  //                   </div>
  //                 </div>
  //                 <div className="text-left">
  //                   <p className="text-[18px] font-semibold text-[#2a3547]">
  //                     James Johnson
  //                   </p>
  //                   <p className="text-[12px] font-normal text-[#2a3547]">
  //                     online
  //                   </p>
  //                 </div>
  //               </div>
  //               <div className="flex items-center">
  //                 <Button className="hover:rounded-full">
  //                   <IoCallOutline className="w-7 h-7 hover:rounded-full" />
  //                 </Button>
  //                 <Button className="hover:rounded-full">
  //                   <IoCallOutline className="w-7 h-7 hover:rounded-full" />
  //                 </Button>
  //                 <Button className="hover:rounded-full">
  //                   <IoCallOutline className="w-7 h-7 hover:rounded-full" />
  //                 </Button>
  //               </div>
  //             </div>
  //             <div className="overflow-auto h-[60vh] w-full p-6 ">
  //               <div className="flex gap-3 ">
  //                 <div className="w-[30px] h-[30px] rounded-full relative">
  //                   <img
  //                     alt="profileImage"
  //                     src="/images/user-1.jpg"
  //                     className="rounded-full"
  //                   />
  //                 </div>
  //                 <div className="text-left">
  //                   <p className="text-[12px] font-semibold text-[#2a3547] mb-2">
  //                     James Johnson, 2 days ago
  //                   </p>
  //                   <p className="text-[14px] max-w-[320px] font-normal text-[#2a3547] bg-[#f2f6fa] mb-4 p-2 rounded-lg">
  //                     Marketing Manager
  //                   </p>
  //                 </div>
  //               </div>
  //               <div className="float-right">
  //                 <p className="text-[14px] max-w-[320px] text-left h-auto  font-normal text-[#2a3547] bg-[#f2f6fa] mb-4 p-2 rounded-lg">
  //                   Bacusihok bad feb uw tapcu necip pewizefek omupesez gandozan
  //                   voviko
  //                 </p>
  //               </div>
  //             </div>
  //             <div className="absolute bottom-0 px-6 py-3 border-t z-50 bg-[#e9edef] w-full">
  //               <div className="flex justify-between items-center gap-3">
  //                   <div className="flex items-center gap-3 w-full">
  //                       <div>
  //                         <Button className="!min-w-[40px] hover:!rounded-full">
  //                           <BsEmojiSmileFill className="text-[#969696] w-5 h-5"/>
  //                         </Button>
  //                       </div>
  //                       <div className="w-full">
  //                       <input
  //                         className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
  //                         type="text"
  //                         placeholder="message"
  //                         onChange={(e) => handleChange(e)}
  //                       />
  //                       </div>
  //                   </div>
  //                   <div>
  //                     {!sendPop ? 
  //                     <Button className="!min-w-[40px] hover:!rounded-full hover:!bg-white ">
  //                         <BiSolidMicrophoneAlt className="w-6 h-6 text-[#969696]"/>
  //                     </Button>
  //                     :
  //                     <Button className="!min-w-[40px] hover:!rounded-full hover:!bg-white">
  //                         <AiOutlineSend className="w-6 h-6 text-[#969696]"/>
  //                     </Button>
  //                   }
  //                   </div>

  //               </div>
                
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

{/* =================================== */}


{/* <section id="chatApp" class="chatApp">
	<div class="chatApp__loaderWrapper">
		<div class="chatApp__loaderText">Loading...</div>
		<div class="chatApp__loader"></div>
	</div>
</section> */}



  //   </div>
  // );
// }

// export default ChatComponent;


//-----------------------------------------------------------


import { useEffect, useRef, useState } from 'react'
// import Img1 from '../../assets/img1.jpg'
import tutorialsdev from '../../assets/tutorialsdev.png'
import Input from '../../components/Input'
import { io } from 'socket.io-client'

const Dashboard = () => {
	const [user,setUser] = useState(JSON.parse(localStorage.getItem('user:detail')))
	const [conversations, setConversations] = useState([])
	const [messages, setMessages] = useState({})
	const [message, setMessage] = useState('')
	const [users, setUsers] = useState([])
	const [socket, setSocket] = useState(null)
	const messageRef = useRef(null)

	useEffect(() => {
		setSocket(io('http://localhost:8080'))
	}, [])

	useEffect(() => {
		socket?.emit('addUser', user?.id);
		socket?.on('getUsers', users => {
			console.log('activeUsers :>> ', users);
		})
		socket?.on('getMessage', data => {
			setMessages(prev => ({
				...prev,
				messages: [...prev.messages, { user: data.user, message: data.message }]
			}))
		})
	}, [socket])

	useEffect(() => {
		messageRef?.current?.scrollIntoView({ behavior: 'smooth' })
	}, [messages?.messages])

	useEffect(() => {
		const loggedInUser = JSON.parse(localStorage.getItem('user:detail'))
		const fetchConversations = async () => {
			const res = await fetch(`http://localhost:8000/api/conversations/${loggedInUser?.id}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				}
			});
			const resData = await res.json()
			setConversations(resData)
		}
		fetchConversations()
	}, [])

	useEffect(() => {
		const fetchUsers = async () => {
			const res = await fetch(`http://localhost:8000/chat/users/${user?.id}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				}
			});
			const resData = await res.json()
			setUsers(resData)
		}
		fetchUsers()
	}, [])

	const fetchMessages = async (conversationId, receiver) => {
		const res = await fetch(`http://localhost:8000/api/message/${conversationId}?senderId=${user?.id}&&receiverId=${receiver?.receiverId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			}
		});
		const resData = await res.json()
		setMessages({ messages: resData, receiver, conversationId })
	}

	const sendMessage = async (e) => {
		setMessage('')
		socket?.emit('sendMessage', {
			senderId: user?.id,
			receiverId: messages?.receiver?.receiverId,
			message,
			conversationId: messages?.conversationId
		});
		const res = await fetch(`http://localhost:8000/api/message`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				conversationId: messages?.conversationId,
				senderId: user?.id,
				message,
				receiverId: messages?.receiver?.receiverId
			})
		});
	}

	return (
		<div className='w-screen flex'>
			<div className='w-[25%] h-screen bg-secondary overflow-scroll'>
				<div className='flex items-center my-8 mx-14'>
					<div><img src={tutorialsdev} width={75} height={75} className='border border-primary p-[2px] rounded-full' /></div>
					<div className='ml-8'>
						<h3 className='text-2xl'>{user?.fullName}</h3>
						<p className='text-lg font-light'>My Account</p>
					</div>
				</div>
				<hr />
				<div className='mx-14 mt-10'>
					<div className='text-primary text-lg'>Messages</div>
					<div>
						{
							conversations.length > 0 ?
								conversations.map(({ conversationId, user }) => {
									return (
										<div className='flex items-center py-8 border-b border-b-gray-300'>
											<div className='cursor-pointer flex items-center' onClick={() => fetchMessages(conversationId, user)}>
												{/* <div><img src={Img1} className="w-[60px] h-[60px] rounded-full p-[2px] border border-primary" /></div> */}
												<div className='ml-6'>
													<h3 className='text-lg font-semibold'>{user?.fullName}</h3>
													<p className='text-sm font-light text-gray-600'>{user?.email}</p>
												</div>
											</div>
										</div>
									)
								}) : <div className='text-center text-lg font-semibold mt-24'>No Conversations</div>
						}
					</div>
				</div>
			</div>
			<div className='w-[50%] h-screen bg-white flex flex-col items-center'>
				{
					messages?.receiver?.fullName &&
					<div className='w-[75%] bg-secondary h-[80px] my-14 rounded-full flex items-center px-14 py-2'>
						{/* <div className='cursor-pointer'><img src={Img1} width={60} height={60} className="rounded-full" /></div> */}
						<div className='ml-6 mr-auto'>
							<h3 className='text-lg'>{messages?.receiver?.fullName}</h3>
							<p className='text-sm font-light text-gray-600'>{messages?.receiver?.email}</p>
						</div>
						<div className='cursor-pointer'>
							<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-outgoing" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
								<line x1="15" y1="9" x2="20" y2="4" />
								<polyline points="16 4 20 4 20 8" />
							</svg>
						</div>
					</div>
				}
				<div className='h-[75%] w-full overflow-scroll shadow-sm'>
					<div className='p-14'>
						{
							messages?.messages?.length > 0 ?
								messages.messages.map(({ message, user: { id } = {} }) => {
									return (
										<>
										<div className={`max-w-[40%] rounded-b-xl p-4 mb-6 ${id === user?.id ? 'bg-primary text-white rounded-tl-xl ml-auto' : 'bg-secondary rounded-tr-xl'} `}>{message}</div>
										<div ref={messageRef}></div>
										</>
									)
								}) : <div className='text-center text-lg font-semibold mt-24'>No Messages or No Conversation Selected</div>
						}
					</div>
				</div>
				{
					messages?.receiver?.fullName &&
					<div className='p-14 w-full flex items-center'>
						<Input placeholder='Type a message...' value={message} onChange={(e) => setMessage(e.target.value)} className='w-[75%]' inputClassName='p-4 border-0 shadow-md rounded-full bg-light focus:ring-0 focus:border-0 outline-none' />
						<div className={`ml-4 p-2 cursor-pointer bg-light rounded-full ${!message && 'pointer-events-none'}`} onClick={() => sendMessage()}>
							<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<line x1="10" y1="14" x2="21" y2="3" />
								<path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
							</svg>
						</div>
						<div className={`ml-4 p-2 cursor-pointer bg-light rounded-full ${!message && 'pointer-events-none'}`}>
							<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<circle cx="12" cy="12" r="9" />
								<line x1="9" y1="12" x2="15" y2="12" />
								<line x1="12" y1="9" x2="12" y2="15" />
							</svg>
						</div>
					</div>
				}
			</div>
			<div className='w-[25%] h-screen bg-light px-8 py-16 overflow-scroll'>
				<div className='text-primary text-lg'>People</div>
				<div>
					{
						users.length > 0 ?
							users.map(({ userId, user }) => {
								return (
									<div className='flex items-center py-8 border-b border-b-gray-300'>
										<div className='cursor-pointer flex items-center' onClick={() => fetchMessages('new', user)}>
											{/* <div><img src={Img1} className="w-[60px] h-[60px] rounded-full p-[2px] border border-primary" /></div> */}
											<div className='ml-6'>
												<h3 className='text-lg font-semibold'>{user?.fullName}</h3>
												<p className='text-sm font-light text-gray-600'>{user?.email}</p>
											</div>
										</div>
									</div>
								)
							}) : <div className='text-center text-lg font-semibold mt-24'>No Conversations</div>
					}
				</div>
			</div>
		</div>
	)
}

export default Dashboard
