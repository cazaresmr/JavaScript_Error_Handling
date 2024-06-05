// TODO: Enable strict mode
"use strict";

// TODO: Fix the following parameter list
function parseToJSON(data) {
  // TODO: Add a try/catch block to attempt to convert 'data' to JSON
  try {
    // const parsedData = JSON.parse(data);
    // console.log("Data parsed successfully");
    return JSON.parse(data);
  } catch (err) {
    // TODO: If an exception is raised print the error to the console and return null
    console.error(err);
    return null;
  }
}

let failData = "<h1>Hello World!</h1>";

let passData = JSON.stringify({ success: true });

console.log(parseToJSON(failData)); // null

console.log(parseToJSON(passData)); // { success: true }
