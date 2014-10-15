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

Holder = Entity.extend({
  time: 0,
  current: 0,
  ctor: function(parent) {
    this._super(s_MapUserBackground2, parent);
  },
  update: function(time) {
    this._super(time);

    if(this.getChildrenCount() > 1) {
      this.time += time;

      if(this.time >= 5.0) {
        this.time = 0;

        this.getChildren()[this.current].runAction(cc.FadeOut.create(0.5));
        this.current = this.current >= (this.getChildrenCount() - 1) ? 0 : (this.current + 1);
        this.getChildren()[this.current].runAction(
          cc.Sequence.create(
            cc.DelayTime.create(0.5),
            cc.FadeIn.create(0.5),
            false
          )
        );
      }
    }
  }
});

Holder.create = function(parent) {
  var entity = new Holder(parent);

  return entity;
};
