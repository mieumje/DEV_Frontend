function test() {
  const sum = Array(10)
    .fill()
    .map((value, index) => index + 1)
    .reduce((acc, curr) => acc + curr, 0);
  console.log(`async1 javascript, ${sum}`);
}

test();
