// import function from local file
const findLongestString = require("./find-longest-string");

test("findLongestString finds the longest string in an array", () => {
  expect(findLongestString(["it", "is", "a", "nice", "day"])).toBe("nice");
  expect(findLongestString(["why", "hello", "to", "you"])).toBe("hello");
});

test("findLongestString returns the earlier string in cases of joint longest strings", () => {
  expect(findLongestString(["brave", "dance"])).toBe("brave");
});

test("the function will return the longest string in the array", () => {
  expect(findLongestString(["helloo", "how", "whats", "my"])).toBe("helloo");
  expect(findLongestString(["hello", "whats"])).toBe("hello")
})