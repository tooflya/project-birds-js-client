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

Pause = ExtendedPopup.extend({
  m_Decorations: [],
  ctor: function(parent) {
    this._super(parent);

    this.m_Decorations[0] = Entity.create(s_PopupDecoration12, this.m_Background);
    this.m_Decorations[1] = Entity.create(s_PopupDecoration12, this.m_Background);
    this.m_Decorations[2] = Entity.create(s_PopupDecoration12, this.m_Background);
    this.m_Decorations[3] = Entity.create(s_PopupDecoration12, this.m_Background);

    this.m_ContinueButton = Button.create(s_PauseButton, 1, 1, this.m_Background);
    this.m_ModeButton = Button.create(s_PauseButton, 1, 1, this.m_Background);
    this.m_MenuButton = Button.create(s_PauseButtonsSprite, 2, 1, this.m_Background);
    this.m_ShopButton = Button.create(s_PauseButtonsSprite, 2, 1, this.m_Background);
    this.m_SoundButton = Button.create(s_PauseSfxButtonsSprite, 3, 2, this.m_Background);
    this.m_MusicButton = Button.create(s_PauseSfxButtonsSprite, 3, 2, this.m_Background);

    this.m_ContinueText = Text.create('continue', this.m_ContinueButton);
    this.m_ModeText = Text.create('choose-mode', this.m_ModeButton);

    this.m_Decorations[0].setTextureRect(cc.rect(0, 0, 200, 300));
    this.m_Decorations[1].setTextureRect(cc.rect(200, 0, 200, 300));
    this.m_Decorations[2].setTextureRect(cc.rect(400, 0, 200, 300));
    this.m_Decorations[3].setTextureRect(cc.rect(0, 600, 600, 107));

    this.m_Decorations[0].create().setCenterPosition(this.m_Background.getWidth() / 2 - Camera.sharedCamera().coord(154), this.m_Background.getHeight() / 2 + Camera.sharedCamera().coord(400));
    this.m_Decorations[1].create().setCenterPosition(this.m_Background.getWidth() / 2 + Camera.sharedCamera().coord(154), this.m_Background.getHeight() / 2 + Camera.sharedCamera().coord(400));
    this.m_Decorations[2].create().setCenterPosition(this.m_Background.getWidth() / 2 + Camera.sharedCamera().coord(4), this.m_Background.getHeight() / 2 + Camera.sharedCamera().coord(400));
    this.m_Decorations[3].create().setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 + Camera.sharedCamera().coord(220));

    this.m_ContinueButton.create().setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 + Camera.sharedCamera().coord(90));
    this.m_ModeButton.create().setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(70));
    this.m_MenuButton.create().setCenterPosition(this.m_Background.getWidth() / 2 - Camera.sharedCamera().coord(90), this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(240));
    this.m_ShopButton.create().setCenterPosition(this.m_Background.getWidth() / 2 + Camera.sharedCamera().coord(90), this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(240));
    this.m_MusicButton.create().setCenterPosition(Camera.sharedCamera().coord(100), Camera.sharedCamera().coord(100));
    this.m_SoundButton.create().setCenterPosition(Camera.sharedCamera().coord(210), Camera.sharedCamera().coord(100));

    this.m_ContinueText.setCenterPosition(this.m_ContinueButton.getWidth() / 2, this.m_ContinueButton.getHeight() / 2);
    this.m_ModeText.setCenterPosition(this.m_ModeButton.getWidth() / 2, this.m_ModeButton.getHeight() / 2);

    this.m_MenuButton.setCurrentFrameIndex(0);
    this.m_ShopButton.setCurrentFrameIndex(1);

    this.m_CloseButton.setTouchHandler('onCloseEvent', Pause);
    this.m_ContinueButton.setTouchHandler('onContinueEvent', Pause);
    this.m_ModeButton.setTouchHandler('onModeEvent', Pause);
    this.m_MenuButton.setTouchHandler('onMenuEvent', Pause);
    this.m_ShopButton.setTouchHandler('onShopEvent', Pause);
    this.m_SoundButton.setTouchHandler('onSoundEvent', Pause);
    this.m_MusicButton.setTouchHandler('onMusicEvent', Pause);

    this.updateSoundButtonsState();
  },
  updateSoundButtonsState: function() {
    this.m_MusicButton.setCurrentFrameIndex(Music.sharedMusic().enabled ? 0 : 3);
    this.m_SoundButton.setCurrentFrameIndex(Sound.sharedSound().enabled ? 1 : 4);
  },
  onContinueEvent: function() {
    this.hide();
  },
  onModeEvent: function() {
    this.hide(function() {
      ScreenManager.sharedManager().replace(Mode);
    });
  },
  onMenuEvent: function() {
    this.hide(function() {
      ScreenManager.sharedManager().replace(Menu);
    });
  },
  onShopEvent: function() {
    this.hide(function() {
      ScreenManager.sharedManager().replace(Shop);
    });
  },
  onSoundEvent: function() {
    Sound.sharedSound().changeState();

    this.updateSoundButtonsState();
  },
  onMusicEvent: function() {
    Music.sharedMusic().changeState();

    this.updateSoundButtonsState();
  },
  onShow: function() {
    this._super();

    this.updateSoundButtonsState();
  },
  onHide: function() {
    this._super();

    Pause.instance = false;
  }
});

Pause.instance = false;
Pause.sharedScreen = function(parent) {
  if(Pause.instance) {
    Pause.instance.m_Parent = parent;
  } else {
    Pause.instance = new Pause(parent);
  }

  return Pause.instance;
};
