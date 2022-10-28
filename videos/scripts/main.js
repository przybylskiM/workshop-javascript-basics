function main() {
  fetchVideos().then((videos) => {
    displayVideos(videos);
  });
}

//main();
window.addEventListener("load", main);
