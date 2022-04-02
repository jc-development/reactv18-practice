import { FC, MouseEvent } from 'react';

import './css/tabs.css';

interface TabsInterface {
  activeTab: string;
  handleClickChannel: (event: string) => void;
}

const Tabs: FC<TabsInterface> = (props) => {

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    props.handleClickChannel(event.currentTarget.name);
  }

  return (
    <ul className="tabs">
      <li>
        <button 
          onClick={handleClick} 
          name="photos" 
          className={props.activeTab === "photos" ? "active" : ""}
        >photos
        </button>
      </li>
      <li>
        <button 
          onClick={handleClick} 
          name="comments" 
          className={props.activeTab === "comments" ? "active" : ""}
        >comments
        </button>
      </li>
    </ul>
  );
};

export default Tabs;