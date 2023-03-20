function getComputerChoice()
{
	let b = Math.round(Math.random() * 2);
	if (b === 0)
		return ("Rock");
	else if (b === 1)
		return ("Paper");
	else (b === 2)
		return ("Scissors");
}

function playRoundUtils(p, c, a)
{
	let win = "You win " + a[p].toLowerCase() + " beats " + a[c].toLowerCase() + "\nPlayer won!";
	let lose = "You lose " + a[c].toLowerCase() + " beats " + a[p].toLowerCase() + "\nComputer won!";
	if (c === p)
		return("Draw");
	else if ((p != 2) && (c != 2))
	{
		if (p < c)
			return(win);
		else
			return(lose);
	}
	else if ((p === 2) || (c === 2))
	{
		if ((c === 1) || (p === 0))
			return(lose);
		else if ((p === 1) || (c === 0))
			return(win);
	}
}

function playRound(playerSelection, computerSelection)
{
	const a = ["SCISSORS", "PAPER", "ROCK"];
	let p = 0;
	let c = 0;
	for(let i = 0; i < 3; i++)
	{
		if (playerSelection.toUpperCase() === a[i])
			p = i;
		if (computerSelection.toUpperCase() === a[i])
			c = i;
	}
	return (playRoundUtils(p, c, a));
}

function game()
{
	let l = 0;
	let w = 0;
	for (let i = 0; i < 5; i++)
	{
		let b = prompt("Enter rock, paper or scissors: ");
		let c = playRound(b, getComputerChoice());
		console.log(c);
		if (c.includes("win"))
			w += 1;
		else if (c.includes("lose"))
			l += 1;
	}
	console.log("You won " + w + " times and computer " + l + " times");
}

game();