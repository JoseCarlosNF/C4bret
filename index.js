import fs from 'fs';

const file = fs.readFileSync("test/automato.txt", "utf-8");
let lines = file.split("\n");

for (let i = 1; i < lines.length; i++) {
  lines[i] = lines[i].split(", ");
}

let with_bracktes = lines[0].match(/{.*?}/gs);

console.log(with_bracktes);
