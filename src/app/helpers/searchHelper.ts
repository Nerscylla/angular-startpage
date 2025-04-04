import { barData } from '../../../public/barData.json';
const { bangs, bangsSearch, engines } = barData;
import { getConfig, setConfig } from './configurationHelper';

let preferedSearchEngine: string =
	getConfig('preferedSearchEngine') || 'duckduckgo';

// temporary shit
let redditSearch: boolean = true;

let search = (searchString: string) => {
	// duckduckgo-ish bangs
	if (!Object.keys(engines).includes(preferedSearchEngine)) {
		setConfig('preferedSearchEngine', 'duckduckgo');
	}
	if (searchString.startsWith('!')) {
		searchString = searchString.replace('!', '');
		let SplitSearchString: string[] = searchString.split(' ');
		if (SplitSearchString.length > 1) {
			if (SplitSearchString[0] in bangsSearch || SplitSearchString[0] in engines) {
				let firstWord = SplitSearchString.shift();
				let urlExtension: string = SplitSearchString.join('%20');
				let urlBase: string = '';
				if (firstWord) {
					urlBase =
						bangsSearch[firstWord as keyof typeof bangsSearch] ||
						engines[firstWord as keyof typeof engines];
				}
				return urlBase + urlExtension;
			} else {
				return engines[preferedSearchEngine as keyof typeof engines] + searchString;
			}
		} else {
			if (searchString in bangs) {
				return bangs[searchString as keyof typeof bangs];
			} else {
				return engines[preferedSearchEngine as keyof typeof engines] + searchString;
			}
		}
	} else {
		if (
			/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(
				searchString
			)
		) {
			return searchString.startsWith('http')
				? searchString
				: `https://${searchString}`;
		}
		if (
			(searchString.startsWith('r/') && redditSearch) ||
			(searchString.startsWith('u/') && redditSearch)
		) {
			return `https://www.reddit.com/${searchString}`;
		}
		return engines[preferedSearchEngine as keyof typeof engines] + searchString;
	}
};

export { search };
