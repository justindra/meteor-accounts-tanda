Accounts.oauth.registerService('tanda');

if (Meteor.isClient) {
  Meteor.loginWithTanda = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Tanda.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    // Automatically publish fields related to the Tanda account
    forLoggedInUser: ['services.tanda'],
    forOtherUsers: ['services.tanda.id', 'services.tanda.email']
  });
}
