const glob = require("glob");
const path = require("path");
const fs = require("fs");

const avatars = glob.sync("./public/avatars/**/*.svg");
const formattedAvatars = avatars.map((avatar) => avatar.replace('public', ''))

fs.writeFileSync(path.join(process.cwd(), "public/avatars.json"), JSON.stringify(formattedAvatars, null, 2))
