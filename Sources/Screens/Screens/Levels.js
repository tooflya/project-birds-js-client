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

Levels = Screen.extend({
  m_IconsCoordinates: [
    {x: 924.734693877551, y: -2011.2979591836736},
    {x: 654.3673469387755, y: -1976.0326530612247},
    {x: 611.2653061224489, y: -1782.0734693877544},
    {x: 832.6530612244898, y: -1727.2163265306124},
    {x: 1067.7551020408164, y: -1756.6040816326533},
    {x: 1300.8979591836735, y: -1727.2163265306124},
    {x: 1328.3265306122448, y: -1503.8693877551023},
    {x: 977.6326530612245, y: -1505.5020408163268},
    {x: 722.9387755102041, y: -1509.4204081632656},
    {x: 517.2244897959183, y: -1374.236734693878},
    {x: 672, y: -1217.5020408163268},
    {x: 916.8979591836735, y: -1266.4816326530615},
    {x: 1259.7551020408164, y: -1266.4816326530615},
    {x: 1230.3673469387754, y: -1054.563265306123},
    {x: 983.5102040816327, y: -1046.7265306122456},
    {x: 699.4285714285714, y: -1034.9714285714292},
    {x: 719.0204081632653, y: -831.2163265306128},
    {x: 952.1632653061224, y: -842.9714285714292},
    {x: 1202.938775510204, y: -850.6448979591842},
    {x: 1289.142857142857, y: -642.9714285714291},
    {x: 879.6734693877551, y: -638.8897959183679},
    {x: 619.1020408163265, y: -623.2163265306128},
    {x: 601.469387755102, y: -411.46122448979645},
    {x: 924.734693877551, y: -419.13469387755157},
    {x: 1240.1632653061224, y: -395.78775510204133},
    {x: 1208.8163265306123, y: -146.8081632653068},
    {x: 838.530612244898, y: -211.46122448979648},
    {x: 640.6530612244898, y: -46.88979591836791},
    {x: 1065.795918367347, y: 7.967346938774946},
    {x: 1199.0204081632653, y: 280.62040816326464}
  ],
  ctor: function() {
    this._super();

    Levels.instance = this;

    this.name = "Levels screen";

    this.m_List = List.create(1920, 1080, 0, 1080 * 3, this);
    this.m_Background1 = Entity.create(s_MapBackground3, this.m_List);
    this.m_Background2 = Entity.create(s_MapBackground2, this.m_List);
    this.m_Background3 = Entity.create(s_MapBackground1, this.m_List);
    this.m_BackButton = Button.create(s_ButtonsSprite, 3, 4, this);

    this.m_Icons = EntityManager.create(this.m_IconsCoordinates.length, MapIcon.create(), this.m_List, 101);

    this.m_BackButton.create().setCenterPosition(Camera.sharedCamera().coord(100), Camera.sharedCamera().coord(100));
    this.m_Background3.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y - Camera.sharedCamera().height * 2);
    this.m_Background2.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y - Camera.sharedCamera().height);
    this.m_Background1.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y);
    this.m_StarsCounterArea = Entity.create(s_LevelStarsCounterArea, this);
    this.m_StarsCounterArea.create().setCenterPosition(Camera.sharedCamera().width - Camera.sharedCamera().coord(160), Camera.sharedCamera().coord(70));
    this.m_StarsCounterArea.text = Text.create('total-stars', this.m_StarsCounterArea);
    this.m_StarsCounterArea.text.create().setCenterPosition(this.m_StarsCounterArea.getWidth() / 2 + Camera.sharedCamera().coord(10), this.m_StarsCounterArea.getHeight() / 2);
    this.m_StarsCounterArea.text.setColor(cc.c3(114.0, 80.0, 9.0));
    this.m_StarsCounterArea.text.disableShadow();
    this.m_StarsCounterArea.text.ccsf([0, 90]);
    this.m_StarsCounterArea.setZOrder(200);
    this.m_BackButton.setCurrentFrameIndex(1);
    this.m_BackButton.setZOrder(200);

    var parallax = Entity.create(s_LevelsMapCloud);
    this.m_Cloud = ParallaxEntity.create(parallax, {
      x: 10,
      y: 0
    }, {
      x: Camera.sharedCamera().center.x,
      y: Camera.sharedCamera().height - parallax.getHeight() / 2 + Camera.sharedCamera().coord(300)
    }, this);
    this.m_Cloud.setZOrder(200);

    this.m_List.fixed = true;
    this.m_List.strict = true;

    for(var i = 0; i < this.m_IconsCoordinates.length; i++) {
      var element = this.m_Icons.create();

      element.setCenterPosition(Camera.sharedCamera().coord(this.m_IconsCoordinates[i].x), Camera.sharedCamera().coord(this.m_IconsCoordinates[i].y));
      element.registerTouchable(false);

      if(!DataManager.sharedManager().get(false, references.levels.levels[i])) {
        element.locked = true;

        element.decorations = [];
        for(var h = 0; h < 2; h++) {
          element.decorations[h] = Entity.create(s_PopupDecoration1, this.m_List);

          element.decorations[h].create().setCenterPosition(element.getCenterX(), element.getCenterY());
          element.decorations[h].setScale(0.6);
          element.decorations[h].setOpacity(100.0);
          element.decorations[h].setZOrder(99);
          element.decorations[h].runAction(
            cc.RepeatForever.create(
              cc.RotateTo.create(30.0, h == 0 ? 720 : -720),
              false
              )
            );
        }

        element.m_Text.removeFromParent();
        element.setCurrentFrameIndex(5);
      } else {
        element.registerTouchable(true);

        element.decorations = [];
        for(var h = 0; h < 2; h++) {
          element.decorations[h] = Entity.create(s_PopupDecoration1, this.m_List);

          element.decorations[h].create().setCenterPosition(element.getCenterX(), element.getCenterY());
          element.decorations[h].setZOrder(99);
          element.decorations[h].setScale(0);
          element.decorations[h].runAction(
            cc.RepeatForever.create(
              cc.RotateTo.create(30.0, h == 0 ? 720 : -720),
              false
            )
          );
        }

        element.setCurrentFrameIndex(DataManager.sharedManager().get(false, references.levels.levels[i]) - 1);
      }
    }

    this.m_BackButton.setTouchHandler('onBackEvent', Levels);
  },
  onBackEvent: function() {
    ScreenManager.sharedManager().replace(Mode);
  },
  onSelected: function(data) {
    Game.level = data.id ? data.id : Game.level;
    Level.sharedScreen(this).show();
  },
  onShowStarsInfo: function() {
  },
  onLevelItemChanged: function() {
  },
  onEnter: function() {
    this._super();
  },
  onExit: function() {
    this._super();
  },
  onShow: function() {
    this._super();

    MenuPanel.sharedScreen(this).show();

    Tooflya.api.call('level.get', false, {
      success: function(data) {
        var element = Levels.instance.m_Icons.get(data.level - 1);

        element.setCurrentFrameIndex(4);

        for(var h = 0; h < 2; h++) {
          element.decorations[h].runAction(
            cc.Sequence.create(
              cc.DelayTime.create(1.5),
              cc.FadeIn.create(0.4),
              false
            )
          );
          element.decorations[h].runAction(
            cc.Sequence.create(
              cc.DelayTime.create(1.5),
              cc.ScaleTo.create(0.2, 1.2),
              cc.ScaleTo.create(0.1, 0.8),
              cc.ScaleTo.create(0.1, 1.0),
              false
            )
          );
        }
      }
    });

    Tooflya.api.call('level.stars', false, {
      success: function(data) {
        Levels.instance.m_StarsCounterArea.text.ccsf([data.count, 90]);
      }
    });
  },
  onHide: function() {
    this._super();
  },
  onExitTransitionDidStart: function() {
    MenuPanel.sharedScreen(this).hide();

    this._super();

    Camera.sharedCamera().setDesignResolutionSize();
  },
  onEnterTransitionDidFinish: function() {
    this._super();

    Camera.sharedCamera().setDesignResolutionSize(false, false, false, false, true);
  },
  update: function(time) {
    this._super(time);
  },
  onKeyDown: function(e) {
    switch(e) {
      case 27:
      ScreenManager.sharedManager().back();
      break;
    }
  }
});

