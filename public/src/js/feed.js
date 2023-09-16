var shareImageButton = document.querySelector("#share-image-button");
var createPostArea = document.querySelector("#create-post");
var closeCreatePostModalButton = document.querySelector(
  "#close-create-post-modal-btn"
);

function openCreatePostModal() {
  createPostArea.style.display = "block";
  console.log("clicked");
  if (deferredPromt) {
    deferredPromt.prompt();

    deferredPromt.userChoice.then(function (choiceResult) {
      if (choiceResult.outcome === "dismissed") {
        console.log("user has chosen not to install");
      } else {
        console.log("use has chosen to install the PWA");
      }
    });

    deferredPromt = null;
  }
}

function closeCreatePostModal() {
  createPostArea.style.display = "none";
}

shareImageButton.addEventListener("click", openCreatePostModal);

closeCreatePostModalButton.addEventListener("click", closeCreatePostModal);
