const findShortestString = require("./find-shortest-string");

test("findShortestString finds the shortest string in an array", () => {
  expect(findShortestString(["it", "is", "a", "nice", "day"])).toEqual("a");
  expect(findShortestString(["why", "hello", "to", "you"])).toEqual("to");
});

test("findShortestString returns the earlier string in cases of joint shortest strings", () => {
  expect(findShortestString(["brave", "dance"])).toEqual("brave");
});
