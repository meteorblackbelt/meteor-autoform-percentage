Package.describe({
  name: 'meteorblackbelt:autoform-percentage',
  summary: 'Custom percentage input for AutoForm',
  version: '0.0.1',
  documentation: null
});

Package.onUse(function(api) {
  api.use('templating@1.0.0');
  api.use('blaze@2.0.0');
  api.use('aldeed:autoform@4.0.0 || 5.0.0');
  api.addFiles([
    'autoform-percentage.html',
    'autoform-percentage.js'
  ], 'client');
});
