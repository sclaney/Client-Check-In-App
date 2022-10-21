function onSubmit(event) {
  var items = event.response.getItemResponses();
  var incomingName = items[0].getResponse();
  var names = cliniciansSheet.getRange(2, 1, cliniciansLastRow-1, 1).getValues();
  // var carriers = carrierSheet.getRange(2, 1, carrierLastRow-1, 1).getValues();
  // var carrierEmails = carrierSheet.getRange(2, 2, carrierLastRow-1, 1).getValues();
  // var phone;
  // var clinicianCarrier;

  for (var i = 0; i < names.length; i++) {
    var name = names[i][0];
    var row = i + 2;

    if (name == incomingName) {
      // use i++ to get the row you're supposed to have and hard code the column for now
      var emailArray = cliniciansSheet.getRange(row, 2, 1, 1).getValues();
      // var clinicianCarrierArray = cliniciansSheet.getRange(row, 3, 1, 1).getValues();
      var email = emailArray[0][0].toString();
      // clinicianCarrier = clinicianCarrierArray[0][0];
      Logger.log(email);

      GmailApp.sendEmail(email,
        "Client Arrival",
        "Your client is here");

    }
  }

  // for (var x = 0; x < carriers.length; x++) {
  //   if (clinicianCarrier == carriers[x][0]) {
  //     var email = phone + carrierEmails[x][0];
  //     var finalEmail = email.trim().toString();
  //     Logger.log(finalEmail);
  //     GmailApp.sendEmail(finalEmail,
  //       "Client Arrival",
  //       "Your client is here");
  //   }
  // }
}



















