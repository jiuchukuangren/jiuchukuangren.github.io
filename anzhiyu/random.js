var posts=["2023/10/17/hello-world/","2023/10/17/文章标题/","2023/10/19/小蝶/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };