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

Bird = PhysicsEntity.extend({
  animations: {
    fly: 0,
    dongle: 1
  },
  m_Id: 0,
  m_Lifes: {
    base: 0,
    current: 0
  },
  m_Explosions: false,
  m_PreviousCenterPosition: {
    x: 0,
    y: 0
  },
  m_Hitted: false,
  m_Bonus1: false,
  ctor: function(parent, world) {
    this._super(s_Birds, 14, 9, parent, world, 0.5, 0.5, 0.5, 2.5);

    if(this.getPhysicsFixture()) {
      this.getPhysicsFixture().filter.categoryBits = 1;
      this.getPhysicsFixture().filter.maskBits = 1;
    }

    this.m_Explosions = EntityManager.create(5, BirdExplosion.create(), this);
  },
  onCreateSound: function() {
    Sound.sharedSound().play(s_SoundThrowBird);
  },
  onDestroySound: function() {
    Sound.sharedSound().play(s_SoundBirdExplosion);
  },
  onCreate: function() {
    this._super();

    this.onCreateSound();

    this.setFlippedHorizontally(false);
    this.setFlippedVertically(false);

    this.m_Id = Random.sharedRandom().random(0, Bird.count, true) * this.getHorizontalFramesCount();
    this.m_Lifes.base = 12 * Game.sharedScreen().m_Level;
    this.m_Lifes.current = this.m_Lifes.base;

    this.m_Explosions.clear();

    this.animate(this.animations.fly);

    this.m_Hitted = false;
    this.m_Bonus1 = false;

    this.setScale(1);
    this.setOpacity(255);
    this.setRotation(0);
  },
  onDestroy: function() {
    this._super();

    this.m_Explosions.clear();

    var game = Game.sharedScreen();

    switch(game.m_Type) {
      case game.m_Types.progress:
      this.onDestroySound();
      this.createExplosion();
      break;
      case game.m_Types.classic:
      case game.m_Types.arcade:
      if(this.getCenterY() > -this.getHeight() / 2) {
        if(Game.sharedScreen().m_GameRunning) {
          this.onDestroySound();
          this.createExplosion();

          Game.sharedScreen().onBlow(this);
        }
      } else {
        this.onLost();
      }

      if(this.m_Bonus1) {
        if(this.m_Bonus1 instanceof Bonus) {
          this.m_Bonus1.destroy();
        }
      }
      break;
    }
  },
  onLost: function() {
    Game.sharedScreen().onLost(this);
  },
  onCollideStart: function(entity, point) {
    var game = Game.sharedScreen();

    switch(game.m_Type) {
      case game.m_Types.progress:
      break;
      case game.m_Types.classic:
      case game.m_Types.arcade:
      if(entity instanceof Bird) {
        this.m_Explosions.create().setCenterPosition(point.x, point.y);
      }
      break;
    }
  },
  onCollideFinish: function(entity) {
    var game = Game.sharedScreen();

    switch(game.m_Type) {
      case game.m_Types.progress:
      break;
      case game.m_Types.classic:
      case game.m_Types.arcade:
      if(entity instanceof Bird) {
        this.setFlippedHorizontally(this.getLinearVelocity().x < 0);
      }
      break;
    }
  },
  setContactBody: function() {
    this.m_PhysicsBody = this.getCurrentPhysicsWorld().CreateBody(this.m_PhysicsDefinition);

    this.m_PhysicsFixture.shape = new Box2D.Collision.Shapes.b2CircleShape(this.getHeight() / this.m_DevideFactorX / PhysicsManager.ratio);

    this.m_PhysicsBody.CreateFixture(this.getPhysicsFixture());
  },
  animate: function(type) {
    var repeat = Random.sharedRandom().random(0, 5, true);

    switch(type) {
      case this.animations.fly:
      this._super(0.06, repeat, {start: this.m_Id + 5, end: this.m_Id + 12});
      this.onAnimationFinish = function() {
        this.animate(this.animations.dongle);
      };
      break;
      case this.animations.dongle:
      this._super(0.06, 1, {start: this.m_Id, end: this.m_Id + 12});
      this.onAnimationFinish = function() {
        this.animate(this.animations.fly);
      };
      break;
    }
  },
  checkCollides: function() {
    if(!Game.sharedScreen().m_Touch.active) return false;
    if(this.m_Hitted) return false;

    if(this.collideWithPoint(Game.sharedScreen().m_Touch.point.x, Game.sharedScreen().m_Touch.point.y)) {
      var critical = Random.sharedRandom().probably(30);

      if(critical) {
        this.destroy();
      } else {
        var damage = Game.power + Random.sharedRandom().random(-Game.power / 2, Game.power / 2, true);

        this.m_Lifes.current -= damage;

        if(this.m_Lifes.current <= 0) {
          this.destroy();
        } else {
          this.onHit(damage);
        }
      }
    }
  },
  onHit: function(damage) {
    Bird.text.create(damage, this, Game.sharedScreen());

    this.onHitStart();

    this.setScale(1.4);
    this.runAction(cc.Sequence.create(
      cc.ScaleTo.create(0.1, this.isFlippedHorizontally() ? -1.0 : 1.0, 1.0),
      cc.CallFunc.create(this.onHitFinish, this, this)
    ));

    // TODO: Sound.
  },
  onHitStart: function() {
    this.m_Hitted = true;
  },
  onHitFinish: function() {
    this.m_Hitted = false;
  },
  run: function() {
    var game = Game.sharedScreen();

    switch(game.m_Type) {
      case game.m_Types.progress:
      var values = {};

      values.position = {
        x: Random.sharedRandom().random(this.getWidth(), Camera.sharedCamera().width - this.getWidth()),
        y: Random.sharedRandom().random(Camera.sharedCamera().center.y, Camera.sharedCamera().height)
      };

      this.setCenterPosition(values.position.x, values.position.y);
      break;
      case game.m_Types.classic:
      case game.m_Types.arcade:
      var values = {};

      // TODO: Correct force values.
      values.position = {
        x: Random.sharedRandom().random(this.getWidth(), Camera.sharedCamera().width - this.getWidth()),
        y:  -Camera.sharedCamera().coord(100)
      };
      values.force = {
        x: Random.sharedRandom().random(-Math.abs(Camera.sharedCamera().center.x - values.position.x), Math.abs(Camera.sharedCamera().center.x - values.position.x)),
        y: Random.sharedRandom().random(40, 50) * -this.getCurrentPhysicsWorld().GetGravity().y
      };

      this.setLinearVelocity(values.force.x, values.force.y);
      this.setCenterPosition(values.position.x, values.position.y);
      break;
    }
  },
  createMark: function() {
    if(!cc.Browser.isMobile) {
      Game.sharedScreen().m_Marks.create().setCenterPosition(this.getCenterX(), this.getCenterY());
    }
  },
  createExplosion: function() {
    Game.sharedScreen().m_Explosions.create().setCenterPosition(this.getCenterX(), this.getCenterY());

    if(!cc.Browser.isMobile) {
      for(var i = 0; i < 50; i++) {
        Game.sharedScreen().m_Feathers.create();

        Game.sharedScreen().m_Feathers.last().setCenterPosition(this.getCenterX(), this.getCenterY());
        Game.sharedScreen().m_Feathers.last().setCurrentFrameIndex(this.m_Id / this.getHorizontalFramesCount());
      }
    }
  },
  checkPosition: function() {
    var game = Game.sharedScreen();

    switch(game.m_Type) {
      case game.m_Types.progress:
      if(this._sfp) {
        this.setScaleX(this._sfp > this.getCenterX() ? -1 : 1); // TODO: Change to non-hard code.
      }
      this._sfp = this.getCenterX();
      break;
      case game.m_Types.classic:
      case game.m_Types.arcade:
      if((this.getCenterX() < 0 && this.isFlippedHorizontally()) || (this.getCenterX() > Camera.sharedCamera().width && !this.isFlippedHorizontally())) {
        this.setLinearVelocity(-this.getLinearVelocity().x, this.getLinearVelocity().y);

        this.setFlippedHorizontally(this.getLinearVelocity().x < 0);
      }
      break;
    }
  },
  checkBonuses: function() {
    if(!this.m_Bonus1) {
      if(this.getLinearVelocity().y <= 0) {
        this.m_Bonus1 = true;

        if(DataManager.sharedManager().get(false, references.items.bonus1)) {
          this.m_Bonus1 = Bonus1.create(this);
        }
      }
    }
  },
  update: function(time) {
    this._super(time);

    this.createMark();

    this.checkCollides();
    this.checkPosition();
    this.checkBonuses();
  },
  deepCopy: function() {
    return Bird.create(this.getParent(), this.getCurrentPhysicsWorld());
  }
});

