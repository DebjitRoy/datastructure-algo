// Using Revealing Pattern to create Module
// Now Use IIFE to create a variable which will be used to access modules APIs
// This makes the module to be created and instantiated at same time

var myModule = (function() {
  var coolNmaes = ["John", "Jane", "Luke"]; //private
  var coolProfession = ["Dev", "Astronaut", "Park Ranger"]; //private
  function getNames() {
    return coolNmaes.join(", ");
  }
  function getJobs() {
    return coolProfession.join(" | ");
  }
  return {
    names: getNames,
    jobs: getJobs
  };
})();
console.log(myModule.names());
console.log(myModule.jobs());
