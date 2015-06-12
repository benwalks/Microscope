if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  });
  
  Posts.insert({
    title: 'Demo title',
    url: 'http://google.com'
  });

  Posts.insert({
    title: 'Another demo!',
    url: 'http://goo.com'
  });
}
