console.log("zscript Assignment")


const game = {

    team1: "India",
    team2: "Australia",
    players: [

        [
            "Dhoni",
            "Rohit",
            "Dhawan",
            "Kohli",
            "Raina",
            "Pandey",
            "Jadeja",
            "Ashwin",
            "Bhuvi",
            "Shami",
            "Bumrah"
        ],
        [
            "Cummins",
            "Marsh",
            "Warner",
            "Smith",
            "Maxwell",
            "Green",
            "Carey",
            "Starc",
            "Hazelwood",
            "Zampa",
            "Boland"
        ]
    ],
    Century: ['Kohli', 'Sharma', 'Warner', 'Maxwell'],
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    }
}


let[player1,player2]= game.players;

console.log('player1', player1)
console.log('player2', player2)

let fullsquad = [...player1,...player2]
console.log('fullsquad',fullsquad);

let[captain,...fieldplayers] = player1

console.log('captain', captain)
console.log('fieldplayers', fieldplayers)

let fullsquadIndia = [...player1,"sandeep",'sunil','john'];

console.log(fullsquadIndia)

let{team1, x, team2} = game.odds;
console.log('team1', team1)
console.log('x', x)
console.log('team2', team2)

for(let cent of Object.entries(game.Century)){
    console.log('centuries',cent);
}

team1<team2 && console.log("Team 1 will win")
team2<team1 && console.log("Team 2 will win")

let sum=0
let counter =0
for(let currItem of Object.values(game.odds)){

    sum = sum+currItem;
    counter++;
}

const Average = sum/counter;

console.log('Average', Average)






