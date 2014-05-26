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

Star = Entity.extend({
  m_Type: -1,
  ctor: function(type) {
    this._super(s_StarParticle);

    this.m_Type = type;
  },
  onCreate: function() {
    this._super();

    this.setColor(Star.colors[Random.sharedRandom().random(0, 3, true)]);

    switch(this.m_Type) {
      default:
      this.setScale(2.0);
      this.runRecognizeAction(false, {
        name: "rotate",
        time: 0.5,
        value: Random.sharedRandom().random(-720, 720)
      });
      this.runRecognizeAction(cc.CallFunc.create(this.destroy, this, this), {
        name: "scale",
        time: 0.5,
        value: 0.0
      });
      break;
      case 1:
      this.m_VectorX = (Random.sharedRandom().random(10.0, 200.0) * (Random.sharedRandom().probably(50) ? -1 : 1)) * Random.sharedRandom().random(2.0, 10.0);
      this.m_VectorY = (Random.sharedRandom().random(10.0, 200.0) * (Random.sharedRandom().probably(50) ? -1 : 1)) * Random.sharedRandom().random(2.0, 10.0);

      this.setRotation(Math.atan2(this.m_VectorY, this.m_VectorX) * 180.0 / Math.PI);
      break;
    }
  },
  update: function(time) {
    this._super(time);

    switch(this.m_Type) {
      default:
      break;
      case 1:
      this.setCenterPosition(this.getCenterX() + this.m_VectorX * time, this.getCenterY() + this.m_VectorY * time);
      this.setOpacity(this.getOpacity() - 1);

      if(this.getOpacity() <= 0) {
        this.destroy();
      }
      break;
    }
  },
  deepCopy: function() {
    return Star.create(this.m_Type);
  }
});

Star.colors = [
  cc.c3(255, 0, 0),
  cc.c3(0, 255, 0),
  cc.c3(0, 0, 255)
];
Star.create = function(type) {
  var entity = new Star(type);

  return entity;
};
