var ss = SpreadsheetApp.openById("redacted");
var cliniciansSheet = ss.getSheetByName("Clinicians");
var carrierSheet = ss.getSheetByName("Carrier Info");
var cliniciansLastRow = cliniciansSheet.getLastRow();
var carrierLastRow = carrierSheet.getLastRow();
