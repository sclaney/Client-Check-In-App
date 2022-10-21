function getClinicianNames() {
  // call your form and connect to the drop-down item
  var form = FormApp.openById("redacted");
  
  var namesList = form.getItemById("redacted").asListItem();




// identify the sheet where the data resides needed to populate the drop-down
  var sheetActive = SpreadsheetApp.openById("redacted");
  var sheet = sheetActive.getSheetByName("Clinicians");

  // grab the values in the first column of the sheet - use 2 to skip header row
  var namesValues = sheet.getRange(2, 1, sheet.getMaxRows() - 1).getValues();

  var clinicianNames = [];

  // convert the array ignoring empty cells
  for(var i = 0; i < namesValues.length; i++) { 
    if(namesValues[i][0] != "")
      clinicianNames[i] = namesValues[i][0];
  }

  // populate the drop-down with the array data
  namesList.setChoiceValues(clinicianNames);
 
}
