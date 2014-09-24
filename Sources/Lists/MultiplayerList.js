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

MultiplayerList = PatternList.extend({
  ctor: function(parent) {
    this._super(s_ListScrollSmall, 512, 700, 512, 700, parent);

    this.m_Parent = parent;

    this.m_Text = [];

    this.m_Decoration = Entity.create(s_PopupDecoration15, this);
    this.m_Text[1] = Text.create('multiplayer-popup-1', this);
    this.m_Text[2] = Text.create('multiplayer-popup-2', this);
    this.m_Text[3] = Text.create('multiplayer-popup-3', this);
    this.m_Text[4] = Text.create('multiplayer-popup-4', this);

    this.m_Mode1Button = Button.create(s_PopupLongButton1, 1, 1, this);
    this.m_Mode2Button = Button.create(s_PopupLongButton2, 1, 1, this);

    this.m_Mode1Button.text = Text.create('multiplayer-popup-10', this.m_Mode1Button);
    this.m_Mode2Button.text = Text.create('multiplayer-popup-11', this.m_Mode2Button);

    this.m_Mode1Button.icon = TiledEntity.create(s_ItemsProperties, 1, 3, this.m_Mode1Button);
    this.m_Mode2Button.icon = TiledEntity.create(s_ItemsProperties, 1, 3, this.m_Mode2Button);

    this.m_Loading = Entity.create(s_Loading, this);

    this.m_BackgroundHolder = Background.create(this);

    this.m_Text[1].create().setCenterPosition(this.getWidth() / 2, this.getCenterY() + Camera.sharedCamera().coord(300));
    this.m_Text[2].create().setCenterPosition(this.getWidth() / 2, this.m_Text[1].getCenterY() - this.m_Text[1].getHeight() / 2 - this.m_Text[2].getHeight() / 2 - Camera.sharedCamera().coord(30));
    this.m_Text[3].create().setCenterPosition(this.getWidth() / 2, this.m_Text[2].getCenterY() - this.m_Text[2].getHeight() / 2 - this.m_Text[3].getHeight() / 2 - Camera.sharedCamera().coord(110));
    this.m_Text[4].create().setCenterPosition(this.getWidth() / 2, this.m_Text[3].getCenterY() - this.m_Text[3].getHeight() / 2 - this.m_Text[4].getHeight() / 2 - Camera.sharedCamera().coord(110));
    this.m_Loading.setCenterPosition(this.getWidth() / 2, this.m_Text[4].getCenterY() - Camera.sharedCamera().coord(120));
    this.m_Decoration.create().setCenterPosition(this.getWidth() / 2, this.getHeight() / 2 + Camera.sharedCamera().coord(130));
    this.m_Decoration.setScale(0.8);
    this.m_Decoration.setOpacity(30);

    this.m_Mode1Button.create().setCenterPosition(this.getWidth() / 2, this.m_Text[2].getCenterY() - this.m_Text[2].getHeight() / 2 - Camera.sharedCamera().coord(50));
    this.m_Mode2Button.create().setCenterPosition(this.getWidth() / 2, this.m_Text[3].getCenterY() - this.m_Text[3].getHeight() / 2 - Camera.sharedCamera().coord(50));

    this.m_Mode1Button.text.create().setCenterPosition(this.m_Mode1Button.getWidth() / 2, this.m_Mode1Button.getHeight() / 2);
    this.m_Mode2Button.text.create().setCenterPosition(this.m_Mode2Button.getWidth() / 2, this.m_Mode2Button.getHeight() / 2);

    //this.m_Mode1Button.icon.create().setCenterPosition(Camera.sharedCamera().coord(25), this.m_Mode1Button.getHeight() / 2);
    //this.m_Mode2Button.icon.create().setCenterPosition(Camera.sharedCamera().coord(25), this.m_Mode2Button.getHeight() / 2);

    this.m_Mode1Button.icon.setCurrentFrameIndex(1);
    this.m_Mode2Button.icon.setCurrentFrameIndex(1);

    this.m_Text[1].setColor(cc.c3(204.0, 102.0, 51.0));

    this.m_Text[2].setColor(cc.c3(255.0, 130.0, 0.0));
    this.m_Text[3].setColor(cc.c3(255.0, 130.0, 0.0));
    this.m_Text[4].setColor(cc.c3(255.0, 130.0, 0.0));

    this.m_Mode1Button.text.setColor(cc.c3(204.0, 102.0, 51.0));
    this.m_Mode2Button.text.setColor(cc.c3(204.0, 102.0, 51.0));

    this.m_Mode1Button.setTouchHandler('onMode1Event', Multiplayer);
    this.m_Mode2Button.setTouchHandler('onMode2Event', Multiplayer);
  },
  onEnter: function() {
    this._super();

    this.m_Loading.create().runAction(
      cc.RepeatForever.create(
        cc.RotateTo.create(1.0, 720)
      )
    );

    //this.m_ListMaxHeight = Math.abs(this.m_Text[7].getCenterY() - this.m_Text[7].getHeight() / 2 - Camera.sharedCamera().coord(50));
  },
  onExit: function() {
    this._super();

    this.m_Loading.destroy();
    this.m_BackgroundHolder.removeAllChildrenWithCleanup(true);
  }
});

MultiplayerList.create = function(parent) {
  return new MultiplayerList(parent);
};
