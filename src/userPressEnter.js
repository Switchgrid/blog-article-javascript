function userPressEnter(message) {
  return new Promise((resolve) => {
    console.log(message);
    process.stdin.once("data", () => {
      resolve();
    });
  });
}

exports.userPressEnter = userPressEnter;
