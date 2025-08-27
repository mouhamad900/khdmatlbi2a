// تحميل البوستات عند فتح الصفحة
function loadPosts() {
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  let postsDiv = document.getElementById("posts");

  postsDiv.innerHTML = "";
  if (posts.length === 0) {
    postsDiv.innerHTML = "<p>No posts yet. Check back later!</p>";
  } else {
    posts.forEach((post) => {
      postsDiv.innerHTML += `
        <div class="post">
          <h3>${post.title}</h3>
          <p>${post.content}</p>
        </div>
      `;
    });
  }
}

// التعامل مع النشر من الأدمن
const form = document.getElementById("postForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;

  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.unshift({ title, content });
  localStorage.setItem("posts", JSON.stringify(posts));

  loadPosts();
  form.reset();
  alert("✅ Post published!");
});

window.onload = loadPosts;
