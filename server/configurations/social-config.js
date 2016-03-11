ServiceConfiguration.configurations.remove({
    service: 'facebook'
});

ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: Meteor.settings.private.oAuth.facebook.appId,
    secret: Meteor.settings.private.oAuth.facebook.secret
});
