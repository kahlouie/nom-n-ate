import Model, { attr, hasMany } from "ember-data/model";

export default Model.extend({
  name: attr('string'),
  streetAddress: attr('string'),
  city: attr('string'),
  state: attr('string'),
  visits: hasMany('visit')
});
