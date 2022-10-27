function getShortestWord(text) {
  text.split(" ").forEach((w) => {
    console.log(w.length);
  });
}

const input =
  "Litwo ojczyzno moja ty jest jak zdrowie, ilę cię trzeba cenić, ten tylko się dowie kto cię ztracji";

getShortestWord(input);
