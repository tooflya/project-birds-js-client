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

Game.prototype.updateThrower = function(time) {
  if(!this.m_GameRunning) return false;
  if(this.m_ThrowParams.birds.max.time <= 0) return false;

  this.m_ThrowParams.birds.timeElapsed += time;
  this.m_ThrowParams.flayers.timeElapsed += time;

  if(this.m_ThrowParams.birds.timeElapsed >= this.m_ThrowParams.birds.time) {
    this.m_ThrowParams.birds.timeElapsed = 0;

    this.m_ThrowParams.birds.count--;

    if(this.m_ThrowParams.birds.count <= 0) {
      this.generateThrowTime(0);
      this.generateThrowCount(0);
    } else {
      this.m_ThrowParams.birds.time = 0.5;
    }

    this.run(0);
  }

  if(this.m_ThrowParams.flayers.timeElapsed >= this.m_ThrowParams.flayers.time) {
    this.m_ThrowParams.flayers.timeElapsed = 0;

    this.generateThrowTime(1);
    this.generateThrowCount(1);

    this.run(1);
  }
};

Game.prototype.run = function(type) {
  switch(type) {
    case 0:
    if(Random.sharedRandom().probably(10)) {
      this.m_BombBirds.create().run();
    } else {
      this.m_Birds.create().run();
    }
    break;
    case 1:
    var main;

    for(var i = 0; i <  this.m_ThrowParams.flayers.count; i++) {
      if(i == 0) {
        this.m_FlayerBirds.create().run();

        main = this.m_FlayerBirds.last();
      } else {
        var x = main.getCenterX() + (main.getWidth() * Random.sharedRandom().random(1, i, true)) * (main.getCenterX() > Camera.sharedCamera().center.x ? 1 : -1);
        var y = main.getCenterY() + (main.getHeight() / 2 * Random.sharedRandom().random(-i, i, true));

        this.m_FlayerBirds.create();
        this.m_FlayerBirds.last().run();
        this.m_FlayerBirds.last().setCenterPosition(x, y);
      }
    }
    break;
  }
};

Game.prototype.generateThrowTime = function(type) {
  switch(type) {
    case 0:
    this.m_ThrowParams.birds.time = Random.sharedRandom().random(this.m_ThrowParams.birds.min.time, this.m_ThrowParams.birds.max.time);
    break;
    case 1:
    this.m_ThrowParams.flayers.time = Random.sharedRandom().random(this.m_ThrowParams.flayers.min.time, this.m_ThrowParams.flayers.max.time);
    break;
  }
};

Game.prototype.generateThrowCount = function(type) {
  switch(type) {
    case 0:
    this.m_ThrowParams.birds.count = Random.sharedRandom().random(this.m_ThrowParams.birds.min.count, this.m_ThrowParams.birds.max.count, true);
    break;
    case 1:
    this.m_ThrowParams.flayers.count = Random.sharedRandom().random(this.m_ThrowParams.flayers.min.count, this.m_ThrowParams.flayers.max.count, true);
    break;
  }
};
