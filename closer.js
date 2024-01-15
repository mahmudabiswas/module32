function kitchen() {
  let rost = 0;
  return function () {
    rost++;
    return rost;
  };
}
const firstServen = kitchen();
console.log(firstServen());
