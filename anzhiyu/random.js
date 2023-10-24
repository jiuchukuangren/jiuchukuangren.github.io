var posts=["2023/10/17/hello-world/","2023/10/17/文章标题/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };