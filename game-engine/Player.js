function Player(classType, health, mana, strength, agility, defense, speed) {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.defense = defense;
    this.speed = speed;
}

// let combatTurn = {
// calcAttack: function() {
//     let playerSpeed = player.speed;
//     let enemySpeed = enemy.speed;

//     let getPlayerHealth = document.querySelector('.health-player')
//     let getEnemyHealth = document.querySelector('.health-enemy')

//     console.log(getPlayerHealth)
//     console.log(getEnemyHealth)
//     let playerAttack = function() {
//         let baseDamage = player.strength * player.agility /1000;
//         console.log(baseDamage)
//         let actualDamage = baseDamage
//         //  - enemy.defense
//         // console.log(enemy.defense)
//         let numberOfHits = 1
//         let attackValues = [actualDamage, numberOfHits]
//         // console.log(attackValues)
//         return attackValues;
//     }
    
//     let enemyAttack = function() {
//         let baseDamage = enemy.strength * enemy.agility /1000;
//         let actualDamage = baseDamage
//         //  - player.defense
//         let numberOfHits = 1
//         let attackValues = [actualDamage, numberOfHits]
//         return attackValues;
//     }

//     if (playerSpeed >= enemySpeed) {
//         let playerAttackValues = playerAttack();
//         let playerTotalDamage = playerAttackValues[0] * playerAttackValues[1];
//         let enemyAttackValues = enemyAttack();
//         let enemyTotalDamage = enemyAttackValues[0] * enemyAttackValues[1];
//         enemy.health = enemy.health - playerTotalDamage;

//         alert(`Player hits the enemy for ${playerTotalDamage} damage.`)

//         if (enemy.health <= 0) {
//             alert(`The ${classType} has been defeated!`);
//             getPlayerHealth.innerHTML = `Health: + ${player.health}`
//             getEnemyHealth.innerHTML = `Health: 0`;
//         } else {
//             getEnemyHealth.innerHTML = `Health: ${enemy.health}`
//             player.health = player.health - enemyTotalDamage;
//             alert(`${enemy.classType} hits the player for ${enemyTotalDamage} damage.`)
//             if (player.health <= 0) {
//                 alert(`You have been defeated!`);
//                 getPlayerHealth.innerHTML = `Health: 0`;
//                 getEnemyHealth.innerHTML = `Health: + ${enemy.health}`
//             } else getPlayerHealth.innerHTML = `Health: ${player.health}`
//         }
//     } 
//     // else if (playerSpeed <= enemySpeed) {
//     //     let playerAttackValues = playerAttack();
//     //     let playerTotalDamage = playerAttackValues[0] * playerAttackValues[1];
//     //     let enemyAttackValues = enemyAttack();
//     //     let enemyTotalDamage = enemyAttackValues[0] * enemyAttackValues[1];
//     //     enemy.health = enemy.health - playerTotalDamage;

//     //     alert(`Player hits the enemy for ${playerTotalDamage} damage.`)

//     //     if (enemy.health <= 0) {
//     //         alert(`The ${classType} has been defeated!`);
//     //         getPlayerHealth.innerHTML = `Health: + ${player.health}`
//     //         getEnemyHealth.innerHTML = `Health: 0`;
//     //     } else {
//     //         getEnemyHealth.innerHTML = `Health: ${enemy.health}`
//     //         player.health = player.health - enemyTotalDamage;
//     //         alert(`${enemy.classType} hits the player for ${enemyTotalDamage} damage.`)
//     //         if (player.health <= 0) {
//     //             alert(`You have been defeated!`);
//     //             getPlayerHealth.innerHTML = `Health: 0`;
//     //             getEnemyHealth.innerHTML = `Health: + ${enemy.health}`
//     //         } else getPlayerHealth.innerHTML = `Health: ${player.health}`
//     }
// }

