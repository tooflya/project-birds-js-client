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

CatapultBird = AnimatedEntity.extend({
  m_Catapult: false,
  m_Id: 0,
  m_State: 0,
  m_States: {
    stop: 0,
    run: 1,
    jump: 2,
    fire: 3,
    blow: 4,
    defence: 5,
    left: 6,
    right: 7
  },
  m_StateData: false,
  m_DongleTime: 0,
  m_DongleTimeElapsed: 0,
  m_Shield: false,
  animations: {
    fly: 0,
    dongle: 1
  },
  ctor: function(parent, catapult) {
    this._super(s_CatapultBirds, 14, 9, parent);

    this.m_Catapult = catapult;

    this.m_Decorations = [];
    for(var i = 0; i < 2; i++) {
      this.m_Decorations[i] = Entity.create(s_PopupDecoration17, this);

      this.m_Decorations[i].create().setCenterPosition(this.getWidth() / 2, this.getHeight() / 2);
      this.m_Decorations[i].setScale(0.0);
      this.m_Decorations[i].setOpacity(120);
    }
    this.m_Shield = Entity.create(s_CatapultBirdsShield, this);

    this.registerTouchable(true);
  },
  onCreate: function() {
    this._super();
  },
  onDestroy: function() {
    this._super();
  },
  onBlow: function() {
    Game.sharedScreen().m_Explosions.create().setCenterPosition(this.getCenterX(), this.getCenterY() + this.getHeight() / 2);

    if(!cc.Browser.isMobile) {
      for(var i = 0; i < 50; i++) {
        Game.sharedScreen().m_Feathers.create();

        Game.sharedScreen().m_Feathers.last().setCenterPosition(this.getCenterX(), this.getCenterY() + this.getHeight() / 2);
        Game.sharedScreen().m_Feathers.last().setCurrentFrameIndex(this.m_Id / this.getHorizontalFramesCount());
      }
    }

    this.m_Catapult.m_Birds.renew();

    Sound.sharedSound().play(s_SoundBirdExplosion);
  },
  onStop: function() {
    this.setCurrentFrameIndex(this.m_Id + 10);
  },
  onRun: function() {
    this.stopAllActions();

    this.animate(this.animations.fly);

    var bezier = [];

    bezier.push(cc.p(this.getCenterX(), this.getCenterY()));
    bezier.push(cc.p(this.getCenterX() + ((this.m_StateData.distance || this.m_Catapult.m_LastMoveDistance) / 2) * (this.isFlippedHorizontally() ? -1 : 1), this.getCenterY() + ((this.m_StateData.distance || this.m_Catapult.m_LastMoveDistance) / 2)));
    bezier.push(cc.p(this.getCenterX() + (this.m_StateData.distance || this.m_Catapult.m_LastMoveDistance) * (this.isFlippedHorizontally() ? -1 : 1), this.getCenterY()));

    this.runAction(
      cc.Sequence.create(
        cc.DelayTime.create(this.m_StateData ? this.m_StateData.pause : 0),
        cc.ScaleTo.create(0.1, 0.9 * (this.isFlippedHorizontally() ? -1 : 1), 0.9 * (this.isFlippedVertically() ? -1 : 1)),
        cc.ScaleTo.create(0.1, 1.0 * (this.isFlippedHorizontally() ? -1 : 1), 1.0 * (this.isFlippedVertically() ? -1 : 1)),
        cc.BezierTo.create(0.5, bezier),
        cc.ScaleTo.create(0.1, 0.9 * (this.isFlippedHorizontally() ? -1 : 1), 0.9 * (this.isFlippedVertically() ? -1 : 1)),
        cc.ScaleTo.create(0.1, 1.0 * (this.isFlippedHorizontally() ? -1 : 1), 1.0 * (this.isFlippedVertically() ? -1 : 1)),
        cc.CallFunc.create(this.changeStateAction, this, this.m_States.stop),
        false
      )
    );
  },
  onJump: function() {
    this.animate(this.animations.dongle);

    this.runAction(
      cc.Sequence.create(
        cc.ScaleTo.create(0.1, 0.9 * (this.isFlippedHorizontally() ? -1 : 1), 0.9 * (this.isFlippedVertically() ? -1 : 1)),
        cc.ScaleTo.create(0.1, 1.0 * (this.isFlippedHorizontally() ? -1 : 1), 1.0 * (this.isFlippedVertically() ? -1 : 1)),
        cc.EaseExponentialOut.create(
          cc.MoveTo.create(0.5, cc.p(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(50)))
        ),
        cc.EaseExponentialIn.create(
          cc.MoveTo.create(0.5, cc.p(this.getCenterX(), this.getCenterY()))
        ),
        cc.ScaleTo.create(0.1, 0.9 * (this.isFlippedHorizontally() ? -1 : 1), 0.9 * (this.isFlippedVertically() ? -1 : 1)),
        cc.ScaleTo.create(0.1, 1.0 * (this.isFlippedHorizontally() ? -1 : 1), 1.0 * (this.isFlippedVertically() ? -1 : 1)),
        cc.CallFunc.create(this.changeStateAction, this, this.m_States.stop),
        false
      )
    );
  },
  onLeft: function() {
    this.stopAllActions();

    this.runAction(
      cc.Sequence.create(
        cc.DelayTime.create(0.2),
        cc.RotateTo.create(0.5, -720),
        false
      )
    );
    this.runAction(
      cc.Sequence.create(
        cc.DelayTime.create(0.2),
        cc.MoveTo.create(0.5, cc.p(this.getCenterX() - Camera.sharedCamera().coord(55), this.getCenterY())),
        cc.CallFunc.create(this.changeStateAction, this, this.m_States.stop),
        false
      )
    );
  },
  onRight: function() {
    this.stopAllActions();

    this.animate(this.animations.dongle);

    this.runAction(
      cc.Sequence.create(
        cc.ScaleTo.create(0.1, 0.9 * (this.isFlippedHorizontally() ? -1 : 1), 0.9 * (this.isFlippedVertically() ? -1 : 1)),
        cc.ScaleTo.create(0.1, 1.0 * (this.isFlippedHorizontally() ? -1 : 1), 1.0 * (this.isFlippedVertically() ? -1 : 1)),
        cc.EaseExponentialOut.create(
          cc.MoveTo.create(0.5, cc.p(this.getCenterX() + Camera.sharedCamera().coord(55), this.getCenterY() + Camera.sharedCamera().coord(50)))
        ),
        cc.EaseExponentialIn.create(
          cc.MoveTo.create(0.5, cc.p(this.getCenterX() + Camera.sharedCamera().coord(55), this.getCenterY()))
        ),
        cc.ScaleTo.create(0.1, 0.9 * (this.isFlippedHorizontally() ? -1 : 1), 0.9 * (this.isFlippedVertically() ? -1 : 1)),
        cc.ScaleTo.create(0.1, 1.0 * (this.isFlippedHorizontally() ? -1 : 1), 1.0 * (this.isFlippedVertically() ? -1 : 1)),
        cc.CallFunc.create(this.changeStateAction, this, this.m_States.stop),
        false
      )
    );
  },
  onFire: function() {
    this.stopAllActions();

    this.animate(this.animations.dongle);

    var opponent = Game.instance.m_Catapults.get(this.isFlippedHorizontally() ? 0 : 1);

    var bezier = [];

    bezier.push([]);
    bezier.push([]);

    var x, y;

    x = this.getCenterX();
    y = this.getCenterY();

    bezier[0].push(cc.p(x, y));
    bezier[0].push(cc.p(x + Camera.sharedCamera().coord(20) * (this.isFlippedHorizontally() ? -1 : 1), y + Camera.sharedCamera().coord(80)));
    bezier[0].push(cc.p(x + Camera.sharedCamera().coord(45) * (this.isFlippedHorizontally() ? -1 : 1), y + Camera.sharedCamera().coord(45)));

    x = this.getCenterX() + Camera.sharedCamera().coord(45) * (this.isFlippedHorizontally() ? -1 : 1);
    y = this.getCenterY() + Camera.sharedCamera().coord(45);

    bezier[1].push(cc.p(x, y));
    bezier[1].push(cc.p(Camera.sharedCamera().center.x, Camera.sharedCamera().height));
    bezier[1].push(cc.p(opponent.getCenterX(), opponent.getCenterY()));

    this.runAction(
      cc.Sequence.create(
        cc.ScaleTo.create(0.1, 0.9 * (this.isFlippedHorizontally() ? -1 : 1), 0.9 * (this.isFlippedVertically() ? -1 : 1)),
        cc.ScaleTo.create(0.1, 1.0 * (this.isFlippedHorizontally() ? -1 : 1), 1.0 * (this.isFlippedVertically() ? -1 : 1)),
        cc.BezierTo.create(0.5, bezier[0]),
        cc.ScaleTo.create(0.1, 0.9 * (this.isFlippedHorizontally() ? -1 : 1), 0.9 * (this.isFlippedVertically() ? -1 : 1)),
        cc.ScaleTo.create(0.1, 1.0 * (this.isFlippedHorizontally() ? -1 : 1), 1.0 * (this.isFlippedVertically() ? -1 : 1)),
        cc.CallFunc.create(this.m_Catapult.onFire, this.m_Catapult, this),
        cc.ScaleTo.create(0.1, 0.9 * (this.isFlippedHorizontally() ? -1 : 1), 0.9 * (this.isFlippedVertically() ? -1 : 1)),
        cc.ScaleTo.create(0.1, 1.0 * (this.isFlippedHorizontally() ? -1 : 1), 1.0 * (this.isFlippedVertically() ? -1 : 1)),
        cc.BezierTo.create(1.1, bezier[1]),
        cc.CallFunc.create(this.changeStateAction, this, this.m_States.blow),
        false
      )
    );

    this.m_Catapult.m_Birds.fix();
  },
  onDefence: function() {
    this.stopAllActions();

    this.m_Shield.create().setCenterPosition(this.getWidth() / 2, this.getHeight() / 2);

    this.m_Shield.runAction(
      cc.Sequence.create(
        cc.ScaleTo.create(0.3, 1.2),
        cc.ScaleTo.create(0.1, 1.0),
        cc.ScaleTo.create(0.1, 1.2),
        cc.ScaleTo.create(0.2, 0.0),
        cc.CallFunc.create(this.m_Shield.destroy, this.m_Shield),
        false
      )
    );

    for(var i = 0; i < 2; i++) {
      this.m_Decorations[i].setScale(0.0);
      this.m_Decorations[i].runAction(
        cc.Sequence.create(
          cc.ScaleTo.create(0.2, 1.2),
          cc.ScaleTo.create(0.1, 0.8),
          cc.ScaleTo.create(0.1, 1.0),
          cc.ScaleTo.create(0.1, 0.8),
          cc.ScaleTo.create(0.1, 1.2),
          cc.ScaleTo.create(0.05, 0.0),
          i == 0 ? cc.CallFunc.create(this.changeStateAction, this, this.m_States.jump) : false,
          false
        )
      );
    }

    Sound.sharedSound().play(s_SoundDefence);

    if(this.m_StateData) {
      if(this.m_StateData.callback) {
        this.m_StateData.callback();
      }
    }

    this.m_Catapult.m_Birds.fix();
  },
  onTouch: function(e) {
    this._super(e);
  },
  onDragLeft: function() {
    this._super();

    if(this.isFlippedHorizontally()) return;

    if(this.m_State == this.m_States.stop) {
      var id = this.getID();

      if(id < 2) {
        var element1 = this;
        var element2 = this.getManager().get(id + 1);

        element1.changeState(this.m_States.left);
        element2.changeState(this.m_States.right);

        this.getManager().m_Elements.swapAtIndex(id + 1, this);

        element1.setID(id + 1);
        element2.setID(id);
      }
    }
  },
  onDragRight: function() {
    this._super();

    if(this.isFlippedHorizontally()) return;

    if(this.m_State == this.m_States.stop) {
      var id = this.getID();

      if(id > 0) {
        var element1 = this;
        var element2 = this.getManager().get(id - 1);

        element1.changeState(this.m_States.right);
        element2.changeState(this.m_States.left);

        this.getManager().m_Elements.swapAtIndex(id - 1, this);

        element1.setID(id - 1);
        element2.setID(id);
      }
    }
  },
  stopAllActions: function() {
    this._super();

    this.setScale(1.0 * (this.isFlippedHorizontally() ? -1 : 1), 1.0 * (this.isFlippedVertically() ? -1 : 1));
    this.setCenterPosition(this.getCenterX(), Camera.sharedCamera().coord(10) + this.getHeight() / 2);
  },
  changeStateAction: function(selectot, state, data) {
    switch(this.m_State) {
      case this.m_States.stop:
      break;
      case this.m_States.run:
      if(this.m_StateData) {
        if(this.m_StateData.callback) {
          this.m_StateData.callback();
        }
      }
      break;
      case this.m_States.jump:
      break;
      case this.m_States.fire:
      break;
      case this.m_States.blow:
      break;
      case this.m_States.defence:
      break;
    }

    this.changeState(state, data);
  },
  changeState: function(state, data) {
    this.m_StateData = data;
    this.m_State = state;

    switch(state) {
      case this.m_States.stop:
      this.onStop();
      break;
      case this.m_States.run:
      this.onRun();
      break;
      case this.m_States.jump:
      this.onJump();
      break;
      case this.m_States.fire:
      this.onFire();
      break;
      case this.m_States.blow:
      this.onBlow();
      break;
      case this.m_States.defence:
      this.stopAllActions();

      this.m_StateData.enable = false;
      break;
      case this.m_States.left:
      this.onLeft();
      break;
      case this.m_States.right:
      this.onRight();
      break;
    }
  },
  chooseId: function() {
    if(this.isFlippedHorizontally() || !Game.selected) {
      this.m_Id = Random.sharedRandom().random(0, Bird.count, true) * this.getHorizontalFramesCount();

      this.setCurrentFrameIndex(this.m_Id + 10);
    } else {
      this.m_Id = Game.selected.birds[this.getID()] * this.getHorizontalFramesCount();

      this.setCurrentFrameIndex(this.m_Id + 10);
    }
  },
  animate: function(type) {
    switch(type) {
      case this.animations.fly:
      this._super(0.06, 1, {start: this.m_Id + 5, end: this.m_Id + 12});
      break;
      case this.animations.dongle:
      this._super(0.06, 5, {start: this.m_Id, end: this.m_Id + 12});
      break;
    }
  },
  updateState: function(time) {
    switch(this.m_State) {
      case this.m_States.stop:
      this.m_DongleTimeElapsed += time;
      if(this.m_DongleTimeElapsed >= this.m_DongleTime) {
        this.m_DongleTime = Random.sharedRandom().random(5.0, 15.0);
        this.m_DongleTimeElapsed = 0;

        this.changeState(this.m_States.jump);
      }
      break;
      case this.m_States.run:
      break;
      case this.m_States.jump:
      break;
      case this.m_States.fire:
      Game.instance.m_WeaponParticles1.create().setCenterPosition(this.getCenterX(), this.getCenterY());
      Game.instance.m_WeaponParticles2.create().setCenterPosition(this.getCenterX(), this.getCenterY());
      break;
      case this.m_States.blow:
      break;
      case this.m_States.defence:
      if(!this.m_StateData.enable) {
        this.m_StateData.pause -= time;
        if(this.m_StateData.pause <= 0) {
          this.m_StateData.enable = true;

          this.onDefence();
        }
      }
      break;
    }
  },
  update: function(time) {
    this._super(time);

    this.updateState(time);

    this.m_Decorations[0].setRotation(this.m_Decorations[0].getRotation() - 0.1);
    this.m_Decorations[1].setRotation(this.m_Decorations[1].getRotation() + 0.1);
  },
  deepCopy: function() {
    return CatapultBird.create(false, this.m_Catapult);
  }
});

CatapultBird.create = function(parent, catapult) {
  var entity = new CatapultBird(parent, catapult);

  return entity;
};
