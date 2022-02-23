const spinArr = ["\r|", "\r/", "\r-", "\r\\", "\r|", "\r/", "\r-", "\r\\", "\r|", "\n"];
let time = 0;

for (const el of spinArr) {
  setTimeout(()=> {
    process.stdout.write(el);
  }, time);
  time += 200;
}
