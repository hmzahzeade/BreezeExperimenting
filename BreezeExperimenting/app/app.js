﻿(function () {
    'use strict';
    
    var app = angular.module('app', [
        // Angular modules 
        'ngAnimate',         // animations
        'ngRoute',           // routing
        'ngSanitize',        // sanitizes html bindings (ex: sidebar.js)

        // Custom modules 
        'common',            // common functions, logger, spinner
        'common.bootstrap',  // bootstrap dialog wrapper functions

        // 3rd Party Modules
        'ui.bootstrap',      // ui-bootstrap (ex: carousel, pagination, dialog)
        'breeze.directives', // breeze validation directive (zValidate)
        'breeze.angular.q'  // tells breeze to use $q instead of Q.js
    ]);
    
    // Handle routing errors and success events
    app.run(['$route', 'config.breeze',  function ($route) {
            // Include $route to kick start the router.
        }]);        
})();