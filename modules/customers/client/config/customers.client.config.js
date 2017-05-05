(function () {
  'use strict';

  angular
    .module('customers')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Customers',
      state: 'customers',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'customers', {
      title: 'List Customers',
      state: 'customers.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'customers', {
      title: 'Create Customer',
      state: 'customers.create',
      roles: ['user']
    });
  }
}());
