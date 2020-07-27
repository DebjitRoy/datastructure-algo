// Closures are SUPER useful to achieve modularity and expose what's needed only
// Known as Revealing Pattern

function coolModule() {
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
}

var mod = coolModule();
console.log(mod.names());
console.log(mod.jobs());
