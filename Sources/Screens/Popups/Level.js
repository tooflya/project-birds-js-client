/**
 * Tooflya Inc. Development
 *
 * @author Igor Mats from Tooflya Inc.
 * @copyright (c) 2014 by Igor Mats
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
 * @version of cocos2d-x is 2.2.2
 *
 */

Level = ExtendedPopup.extend({
  ctor: function(parent) {
    this._super(parent);

    this.m_ActionButton = Button.create(s_PopupButton, 1, 1, this.m_Background);
    this.m_ActionText = Text.create('go', this.m_ActionButton);

    this.m_BackgroundHolder1 = Entity.create(s_ListFixSmall, this.m_Background);
    this.m_BackgroundHolder2 = Entity.create(s_ListFixSmall, this.m_Background);

    this.m_List = LevelList.create(this.m_Background);

    this.m_ActionButton.create().setCenterPosition(this.m_Background.getWidth() / 2, Camera.sharedCamera().coord(48));

    this.m_BackgroundHolder1.create().setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 + Camera.sharedCamera().coord(352));
    this.m_BackgroundHolder2.create().setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(355));

    this.m_ActionText.setCenterPosition(this.m_ActionButton.getWidth() / 2, this.m_ActionButton.getHeight() / 2);

    this.m_BackgroundHolder2.setScaleY(-1);

    this.m_CloseButton.setTouchHandler('onCloseEvent', Level);
    this.m_ActionButton.setTouchHandler('onActionEvent', Level);
  },
  onActionEvent: function() {
    this.hide(function() {
      DataManager.sharedManager().get(true, references.coins.lives, {
        success: function(value) {
          if(value <= 0) {
            Lives.sharedScreen(Levels.instance).show();
          } else {
            Camera.sharedCamera().setDesignResolutionSize();

            Game.sharedScreen(0);
            ScreenManager.sharedManager().replace(Loading);
          }
        }
      });
    });
  },
  onShow: function() {
    this._super();
  },
  onHide: function() {
    this._super();
  }
});

Level.instance = false;
Level.sharedScreen = function(parent) {
  if(Level.instance) {
    Level.instance.m_Parent = parent;
  } else {
    Level.instance = new Level(parent);
  }

  return Level.instance;
};
