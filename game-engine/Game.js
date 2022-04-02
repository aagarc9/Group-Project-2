let Game = {

    gameStart: function(classType) {
        this.resetPlayer(classType);
        this.setBattle();
    },
    resetPlayer: function(classType) {
        console.log(classType)
        switch (classType) {
            case "Aspiring_Hero":
                player = new Player(classType, 200, 0, 200, 100, 0, 50);
                break;
            case "Warrior":
                player = new Player(classType, 300, 0, 300, 100, 20, 50);
                break;
            case "Archer":
                player = new Player(classType, 250, 0, 200, 200, 10, 100);
                break;
            case "Slime":
                player = new Player(classType, 150, 0, 200, 100, 0, 25);
                break;    
        }
        console.log(player)
        let getInterface = document.querySelector('.Characters');
        getInterface.innerHTML = `
            <img src="./images/heroes/${classType.toLowerCase()}.png" class="img-heroes">
            <div><h3> ${classType}</h3>
            <p class="health-player">Health: ${player.health}</p>
            <p>Mana: ${player.mana}</p>
            <p>Strength: ${player.strength}</p>
            <p>Agility: ${player.agility}</p>
            <p>Defense: ${player.defense}</p>
            <p>Speed: ${player.speed}</p></div> 
           ` 
    },
    setBattle: function() {
        let getHeader = document.querySelector('.header');
        let getActions = document.querySelector('.actions');
        let getArena = document.querySelector('.arena');
        getHeader.innerHTML = `<p> Choose your floor</p>`;
        getActions.innerHTML = `
        <a href="#" class="btn-floor floor1" onclick="Game.setFight()">Floor 1</a>
        <a href="#" class="btn-floor floor2" onclick="Game.setFight()">Floor 2</a>
        <a href="#" class="btn-floor floor3" onclick="Game.setFight()">Floor 3</a>
        `;
        getArena.style.visibility = `visible`;
    },
    setFight: function() {

        let getHeader = document.querySelector('.header');
        let getActions = document.querySelector('.actions');
        let getEnemy = document.querySelector('.enemy');
        //Enemy Types
        let enemy000 = new Enemy('Slime', 200, 0, 200, 50, 1, 25);
        let enemy001 = new Enemy('Wolf', 250, 0, 100, 100, 100);
        let enemy002 = new Enemy('Bandit', 400, 0, 200, 100, 50);

        // if(floor3) {
        //     enemy = enemy002}
        // else if (floor2) {
        //     enemy = enemy001}
        // else 
        enemy = enemy000
        console.log(enemy)
        console.log(enemy.health)
        console.log(enemy.classType)

        getHeader.innerHTML = `<p>Choose Your Action!</p>`;
        getActions.innerHTML = `<a href="#" class="btn-prefight" onclick="combatTurn.calcAttack()"> Attack!</a>`;
        getEnemy.innerHTML = `
        <img src="./images/enemies/${enemy.classType}.png" alt="${enemy.classType}" class="img-avatar">
        <div>
        <h3>${enemy.classType}</h3>
        <p class="health-enemy">Health: ${enemy.health}</p>
        <p>Mana: ${enemy.mana}</p>
        <p>Strength: ${enemy.strength}</p>
        <p>Agility: ${enemy.agility}</p>
        <p>Defense: ${enemy.defense}</p>
        <p>Speed: ${enemy.speed}</p>
        </div>
        `

        },
        
        

    }
    

