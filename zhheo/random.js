var posts=["posts/e6a2025.html","posts/43748377.html","posts/52c9d35.html","posts/b3d7b7de.html","posts/2013454d.html","posts/61d7c041.html","posts/d6d9fc07.html","posts/ebdb339d.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};