import { useEffect, useState } from 'react';
import axios from 'axios'
import './convrsations.css'

const User_URL = 'http://localhost:9090'

function Convrsation(conversation,currentUser) {
  const [user,setUser] = useState(null)

  useEffect(() => {
    const friendID = conversation.conversation?.members.find(memberID => memberID !== conversation?.currentUser?._id);
    if (friendID) {
      const getUser = async () => {
        try {
          const res = await axios.get(`${User_URL}/user/${friendID}`);
          setUser(res.data)
        } catch (error) {
          console.error("Error fetching friend data:", error);
        }
      };
      
      getUser();
    } else {
      console.log("No friend found in the conversation.");
    }
  }, [conversation?.currentUser?._id]);

    return (
      <div className="conversation">
        <img  className="conversationImg" src="https://i.pinimg.com/originals/a4/d0/d8/a4d0d8acc60e373785ff6914f91c840f.jpg" alt="Your Profile" />   
        <span className="conversationName">{user?.user?.firstName} {user?.user?.lastName}</span>
        </div>
    );
  }
  
  
export default Convrsation;



