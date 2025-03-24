import { bangs } from './bangsLinks.json';
import { bangsSearch } from './bangsSearch.json';

let search = (searchString: string) => {
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
      }
    } else {
      if (searchString in bangs) {
        return bangs[searchString as keyof typeof bangs];
      }
    }
  }
  return searchString;
};

export { search };
