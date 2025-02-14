import { createContext, ReactNode, useState } from 'react';
import Card from './Card';

export const ThemeContext = createContext();

type ProviderProps = {
	children: ReactNode;
};

const ThemeProvider: React.FC<ProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState<string>('light');

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

const Theme = () => {
	return (
		<ThemeProvider>
			<Card />
		</ThemeProvider>
	);
};

export default Theme;
