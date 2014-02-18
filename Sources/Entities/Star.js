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
  m_FadeTime: 0.5,
  ctor: function() {
      this._super(s_StarParticle);
  },
  onCreate: function() {
    this._super();

    this.setScale(2.0);
    this.setColor(Star.colors[Random.sharedRandom().random(0, 3, true)]);
    this.runRecognizeAction(false, {
      name: "rotate",
      time: this.m_FadeTime,
      value: Random.sharedRandom().random(-720, 720)
    });
    this.runRecognizeAction(cc.CallFunc.create(this.destroy, this, this), {
      name: "scale",
      time: this.m_FadeTime,
      value: 0.0
    });
  },
  update: function(time) {
    this._super(time);
  },
  deepCopy: function() {
    return Star.create();
  }
});

Star.colors = [
  cc.c3(255, 0, 0),
  cc.c3(0, 255, 0),
  cc.c3(0, 0, 255)
];
Star.create = function() {
  var entity = new Star();

  return entity;
};