Bird.text = Text.extend({
  ctor: function(value, bird, parent) {
    this._super(false, parent);

    this.setString("-" + value);
    this.setFontSize(Camera.sharedCamera().coord(64));
    this.setRotation(Random.sharedRandom().random(-15, 15));
    this.setCenterPosition(
      bird.getCenterX() + Camera.sharedCamera().coord(Random.sharedRandom().random(100, 200) * Random.sharedRandom().probably(50) ? 1 : -1),
      bird.getCenterY() + Camera.sharedCamera().coord(Random.sharedRandom().random(100, 200) * Random.sharedRandom().probably(50) ? 1 : -1)
    );

    this.runAction(
      cc.Sequence.create(
        cc.DelayTime.create(1.0),
        cc.FadeOut.create(0.5),
        cc.CallFunc.create(this.destroy, this, this)
      )
    );

    this.setColor(Bird.colors[bird.m_Id / bird.getHorizontalFramesCount()]);
  },
  destroy: function() {
    this.removeFromParent();
  }
});
Bird.text.create = function(value, bird, parent) {
  return new Bird.text(value, bird, parent);
};

Bird.count = 7;
Bird.colors = [
  cc.c3(246.0, 143.0, 41.0),
  cc.c3(224.0, 0.0, 55.0),
  cc.c3(204.0, 51.0, 204.0),
  cc.c3(51.0, 102.0, 255.0),
  cc.c3(0.0, 255.0, 255.0),
  cc.c3(255.0, 255.0, 51.0),
  cc.c3(0.0, 236.0, 47.0),
  cc.c3(209.0, 169.0, 0.0),
  cc.c3(64.0, 70.0, 98.0)
];
Bird.create = function(parent, world) {
  var entity = new Bird(parent, world);

  return entity;
};
