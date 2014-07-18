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

Moves = ExtendedPopup.extend({
  ctor: function(parent) {
    this._super(parent);

    this.m_Decoration = Entity.create(s_PopupDecoration9, this.m_Background);
    this.m_GetButton = Button.create(s_GetMovesPopupButton, 1, 1, this.m_Background);
    this.m_Text = Text.create('moves-popup-1', this.m_Background);

    var platformPriceText;

    switch(this.config.params.platform) {
      case 'vk':
      platformPriceText = 'vk-price-text';
      break;
    }

    this.m_PriceText = Text.create(platformPriceText, this.m_GetButton);

    switch(this.config.params.platform) {
      case 'vk':
      this.m_PriceText.ccsf([5]);
      break;
    }

    this.m_PriceText.setCenterPosition(this.m_GetButton.getWidth() / 2, this.m_GetButton.getHeight() / 2 - Camera.sharedCamera().coord(83));

    this.m_Decoration.create().setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 + Camera.sharedCamera().coord(250));
    this.m_GetButton.create().setCenterPosition(this.m_Background.getWidth() / 2, Camera.sharedCamera().coord(80));

    this.m_Text.setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(170));

    this.m_CloseButton.setTouchHandler('onCloseEvent', Moves);
    this.m_GetButton.setTouchHandler('onActionEvent', Moves, {id: purchase.moves});
  },
  onActionEvent: function(params) {
    this.m_GetButton.action = true;
    this.hide(function() {
      Purchase.sharedScreen(this.getParent()).show(params, function(id) {
        switch(id) {
          case purchase.cancel:
          if(Game.instance) {
            Game.instance.finishGame();
          }
          break;
          case purchase.moves:
          if(Game.instance) {
            Game.instance.m_CurrentBlows = 1;

            Game.instance.m_PlayerTurn = false;
            Game.instance.onTurnChange();
          }
          break;
        }
      });
    });
  },
  onShow: function() {
    this._super();

    this.m_GetButton.runAction(
      cc.Sequence.create(
      cc.ScaleTo.create(0.1, 0.8, 1.2),
      cc.ScaleTo.create(0.1, 1.2, 0.8),
      cc.ScaleTo.create(0.1, 1.0, 1.0)
      )
    );
  },
  onHide: function(callback, prepare) {
    this._super(callback, prepare);

    Moves.instance = false;

    if(!prepare && !this.m_GetButton.action) {
      if(Game.instance) {
        Game.instance.finishGame();
      }
    }
  }
});

Moves.instance = false;
Moves.sharedScreen = function(parent) {
  if(Moves.instance) {
    Moves.instance.m_Parent = parent;
  } else {
    Moves.instance = new Moves(parent);
  }

  return Moves.instance;
};
