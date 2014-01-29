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

PopupShader = Entity.extend({
  m_Index: false,
  m_Speed: false,
  ctor: function() {
      this._super(s_PopupDecoration1);
  },
  onCreate: function() {
    this._super();

    this.setScale(0);
    this.setRotation(0);
    this.setOpacity(Random.sharedRandom().random(0, 255));
  },
  animate: function(x, y, scale, speed, time, index) {
    this.setCenterPosition(x, y);
    this.runRecognizeAction(cc.CallFunc.create(this.destroy, this, this), [{
      name: "scale",
      time: time / 2,
      value: scale 
    }, {
      name: "scale",
      time: time / 2,
      value: 0 
    }]);

    this.m_Index = index;
    this.m_Speed = speed;
  },
  update: function(time) {
    this._super(time);

    this.setRotation(this.getRotation() + (this.m_Index == 1 ? this.m_Speed : -this.m_Speed) * time);
  },
  deepCopy: function() {
    return PopupShader.create();
  }
});

PopupShader.create = function() {
  var entity = new PopupShader();

  return entity;
};
