import { FC, useEffect, useState } from 'react';

type MessageProps = {
  displayMsg: boolean;
}

const Message: FC<MessageProps> = (props) => {
    const [message, setMessage] = useState("Hello, this is Joe.");

    useEffect(
      () => {
        console.log('Message is mounted');
      }, []
    );

    useEffect(
      () => {
        console.log('Message props changed: ', props.displayMsg);
      }, [props.displayMsg]
    );

    return (
      <div>
        <p>{message}</p>
      </div>
    );
}

export default Message;