Levels.instance = false;
Levels.sharedScreen = function() {
  return Levels.instance ? Levels.instance : new Levels();
};

MapIcon = Button.extend({
  ctor: function() {
    this._super(s_LevelsMapIcons, 6, 1);

    this.m_Text = Text.create('level', this);
    this.m_Text.setText('level');

    this.registerTouchable(true);
  },
  onCreate: function() {
    this._super();

    this.m_Text.setCenterPosition(this.getWidth() / 2, this.getHeight() / 2 + Camera.sharedCamera().coord(5));
    this.m_Text.ccsf([this.getID() + 1]);
  },
  onHover: function() {
  },
  onUnHover: function() {
  },
  onTouch: function() {
    this._super();

    Levels.instance.onSelected({
      id: this.getID() + 1
    });
  },
  /*onMouseDragged: function(touch, e) {
    if(this.containsTouchLocation(touch) && this.m_WasTouched) {
      this.setCenterPosition(touch._point.x, touch._point.y - Levels.instance.m_List.m_Background.getPosition().y);
    }
  },
  onMouseDown: function(e) {
    var a =  this._super(e);

    if(a ) Touchable.list = true;

    return a;
  },
  onMouseUp: function(e, force) {
    this.m_WasTouched = false;
  },*/
  update: function(time) {
    this._super();
  },
  deepCopy: function() {
    return MapIcon.create();
  }
});

MapIcon.create = function() {
  var entity = new MapIcon();

  return entity;
};
