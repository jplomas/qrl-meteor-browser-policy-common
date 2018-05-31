Package.describe({
  summary: "Common code for browser-policy packages with QRL added headers",
  name: "qrl:browser-policy-common",
  version: "1.0.13"
});

Package.onUse(function (api) {
  api.versionsFrom('1.4.3.1');
  api.use('webapp', 'server');
  api.addFiles('browser-policy-common.js', 'server');
  api.export('BrowserPolicy', 'server');
});
