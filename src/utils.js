const Utils = {
	boldKeywords: (str, keywords=[]) => {
		const bolded = str.replace(new RegExp('(\\b)(' + keywords.join('|') + ')(\\b)','ig'), '$1<b>$2</b>$3');
		return {__html: bolded };
	}
};

module.exports = Utils;
