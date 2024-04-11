function onEdit(e) {
  // Get the active document
  var doc = DocumentApp.getActiveDocument();

  // Retrieve the user's email. Note: This will only work for users within your Google Workspace domain
  var userEmail = Session.getActiveUser().getEmail();

  // Get the current date and time
  var timestamp = new Date();

  // Log the user's email and timestamp
  Logger.log('Document edited by: ' + userEmail + ' at ' + timestamp);

  // Optionally, you can record this information in a Google Sheet or elsewhere
 
}
