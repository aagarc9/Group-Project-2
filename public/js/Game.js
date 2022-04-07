let player;
let enemy;

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
        }
        console.log(player)
        let getInterface = document.querySelector('.Characters');
        getInterface.innerHTML = `
            <img src="./images/heroes/${classType.toLowerCase()}_idle.png" class="img-heroes" style="transform: scale(2)">
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
        let getHeader = document.querySelector('.user-header');
        let getActions = document.querySelector('.actions');
        let getArena = document.querySelector('.arena');
        let getCharCreate = document.querySelector('.charCreate');
        getCharCreate.innerHTML = ''
        getHeader.innerHTML = `<p> Choose the floor you would like to challenge! </p>`;
        getActions.innerHTML = `
        <a href="#" class="btn-floor floor1" onclick="Game.setFight(1)">Floor 1</a>
        <a href="#" class="btn-floor floor2" onclick="Game.setFight(2)">Floor 2</a>
        <a href="#" class="btn-floor floor3" onclick="Game.setFight(3)">Floor 3</a>
        `;
        getArena.style.visibility = `visible`;
    },
    setFight: function(floorChoice) {
        let getHeader = document.querySelector('.user-header');
        let getActions = document.querySelector('.actions');
        let getEnemy = document.querySelector('.enemy');
        //Enemy Types
        let enemy000 = new Enemy('Slime', 200, 0, 200, 50, 5, 25);
        let enemy001 = new Enemy('Wolf', 250, 0, 100, 100, 0, 100);
        let enemy002 = new Enemy('Bandit', 400, 0, 200, 200, 0, 50);
        

        let floor = floorChoice
        console.log(floor)
        if(floor == 3) {
            enemy = enemy002}
        else if (floor == 2) {
            enemy = enemy001}
        else 
        enemy = enemy000

        console.log(enemy)
        console.log(enemy.health)
        console.log(enemy.classType)

        getHeader.innerHTML = `<p>Choose Your Action!</p>`;
        getActions.innerHTML = `
        <a href="#" class="btn-prefight" onclick="Game.calcAttack()"> Attack!</a>
        <a href="#" class="btn-prefight" onclick="Game.calcBlock()"> Defend </a>
        `;
                                
        getEnemy.innerHTML = `
        <img src="./images/enemies/${enemy.classType}_idle.png" alt="${enemy.classType}" class="img-avatar" style="transform: scale(2)">
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

        calcAttack: function() {
            let playerSpeed = player.speed;
            let enemySpeed = enemy.speed;
            let getHeader = document.querySelector('.user-header');
            let getPlayerHealth = document.querySelector('.health-player')
            let getEnemyHealth = document.querySelector('.health-enemy')
        
            console.log(getPlayerHealth)
            console.log(getEnemyHealth)
            let playerAttack = function() {
                let baseDamage = player.strength * player.agility /1000;
                console.log(baseDamage)
                let actualDamage = baseDamage
                //  - enemy.defense
                // console.log(enemy.defense)
                let numberOfHits = 1
                let attackValues = [actualDamage, numberOfHits]
                // console.log(attackValues)
                return attackValues;
            }
            
            let enemyAttack = function() {
                let baseDamage = enemy.strength * enemy.agility /1000;
                let actualDamage = baseDamage
                //  - player.defense
                let numberOfHits = 1
                let attackValues = [actualDamage, numberOfHits]
                return attackValues;
            }
        
            if (playerSpeed >= enemySpeed) {
                let playerAttackValues = playerAttack();
                let playerTotalDamage = playerAttackValues[0] * playerAttackValues[1];
                let enemyAttackValues = enemyAttack();
                let enemyTotalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                enemy.health = enemy.health - playerTotalDamage;
        
                alert(`Player hits the enemy for ${playerTotalDamage} damage.`)
        
                if (enemy.health <= 0) {
                    alert(`The ${enemy.classType} has been defeated!`);
                    getHeader.innerHTML = `<p>You have defeated your enemy!</p>`
                    getPlayerHealth.innerHTML = `Health: ${player.health}`
                    getEnemyHealth.innerHTML = `Health: 0`;
                } else {
                    getEnemyHealth.innerHTML = `Health: ${enemy.health}`
                    player.health = player.health - enemyTotalDamage;
                    alert(`${enemy.classType} hits the player for ${enemyTotalDamage} damage.`)
                    if (player.health <= 0) {
                        alert(`You have been defeated!`);
                        getHeader.innerHTML = `<p>You have been defeated!</p>`
                        getPlayerHealth.innerHTML = `Health: 0`;
                        getEnemyHealth.innerHTML = `Health: ${enemy.health}`
                    } else getPlayerHealth.innerHTML = `Health: ${player.health}`
                }
            } 
            // else if (playerSpeed <= enemySpeed) {
            //     let playerAttackValues = playerAttack();
            //     let playerTotalDamage = playerAttackValues[0] * playerAttackValues[1];
            //     let enemyAttackValues = enemyAttack();
            //     let enemyTotalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            //     enemy.health = enemy.health - playerTotalDamage;
        
            //     alert(`Player hits the enemy for ${playerTotalDamage} damage.`)
        
            //     if (enemy.health <= 0) {
            //         alert(`The ${classType} has been defeated!`);
            //         getPlayerHealth.innerHTML = `Health: + ${player.health}`
            //         getEnemyHealth.innerHTML = `Health: 0`;
            //     } else {
            //         getEnemyHealth.innerHTML = `Health: ${enemy.health}`
            //         player.health = player.health - enemyTotalDamage;
            //         alert(`${enemy.classType} hits the player for ${enemyTotalDamage} damage.`)
            //         if (player.health <= 0) {
            //             alert(`You have been defeated!`);
            //             getPlayerHealth.innerHTML = `Health: 0`;
            //             getEnemyHealth.innerHTML = `Health: + ${enemy.health}`
            //         } else getPlayerHealth.innerHTML = `Health: ${player.health}`
            }
        }
        
    
    

