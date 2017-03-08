'use strict';

angular.module('groceriesApp')

.factory('groceryFactory', function() {

  var groceryfac = {};

  var grocerylist = [
    {
      name: 'Maçã',
      class: 'Frutas',
      done: false
    },{
      name: 'Banana',
      class: 'Frutas',
      done: false
    },{
      name: 'Alface',
      class: 'Vegetais',
      done: false
    },{
      name: 'Batata',
      class: 'Legumes',
      done: false
    },{
      name: 'Granola',
      class: 'Cereais',
      done: false
    },{
      name: 'Aveia',
      class: 'Cereais',
      done: false
    },{
      name: 'Sabão em pó',
      class: 'Produtos de Limpeza',
      done: false
    }
  ]

  groceryfac.getGroceries = function() {
    return grocerylist;
  };
  return groceryfac;
})

.factory('groceryClassFactory', function() {

  var classfac = {};
  var classes = [
    {class: 'Frutas'},
    {class: 'Vegetais'},
    {class: 'Legumes'},
    {class: 'Cereais'},
    {class: 'Grãos'},
    {class: 'Massas'},
    {class: 'Higiene & Perfumaria'},
    {class: 'Produtos de limpeza'},
    {class: 'Bebidas alcoólicas'},
    {class: 'Bebidas'},
    {class: 'Congelados'},
    {class: 'Carnes'},
    {class: 'Biscoitos e snacks'},
    {class: 'Molhos e condimentos'},
    {class: 'Conservas e enlatados'},
    {class: 'Matinais'},
    {class: 'Doces e sobremesas'},
    {class: 'Queijos e frios'},
    {class: 'Naturais e funcionais'},
    {class: 'Artigos para o lar'},
  ]

  classfac.getClasses = function() {
    return classes;
  };
  return classfac;
})
