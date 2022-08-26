// Don't alter this function
const processAction = (i, callback) => {
    setTimeout(function() {
      callback("Processed Action " + i);
    }, Math.random()*1000);
  }
  
  const triggerActions = (count) => {
    // Code goes here
  }