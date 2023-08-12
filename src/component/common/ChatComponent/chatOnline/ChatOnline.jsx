import './ChatOnline.css'

function ChatOnline(props) {

    return (
      <div className="chatOnline">
        <div className='chatOnlineFriend'>
            <div className='chatOnlineImgContainer'>
                <img className='chatOnlineImg' src='https://i.pinimg.com/originals/91/29/79/912979b241f8ed9a812726d8ec193288.jpg' alt=''/>
                 <div className='chatOnlineBadge'></div>
            </div>

            <span className='chatOnlineName'>Royal Patidar</span>
        </div>
        </div>
    );
  }
  
  
export default ChatOnline;