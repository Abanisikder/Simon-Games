Simon Says Game
A classic memory-based sequence game built with Vanilla JavaScript, HTML5, and CSS3. The game challenges players to remember an ever-increasing random sequence of flashes and replicate them perfectly.

🚀 How to Play
Initialize: Press any key on your keyboard to start the game.

Observe: The game will flash a random button (Red, Green, Blue, or Yellow) and increment the level.

Replicate: Click the buttons in the exact order they were shown.

Advance: If your sequence matches the game sequence, you will move to the next level, and the pattern will grow.

Game Over: If you click the wrong button, the screen will flash red, and your final score will be displayed.

🛠️ Technical Stack
HTML5: Semantic structure for the game board.

CSS3: Flexbox layout and custom animations for the "flash" effect.

JavaScript (ES6):

DOM Manipulation: Dynamic updating of levels and game-over messages.

Event Listeners: Handling keyboard triggers and mouse clicks.

Asynchronous Logic: Using setTimeout for timing sequences and flashes.

🧠 Key Logic Explained
Sequence Tracking
The game manages state using two primary arrays:

gameSeq: Stores the randomly generated pattern created by the CPU.

userSeq: Stores the pattern clicked by the player during their turn.

The Matching Algorithm
Every time a user clicks a button, the following logic is executed:

Index Check: Does the current click match the same position in gameSeq?

Length Check: If the click is correct, has the user finished the entire sequence?

Level Progression: If both are true, the userSeq is reset, and a new color is added to gameSeq after a short delay.

📁 Project Structure
Plaintext
├── index.html   # Game structure and UI elements
├── style.css    # Styling, colors, and flash animations
└── app.js       # Core game logic and state management



