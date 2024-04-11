//Tony DePrato
//Version 1.0
//Google Apps Script
//Get Document History Template
//Requires DRIVE API V2 , V3 does not work for some reason
//Works as a standalone file or attached to the sheet

function logSheetHistory(sheetId) {
  var sheetId = 'YOUR SHEET ID';
  // Fetch the revision history using Drive API
  var revisions = Drive.Revisions.list(sheetId);

  // Check if revisions are available
  if (revisions.items && revisions.items.length > 0) {
    for (var i = 0; i < revisions.items.length; i++) {
      var revision = revisions.items[i];
      Logger.log('Revision Number: ' + revision.id + ', Last Modified: ' + revision.modifiedDate);
    }
  } else {
    Logger.log('No revisions found for this sheet.');
  }
}
