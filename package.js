Package.describe({
  name: 'justindra:accounts-tanda',
  version: '0.0.3',
  summary: 'Login service for Tanda accounts',
  git: 'https://github.com/justindra/meteor-accounts-tanda.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('justindra:tanda@0.1.1', ['client', 'server']);

  api.addFiles('tanda_login_button.css', 'client');

  api.addFiles('tanda.js');
});