function person(greetingHandler) {
  greetingHandler();
}
function greetingHandler() {
  console.log("good morinig");
}
greetingHandler(greetingHandler);
