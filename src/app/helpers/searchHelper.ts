import { barData } from '../../../public/barData.json';
const { bangs, bangsSearch, engines } = barData;
import { getConfig } from './configurationHelper';

// get configuration stuff
let preferedSearchEngine: string =
	getConfig('preferedSearchEngine') || 'duckduckgo';
let redditRedirect: boolean = getConfig('redditRedirects') || false;
let bangsNoBang: boolean = getConfig('bangsNoBang') || false;

// main search
let search = (searchString: string) => {
	// check for valid uri first
	if (
		!/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(
			searchString
		)
	) {
		// go on to bangs if there is no uri
		return bangsChecking(searchString.trim());
	} else {
		// add https:// if !http && !https present
		return searchString.startsWith('http') || searchString.startsWith('https')
			? searchString
			: `https://${searchString}`;
	}
};

let bangsChecking = (searchString: string) => {
	// check for bang start
	if (!searchString.startsWith('!') && !bangsNoBang) {
		// go on to reddit checks if no bangs are present
		return redditLinking(searchString);
	}
	// edit bangs like required
	let modSearchString: string = searchString.replace('!', '');
	let searchStringArr: string[] = modSearchString.split(' ');
	// word count
	if (searchStringArr.length > 1) {
		// bangs search
		return bangsSearchFunc(searchStringArr, searchString);
	} else {
		// bangs links
		return bangsLinkFunc(modSearchString, searchString);
	}
};

let bangsSearchFunc = (searchStringArr: string[], searchString: string) => {
	// go reddit if there is no valid bangs search
	if (!bangsSearch[searchStringArr[0] as keyof typeof bangsSearch]) {
		return redditLinking(searchString);
	} else {
		// go to searchable bangs
		let firstWord: any = searchStringArr.shift();
		let extension: string = searchStringArr.join('%20');
		return bangsSearch[firstWord as keyof typeof bangsSearch] + extension;
	}
};

let bangsLinkFunc = (bang: string, searchString: string) => {
	if (bangs[bang as keyof typeof bangs]) {
		// go to link if present
		return bangs[bang as keyof typeof bangs];
	} else {
		// go to reddit if link isn't available
		return redditLinking(searchString);
	}
};

let redditLinking = (searchString: string) => {
	// skip computing if feature is disabled
	if (!redditRedirect) {
		return defaultEngineSearch(searchString);
	}
	// reddit or search
	if (searchString.startsWith('r/') || searchString.startsWith('u/')) {
		return `https://www.reddit.com/${searchString}`;
	}
	return defaultEngineSearch(searchString);
};

let defaultEngineSearch = (searchString: string) => {
	// search with default engine
	return engines[preferedSearchEngine as keyof typeof engines] + searchString;
};

export { search };
