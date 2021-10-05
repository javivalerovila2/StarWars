/**
 * Monstruo al que tenemos que destruir
 */
 class Boss extends Opponent {
    /**
     * @param game {Game} La instancia del juego al que pertenece el oponente
     */
    constructor (game) {
        const speed = BOSS_SPEED,
            myImage = BOSS_PICTURE,
            myImageDead = BOSS_PICTURE_DEAD;

        super(game);
        this.speed = speed;
        this.myImage = myImage;
        this.myImageDead = myImageDead;
        setTimeout(() => this.shoot(), 100 + getRandomNumber(2500));
    }

 }