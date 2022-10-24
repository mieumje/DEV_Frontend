function test() {
  const arr = Array(100)
    .fill()
    .map((value, index) => index + 1);

  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  console.log(`async3 javascript, ${sum}`);
}

test();
