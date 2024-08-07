import * as jsdom from "jsdom";

import * as fs from "fs";
import * as path from "path";

async function main(filePath: string) {
  const fileName = path.basename(filePath);
  const [palletName] = fileName.split(".html");
  const fileContent = fs.readFileSync(fileName, "utf-8");

  const dom = new jsdom.JSDOM(`<body>${fileContent}</body>`);
}
