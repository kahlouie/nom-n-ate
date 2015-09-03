import Model, { attr, belongsTo } from "ember-data/model";

export default Model.extend({
  dateVisited: attr('date'),
  restaurant: belongsTo('restaurant')
});
