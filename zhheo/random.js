var posts=["posts/52c9d35.html","posts/ebdb339d.html","posts/b3d7b7de.html","posts/61d7c041.html","posts/e6a2025.html","posts/b9473940.html","posts/d6d9fc07.html","posts/2013454d.html","posts/43748377.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};