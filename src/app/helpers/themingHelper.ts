import { themeColors } from '../../../public/themes.json';

// root element
let rootElement: HTMLElement = document.querySelector(':root') as HTMLElement;

type themeFunctionType = (theme: string) => void;
let themeFunction: themeFunctionType = (theme) => {
	// get the colors from themeColors
	let colors: { [key: string]: string } =
		themeColors[theme as keyof typeof themeColors];

	// actually set the properties
	rootElement.style.setProperty('--bg-color', colors['bgColor']);
	rootElement.style.setProperty('--widget-color', colors['widgetColor']);
	rootElement.style.setProperty('--fg-color', colors['fgColor']);
	rootElement.style.setProperty('--accent-color', colors['accentColor']);
};

export { themeFunction };
