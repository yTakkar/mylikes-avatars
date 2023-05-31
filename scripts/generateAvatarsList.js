const glob = require("glob");
const path = require("path");
const fs = require("fs");

const BASE_URL = 'https://avatars.mylikes.page'

const avatars = glob.sync("./public/avatars/**/*.svg");
const formattedAvatars = avatars.map((avatar) => {
  return avatar.replace('public', BASE_URL)
})

fs.writeFileSync(path.join(process.cwd(), "public/avatars.json"), JSON.stringify(formattedAvatars, null, 2))
