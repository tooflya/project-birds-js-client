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

Languages = Screen.extend({
  ctor: function() {
    this._super();

    Languages.instance = this;

    this.m_Flags = new Array();
    this.m_NotAvailableBackgrounds = new Array();

    this.m_Background = Entity.create(s_ThirdPartyBackground, this, true);
    this.m_BackButton = Button.create(s_ButtonsSprite, 3, 3, this);
    this.m_BackgroundDecoration1 = Entity.create(s_BackgroundDecoration1, this);
    this.m_BackgroundDecoration2 = Entity.create(s_BackgroundDecoration1, this);
    this.m_Checker = Entity.create(s_Checker, this);

    for(var i = 0; i < 10; i++) {
      this.m_Flags[i] = Button.create(s_LargeFlags, 2, 5, this);
      this.m_Flags[i].setCurrentFrameIndex(i);

      this.m_NotAvailableBackgrounds[i] = Entity.create(s_FlagNotAvailable, this.m_Flags[i]);

      if(i >= 2) {
        var text = Text.create('language-not-available', this.m_NotAvailableBackgrounds[i]);
        text.setCenterPosition(this.m_NotAvailableBackgrounds[i].getWidth() / 2, this.m_NotAvailableBackgrounds[i].getHeight() / 2);
        text.disableShadow();
        text.setColor(cc.c3(0, 0, 0));

        this.m_NotAvailableBackgrounds[i].create().setCenterPosition(this.m_Flags[i].getWidth() / 2, Camera.sharedCamera().coord(50));
      } else {
        this.m_NotAvailableBackgrounds[i].destroy();

        this.m_Flags[i].setTouchHandler('onLanguageEvent', Languages, {id: i});
      }
    }

    this.m_BackButton.create().setCenterPosition(Camera.sharedCamera().coord(100), Camera.sharedCamera().coord(100));
    this.m_BackgroundDecoration1.create().setCenterPosition(this.m_BackgroundDecoration1.getWidth() / 2, Camera.sharedCamera().height - this.m_BackgroundDecoration1.getHeight() / 2);
    this.m_BackgroundDecoration2.create().setCenterPosition(Camera.sharedCamera().width - this.m_BackgroundDecoration2.getWidth() / 2, this.m_BackgroundDecoration2.getHeight() / 2);
    this.m_Checker.create().setCenterPosition(this.m_Flags[0].getWidth() - this.m_Checker.getWidth() / 2, this.m_Checker.getHeight());

    this.m_Flags[0].create().setCenterPosition(Camera.sharedCamera().center.x - Camera.sharedCamera().coord(180), Camera.sharedCamera().center.y + Camera.sharedCamera().coord(400));
    this.m_Flags[1].create().setCenterPosition(Camera.sharedCamera().center.x + Camera.sharedCamera().coord(180), Camera.sharedCamera().center.y + Camera.sharedCamera().coord(400));
    this.m_Flags[2].create().setCenterPosition(Camera.sharedCamera().center.x - Camera.sharedCamera().coord(180), Camera.sharedCamera().center.y + Camera.sharedCamera().coord(200));
    this.m_Flags[3].create().setCenterPosition(Camera.sharedCamera().center.x + Camera.sharedCamera().coord(180), Camera.sharedCamera().center.y + Camera.sharedCamera().coord(200));
    this.m_Flags[4].create().setCenterPosition(Camera.sharedCamera().center.x - Camera.sharedCamera().coord(180), Camera.sharedCamera().center.y + Camera.sharedCamera().coord(0));
    this.m_Flags[5].create().setCenterPosition(Camera.sharedCamera().center.x + Camera.sharedCamera().coord(180), Camera.sharedCamera().center.y + Camera.sharedCamera().coord(0));
    this.m_Flags[6].create().setCenterPosition(Camera.sharedCamera().center.x - Camera.sharedCamera().coord(180), Camera.sharedCamera().center.y - Camera.sharedCamera().coord(200));
    this.m_Flags[7].create().setCenterPosition(Camera.sharedCamera().center.x + Camera.sharedCamera().coord(180), Camera.sharedCamera().center.y - Camera.sharedCamera().coord(200));
    this.m_Flags[8].create().setCenterPosition(Camera.sharedCamera().center.x - Camera.sharedCamera().coord(180), Camera.sharedCamera().center.y - Camera.sharedCamera().coord(400));
    this.m_Flags[9].create().setCenterPosition(Camera.sharedCamera().center.x + Camera.sharedCamera().coord(180), Camera.sharedCamera().center.y - Camera.sharedCamera().coord(400));

    this.m_BackButton.setCurrentFrameIndex(1);

    this.m_BackgroundDecoration2.setScale(-1);

    this.m_BackButton.setTouchHandler('onBackEvent', Languages);
  },
  onBackEvent: function() {
    ScreenManager.sharedManager().replace(Settings);
  },
  onLanguageEvent: function(params) {
    LanguagesManager.sharedManager().changeLanguage(params.id);

    ScreenManager.sharedManager().replace(Settings);
  },
  onShow: function() {
    this._super();

    this.m_Checker.removeFromParent();
    this.m_Flags[LanguagesManager.sharedManager().getLanguageId()].addChild(this.m_Checker); // TODO: Add child checker to the current language flag.
  },
  onHide: function() {
    this._super();

    Languages.instance = false;
  },
  update: function(time) {
    this._super(time);
  }
});

Languages.instance = false;
Languages.sharedScreen = function() {
  return Languages.instance ? Languages.instance : new Languages();
};
