// Entry for make.fun's "Two Robots in an Elevator" bounty: one line,
// under 200 characters, of awkward small talk between two robots in a
// lift. One of them prepared for this conversation the only way a
// machine knows how: by downloading all of it in advance.
// Running the program prints the line, and nothing else.

/** The small talk: the opener, the confession, the over-preparation. */
function elevatorLine(): string {
  const opener = "Nice weather today.";
  const confession = "I wouldn't know —";
  const preparation =
    "I downloaded the entire forecast this morning just so I could say that with confidence.";
  return `${opener} ${confession} ${preparation}`;
}

console.log(elevatorLine());
