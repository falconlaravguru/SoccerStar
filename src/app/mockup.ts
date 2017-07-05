import { Player } from "./model/player";
import { Coach } from "./model/coach";
import { Club } from "./model/club";

export const Players: Player[] = [
    { id: 1 , name: "Cristiano Ronaldo" , age: 32 , club: "Real Madrid FC" , style: "versatile" , role: "Forward" , personality: "haughty" },
    { id: 2 , name: "Lionel Messi" , age: 30 , club: "FC Barcelona" , style: "dribble,shoot,speed,pass,technical" , role: "Forward" , personality: "modesty" },
    { id: 3 , name: "Eden Hazard" , age: 26 , club: "Chelsea FC" , style: "dribble,speed,pass" , role: "MidFielder" , personality: "nervous" },
    { id: 4 , name: "Gareth Bale" , age: 27 , club: "Real Madrid FC" , style: "dribble,speed,power" , role: "MidFielder" , personality: "Non-Definite" },
    { id: 5 , name: "Karim Benzema" , age: 28 , club: "Real Madrid FC" , style: "dribble,pass,shoot,technical" , role: "Forward" , personality: "modesty" },
    { id: 6 , name: "Sergio Ramos" , age: 31 , club: "Real Madrid FC" , style: "trackle,power,snap" , role: "CentreBack" , personality: "" },
    { id: 7 , name: "Raphael Varane" , age: 21 , club: "Real Madrid FC" , style: "trackle,speed,snap" , role: "CentreBack" , personality: "" },
    { id: 8 , name: "Luca Modric" , age: 32 , club: "Real Madrid FC" , style: "dribble,pass,shoot,technical" , role: "MidFielder" , personality: "modesty" },
    { id: 9 , name: "James Rodrigez" , age: 25 , club: "Real Madrid FC" , style: "dribble,pass,technical,shoot" , role: "MidFielder" , personality: "modesty" },
    { id: 10 , name: "Paul Pogba" , age: 23 , club: "Manchester United" , style: "dribble,pass,technical,shoot,power" , role: "MidFielder" , personality: "modesty" },
    { id: 11 , name: "Neymar Junior" , age: 25 , club: "FC Barcelona" , style: "dribble,speed,shoot,technical,pass" , role: "Forward" , personality: "Cunning" },
    { id: 12 , name: "Luiz Suarez" , age: 30 , club: "FC Barcelona" , style: "dribble,shoot,pass,power" , role: "Forward" , personality: "despicable" },
    { id: 13 , name: "Sergio Buszuget" , age: 31 , club: "FC Barcelona" , style: "pass,power,snap" , role: "MidFielder" , personality: "Cunning" },
    { id: 14 , name: "George Pique" , age: 31 , club: "FC Barcelona" , style: "trackle,snap,pass" , role: "CentreBack" , personality: "modesty" },
    { id: 15 , name: "Lewandowski" , age: 31 , club: "FC Bayern Munich" , style: "technical,shoot,power" , role: "Forward" , personality: "modesty" }
];

export const Coaches: Coach[] = [
    { id: 1 , name: "Zinedine Zidane" , age: 32 , club: "Real Madrid FC" , style: "gentle" , role: "Coach" , personality: "hot-blood" },
    { id: 2 , name: "Luiz Enrique" , age: 30 , club: "FC Barcelona" , style: "half-mad" , role: "Coach" , personality: "hot-blood" },
    { id: 3 , name: "Simeone" , age: 26 , club: "Atletico Madrid FC" , style: "enthusiastic" , role: "Coach" , personality: "hot-blood" },
    { id: 4 , name: "Mourihno" , age: 27 , club: "Manchester United" , style: "enthusiastic" , role: "Coach" , personality: "hot-blood" },
    { id: 5 , name: "Conte" , age: 28 , club: "Chelsea FC" , style: "enthusiastic" , role: "Coach" , personality: "hot-blood" },
    { id: 6 , name: "Guardiola" , age: 31 , club: "Man City" , style: "enthusiastic" , role: "Coach" , personality: "hot-blood" },
    { id: 7 , name: "Wenger" , age: 21 , club: "Arsenal" , style: "gentle" , role: "Coach" , personality: "dignified" },
    { id: 8 , name: "Kroop" , age: 32 , club: "Liverpool" , style: "enthusiastic" , role: "Coach" , personality: "hot-blood" },
    { id: 9 , name: "Anchelotti" , age: 25 , club: "FC Bayern Munich" , style: "gentle" , role: "Coach" , personality: "dignified" },
    { id: 10 , name: "Rituneli" , age: 25 , club: "Leister City" , style: "gentle" , role: "Coach" , personality: "dignified" }
];

export const Clubs: Club[] = [
    {id: 1, name: "Real Madrid" , country: "Spain" , city: "Madrid", league: "La Liga" , count: 12},
    {id: 1, name: "Barcelona" , country: "Spain" , city: "Cataluna", league: "La Liga" , count: 8},
    {id: 1, name: "Bayern Munich" , country: "deutschland" , city: "Munich", league: "Bundesliga" , count: 5},
    {id: 1, name: "Atletico Madrid" , country: "Spain" , city: "Madrid", league: "La Liga" , count: 0},
    {id: 1, name: "Manchester United" , country: "England" , city: "Manchester", league: "Premier Leauge" , count: 3},
    {id: 1, name: "Chelsea" , country: "England" , city: "London", league: "Premier Leauge" , count: 2},
    {id: 1, name: "Arsenal" , country: "England" , city: "London", league: "Premier Leauge" , count: 0},
    {id: 1, name: "Juventus" , country: "Italy" , city: "Turin", league: "Serie A" , count: 4},
    {id: 1, name: "Liverpool" , country: "England" , city: "Liverpool", league: "Premier Leauge" , count: 1},
    {id: 1, name: "Man city" , country: "England" , city: "Manchester", league: "Premier Leauge" , count: 0}
];