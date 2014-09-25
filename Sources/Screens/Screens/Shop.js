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

Shop = Screen.extend({
  m_ElementsCount: [11, 11, 11],
  m_Backgrounds: [],
  ctor: function() {
    this._super();

    Shop.instance = this;

    this.name = "Shop screen";

    this.m_Background = Entity.create(Orientation.parse(s_ThirdPartyBackground), this, true);
    this.m_BackgroundDecoration1 = Entity.create(s_BackgroundDecoration1, this);
    this.m_BackgroundDecoration2 = Entity.create(s_BackgroundDecoration1, this);
    this.m_BackButton = Button.create(s_ButtonsSprite, 3, 4, this);
    this.m_WeaponChecker = Entity.create(s_Checker);

    this.m_Wheels = new Array();
    this.m_Shelfs = new Array();
    this.m_Items = new Array();

    for(var i = 0; i < 3; i++) {
      var counter = 20 * i;
      var id = -1;

      this.m_Wheels[i] = new Array();
      this.m_Shelfs[i] = new Array();
      this.m_Items[i] = new Array();

      for(var j = 0; j < 3; j++) {
        this.m_Wheels[i][j] = Entity.create(s_ShopWheel, this);

        this.m_Wheels[i][j].create().setCenterPosition(Camera.sharedCamera().center.x + Camera.sharedCamera().center.x / 2 * (j - 1), Camera.sharedCamera().center.y - Camera.sharedCamera().coord(280) * (i - 1) - Camera.sharedCamera().coord(50));
      }

      this.m_Backgrounds[i] = List.create(1920, 280, 320, 0, this, 1);
      this.m_Backgrounds[i].m_Fixed = true;
      this.m_Backgrounds[i].setListCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(280) * (i - 1) + Camera.sharedCamera().coord(80));

      for(var j = -3; j < 6; j++) {
        this.m_Shelfs[i][j] = TiledEntity.create(s_ShopShelfs, 1, 2, this.m_Backgrounds[i]);

        this.m_Shelfs[i][j].create().setCenterPosition(Camera.sharedCamera().center.x + this.m_Shelfs[i][j].getWidth() * (j - 1) + (j == 0 ? Camera.sharedCamera().coord(230) : (Camera.sharedCamera().coord(230) - Camera.sharedCamera().coord(40) * j)), Camera.sharedCamera().coord(35));

        if(j != 0) {
          this.m_Shelfs[i][j].setCurrentFrameIndex(1);
        } else {
          var category;
          switch(i) { case 0: category = 'weapons'; break; case 1: category = 'birds'; break; case 2: category = 'bonuses'; break; }
          var t = Text.create(category, this.m_Shelfs[i][j]);

          t.setCenterPosition(Camera.sharedCamera().coord(170), this.m_Shelfs[i][j].getHeight() / 2 - Camera.sharedCamera().coord(3));
        }

        this.m_Shelfs[i][j].setZOrder(2);
      }

      var x = -Camera.sharedCamera().coord(40);

      for(var j = 0; j < this.m_ElementsCount[i]; j++) {
        switch(counter) {
          case 0:
          id = references.items.weapon1;
          break;
          case 1:
          id = references.items.weapon2;
          break;
          case 2:
          id = references.items.weapon3;
          break;
          case 3:
          id = references.items.weapon4;
          break;
          case 4:
          id = references.items.weapon5;
          break;
          case 5:
          id = references.items.weapon6;
          break;
          case 6:
          id = references.items.weapon7;
          break;
          case 7:
          id = references.items.weapon8;
          break;
          case 8:
          id = references.items.weapon9;
          break;
          case 9:
          id = references.items.weapon10;
          break;
          case 10:
          id = references.items.weapon11;
          break;

          case 20:
          id = references.items.bird1;
          break;
          case 21:
          id = references.items.bird2;
          break;
          case 22:
          id = references.items.bird3;
          break;
          case 23:
          id = references.items.bird4;
          break;
          case 24:
          id = references.items.bird5;
          break;
          case 25:
          id = references.items.bird6;
          break;
          case 26:
          id = references.items.bird7;
          break;
          case 27:
          id = references.items.bird8;
          break;

          case 40:
          id = references.items.bonus1;
          break;
          case 41:
          id = references.items.bonus2;
          break;
          case 42:
          id = references.items.bonus3;
          break;
          case 43:
          id = references.items.bonus4;
          break;
          case 44:
          id = references.items.bonus5;
          break;
          case 45:
          id = references.items.bonus6;
          break;
          case 46:
          id = references.items.bonus7;
          break;
          case 47:
          id = references.items.bonus8;
          break;
        }

        this.m_Items[i][j] = Button.create(s_ShopItems, 10, 6, this.m_Backgrounds[i]);

        x += this.m_Items[i][j].getHeight() + Camera.sharedCamera().coord(25);

        this.m_Items[i][j].create().setCenterPosition(x, this.m_Items[i][j].getHeight() - Camera.sharedCamera().coord(35));

        this.m_Items[i][j].setCurrentFrameIndex((20 * i) + j);

        this.m_Items[i][j].setZOrder(3);

        var element = this.m_Items[i][j];
        element.number = counter;
        element.reference = id;
        element.category = category;

        counter++;

        element.registerTouchable(true);

        // Under construction
        switch(i) {
          case 1:
          switch(j) {
            case 8:
            case 9:
            case 10:
            this.m_Items[i][j].registerTouchable(false);
            this.m_Items[i][j].setCurrentFrameIndex(59);
            break;
          }
          break;
          case 2:
          switch(j) {
            case 8:
            case 9:
            case 10:
            this.m_Items[i][j].registerTouchable(false);
            this.m_Items[i][j].setCurrentFrameIndex(59);
            break;
          }
          break;
        }

        if(DataManager.sharedManager().get(false, id) < 0 && element.getCurrentFrameIndex() != 59) {
          element.locked = true;
          element.setColor(cc.c3(130, 130, 130));

          element.decorations = [];
          for(var h = 0; h < 2; h++) {
            element.decorations[h] = Entity.create(s_PopupDecoration1, element);

            element.decorations[h].create().setCenterPosition(element.getWidth() / 2, element.getHeight() / 2);
            element.decorations[h].setScale(0.6);
            element.decorations[h].setOpacity(100.0);
            element.decorations[h].runAction(
              cc.RepeatForever.create(
                cc.RotateTo.create(30.0, h == 0 ? 720 : -720),
                false
                )
              );
          }

          element.dock = Entity.create(s_PanelItemsBackground3, element);
          element.dock.text = Text.create(false, element.dock);

          element.dock.create().setCenterPosition(element.getWidth() / 2, Camera.sharedCamera().coord(15));
          element.dock.text.create().setCenterPosition(element.dock.getWidth() / 2, element.dock.getHeight() / 2);
          element.dock.text.ccsf([unlock.items[element.number].price]);

          element.lock = Entity.create(s_Lock, element);
          element.lock.create().setCenterPosition(element.getWidth() / 2, element.getHeight() / 2);
          element.lock.setScale(1.0);
          element.lock.setOpacity(255.0);

          element.key = Entity.create(s_UnlockKey, element);
          element.key.create().setCenterPosition(element.getWidth() / 2, element.getHeight() / 2 - Camera.sharedCamera().coord(20));
          element.key.setOpacity(0.0);

          element.onHover = function() {
            if(!this.locked) return false;

            this.lock.stopAllActions();
            this.key.stopAllActions();

            for(var h = 0; h < 2; h++) {
              this.decorations[h].stopAllActions();
              this.decorations[h].runAction(cc.FadeTo.create(0.1, 200.0));
            }

            this.lock.runAction(cc.FadeTo.create(0.1, 0.0));
            this.key.runAction(cc.FadeTo.create(0.1, 255.0));
            this.lock.runAction(cc.MoveTo.create(0.1, cc.p(element.getWidth() / 2, element.getHeight() / 2 + Camera.sharedCamera().coord(20))));
            this.key.runAction(cc.MoveTo.create(0.1, cc.p(element.getWidth() / 2, element.getHeight() / 2)));

            this.key.setRotation(0);
            this.key.runAction(
              cc.RepeatForever.create(
                cc.Sequence.create(
                  cc.RotateTo.create(0.2, -15),
                  cc.RotateTo.create(0.2, 15),
                  false
                )
              )
            );
          };
          element.onUnHover = function() {
            if(!this.locked) return false;

            this.lock.stopAllActions();
            this.key.stopAllActions();

            for(var h = 0; h < 2; h++) {
              this.decorations[h].stopAllActions();
              this.decorations[h].runAction(cc.FadeTo.create(0.1, 100.0));
            }

            this.lock.runAction(cc.FadeTo.create(0.1, 255.0));
            this.key.runAction(cc.FadeTo.create(0.1, 0.0));
            this.lock.runAction(cc.MoveTo.create(0.1, cc.p(element.getWidth() / 2, element.getHeight() / 2)));
            this.key.runAction(cc.MoveTo.create(0.1, cc.p(element.getWidth() / 2, element.getHeight() / 2 - Camera.sharedCamera().coord(20))));
          };
        }

        element.onTouch = function(e) {
          Button.prototype.onTouch.call(this, e);

          if(this.locked) {
            Lock.sharedScreen().show(this.number, 'item', this);
          } else {
            Item.sharedScreen().show({id: this.reference, reference: this.number, category: this.category});
          }
        };
      }
    }

    this.m_BackgroundDecoration1.create().setCenterPosition(this.m_BackgroundDecoration1.getWidth() / 2, Camera.sharedCamera().height - this.m_BackgroundDecoration1.getHeight() / 2);
    this.m_BackgroundDecoration2.create().setCenterPosition(Camera.sharedCamera().width - this.m_BackgroundDecoration2.getWidth() / 2, this.m_BackgroundDecoration2.getHeight() / 2);
    this.m_BackButton.create().setCenterPosition(Camera.sharedCamera().coord(100), Camera.sharedCamera().coord(100));

    this.m_BackButton.setCurrentFrameIndex(1);

    this.m_BackgroundDecoration2.setScale(-1);

    this.m_BackButton.setTouchHandler('onBackEvent', Shop);
  },
  unlock: function(id, element) {
    DataManager.sharedManager().set(true, element.reference, 0, {
      success: function() {
        element.locked = false;

        element.dock.removeFromParent();

        element.lock.stopAllActions();
        element.key.stopAllActions();
        element.decorations[0].stopAllActions();
        element.decorations[1].stopAllActions();

        element.lock.runAction(
          cc.Sequence.create(
            cc.FadeOut.create(0.2),
            cc.CallFunc.create(element.lock.removeFromParent, element.lock),
            false
          )
        );
        element.key.runAction(
          cc.Sequence.create(
            cc.FadeOut.create(0.2),
            cc.CallFunc.create(element.key.removeFromParent, element.key),
            false
          )
        );
        element.decorations[0].runAction(
          cc.Sequence.create(
            cc.FadeOut.create(0.2),
            cc.CallFunc.create(element.decorations[0].removeFromParent, element.decorations[0]),
            false
          )
        );
        element.decorations[1].runAction(
          cc.Sequence.create(
            cc.FadeOut.create(0.2),
            cc.CallFunc.create(element.decorations[1].removeFromParent, element.decorations[1]),
            false
          )
        );
        element.runAction(cc.TintTo.create(0.2, 255, 255, 255));

        var line = Entity.create(s_ModeUnlockLine, element.getParent());

        line.create().setCenterPosition(element.getCenterX(),element.getCenterY());
        line.setOpacity(0);
        line.setScaleY(5);
        line.setZOrder(500);
        line.setScaleX((Camera.sharedCamera().width / line.getWidth()) * 2);
        line.runRecognizeAction(cc.CallFunc.create(line.removeFromParent, line), [{
          name: 'fade',
          time: 0.2,
          value: 255.0
        }, {
          name: 'fade',
          time: 0.5,
          value: 0.0
        }]);

        Sound.sharedSound().play(s_SoundSlash);
      }
    });
  },
  onBackEvent: function() {
    if(Game.network) {
      ScreenManager.sharedManager().replace(Mode);
    } else {
      ScreenManager.sharedManager().back();
    }
  },
  onShow: function() {
    this._super();

    MenuPanel.sharedScreen(this).show();

    this.selectWeapon();
  },
  onHide: function() {
    this._super();
  },
  onExitTransitionDidStart: function() {
    MenuPanel.sharedScreen(this).hide();

    this._super();
  },
  selectWeapon: function() {
    var weapon = this.m_Items[0][DataManager.sharedManager().get(false, references.info.weapon) - 1];

    this.m_WeaponChecker.removeFromParent();
    weapon.addChild(this.m_WeaponChecker);

    this.m_WeaponChecker.create().setCenterPosition(weapon.getWidth() - Camera.sharedCamera().coord(24), Camera.sharedCamera().coord(24));
  },
  updateWheelsState: function() {
    for(var i = 0; i < 3; i++) {
      for(var j = 0; j < 3; j++) {
        this.m_Wheels[i][j].setRotation(this.m_Backgrounds[i].m_Background.getPosition().x);
      }
    }
  },
  update: function(time) {
    this._super(time);

    this.updateWheelsState();
  },
  onKeyDown: function(e) {
    switch(e) {
      case 27:
        if(Item.sharedScreen().getParent()) {
          Item.sharedScreen().hide();
        } else if(Bought.sharedScreen().getParent()) {
          Bought.sharedScreen().hide();
        } else {
          ScreenManager.sharedManager().back();
        }
      break;
    }
  }
});

Shop.notifyHandler = function(button, time) {
  var count = 0;
  var coins = {
    gold: DataManager.instance.get(false, references.coins.gold),
    silver: DataManager.instance.get(false, references.coins.silver)
  };
  properties.items.forEach(function(item) {
    if(item.price.gold > 0 && item.price.silver > 0) {
      if(coins.gold >= item.price.gold && coins.silver >= item.price.silver) {
        count++;
      }
    }
  });

  if(count > 0) {
    button.showNotifier(count);
  } else {
    button.hideNotifier();
  }
};
Shop.instance = false;
Shop.sharedScreen = function() {
  return Shop.instance ? Shop.instance : new Shop();
};
