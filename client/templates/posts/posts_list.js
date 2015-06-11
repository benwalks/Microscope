var postsData = [
  {
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  },
  {
    title: 'Demo title',
    url: 'www.google.com'
  },
  {
    title: 'Another demo!',
    url: 'www.goo.com'
  }
];

Template.postsList.helpers({
  posts: postsData
});
