import { bangs } from './bangsLinks.json';
import { bangsSearch } from './bangsSearch.json';

// temporary shit
let preferedSearchEngine: string = 'google';
let redditSearch: boolean = true;

let search = (searchString: string) => {
	// duckduckgo-ish bangs
	if (searchString.startsWith('!')) {
		searchString = searchString.replace('!', '');
		let SplitSearchString: string[] = searchString.split(' ');
		if (SplitSearchString.length > 1) {
			if (SplitSearchString[0] in bangsSearch) {
				let firstWord = SplitSearchString.shift();
				let urlExtension: string = SplitSearchString.join('%20');
				let urlBase: string = '';
				if (firstWord) {
					urlBase = bangsSearch[firstWord as keyof typeof bangsSearch];
				}
				return urlBase + urlExtension;
			} else {
				return (
					bangsSearch[preferedSearchEngine as keyof typeof bangsSearch] +
					searchString
				);
			}
		} else {
			if (searchString in bangs) {
				return bangs[searchString as keyof typeof bangs];
			} else {
				return (
					bangsSearch[preferedSearchEngine as keyof typeof bangsSearch] +
					searchString
				);
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
		return (
			bangsSearch[preferedSearchEngine as keyof typeof bangsSearch] + searchString
		);
	}
	return searchString;
};

export { search };
