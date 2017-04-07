module.exports = {
	getCurrentDate,
}

function getCurrentDate() {
  
  var currentDate = new Date().toISOString().slice(0,10)

  return currentDate

}

