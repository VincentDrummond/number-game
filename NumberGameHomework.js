/*
​
	Guess the Number!
​
	A game we can play in our browser's console (and, next week, our terminal!)
​
	We pick from three difficulty settings ("easy", "medium", "hard") when we
	start a game. We get back a game object which has three methods: guess(),
	help(), and restart().
​
	We then have to guess a randomly generated number between a range and within
	a maximum number of tries/attempts (range and guess limit determined by
	difficulty level).
​
	If we guess too high, we get told. If we guess too low, we are warned of this
	as well.
	
	If we're low on tries, we can use help() to see how "far away" we are
	from the right answer based on our last guess. If we are two away, we are told
	we are within 10. If we are 18 away, we are told we are within 20, and so on.
​
​

	When I say "tell the user" or "output" or something like that, I mean
	display into the console.

​
*/
// 1. Game difficulty levels:
//    Create three constants named EASY, MEDIUM, and HARD and assign the values
//    "easy", "medium", and "hard" respectively.

// BONUS: do it all on one line.
const easy = "easy", medium = "medium", hard = "hard";

// 2. The game settings for each difficulty level:
//    Here we have an object which has keys with no name with values that are
//    all objects. Each of these objects has game settings for `upper` (the
//    highest number we can guess) and `tries` (the limit of guesses we have).
//    Use the *values* of the constants EASY, MEDIUM, and HARD as keys for this
//    object. (hint: the quotes are a red herring)
const SETTINGS = {
	easy: {
		upper: 25,
		tries: 10,
	},
	medium: {
		upper: 50,
		tries: 7,
	},
	hard: {
		upper: 100,
		tries: 5,
	},
};

// 3. Next we have two functions. I used JSDoc notation here just for example.
//    Nothing to do here except read these two functions and understand what
//    they do and how they work. Might be good to take a bit of time on MDN
//    looking at the Math object and its handy methods.
/**
 * @name randomNumber
 * 
 * @description Returns a randomly generated number within a given range.
 * 
 * @param {number} [lower = 0] - the lower bound of the desired range
 * @param {number} [upper = 1] - the upper bound of the desired range
 * @returns {number}
 */
const randomNumber = (lower = 0, upper = 1) => Math.random() * (upper - lower) + lower;

// THE FUNCTION CALLED RANDOMNUMBER HAS TWO PARAMETERS PASSED INTO IT:
// LOWER WHICH IS ASSIGNED THE 0 VALUE
// UPPER WHICH IS ASSIGNED THE 1 VALUE
// RUN THE MATH ARRAY METHOD ON THE RANDOM FUNCTION
// MULTIPLY THIS BY THE UPPER LIMIT MINUS THE LOWER LIMIT, THEN PLUS THE LOWER

// NUMBER IS: POSITIVE + 0

/**
 * @name randomInteger
 * 
 * @description Returns a randomly generated integer within a given range.
 * 
 * @param {number} [lower]
 * @param {number} [upper]
 * @returns {number}
 */
const randomInteger = (lower, upper) => Math.round(randomNumber(lower, upper));

// INTEGER IS: POSITIVE, NEGATIVE + 0

// 4. GuessTheNumber game!
//    Here, we have a *partially* made function.
//    
//    GuessTheNumber takes a `settings` object as a parameter
//    and return an object with properties and methods that
//    describe and control our Guess the Number game.
//
//    The `settings` object can be anything that resembles:
/*
		{
			lower: 10,
			upper: 20,
			tries: 3,
		}
*/
//    Not all properties have to be there (we will handle defaults)
//    and, if no argument is passed to GuessTheNumber, we should set
//    the default value of `settings` to be an empty object.
//
//    Read through the function for instruction.
/**
 * @name GuessTheNumber
 * 
 * @description Creates a guessing game based on the passed settings and returns it.
 * 
 * @param {Object} [settings = {}] - various settings. Default value = {} (empty object)
 * @returns {Object} - A game object with properties and methods to play the game.
 */
		
		/*
			4.a **Destructure** the `settings` object passed to this function into
			constants named `lower` (default value of 1), `upper` (default any number
			you want), and `maxTries` (rename from `tries`, default any number).
			If `settings` is not an object, this will fail.

			4.b Display a welcome message to the console and ask the user to guess
			a number between the lower and upper bounds.

			Next, we are going to return an object with some useful properties and methods.

			4.c Add the constants `lower`, `upper`, and `maxTries` (we destructured
			from `settings`) as properties on this object. Next, create two
			more properties named `attempts` (assign an empty array) and
			`target` (call `randomInteger`, pass `lower` and `upper` as
			arguments, and assign the randomly generated number to `target`)
		*/
	
			function guessTheNumber(SETTINGS = { upper = {}, tries }) {
									// I CAN'T FIGURE THIS BIT OUT

/*4a*/		const		{ lower = [ 1 ], upper, tries: maxTries } = SETTINGS;

/*4b*/		console.log	(`Welcome to the Game. Please guess a number between
							${ SETTINGS.lower } and ${ SETTINGS.upper }.`);
		
/*4c*/		const gameRules = {
					lower: 1,
					upper: SETTINGS.upper,
					maxTries: SETTINGS.tries,
					attempts: [],
					target: target = randomInteger(1, 50),
		};

		return gameRules;
	}

		/*
			Take a moment to test this now. Open your console and run
​			let game = guessTheNumber(); // <-- just our defaults, so no arguments
​
			We should see our welcome message, and we should have access to our data
			through the `game` object:
			game.lower, game.upper, game.maxTries, game.target, etc.
		*/
		

		/*
			5. Next, we are going to be creating three methods we can call to play our game.
			Those methods are `guess`, `help`, and `restart`.
		
			5.a Complete the `restart` method.

		
			5.a.i)	CLEAR *`this`* object's `attempts` array of any items.
			
			5.a.ii)	Re-assign *`this`* object's `target` property with a newly generated
					random integer. Use *`this`* object's `lower` and `upper` properties
					as the range/bounds.

			5.a.iii) Output to the console that a new game has been created and that the
			        user must guess a number between *`this`* object's range.
		*/

			restart() {
/* 5.a.i */		this.attempts.splice(0,10);
				// 10 IS MORE THAN THE TOTAL # OF ITEMS IN THE ARRAY, SO ALL GET CLEARED
/* 5.a.ii */	this.target = randomInteger(SETTINGS.lower, SETTINGS.upper);
/* 5.a.iii */	console.log	(	`A new Game has been created.
								Please guess a number between ${ SETTINGS.lower }
								and ${ SETTINGS.upper }.`);
			}

		/*
			5.b Create a method named `guess` which has a parameter named `number` whose
			default value is zero.

			5.c Push `number` into **`this`** object's `attempts` array.

			5.d Does the `number` passed match *`this`* object's `target`? **IF SO**,
			we should tell the user they won and how many tries it took. Then,
			call *`this`* object's `restart` method and return (we're done guessing!).
			No need to return a value, but returning is a must.

			5.e So, since we are here in the code, it implies that `number` was not
			equal to `this.target`. So, was it lower? Higher? Out-of-range??
			Use an if/elseif/else statement to tell the user about their guess,
			comparing `number` to our object's properties.

			5.f Next, Let's tell the user how many attempts they have left.
			Store into a constant/variable named `attemptsRemaining` how
			many tries/attempts are left (hint: `this.maxTries` and we
			pushed our `number` into an array!)

			5.g What if we have no more attempts remaining? We should probably tell
			the user it's too late, what the answer is, and say game over.
			Then `restart` and return like we did earlier. We're done here!

			5.h Lastly, we want to output how many attempts are remaining.
			if the `attemptsRemaining` is only 1, perhaps we want to
			show a slightly different message. Maybe something like:
			"Only one shot left! Choose Wisely."]

		*/

