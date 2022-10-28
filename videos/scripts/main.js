function main() {
  fetchVideos().then((videos) => {
    displayVideos(videos);
  });
  //   fetchVideos().then((videos) => {
  //     displayVideos(videos);
  //   });
  displayRegistration();
}

//main();
window.addEventListener('load', main);
