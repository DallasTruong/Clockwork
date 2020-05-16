class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {
        // display mennu
        let menuConfig = {
            fontFamily: 'Cursive',
            fontSize: '20px',
            backgroundColor: '#7aa1a0',
            color: '#7b348c',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // show menu text
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let textSpacer = 54;

        this.add.text(centerX, centerY- textSpacer, 'Clockwork', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + 0 * textSpacer, 'Use Arrow Keys to move', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + 1 * textSpacer, 'Press s to switch scenes', menuConfig).setOrigin(0.5);

        this.swap = this.input.keyboard.addKey('S');
        cursors = this.input.keyboard.createCursorKeys();
        //keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Down);
    }

   update() {
        if (Phaser.Input.Keyboard.JustDown(this.swap)) {
            this.scene.start('tiledSimpleScene');
        }
    } 
}

