require.config({
  baseUrl: 'app',
  paths: {
    // load per request
    'HomeController': 'demo/controllers/homeController',
    'VisitorController': 'demo/controllers/visitorController'
  },
// deps: ['app']
})

require(
  [
    'app',
    // load at app first load
    // 'demo/controllers/homeController',
    // 'demo/controllers/visitorController',
    'demo/directives/formatPhone',
    'demo/directives/formatCurrency',
  ],
  function () {
    angular.bootstrap(document, ['demo'])
  })
