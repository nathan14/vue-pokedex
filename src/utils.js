export default {
	stringIncludes: function (string, substring) {
		return string.toLowerCase().indexOf(substring.toLowerCase()) > -1
	}
}
