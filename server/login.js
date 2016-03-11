Accounts.onCreateUser(function(options, user) {
  if (options.company){
    var user_hash = CryptoJS.HmacSHA256(Date(), 'b4z1ng4'+user.email).toString();
    var organization_id = Meteor.call('addOrganization', options.company.alias, '', options.company.RUT, options.company.DV);
    var organizations = {'id' : organization_id, 'created_at': new Date() }
    var profile = {
      first_name: '',
      last_name: '',
      alias: '',
      organization_id: organization_id
    }

    var security= {hash: user_hash}

    user.profile = profile;
    user.security = security;
    user.organizations = [organizations];
  }

  return user;
});
