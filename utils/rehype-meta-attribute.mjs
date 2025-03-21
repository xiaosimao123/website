// https://github.com/wooorm/xdm#syntax-highlighting-with-the-meta-field

// import { visit } from "unist-util-visit";

// var re = /\b([-\w]+)(?:=(?:"([^"]*)"|'([^']*)'|([^"'\s]+)))?/g;

// export default (options = {}) => {
// 	return (tree) => {
// 		visit(tree, "element", onelement);
// 	};

// 	function onelement(node) {
// 		var match;

// 		if (node.tagName === "code" && node.data && node.data.meta) {
// 			re.lastIndex = 0; // Reset regex.

// 			while ((match = re.exec(node.data.meta))) {
// 				node.properties[match[1]] = match[2] || match[3] || match[4] || "";
// 			}
// 		}
// 	}
// };
const visit = require('unist-util-visit');

var re = /\b([-\w]+)(?:=(?:"([^"]*)"|'([^']*)'|([^"'\s]+)))?/g;

module.exports = (options = {}) => {
	return (tree) => {
		visit(tree, 'element', visitor);
	};

	function visitor(node, index, parentNode) {
		var match;

		if (node.tagName === 'code' && node.data && node.data.meta) {
			re.lastIndex = 0; // Reset regex.

			while ((match = re.exec(node.data.meta))) {
				node.properties[match[1]] = match[2] || match[3] || match[4] || '';
				parentNode.properties[match[1]] = match[2] || match[3] || match[4] || '';
			}
		}
	}
};