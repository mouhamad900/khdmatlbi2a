const form = document.getElementById("postForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;

  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.unshift({ title, content }); // unshift حتى يظهر الجديد فوق
  localStorage.setItem("posts", JSON.stringify(posts));

  alert("✅ Post published!");
  form.reset();
});
