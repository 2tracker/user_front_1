import "./message.css";


function formatTimeAgo(timestamp) {
    const currentTime = new Date();
    const targetTime = new Date(timestamp);
    const timeDifference = Math.floor((currentTime - targetTime) / 1000); // Time difference in seconds
  
    if (timeDifference < 60) {
      return 'Just now';
    } else if (timeDifference < 3600) {
      const minutes = Math.floor(timeDifference / 60);
      return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    } else if (timeDifference < 86400) {
      const hours = Math.floor(timeDifference / 3600);
      return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else {
      const days = Math.floor(timeDifference / 86400);
      return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    }
  }

function Message({ message, own }) {
    return (
      <div className={own? "message own":"message"}>
        <div className="messageTop">
          <img
            className="messageImg"
            src="https://i.pinimg.com/564x/e4/01/b3/e401b3958b5f14e9255c51a61712a578.jpg"
            alt="MessageTop"
          />
          <p className="messageText">{message.text}</p>
        </div>
        <div className="messageBottom">{formatTimeAgo(message.createdAt)}</div>
      </div>
    );
  }

export default Message;
