//1

const users1 = [
    { id: "player-1", name: "Mango", points: 54, email: 123, balance: 12 },
    { id: "player-2", name: "Poly", points: 92, email: 13, balance: 18 },
    { id: "player-3", name: "Kiwi", points: 48, email: 143, balance: 16 },
    { id: "player-4", name: "Ajax", points: 71, email: 153, balance: 20 },
    { id: "player-5", name: "Chelsy", points: 48, email: 183, balance: 30 }
];

const totalBalance = users1.reduce((total, user) => total + user.balance, 0);

console.log(totalBalance);



//2


const users2 = [
    { id: "player-1", name: "Mango", points: 54, email: 123, friend: "pol" },
    { id: "player-2", name: "Poly", points: 92, email: 13, friend: "markian" },
    { id: "player-3", name: "Kiwi", points: 48, email: 143, friend: "tima" },
    { id: "player-4", name: "Ajax", points: 71, email: 153, friend: "alina" },
    { id: "player-5", name: "Chelsy", points: 48, email: 183, friend: "kirill" }
];


const friendName = "alina"  ;


const usersWithFriend = users2.filter(user => user.friend === friendName).map(user => user.name);

console.log(usersWithFriend);


//3

const users3 = [
    { id: "player-1", name: "Mango", points: 54, email: 123, friend: 4 },
    { id: "player-2", name: "Poly", points: 92, email: 13, friend: 0 },
    { id: "player-3", name: "Kiwi", points: 48, email: 143, friend: 3 },
    { id: "player-4", name: "Ajax", points: 71, email: 153, friend: 1 },
    { id: "player-5", name: "Chelsy", points: 48, email: 183, friend: 0 }
];


const sortedUsers = users3.sort((a, b) => a.friend - b.friend);


const namesSortedByFriends = sortedUsers.map(user => user.name);

console.log(namesSortedByFriends);

//4



const users = [
    { id: 1, name: 'Alice', skills: ['JavaScript', 'HTML', 'CSS'] },
    { id: 2, name: 'Bob', skills: ['Python', 'JavaScript', 'SQL'] },
    { id: 3, name: 'Charlie', skills: ['HTML', 'Java', 'CSS'] }
  ];
  

  const allSkills = users
    .reduce((acc, user) => {
      return acc.concat(user.skills);
    }, [])
    .filter((value, index, self) => self.indexOf(value) === index) 
    .sort(); 
  
  console.log(allSkills);
