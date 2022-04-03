import { FC, lazy, Suspense, useState, useRef } from 'react';
import { ThemeProvider } from '../../context/ThemeContext';
import { themes } from '../../context/themes';
import Tabs from './Tabs';
import Glimmer from './Glimmer';
import Toolbar from './Toolbar';
import FancyButton from '../fancy-button/FancyButton';

const Comments = lazy(() => import('./Comments'));
const Photos = lazy(() => import('./Photos'));


const TabSwitcher: FC = () => {

  const buttonRef = useRef<any>(null);

  const [tab, setTab] = useState('photos');

  const handleTabSelect = (tab: string) => setTab(tab);

  return (
    <div>
      <Tabs handleClickChannel={handleTabSelect} activeTab={tab} />
      <Suspense fallback={<Glimmer />}>
        {tab === 'photos' ? <Photos /> : <Comments />}
      </Suspense>
      <ThemeProvider value={themes.dark}>
        <Toolbar />
      </ThemeProvider>
      <FancyButton ref={buttonRef}>
        woo fancy button
      </FancyButton>
    </div>
  );
};

export default TabSwitcher;