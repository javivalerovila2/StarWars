/**
 * Monstruo al que tenemos que destruir
 */
 class Boss extends Opponent {
    /**
     * @param game {Game} La instancia del juego al que pertenece el oponente
     */
    constructor (game) {
        const speed = BOSS_SPEED*1.5,
        myImageDead = BOSS_PICTURE_DEAD,
        myImage = BOSS_PICTURE;

        super(game);
        this.speed = speed;
        this.image.src = myImage;
        this.myImageDead = myImageDead;
        setTimeout(() => this.shoot(), 10 + getRandomNumber(2500));
    }

 collide() {

    this.image.src = this.myImageDead
    this.game.endGame();

}
}