/**
 * @param {string[]} emails
 * @return {number}
 * https://leetcode.com/problems/unique-email-addresses
 */
var numUniqueEmails = function(emails) {
    var new_emails = [];
    for (var email of emails) {
      var lst = email.split('@')
      if (lst[0].includes('+') == true) {
        var local = lst[0].split('+')[0].replace(/\./g,'');
      }
      else {
        local = lst[0].replace(/\./g,'');
      }
      new_email = local+'@'+lst[1]
      if (new_emails.includes(local+'@'+lst[1]) == false) {
        new_emails.push(new_email);
      }
    }
    return new_emails.length
};

