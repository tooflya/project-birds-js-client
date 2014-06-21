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

ElementIcon = TiledEntity.extend({
  m_Id: -1,
  m_Time: 1.0,
  ctor: function() {
    this._super(s_ElementsIcons, 2, 5);
  },
  create: function(element) {
    this._super();

    this.m_Id = element.getId() * 2;
    this.setCurrentFrameIndex(this.m_Id);
    this.setCenterPosition(element.getCenterX(), element.getCenterY());

    this.runAction(
      cc.Sequence.create(
        cc.Repeat.create(
          cc.Sequence.create(
            cc.DelayTime.create(0.1),
            cc.CallFunc.create(this.animate, this, this),
            false
          ), 10),
        cc.CallFunc.create(this.destroy, this, this),
        false
      )
    );
  },
  onCreate: function() {
    this._super();
  },
  onDestroy: function() {
    this._super();
  },
  animate: function() {
    if(this.getCurrentFrameIndex() == this.m_Id) {
      this.setCurrentFrameIndex(this.m_Id + 1);
    } else {
      this.setCurrentFrameIndex(this.m_Id);
    }
  },
  update: function(time) {
    this._super(time);
  },
  deepCopy: function() {
    return ElementIcon.create();
  }
});

ElementIcon.create = function() {
  var entity = new ElementIcon();

  return entity;
};
