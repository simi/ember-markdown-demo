marked.setOptions({
  gfm: true,
  breaks: true
});

App = Ember.Application.create();

Ember.Handlebars.helper('convert-markdown', function(markdown) {
  return new Ember.Handlebars.SafeString(marked(markdown));
});