/* 5.b */	function guess(number = 0) {
/* 5.c */		this.attempts.push(number);

/* 5.d */	if (number) === this.target {
					console.log (`Well done, you won the Game. It took you ${ number } attempts`);
					return restart();	
				}

/* 5.e */	else if (number) < this.target {
					console.log (	`Sorry, you did not win the Game.
									Your guess was too low. Please guess again.`);
				}

			else if (number) > this.target {
					console.log (	`Sorry, you did not win the Game.
									Your guess was too high. Please guess again.`);
				}

			}

/* 5.f */	const attemptsRemaining = this.maxTries - (number); {
			
			if  (attemptsRemaining) < maxTries {
					console.log (`You have ${ attemptsRemaining } attempts remianing.`);
			}

/* 5.g */	if  (attemptsRemaining) >= maxTries {
				console.log (`You have ZERO attempts remaining. The Game is OVER`);
				return restart();
			}

/* 5.h */	if (attemptsRemaining) === 1 {
				console.log (`You only have one guess left. Use it wisely!`);
			};
			}

			/*
			
			And we're done here! Take some time to test out your new method.
			Open the console and type
​
			let game = guessTheNumber(); // <-- still on the defaults
			game.guess(40); // <-- or some other number. And keep going!
​
			Since you have access to `game.target` and can cheat, use this to
			test everything is working as you expect.
			
			*/

			/*
			6. Complete this help function!

			6.a Store the most recent attempt into a constant/variable
			named `lastGuess`.

			6.b Is our `lastGuess` even a number? If it's NOT, then we
			should tell the user they need to guess a number first and
			then return as we're done here.

			6.c Lastly, we want to output to the console how far away
			the `lastGuess` is within our target in multiples of 10.
			(ie you are within 10 of the target, you are within 20 of
			the target, you are within 30 of the target, etc.)
			The hard bit is done for you. More Math methods. See if
			you can try and understand what is happening here!

			*/
			
			help() {

/* 6.a */	

/* 6.b */	if (isNaN(lastGuess)) {
				console.log(`That is not a number.
				Please guess a number between ${ SETTINGS.lower } and ${ SETTINGS.upper }.`);
			}

/* 6.c */	const withinDistance = Math.ceil(Math.abs(this.target - lastGuess) / 10) * 10;
			// use `withinDistance` in your template string.
		}
	};
}


			/*
			​
			Take some time now and play with your game object! Not too long though,
			there is one last step to take.

			7. Last but not least, create a function called `startGame` which has
			one parameter named `difficulty` whose default value is equal to
			the constant `MEDIUM`.
			You must get the settings object from `SETTINGS` (see top) that
			matches the `difficulty` parameter.
			Lastly, call the `GuessTheNumber` function and pass-in the
			settings retrieved and *RETURN* the game object so we can
			access it.

			*/


// * *
// BONUS: What if the value in `difficulty` is an invalid difficulty level?
//        We should probably tell the user what options are available and
//        return from the function early.
// * *

/*
​
	Now we can start games at "easy", "medium", and "hard"
​
		let game = startGame("hard");
		game.guess(21);
		game.help();
	
	etc
​
*/