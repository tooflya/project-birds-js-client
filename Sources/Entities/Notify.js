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

Notify = Entity.extend({
  m_InitialCenterX: false,
  m_InitialCenterY: false,
  m_AnimationTime: 0,
  m_AnimationTimeElapsed: 0,
  ctor: function(parent) {
    this._super(s_NotifyIcon, parent);

    this.setAnchorPoint(cc.p(0.5, 0.0));
  },
  onCreate: function() {
    this._super();
  },
  onDestroy: function() {
    this._super();
  },
  onEnter: function() {
    this._super();

    this.setScale(1.0);
    this.setCenterPosition(this.m_InitialCenterX, this.m_InitialCenterY);
  },
  onExit: function() {
    this._super();
  },
  setCenterPosition: function(x, y) {
    this._super(x, y);

    if(!this.m_InitialCenterX || !this.m_InitialCenterY) {
      this.m_InitialCenterX = x;
      this.m_InitialCenterY = y;
    }
  },
  onAnimation: function() {
    this.runAction(
      cc.Sequence.create(
        cc.ScaleTo.create(0.1, 0.9),
        cc.ScaleTo.create(0.3, 1.0),
        cc.ScaleTo.create(0.1, 0.9),
        cc.ScaleTo.create(0.1, 1.0),
        false
      )
    );
    this.runAction(
      cc.Sequence.create(
        cc.DelayTime.create(0.1),
        cc.EaseExponentialInOut.create(
          cc.MoveTo.create(0.25, cc.p(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(32)))
        ),
        cc.EaseExponentialInOut.create(
          cc.MoveTo.create(0.2, cc.p(this.getCenterX(), this.getCenterY()))
        ),
        false
      )
    );
  },
  update: function(time) {
    this._super(time);

    this.m_AnimationTimeElapsed += time;
    if(this.m_AnimationTimeElapsed >= this.m_AnimationTime && this.getNumberOfRunningActions() <= 0) {
      this.m_AnimationTimeElapsed = 0;
      this.m_AnimationTime = Random.sharedRandom().random(1.0, 10.0);

      this.onAnimation();
    }
  }
});

Notify.create = function(parent) {
  var entity = new Notify(parent);

  return entity;
};
