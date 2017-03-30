'use strict';
var menuItems,
    observable = require('data/observable'),
    navigationViewModel = new observable.Observable();

menuItems = [{
    "title": "Home View",
    "moduleName": "components/homeView/homeView",
    "icon": "\ue0dd"
}, {
    "title": "Employees",
    "moduleName": "components/employeesView/employeesView",
    "icon": "\ue0e4"
}];

navigationViewModel.set('menuItems', menuItems);
navigationViewModel.set('backButtonHidden', true);

module.exports = navigationViewModel;