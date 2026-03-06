import fs from "fs/promises";
import fsn from "fs";
import path from "path";
const basepath =
  "F:\\Web Dev Learnings\\backendlearnings\\ExpressJS\\93harrysolutions";


const unorganizedbasepath =
  "F:\\Web Dev Learnings\\backendlearnings\\ExpressJS\\93harrysolutions\\clutteredfolder";

  
let files = await fs.readdir(unorganizedbasepath);
// console.log(files)

for (const item of files) {
  let ext = item.split(".")[item.split(".").length - 1];
  //  let ext = item.split(".").pop(); // this can be used instead of above line
  //   console.log(ext);
  // check if folder exists
  if (!fsn.existsSync(path.join(basepath, ext))) {
    await fs.mkdir(path.join(basepath, ext));
  }
  // move file into extension folder
  await fs.rename(
    path.join(unorganizedbasepath, item),
    path.join(basepath, ext, item),
  );

  console.log(item);
}
