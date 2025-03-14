import path from "path";
console.log(path.basename("c:\\app.js"));
console.log(path.dirname("c:\\app.js"));
console.log(path.extname("c:\\app.js"));
console.log(path.join("c", "fdsa", 'sdafsa', 'index.js'));
console.log(path.join("c", "fdsa", 'sdafsa', 'index.js', '..'));
console.log(path.join("c", "fdsa", 'sdafsa', 'index.js', '..', '..'));
console.log(path.normalize("c:\\fdsa\\dfd\\fd"));



console.log(path.parse("c:\\fd\\dsfs\\index.js"));

