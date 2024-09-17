const fs = require("fs");
const path = require("path");
const jsdom = require("jsdom");


async function main(filePath) {
  const fileName = path.basename(filePath);
  const _path = filePath.split("/");
  const [palletName] = _path.pop().split(".html");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const dom = new jsdom.JSDOM(`<body>${fileContent}</body>`);
  console.log(fileName, palletName);

  const lines = [
      `# ${palletName}`,
      "## Methods:"
  ]

  const palletPath = ["../../src/polkadot/", ..._path, palletName];

  const items = dom.window.document.querySelectorAll(".ui--DropdownLinked-Item");
  items.forEach(item => {
    const name = item.querySelector(".ui--DropdownLinked-Item-call").innerHTML;
    const description = item.querySelector(".ui--DropdownLinked-Item-text").innerHTML.trim();

    const [_filename] = name.split("(");
    const filename = _filename.trim();

    const tsFilePath = [...palletPath, `${filename}.ts`].join("/");
    const resolverTsFilePath = path.resolve(tsFilePath);

    if (fs.existsSync(resolverTsFilePath)) {
      const data = fs.readFileSync(resolverTsFilePath, "utf-8");
      const isDeprecated = data.includes("@deprecated");

      if (isDeprecated) {
        lines.push(`### Deprecated: ~~${name.trim()}~~`);
      } else {
        lines.push(`### ${name.trim()}`);
      }
      lines.push(description.trim());



      if (!data.includes(description)) {
        let updatedData = data.replace(`\nexport async function ${filename}`, `\n/**
 * ${description}
 */
export async function ${filename}`);
        if (isDeprecated) {
          updatedData = data.replace(` */
export async function ${filename}`, ` * ${description}
 */
export async function ${filename}`)
        }

        fs.writeFileSync(resolverTsFilePath, updatedData)
      }
    }
  });

  const readmePath = [...palletPath, "README.md"].join("/");
  const resolverReadmePath = path.resolve(readmePath);

  fs.writeFileSync(resolverReadmePath, lines.join("\n\n"));
}

main(process.argv[process.argv.length - 1]);
