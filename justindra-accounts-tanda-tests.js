// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by justindra-accounts-tanda.js.
import { name as packageName } from "meteor/justindra-accounts-tanda";

// Write your tests here!
// Here is an example.
Tinytest.add('justindra-accounts-tanda - example', function (test) {
  test.equal(packageName, "justindra-accounts-tanda");
});
