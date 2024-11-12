const teams = [
    { name: "Juventus", punti: 0, falliSubiti: 0 },
    { name: "Milan", punti: 0, falliSubiti: 0 },
    { name: "Inter", punti: 0, falliSubiti: 0 },
    { name: "Napoli", punti: 0, falliSubiti: 0 },
    { name: "Roma", punti: 0, falliSubiti: 0 },
    { name: "Lazio", punti: 0, falliSubiti: 0 },
    { name: "Atalanta", punti: 0, falliSubiti: 0 },
    { name: "Fiorentina", punti: 0, falliSubiti: 0 },
    { name: "Bologna", punti: 0, falliSubiti: 0 },
    { name: "Sampdoria", punti: 0, falliSubiti: 0 },
    { name: "Torino", punti: 0, falliSubiti: 0 },
    { name: "Genoa", punti: 0, falliSubiti: 0 },
    { name: "Verona", punti: 0, falliSubiti: 0 },
    { name: "Cagliari", punti: 0, falliSubiti: 0 },
    { name: "Sassuolo", punti: 0, falliSubiti: 0 },
    { name: "Empoli", punti: 0, falliSubiti: 0 },
    { name: "Salernitana", punti: 0, falliSubiti: 0 },
    { name: "Lecce", punti: 0, falliSubiti: 0 },
    { name: "Udinese", punti: 0, falliSubiti: 0 },
    { name: "Monza", punti: 0, falliSubiti: 0 }
];


for(i = 0; i< teams.length; i++) {
    let curTeam = teams[i];
    curTeam.punti = getRandomNumber(61);
    curTeam.falliSubiti = getRandomNumber(41);
}

console.log(teams);

const copia = getCopy(teams);

const teams2 = getSecondArray(copia);

console.log("copia team:", teams2);


