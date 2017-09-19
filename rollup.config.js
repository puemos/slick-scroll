import babel from "rollup-plugin-babel";

const pkg = require("./package.json");
const banner = `/*!
 * ${pkg.name}
 * ${pkg.description}
 * @author ${pkg.author}
 * @license ${pkg.license}
 * @version ${pkg.version}
 */
`;

export default {
    banner,
    entry: "src/Scroller.js",
    dest: "slick-scroll.js",
    moduleName: "slick-scroll",
    format: "umd",
    plugins: [
        babel({
            exclude: "node_modules/**"
        })
    ]
};
