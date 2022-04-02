import { createContext } from 'react';
import { themes } from '../context/themes';

const ThemeContext = createContext(themes.light);

export const ThemeProvider = ThemeContext.Provider;
export default ThemeContext;