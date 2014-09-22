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

Coins = ExtendedPopup.extend({
  ctor: function(parent) {
    this._super(parent);

    this.m_Decoration = Entity.create(s_PopupDecoration6, this.m_Background);
    this.m_CoinsButton1 = Button.create(s_GetCoinsPopupButton, 2, 2, this.m_Background);
    this.m_CoinsButton2 = Button.create(s_GetCoinsPopupButton, 2, 2, this.m_Background);
    this.m_CoinsButton3 = Button.create(s_GetCoinsPopupButton, 2, 2, this.m_Background);
    this.m_CoinsButton4 = Button.create(s_GetCoinsPopupButton, 2, 2, this.m_Background);
    this.m_Text = Text.create('coins-popup', this.m_Background);

    var platformPriceText;

    switch(this.config.params.platform) {
      case 'vk':
      platformPriceText = 'vk-price-text';
      break;
    }

    this.m_PriceText1 = Text.create(platformPriceText, this.m_CoinsButton1);
    this.m_PriceText2 = Text.create(platformPriceText, this.m_CoinsButton2);
    this.m_PriceText3 = Text.create(platformPriceText, this.m_CoinsButton3);
    this.m_PriceText4 = Text.create(platformPriceText, this.m_CoinsButton4);

    switch(this.config.params.platform) {
      case 'vk':
      this.m_PriceText1.ccsf([5]);
      this.m_PriceText2.ccsf([10]);
      this.m_PriceText3.ccsf([25]);
      this.m_PriceText4.ccsf([40]);
      break;
    }

    this.m_PriceText1.setCenterPosition(this.m_CoinsButton1.getWidth() / 2, this.m_CoinsButton1.getHeight() / 2 - Camera.sharedCamera().coord(75));
    this.m_PriceText2.setCenterPosition(this.m_CoinsButton2.getWidth() / 2, this.m_CoinsButton2.getHeight() / 2 - Camera.sharedCamera().coord(75));
    this.m_PriceText3.setCenterPosition(this.m_CoinsButton3.getWidth() / 2, this.m_CoinsButton3.getHeight() / 2 - Camera.sharedCamera().coord(75));
    this.m_PriceText4.setCenterPosition(this.m_CoinsButton4.getWidth() / 2, this.m_CoinsButton4.getHeight() / 2 - Camera.sharedCamera().coord(75));

    this.m_Decoration.create().setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 + Camera.sharedCamera().coord(350));

    this.m_CoinsButton1.create().setCenterPosition(this.m_Background.getWidth() / 2 - Camera.sharedCamera().coord(150), this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(130));
    this.m_CoinsButton2.create().setCenterPosition(this.m_Background.getWidth() / 2 + Camera.sharedCamera().coord(150), this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(130));
    this.m_CoinsButton3.create().setCenterPosition(this.m_Background.getWidth() / 2 - Camera.sharedCamera().coord(150), this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(350));
    this.m_CoinsButton4.create().setCenterPosition(this.m_Background.getWidth() / 2 + Camera.sharedCamera().coord(150), this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(350));

    this.m_Text.setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 + Camera.sharedCamera().coord(60));

    this.m_CoinsButton1.setTouchHandler('onActionEvent', Coins, {id: purchase.coins.pack1});
    this.m_CoinsButton2.setTouchHandler('onActionEvent', Coins, {id: purchase.coins.pack2});
    this.m_CoinsButton3.setTouchHandler('onActionEvent', Coins, {id: purchase.coins.pack3});
    this.m_CoinsButton4.setTouchHandler('onActionEvent', Coins, {id: purchase.coins.pack4});

    this.m_CoinsButton1.setCurrentFrameIndex(0);
    this.m_CoinsButton2.setCurrentFrameIndex(1);
    this.m_CoinsButton3.setCurrentFrameIndex(2);
    this.m_CoinsButton4.setCurrentFrameIndex(3);

    this.m_CloseButton.setTouchHandler('onCloseEvent', Coins);
  },
  onActionEvent: function(params) {
    this.hide(function() {
      Purchase.sharedScreen(this.getParent()).show(params, function(id) {
        switch(id) {
          case purchase.coins.pack1:
          DataManager.sharedManager().update(true, references.coins.gold, 25);
          DataManager.sharedManager().update(true, references.coins.silver, 1000);
          break;
          case purchase.coins.pack2:
          DataManager.sharedManager().update(true, references.coins.gold, 150);
          DataManager.sharedManager().update(true, references.coins.silver, 5000);
          break;
          case purchase.coins.pack3:
          DataManager.sharedManager().update(true, references.coins.gold, 500);
          DataManager.sharedManager().update(true, references.coins.silver, 15000);
          break;
          case purchase.coins.pack4:
          DataManager.sharedManager().update(true, references.coins.gold, 2000);
          DataManager.sharedManager().update(true, references.coins.silver, 50000);
          break;
        }
      });
    });
  },
  onShow: function() {
    this._super();

    Tooflya.api.call('payments.visit');

    this.m_CoinsButton1.runAction(
      cc.Sequence.create(
      cc.ScaleTo.create(0.1, 0.8, 1.2),
      cc.ScaleTo.create(0.1, 1.2, 0.8),
      cc.ScaleTo.create(0.1, 1.0, 1.0)
      )
    );

    this.m_CoinsButton2.runAction(
    cc.Sequence.create(
      cc.ScaleTo.create(0.1, 0.8, 1.2),
      cc.ScaleTo.create(0.1, 1.2, 0.8),
      cc.ScaleTo.create(0.1, 1.0, 1.0)
      )
    );

    this.m_CoinsButton3.runAction(
      cc.Sequence.create(
      cc.ScaleTo.create(0.1, 0.8, 1.2),
      cc.ScaleTo.create(0.1, 1.2, 0.8),
      cc.ScaleTo.create(0.1, 1.0, 1.0)
      )
    );

    this.m_CoinsButton4.runAction(
    cc.Sequence.create(
      cc.ScaleTo.create(0.1, 0.8, 1.2),
      cc.ScaleTo.create(0.1, 1.2, 0.8),
      cc.ScaleTo.create(0.1, 1.0, 1.0)
      )
    );
  },
  onHide: function() {
    this._super();
  }
});

Coins.instance = false;
Coins.sharedScreen = function(parent) {
  if(Coins.instance) {
    Coins.instance.m_Parent = parent;
  } else {
    Coins.instance = new Coins(parent);
  }

  return Coins.instance;
};
