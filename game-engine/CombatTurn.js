class combatTurn {
    constructor ({player, enemy}) {
        this.player = player
        this.enemy = enemy
    }

    playerAttack() {
        let baseDamage = this.player.strength * this.player.agility /1000;
        let actualDamage = baseDamage - this.player.defense
        let numberOfHits = 1
        let attackValues = [actualDamage, numberOfHits]
        return attackValues;
    }

    enemyAttack() {
        let baseDamage = this.enemy.strength * this.enemy.agility /1000;
        let actualDamage = baseDamage - this.enemy.defense
        let numberOfHits = 1
        let attackValues = [actualDamage, numberOfHits]
        return attackValues;
    }

    
    calcAttack() {
        this.playerAttack()
        this.enemyAttack()
        let playerSpeed = this.player.speed;
        let enemySpeed = this.enemy.speed;

        if (playerSpeed >= enemySpeed) {
            let playerAttackValues = this.playerAttack();
            let playerTotalDamage = playerAttackValues[0] * playerAttackValues[1];
            let enemyAttackValues = this.enemyrAttack();
            let enemyTotalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            this.enemy.health = this.enemy.health - playerTotalDamage;
            alert(`Player hits the enemy for ${playerTotalDamage} damage.`)
            if (this.enemy.health <= 0) {
                alert(`The ${enemy.classType} has been defeated!`);
                getPlayerHealth.innerHTML = `Health: + ${this.player.health}`
                getEnemyHealth.innerHTML = `Health: 0`;
            } else {
                getEnemyHealth.innerHTML = `Health: ${this.enemy.health}`

                this.player.health = this.player.health - enemyTotalDamage;
                alert(`${this.enemy.classType} hits the player for ${enemyTotalDamage} damage.`)
                if (this.player.health <= 0) {
                    alert(`You have been defeated!`);
                    getPlayerHealth.innerHTML = `Health: 0`;
                    getEnemyHealth.innerHTML = `Health: + ${this.enemy.health}`
            }
        }
    }
    }
}