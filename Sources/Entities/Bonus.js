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

Bonus = Entity.extend({
  m_Decorations: [],
  ctor: function(file, parent) {
    this._super(file, parent, true);

    this.setZOrder(110);
    this.setCascadeOpacityEnabled(true);
  },
  onCreate: function() {
    this._super();

    this.m_Decorations = [];

    for(var i = 0; i < 2; i++) {
      this.m_Decorations[i] = Entity.create(s_PopupDecoration1, this);

      this.m_Decorations[i].create().setCenterPosition(this.getWidth() / 2, this.getHeight() / 2);
      this.m_Decorations[i].setScale(0.0);
      this.m_Decorations[i].setZOrder(-1);
      this.m_Decorations[i].runAction(
        cc.Sequence.create(
          cc.ScaleTo.create(0.3, 1.2),
          cc.ScaleTo.create(0.2, 0.8),
          cc.ScaleTo.create(0.2, 1.0),
          false
          )
        );
    }

    this.setScale(0.0);
    this.setOpacity(255);
    this.runAction(
      cc.Sequence.create(
        cc.ScaleTo.create(0.3, 1.2),
        cc.ScaleTo.create(0.2, 0.8),
        cc.ScaleTo.create(0.2, 1.0),
        false
        )
      );
    this.runAction(
      cc.RepeatForever.create(
        cc.Sequence.create(
          cc.RotateTo.create(0.5, -15.0),
          cc.RotateTo.create(0.5, 15.0)
          )
        )
      );
    this.runAction(
      cc.Sequence.create(
        cc.DelayTime.create(1.0),
        cc.FadeTo.create(1.0, 0.0),
        cc.CallFunc.create(this.destroy, this, this)
        )
      );
  },
  onDestroy: function() {
    this._super();

    this.removeFromParent();

    for(var i = 0; i < 2; i++) {
      if(this.m_Decorations[i]) {
        this.m_Decorations[i].destroy();
        this.m_Decorations[i].removeFromParent();
      }
    }

    this.m_Decorations = false;
  },
  destroy: function(fast) {
    this._super(fast);

    if(!fast) {
      this.runAction(
        cc.Sequence.create(
          cc.FadeTo.create(0.5, 0.0),
          cc.CallFunc.create(this.destroy, this, this)
          )
        );
    }
  },
  update: function(time) {
    this._super(time);

    this.m_Decorations[0].setRotation(this.m_Decorations[0].getRotation() - 0.1);
    this.m_Decorations[1].setRotation(this.m_Decorations[1].getRotation() + 0.1);
  }
});
