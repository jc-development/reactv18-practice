import { FC, useEffect, useState } from 'react';
import Message from './Message';

const ParentChild: FC = () => {
  const [messageDisplayed, setMessageDisplayed] = useState<boolean>(false);

  useEffect(
    () => {
      setMessageDisplayed(true)
    }, []
  );

  useEffect(
    () => {
      console.log('Parent is re-rendered')
    }, [messageDisplayed]
  );

  return (
    <div>
      <Message displayMsg={messageDisplayed} />
    </div>
  );
}

export default ParentChild;