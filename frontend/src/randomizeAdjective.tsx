const randomizeAdjective = () => {
  const adjectives = [
    "a friendly",
    "our first",
    "a cutthroat",
    "a high-stakes",
    "a casual",
    "a strategic",
    "an engaging",
    "a challenging",
    "your typical",
    "a fun-filled",
    "a thought-provoking",
    "a fast-paced",
    "a thrilling",
    "a dynamic",
    "a silly",
    "an immersive",
    "a memorable",
    "just a",
    "an unforgettable",
    "a stimulating",
    "a rousing",
    "an interactive",
    "a mind-boggling",
    "an exciting",
    "a social",
    "a worthy",
    "an unforgettable",
    "a lovely",
    "a delightful",
    "a cheerful",
    "a bittersweet",
    "a trolling",
    "an intriguing",
    "any old",
    "an epic",
    "a skillful",
    "a rewarding",
    "not your grandma's",
    "a surprising",
    "a noteworthy",
    "a legendary",
    "an amusing",
    "a relaxing",
    "a cathartic",
    "a playful",
    "a scintillating",
    "an intense",
    "a winner-take-all",
    "a beginner's",
    "a no-holds-barred",
    "our last",
    "a double-or-nothin'",
    "a competitive",
    "a toxic",
    "a dog-eat-dog",
    "a learning",
  ];
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return adjectives[randomNumber];
};

export default randomizeAdjective;
