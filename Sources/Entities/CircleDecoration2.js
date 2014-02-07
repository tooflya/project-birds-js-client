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

CircleDecoration2 = Entity.extend({
  ctor: function() {
      this._super(s_CircleDecoration2);
  },
  onCreate: function() {
    this._super();

    this.setScale(0);
    this.setRotation(0);
    this.setOpacity(255);
    this.runRecognizeAction(cc.CallFunc.create(this.destroy, this, this), {
      name: "fade",
      time: 2.0,
      value: 0.0    
    });
    this.runRecognizeAction(false, {
      name: "scale",
      time: 2.0,
      value: 1.5    
    });
    this.runRecognizeAction(false, {
      name: "rotate",
      time: 2.0,
      value: 720.0    
    });
  },
  update: function(time) {
    this._super(time);
  },
  deepCopy: function() {
    return CircleDecoration2.create();
  }
});

CircleDecoration2.create = function() {
  var entity = new CircleDecoration2();

  return entity;
};
