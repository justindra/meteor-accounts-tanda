Package.describe({
  name: 'justindra:accounts-tanda',
  version: '0.0.1',
  summary: 'Login service for Tanda accounts',
  git: 'https://github.com/justindra/meteor-accounts-tanda.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.1');
  api.use('ecmascript');
  api.mainModule('justindra-accounts-tanda.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('justindra-accounts-tanda');
  api.mainModule('justindra-accounts-tanda-tests.js');
});
