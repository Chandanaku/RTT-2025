//Global Variables/State

let posts = [];

/*Get references to your form, input fields, error message elements, post display area, etc.*/

const title = document.getElementById("title");
const content = document.getElementById("content");
const errormsg = document.getElementsByClassName("error-message");
const submit = document.getElementById("submit");
const p = document.getElementsByClassName("container1")[0];
const form = document.getElementById("form-inputs");
const pctr = document.getElementById("picture-input");
const prview = document.getElementById("preview");
//input type image file preview

pctr.addEventListener("change", function () {
  const file = pctr.files[0];
  const r = new FileReader();
  if (file) {
    r.onload = function (e) {
      prview.src = e.target.result;
      prview.style.display = "block";
    };

    r.readAsDataURL(file);
  } else {
    prview.style.display = "none";
  }
});
function pst() {
  posts.push({
    title: title.value,
    content: content.value,
    imge: prview.src,
  });
  return posts;
}

let i = null;
function display(posts) {
  p.innerHTML = "";

  posts.forEach((post, index) => {
    const card = document.createElement("article");
    card.className = "card";

    const vm = document.createElement("div");
    vm.className = "text";
    vm.innerHTML = `<hr><h1>${post.title}</h1><p>${post.content}</p>`;
    const imgPreview = document.createElement("img");
    imgPreview.src = post.imge;
    imgPreview.className = "container-img";
    vm.prepend(imgPreview);
    const vmb = document.createElement("div");
    vmb.className = "card-btns";
    const del_btn = document.createElement("button");
    const upd_btn = document.createElement("button");
    del_btn.textContent = "➖";
    upd_btn.textContent = "🖊️";

    card.appendChild(vm);
    vmb.appendChild(upd_btn);
    vmb.appendChild(del_btn);
    card.appendChild(vmb);
    p.appendChild(card);
    del_btn.addEventListener("click", () => {
      posts.splice(index, 1);
      localStorage.setItem("list", JSON.stringify(posts));

      display(posts);
    });
    upd_btn.addEventListener("click", () => {
      title.value = post.title;
      content.value = post.content;
      prview.src = post.imge;
      i = index;
      localStorage.setItem("list", JSON.stringify(posts));
    });
  });

  p.style = "display:grid;width:fit-content; margin-top:20px;";
}
/// EVENT LISTENERS

//submit
submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (!title.value || !content.value || !pctr.value) {
    return "All filed required to fill. ";
  } else {
    if (i !== null) {
      posts[i].title = title.value;
      posts[i].content = content.value;
      posts[i].imge = prview.src;
      i = null;
    } else {
      pst();
    }
    display(posts);
    alert("Submitted! ");
    localStorage.setItem("list", JSON.stringify(posts));
    title.value = "";
    content.value = "";
    pctr.value = "";
    prview.src = "";
    prview.style.display = "none";
    errormsg[0].textContent = "";
    errormsg[1].textContent = "";
    errormsg[2].textContent = "";
    errormsg[3].textContent = "";
  }
});

//   Add input event listeners to each field.
title.addEventListener("input", () => {
  if (title.value.length > 4) {
    errormsg[0].textContent = "too Short! Make sure have Minimum Length 4";
    if (title.validity.valid) {
      errormsg[0].textContent = "Valid! ";
    }
  } else {
    errormsg[0].textContent = "too Short";
  }
});
content.addEventListener("input", () => {
  if (content.value.length <= 100) {
    if (content.validity.valid) {
      errormsg[1].textContent = "Valid! ";
      return;
    }
  } else {
    errormsg[1].textContent = " not Valid! ";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const stored = localStorage.getItem("list");
  const psts = stored ? JSON.parse(stored) : [];
  posts = psts; // Restore global state
  display(posts);
});
