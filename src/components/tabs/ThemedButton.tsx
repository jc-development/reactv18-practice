import { FC, useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

const ThemedButton: FC = () => {
  const theme = useContext(ThemeContext);

  return <button style={{ background: theme.background, color: theme.foreground }} >Button</button>
}

export default ThemedButton;
