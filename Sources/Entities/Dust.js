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

Dust = Entity.extend({
  m_VectorX: 0,
  m_VectorY: 0,
  m_VectorXUpdateTime: Random.sharedRandom().random(1.0, 5.0),
  m_VectorYUpdateTime: Random.sharedRandom().random(1.0, 5.0),
  m_VectorXUpdateTimeElapsed: 0,
  m_VectorYUpdateTimeElapsed: 0,
  ctor: function() {
    this._super(s_Dust);
  },
  onCreate: function() {
    this._super();

    this.m_VectorX = 0;
    this.m_VectorY = 0;

    var x = Random.sharedRandom().random(0, Camera.sharedCamera().width);
    var y = Random.sharedRandom().random(0, Camera.sharedCamera().height);
    var opacity = 1;
    var scale = Random.sharedRandom().random(0.5, 1.0);

    this.setCenterPosition(x, y);
    this.setOpacity(opacity);
    this.setScale(scale);

    this.runRecognizeAction(false, {
      name: 'fade',
      time: Random.sharedRandom().random(0.5, 5.0),
      value: 255
    });

    this.updateVectors();
  },
  onDestroy: function() {
    this._super();
  },
  update: function(time) {
    this._super(time);

    var x = this.getCenterX() + this.m_VectorX * time;
    var y = this.getCenterY() + this.m_VectorY * time;
    var opacity = this.getOpacity() - 1;
        opacity = opacity > 255 ? 255 : opacity;
        opacity = opacity < 0 ? 0 : opacity;

    this.setCenterPosition(x, y);
    if(this.getNumberOfRunningActions() <= 0) this.setOpacity(opacity);

    this.m_VectorXUpdateTimeElapsed += time;
    this.m_VectorYUpdateTimeElapsed += time;

    if(this.m_VectorXUpdateTimeElapsed >= this.m_VectorXUpdateTime) this.updateVectorX();
    if(this.m_VectorYUpdateTimeElapsed >= this.m_VectorYUpdateTime) this.updateVectorY();

    if(this.getOpacity() <= 0 || !isOnScreen(this)) {
      this.destroy();
    }
  },
  updateVectors: function() {
    this.updateVectorX();
    this.updateVectorY();
  },
  updateVectorX: function() {
    this.m_VectorXUpdateTime = Random.sharedRandom().random(0.0, 2.0);
    this.m_VectorXUpdateTimeElapsed = 0;
    this.m_VectorX += Random.sharedRandom().probably(50) ? 10.0 : -10.0;

    //this.updateColor(this.m_VectorXUpdateTime);
  },
  updateVectorY: function() {
    this.m_VectorYUpdateTime = Random.sharedRandom().random(0.0, 2.0);
    this.m_VectorYUpdateTimeElapsed = 0;
    this.m_VectorY += Random.sharedRandom().probably(50) ? 10.0 : -10.0;
  },
  updateColor: function(duration) {
    color = Random.sharedRandom().randomColor();

    this.runAction(cc.TintTo.create(duration, color.r, color.g, color.b));
  },
  deepCopy: function() {
    return Dust.create();
  }
});

Dust.create = function() {
  var entity = new Dust();

  return entity;
};
