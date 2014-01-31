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

Reset = Screen.extend({
  ctor: function() {
    this._super();

    Reset.instance = this;

    this.m_Background = Entity.create(s_ThirdPartyBackground, this, true);
    this.m_BackButton = Button.create(s_ButtonsSprite, 3, 3, this);
    this.m_ResetButton = Button.create(s_LongButton, 1, 1, this);

    this.m_BackButton.create().setCenterPosition(Camera.sharedCamera().coord(100), Camera.sharedCamera().coord(100));
    this.m_ResetButton.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(130));

    this.m_BackButton.setCurrentFrameIndex(1);

    this.m_BackButton.setTouchHandler('onBackEvent', Reset);
    this.m_ResetButton.setTouchHandler('onResetEvent', Reset);
  },
  onBackEvent: function() {
    ScreenManager.sharedManager().replace(Settings);
  },
  onResetEvent: function() {
    ResetProgress.sharedScreen(this).show();
  },
  onShow: function() {
    this._super();
  },
  onHide: function() {
    this._super();

    Reset.instance = false;
  },
  update: function(time) {
    this._super(time);
  }
});

Reset.instance = false;
Reset.sharedScreen = function() {
  return Reset.instance ? Reset.instance : new Reset();
};
