function main() {
  fetchVideos().then((videos) => {
    displayVideos(videos);
  });
  //   fetchVideos().then((videos) => {
  //     displayVideos(videos);
  //   });
  //   displayRegistration();

  displayLogin();
}

//main();
window.addEventListener('load', main);
