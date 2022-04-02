// class combatTurn {
//     constructor ({player, enemy}) {
//         this.player = player
//         this.enemy = enemy
//     }

//     playerAttack() {
//         let baseDamage = this.player.strength * this.player.agility /1000;
//         let actualDamage = baseDamage - this.player.defense
//         let numberOfHits = 1
//         let attackValues = [actualDamage, numberOfHits]
//         return attackValues;
//     }

//     enemyAttack() {
//         let baseDamage = this.enemy.strength * this.enemy.agility /1000;
//         let actualDamage = baseDamage - this.enemy.defense
//         let numberOfHits = 1
//         let attackValues = [actualDamage, numberOfHits]
//         return attackValues;
//     }

//     calcAttack() {
//         this.playerAttack()
//         this.enemyAttack()
//         let playerSpeed = this.player.speed;
//         let enemySpeed = this.enemy.speed;
//         let getPlayerHealth = document.querySelector('.health-player')
//         let getEnemyHealth = document.querySelector('.health-enemy')
    

//         if (playerSpeed >= enemySpeed) {
//             let playerAttackValues = this.playerAttack();
//             let playerTotalDamage = playerAttackValues[0] * playerAttackValues[1];
//             let enemyAttackValues = this.enemyrAttack();
//             let enemyTotalDamage = enemyAttackValues[0] * enemyAttackValues[1];
//             this.enemy.health = this.enemy.health - playerTotalDamage;
//             alert(`Player hits the enemy for ${playerTotalDamage} damage.`)
//             if (enemy.health <= 0) {
//                 alert(`The ${classType} has been defeated!`);
//                 getPlayerHealth.innerHTML = `Health: + ${player.health}`
//                 getEnemyHealth.innerHTML = `Health: 0`;
//             } else {
//                 getEnemyHealth.innerHTML = `Health: ${enemy.health}`
//                 player.health = player.health - enemyTotalDamage;
//                 alert(`${enemy.classType} hits the player for ${enemyTotalDamage} damage.`)
//                 if (player.health <= 0) {
//                     alert(`You have been defeated!`);
//                     getPlayerHealth.innerHTML = `Health: 0`;
//                     getEnemyHealth.innerHTML = `Health: + ${enemy.health}`
//                 } else getPlayerHealth.innerHTML = `Health: ${player.health}`
//             }
//         }
//     }
// }