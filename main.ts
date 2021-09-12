controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.spray, 500)
})
let mySprite: Sprite = null
scene.setBackgroundColor(11)
game.splash("I like bananas!")
mySprite = sprites.create(assets.image`jun`, SpriteKind.Player)
