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

HealthParticle = Entity.extend({
  m_Speed: 0,
  ctor: function() {
    this._super(s_PopupDecoration11);
  },
  create: function(data) {
    this.element = data.element;
    this.type = data.type;

    this._super();
  },
  onCreate: function() {
    this._super();

    var id = Random.sharedRandom().random(-20, 20);

    this.setOpacity(255);
    this.setScale(1.5);

    this.setCenterPosition(this.element.getCenterX(), this.element.getCenterY() - this.element.getHeight() / 2);
    this.setCenterPosition(this.getCenterX() + id * Camera.sharedCamera().coord(3), this.getCenterY());

    this.m_Speed = 4.0; // TODO: Add extended type of animation. Math.abs(5.0 - Math.abs(0.2 * id));

    switch(this.type) {
      case HealthParticle.types.simple.plus:
      this.setColor(cc.c3(0, 255, 0));
      break;
      case HealthParticle.types.simple.minus:
      this.setColor(cc.c3(255, 0, 0));
      break;
    }

    this.runAction(
      cc.Sequence.create(
        cc.FadeOut.create(1.0),
        cc.CallFunc.create(this.destroy, this, this),
        false
      )
    );
  },
  onDestroy: function() {
    this._super();
  },
  update: function(time) {
    this._super(time);

    this.setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(this.m_Speed));
  },
  deepCopy: function() {
    return HealthParticle.create();
  }
});

HealthParticle.types = {
  simple: {
    plus: 0,
    minus: 1
  },
  extended: {
    plus: 2,
    minus: 3
  }
};
HealthParticle.create = function() {
  var entity = new HealthParticle();

  return entity;
};
