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

Key = Entity.extend({
  m_Active: true,
  ctor: function() {
    this._super(s_UnlockKey);

    this.registerTouchable(true);
  },
  onCreate: function() {
    this._super();

    this.m_Active = true;

    this.m_Decorations = [];

    for(var i = 0; i < 2; i++) {
      this.m_Decorations[i] = Entity.create(s_PopupDecoration1, this.getParent());

      this.m_Decorations[i].create();
      this.m_Decorations[i].setScale(0.0);
      this.m_Decorations[i].setZOrder(101);
      this.m_Decorations[i].runAction(
        cc.Sequence.create(
          cc.DelayTime.create(1.0),
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
        cc.DelayTime.create(1.0),
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
        cc.DelayTime.create(4.0),
        cc.FadeTo.create(1.0, 0.0),
        cc.CallFunc.create(this.destroy, this, this)
        )
      );
  },
  onDestroy: function() {
    this._super();

    for(var i = 0; i < 2; i++) {
      this.m_Decorations[i].destroy();
      this.m_Decorations[i].removeFromParent();
    }

    this.m_Decorations = false;
  },
  onHover: function() {
    if(!this.m_Active) return false;

    var self = this;

    this.stopAllActions();
    this.setOpacity(255);
    
    setTimeout(function() {
      self.runAction(cc.RotateTo.create(1.0, -720 * 2));
      self.runAction(cc.MoveTo.create(1.0, GamePanel.sharedScreen().getIcons()[4].convertToWorldSpace(GamePanel.sharedScreen().getIcons()[4].getPosition())));
    }, 500);

    for(var i = 0; i < 2; i++) {
      this.m_Decorations[i].runAction(
        cc.Sequence.create(
          cc.ScaleTo.create(0.5, 3.0),
          cc.FadeOut.create(0.1),
          false
          )
        );
    }

    this.m_Active = false;
  },
  setOpacity: function(opacity) {
    this._super(opacity);

    for(var i = 0; i < 2; i++) {
      this.m_Decorations[i].setOpacity(opacity);
    }
  },
  setElementPosition: function(x, y) {
    this.setCenterPosition(x, y);

    for(var i = 0; i < 2; i++) {
      this.m_Decorations[i].setCenterPosition(x, y);
    }
  },
  update: function(time) {
    this._super(time);

    this.m_Decorations[0].setRotation(this.m_Decorations[0].getRotation() - 0.1);
    this.m_Decorations[1].setRotation(this.m_Decorations[1].getRotation() + 0.1);
  },
  deepCopy: function() {
    return Key.create();
  }
});

Key.create = function() {
  var entity = new Key();

  return entity;
};
