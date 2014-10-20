/**
 * Tooflya Inc. Development
 *
 * @author Igor Mats from Tooflya Inc.
 * @copyright (c) 2013 by Igor Mats
 * http://www.tooflya.com/development/
 *
 * License: Attribution NonCommercial NoDerivatives 4.0 International
 *
 * Creative Commons Corporation (“Creative Commons”) is not a law firm and does
 * not provide legal services or legal advice. Distribution of Creative Commons
 * public licenses does not create a lawyer-client or other relationship.
 * Creative Commons makes its licenses and related information available on
 * an “as-is” basis. Creative Commons gives no warranties regarding its licenses,
 * any material licensed under their terms and conditions, or any related
 * information. Creative Commons disclaims all liability for damages resulting
 * from their use to the fullest extent possible.
 *
 * Creative Commons public licenses provide a standard set of terms and
 * conditions that creators and other rights holders may use to share original
 * works of authorship and other material subject to copyright and certain other
 * rights specified in the public license below. The following considerations
 * are for informational purposes only, are not exhaustive, and do not form part
 * of our licenses.
 *
 * Creative Commons may be contacted at creativecommons.org.
 *
 * @version of cocos2d-x is 2.1.4
 *
 */

BombBird = Bird.extend({
  m_SoundFuseId: false,
  ctor: function(parent, world) {
    var game = Game.sharedScreen();

    switch(game.m_Type) {
      case game.m_Types.progress:
      world = false;
      break;
      case game.m_Types.classic:
      case game.m_Types.arcade:
      break;
    }

    this._super(parent, world);
  },
  onCreateSound: function() {
    this.m_SoundFuseId = Sound.sharedSound().play(s_SoundThrowBombFuse);
    Sound.sharedSound().play(s_SoundThrowBomb);
  },
  onDestroySound: function() {
    Sound.sharedSound().play(s_SoundExplosion);
  },
  onCreate: function() {
    this._super();

    this.m_Id = 8 * this.getHorizontalFramesCount();

    this.animate(this.animations.fly);
  },
  onDestroy: function() {
    this._super();

    Sound.sharedSound().stop(this.m_SoundFuseId);
  },
  checkCollides: function() {
    var game = Game.sharedScreen();

    switch(game.m_Type) {
      case game.m_Types.progress:
      break;
      case game.m_Types.classic:
      case game.m_Types.arcade:
      if(!Game.sharedScreen().m_Touch.active) return false;

      if(this.collideWithPoint(Game.sharedScreen().m_Touch.point.x, Game.sharedScreen().m_Touch.point.y)) {
        this.destroy();
      }
      break;
    }
  },
  run: function(data) {
    var game = Game.sharedScreen();

    switch(game.m_Type) {
      case game.m_Types.progress:
      this.setCenterPosition(data.element.convertToWorldSpace(cc.p(0, 0)).x + data.element.getWidth() / 2, -this.getHeight() / 2);
      this.runAction(
        cc.Sequence.create(
          cc.EaseSineOut.create(
            cc.MoveTo.create(data.speed * 2, cc.p(data.element.convertToWorldSpace(cc.p(0, 0)).x + data.element.getWidth() / 2, data.element.convertToWorldSpace(cc.p(0, 0)).y + data.element.getHeight() / 2 * 6))
          ),
          cc.EaseSineIn.create(
            cc.MoveTo.create(data.speed, cc.p(data.element.convertToWorldSpace(cc.p(0, 0)).x + data.element.getWidth() / 2, data.element.convertToWorldSpace(cc.p(0, 0)).y + data.element.getHeight() / 2))
          ),
          cc.CallFunc.create(this.destroy, this, this),
          false
        )
      );
      this.runAction(cc.RotateTo.create(data.speed * 3, 720));
      break;
      case game.m_Types.classic:
      case game.m_Types.arcade:
      this._super();
      break;
    }
  },
  checkBonuses: function() {
  },
  onLost: function() {
  },
  deepCopy: function() {
    return BombBird.create(this.getParent(), this.getCurrentPhysicsWorld());
  }
});

BombBird.create = function(parent, world) {
  var entity = new BombBird(parent, world);

  return entity;
};
