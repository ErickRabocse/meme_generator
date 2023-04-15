//Select the button that will trigger the image(meme), jokes, riddles...
const btn_meme = document.querySelector(".meme_btn");
const btn_joke = document.querySelector(".joke_btn");
const btn_quote = document.querySelector(".quote_btn");
const btn_riddle = document.querySelector(".riddle_btn");
const btn_answer = document.querySelector(".answer_btn");

//Array of images:
const images = [
  "/images/one.png",
  "/images/two.png",
  "/images/three.png",
  "/images/four.jpeg",
  "/images/five.png",
  "/images/six.png",
  "/images/seven.png",
  "/images/eight.png",
  "/images/nine.png",
  "/images/ten.png",
  "/images/eleven.png",
  "/images/twelve.png",
];
//Array of jokes
const jokes = [
  "I was going to tell a time traveling joke, but you guys didn't like it.",
  "What do you call a lazy kangaroo? A pouch potato.",
  "I used to run a dating service for chickens, but I was struggling to make hens meet.",
  'Why do we tell actors to "break a leg?" Because every play has a cast.',
  "What does a pig put on dry skin? Oinkment.",
  "What do you call it when a snowman throws a tantrum? A meltdown.",
  "My uncle named his dogs Timex and Rolex. They're his watch dogs.",
  "Did you hear about the guy whose left side was cut off? He's all right now.",
  "How do you open a banana? With a mon-key.",
  "Which is faster, hot or cold? Hot, because you can catch cold.",
];
//Array of quotes
const quotes = [
  "/images/quote_1.webp",
  "/images/quote_2.webp",
  "/images/quote_3.webp",
  "/images/quote_4.webp",
  "/images/quote_5.webp",
  "/images/quote_6.webp",
  "/images/quote_7.webp",
  "/images/quote_8.webp",
];
//Array of riddles & answers
const riddles = [
  {
    riddle:
      "Mississippi has four S’s and four I’s. Can you spell that without using S or I?",
    answer: "T - H - A - T!",
  },
  {
    riddle:
      "There’s a one-story house where everything is yellow. The walls are yellow. The doors are yellow. All the furniture is yellow. The house has yellow beds and yellow couches. What color are the stairs?",
    answer: "There are no stairs—it’s a one-story house!",
  },
  {
    riddle: "A girl fell off a 20-foot ladder. She wasn’t hurt. How?",
    answer: "She fell off the bottom step.",
  },
  {
    riddle:
      "Grandpa went out for a walk and it started to rain.He didn’t bring an umbrella or a hat.His clothes got soaked, but not a hair on his head was wet. How is this possible ?",
    answer: "Grandpa’s bald!",
  },
  {
    riddle:
      "You’re in a race and you pass the person in second place. What place are you in now?",
    answer: "Second place.",
  },
];

function clearAll() {
  const memeContainer = document.querySelector(".meme_content");
  const jokeContainer = document.querySelector(".joke_content");
  const quoteContainer = document.querySelector(".quote_content");
  const riddleContainer = document.querySelector(".riddle_content");
  memeContainer.innerHTML = "";
  jokeContainer.innerHTML = "";
  quoteContainer.innerHTML = "";
  riddleContainer.innerHTML = "";
}

function randomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomContent = arr[randomIndex];
  return randomContent;
}

function showMeme() {
  //Store random fn into a var, to use it as a parameter
  const randomUrl = randomElement(images);
  //Select div where the content is to be inserted
  const memeContainer = document.querySelector(".meme_content");
  //Random image to be insterted in the span
  const image = document.createElement("img");
  image.setAttribute("src", randomUrl);
  //Check if there's content in the div, remove it
  clearAll();
  //Add content to the element created***
  memeContainer.appendChild(image);
}

function showJoke() {
  //Store random fn into a var, to use it as a parameter
  const randomJoke = randomElement(jokes);
  //Random joke to be insterted in the paragraph
  const descritpion = document.createElement("p");
  descritpion.textContent = randomJoke;
  //Check if there's content in any div, remove it all!
  clearAll();
  //Select div where the content is to be inserted and insert the element created.
  document.querySelector(".joke_content").appendChild(descritpion);
}

function showQuote() {
  //Store random fn into a var, to use it as a parameter
  const randomUrl = randomElement(quotes);
  //Select div where the content is to be inserted
  const quoteContainer = document.querySelector(".quote_content");
  //Random image to be insterted in the span
  const image = document.createElement("img");
  image.setAttribute("src", randomUrl);
  //Check if there's content in the div, remove it
  clearAll();
  //Add content to the element created***
  quoteContainer.appendChild(image);
}

function showRiddle() {
  //Store random fn into a var, to use it as a parameter
  const randomRiddle = randomElement(riddles);
  //destructuring object to obtain its values separately
  const { riddle, answer } = randomRiddle;
  //Random riddle to be insterted in the paragraph
  const descritpion = document.createElement("p");
  descritpion.textContent = riddle;
  //riddle answer to be insterted in the paragraph
  const solution = document.createElement("p");
  solution.textContent = "The answer is: " + answer;
  solution.setAttribute("id", "riddle_answer");
  solution.hidden = true;
  //Check if there's content in any div, remove it all!
  clearAll();
  //Select div where the content is to be inserted and insert the element created.
  const container = document.querySelector(".riddle_content");
  container.appendChild(descritpion);
  container.appendChild(solution);
}

function showAnswer() {
  //select container to then select the riddle (paragraph) in the container.
  const container = document.querySelector(".riddle_content");
  const riddle = container.querySelector("p");
  //const answer = container.querySelectorAll("p").item(1).textContent;
  //The id riddle_answer was previously set when the riddle was created!
  const answer = document.querySelector("#riddle_answer");
  //With this if, we make sure that only when the riddle is present with a hidden answer, the answer should be revealed
  if (riddle && answer.hidden) {
    answer.hidden = false;
    riddle.style.borderRadius = "5px 5px 0 0";
    answer.style.borderRadius = "0 0 5px 5px";
    answer.style.color = "rgba(255, 255, 0, 0.95)";
  } else if (riddle) {
    alert("The answer is already revealed.");
  } else if (!riddle) {
    alert("You're not in the riddle section.");
  }
}

btn_meme.addEventListener("click", showMeme);
btn_joke.addEventListener("click", showJoke);
btn_quote.addEventListener("click", showQuote);
btn_riddle.addEventListener("click", showRiddle);
btn_answer.addEventListener("click", showAnswer);
