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
    this.m_BackButton = Button.create(s_ButtonsSprite, 3, 3, this);

    Item.sharedScreen(this).prepare();
    Bought.sharedScreen(this).prepare();

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

        this.m_Items[i][j].setTouchHandler('show', Item, {id: id, reference: counter, category: category});
        this.m_Items[i][j].setZOrder(3);

        counter++;

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
      }
    }

    this.m_BackgroundDecoration1.create().setCenterPosition(this.m_BackgroundDecoration1.getWidth() / 2, Camera.sharedCamera().height - this.m_BackgroundDecoration1.getHeight() / 2);
    this.m_BackgroundDecoration2.create().setCenterPosition(Camera.sharedCamera().width - this.m_BackgroundDecoration2.getWidth() / 2, this.m_BackgroundDecoration2.getHeight() / 2);
    this.m_BackButton.create().setCenterPosition(Camera.sharedCamera().coord(100), Camera.sharedCamera().coord(100));

    this.m_BackButton.setCurrentFrameIndex(1);

    this.m_BackgroundDecoration2.setScale(-1);

    this.m_BackButton.setTouchHandler('onBackEvent', Shop);
  },
  updateWheelsState: function() {
    for(var i = 0; i < 3; i++) {
      for(var j = 0; j < 3; j++) {
        this.m_Wheels[i][j].setRotation(this.m_Backgrounds[i].m_Background.getPosition().x);
      }
    }
  },
  onBackEvent: function() {
    ScreenManager.sharedManager().back();
  },
  onShow: function() {
    this._super();

    MenuPanel.sharedScreen(this).show();
  },
  onHide: function() {
    this._super();

    Shop.instance = false;
    MenuPanel.instance = false;
  },
  onExitTransitionDidStart: function() {
    MenuPanel.sharedScreen(this).hide();

    this._super();
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

Shop.instance = false;
Shop.sharedScreen = function() {
  return Shop.instance ? Shop.instance : new Shop();
};
