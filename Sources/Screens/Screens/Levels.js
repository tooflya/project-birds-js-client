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
    {x: 924.734693877551, y: -9571.297959183674},
    {x: 654.3673469387755, y: -9536.032653061226},
    {x: 611.2653061224489, y: -9342.073469387755},
    {x: 832.6530612244898, y: -9287.216326530612},
    {x: 1067.7551020408164, y: -9316.604081632653},
    {x: 1300.8979591836735, y: -9287.216326530612},
    {x: 1328.3265306122448, y: -9063.869387755101},
    {x: 977.6326530612245, y: -9065.502040816327},
    {x: 722.9387755102041, y: -9069.420408163265},
    {x: 517.2244897959183, y: -8934.236734693877},
    {x: 672, y: -8777.502040816327},
    {x: 916.8979591836735, y: -8826.481632653062},
    {x: 1259.7551020408164, y: -8826.481632653062},
    {x: 1230.3673469387754, y: -8614.563265306122},
    {x: 983.5102040816327, y: -8606.726530612246},
    {x: 699.4285714285714, y: -8594.971428571429},
    {x: 719.0204081632653, y: -8391.216326530614},
    {x: 952.1632653061224, y: -8402.971428571429},
    {x: 1202.938775510204, y: -8410.644897959184},
    {x: 1289.142857142857, y: -8202.971428571429},
    {x: 879.6734693877551, y: -8198.889795918369},
    {x: 619.1020408163265, y: -8183.216326530613},
    {x: 601.469387755102, y: -7971.461224489796},
    {x: 924.734693877551, y: -7979.134693877551},
    {x: 1240.1632653061224, y: -7955.787755102041},
    {x: 1208.8163265306123, y: -7706.808163265307},
    {x: 838.530612244898, y: -7771.461224489796},
    {x: 640.6530612244898, y: -7606.889795918368},
    {x: 1065.795918367347, y: -7552.032653061225},
    {x: 1199.0204081632653, y: -7279.379591836735},
    {x: 950.204081632653, y: -7103.632653061214},
    {x: 615.1836734693877, y: -7011.551020408153},
    {x: 442.7755102040816, y: -6760.612244897949},
    {x: 568.1632653061224, y: -6511.30612244897},
    {x: 858.1224489795918, y: -6688.122448979581},
    {x: 1140.2448979591836, y: -6727.306122448969},
    {x: 1375.3469387755101, y: -6556.857142857132},
    {x: 1324.408163265306, y: -6362.571428571418},
    {x: 1079.5102040816325, y: -6223.469387755092},
    {x: 754.2857142857142, y: -6160.775510204072},
    {x: 501.55102040816325, y: -6101.673469387745},
    {x: 262.53061224489795, y: -5991.632653061213},
    {x: 101.87755102040816, y: -5778.408163265297},
    {x: 327.18367346938777, y: -5572.367346938764},
    {x: 574.0408163265306, y: -5711.632653061211},
    {x: 848.3265306122448, y: -5764.530612244885},
    {x: 1126.5306122448978, y: -5697.918367346925},
    {x: 1402.7755102040817, y: -5742.979591836721},
    {x: 1675.1020408163265, y: -5674.081632653047},
    {x: 1716.2448979591836, y: -5399.795918367332},
    {x: 1610.4489795918366, y: -5141.1836734693725},
    {x: 1312.6530612244899, y: -5186.244897959169},
    {x: 1061.8775510204082, y: -5372.36734693876},
    {x: 811.1020408163265, y: -5243.061224489781},
    {x: 556.4081632653061, y: -5107.551020408148},
    {x: 321.3061224489796, y: -5027.2244897959035},
    {x: 141.0612244897959, y: -4833.265306122435},
    {x: 368.3265306122449, y: -4656.775510204067},
    {x: 668.0816326530612, y: -4715.551020408149},
    {x: 1016.8163265306122, y: -4788.0408163265165},
    {x: 1255.8367346938776, y: -4662.653061224476},
    {x: 1447.8367346938776, y: -4411.714285714272},
    {x: 1244.0816326530612, y: -4292.040816326516},
    {x: 916.8979591836735, y: -4215.63265306121},
    {x: 607.3469387755102, y: -4317.510204081618},
    {x: 286.0408163265306, y: -4225.265306122435},
    {x: 150.85714285714286, y: -4011.7142857142717},
    {x: 352.65306122448976, y: -3852.6938775510066},
    {x: 611.2653061224489, y: -3860.530612244884},
    {x: 956.0816326530612, y: -3856.6122448979454},
    {x: 1271.5102040816325, y: -3833.1020408163126},
    {x: 1483.1020408163265, y: -3962.4081632652924},
    {x: 1733.8775510204082, y: -3972.2040816326394},
    {x: 1812.2448979591836, y: -3582.326530612231},
    {x: 1630.0408163265306, y: -3495.7959183673324},
    {x: 1338.1224489795918, y: -3405.6734693877406},
    {x: 1065.795918367347, y: -3380.204081632639},
    {x: 777.7959183673469, y: -3364.5306122448837},
    {x: 468.2448979591837, y: -3358.6530612244756},
    {x: 174.3673469387755, y: -3235.224489795904},
    {x: 366.3673469387755, y: -3060.530612244884},
    {x: 615.1836734693877, y: -2956.6938775510066},
    {x: 924.734693877551, y: -2964.530612244884},
    {x: 1159.8367346938776, y: -3054.653061224476},
    {x: 1483.1020408163265, y: -3021.020408163252},
    {x: 1661.3877551020407, y: -2852.8571428571295},
    {x: 1653.5510204081631, y: -2539.0612244897825},
    {x: 1530.1224489795918, y: -2394.081632653048},
    {x: 1267.5918367346937, y: -2339.0612244897825},
    {x: 950.204081632653, y: -2378.24489795917},
    {x: 677.8775510204082, y: -2525.1836734693743},
    {x: 436.89795918367344, y: -2487.9591836734558},
    {x: 170.44897959183672, y: -2284.2040816326394},
    {x: 336.9795918367347, y: -2035.2244897959044},
    {x: 556.4081632653061, y: -1909.3469387754967},
    {x: 809.1428571428571, y: -1938.8979591836599},
    {x: 1085.3877551020407, y: -1964.2040816326396},
    {x: 1347.9183673469388, y: -1964.367346938762},
    {x: 1583.0204081632653, y: -1872.2857142857008},
    {x: 1739.7551020408164, y: -1764.5306122448844},
    {x: 1747.5918367346937, y: -1482.2448979591702},
    {x: 1526.204081632653, y: -1315.5510204081495},
    {x: 1251.9183673469388, y: -1231.3061224489659},
    {x: 965.8775510204082, y: -1197.6734693877413},
    {x: 811.1020408163265, y: -1352.448979591823},
    {x: 587.7551020408163, y: -1481.689795918354},
    {x: 286.0408163265306, y: -1436.6285714285582},
    {x: 119.51020408163265, y: -1230.9142857142724},
    {x: 197.87755102040816, y: -954.5387755101902},
    {x: 354.61224489795916, y: -817.395918367333},
    {x: 607.3469387755102, y: -836.987755102027},
    {x: 883.5918367346939, y: -809.5591836734555},
    {x: 1106.938775510204, y: -811.518367346925},
    {x: 1344, y: -870.2938775510065},
    {x: 1612.408163265306, y: -866.3755102040677},
    {x: 1743.673469387755, y: -644.6612244897817},
    {x: 1575.1836734693877, y: -405.47755102039406},
    {x: 1318.5306122448978, y: -303.7959183673329},
    {x: 1059.9183673469388, y: -360.6122448979451},
    {x: 769.9591836734694, y: -440.93877551019006},
    {x: 450.61224489795916, y: -460.5306122448839},
    {x: 174.3673469387755, y: -311.6326530612105},
    {x: 270.3673469387755, y: -29.34693877549621},
    {x: 542.6938775510204, y: 10.32653061225878},
    {x: 783.6734693877551, y: 139.63265306123836},
    {x: 1067.7551020408164, y: 235.63265306123836},
    {x: 1295.0204081632653, y: 192.53061224491185},
    {x: 1551.6734693877552, y: 243.46938775511592},
    {x: 1702.5306122448978, y: 439.3877551020547},
    {x: 1682.938775510204, y: 703.3469387755102},
    {x: 1428.2448979591836, y: 795.4285714285714},
    {x: 1179.4285714285713, y: 769.9591836734694},
    {x: 973.7142857142857, y: 724.8979591836735},
    {x: 621.0612244897959, y: 595.5918367346939},
    {x: 333.0612244897959, y: 617.1428571428571},
    {x: 105.79591836734694, y: 875.7551020408163}
  ],
  ctor: function() {
    this._super();

    Levels.instance = this;

    this.name = "Levels screen";

    this.m_List = List.create(1920, 1080, 0, 1080 * 3, this);
    this.m_Background1 = MapBackground.create(s_MapBackground10, this.m_List);
    this.m_Background2 = MapBackground.create(s_MapBackground9, this.m_List);
    this.m_Background3 = MapBackground.create(s_MapBackground8, this.m_List);
    this.m_Background4 = MapBackground.create(s_MapBackground7, this.m_List);
    this.m_Background5 = MapBackground.create(s_MapBackground6, this.m_List);
    this.m_Background6 = MapBackground.create(s_MapBackground5, this.m_List);
    this.m_Background7 = MapBackground.create(s_MapBackground4, this.m_List);
    this.m_Background8 = MapBackground.create(s_MapBackground3, this.m_List);
    this.m_Background9 = MapBackground.create(s_MapBackground2, this.m_List);
    this.m_Background10 = MapBackground.create(s_MapBackground1, this.m_List);
    this.m_BackButton = Button.create(s_ButtonsSprite, 3, 4, this);

    this.m_Icons = EntityManager.create(this.m_IconsCoordinates.length, MapIcon.create(), this.m_List, 101);

    this.m_BackButton.create().setCenterPosition(Camera.sharedCamera().coord(100), Camera.sharedCamera().coord(100));
    this.m_Background10.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y - Camera.sharedCamera().height * 9);
    this.m_Background9.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y - Camera.sharedCamera().height * 8);
    this.m_Background8.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y - Camera.sharedCamera().height * 7);
    this.m_Background7.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y - Camera.sharedCamera().height * 6);
    this.m_Background6.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y - Camera.sharedCamera().height * 5);
    this.m_Background5.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y - Camera.sharedCamera().height * 4);
    this.m_Background4.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y - Camera.sharedCamera().height * 3);
    this.m_Background3.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y - Camera.sharedCamera().height * 2);
    this.m_Background2.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y - Camera.sharedCamera().height * 1);
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

    var parallax = Entity.create(s_Cloud1);
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

    for(var i = 0; i < this.m_IconsCoordinates.length; i++) {
      var element = this.m_Icons.create();

      element.setCenterPosition(Camera.sharedCamera().coord(this.m_IconsCoordinates[i].x), Camera.sharedCamera().coord(this.m_IconsCoordinates[i].y));
      if(element.isRegisterTouchable()) {
        element.registerTouchable(false);
      }

      if(!DataManager.sharedManager().get(false, references.levels.levels[i])) {
        element.locked = true;

        for(var h = 0; h < 2; h++) {
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

        element.m_Text.setVisible(false);
        element.setCurrentFrameIndex(5);
      } else {
        element.m_Text.setVisible(true);
        if(!element.isRegisterTouchable()) {
          element.registerTouchable(true);
        }

        for(var h = 0; h < 2; h++) {
          element.decorations[h].create().setCenterPosition(element.getWidth() / 2, element.getHeight() / 2);
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
  },
  onExit: function() {
    this._super();

    this.m_Icons.clear();
  },
  /*onTouch: function(e) {
    if(!this.m_WasDraged) {
      this._super(e);
      var element = this.m_Icons.create();

      element.setCenterPosition(e._point.x, e._point.y - Levels.instance.m_List.m_Background.getPosition().y);
      element.registerTouchable(true);
    } else {
      this.m_WasDraged = false;
    }
  },*/
  onShow: function() {
    this._super();

    MenuPanel.sharedScreen(this).show();

    Camera.sharedCamera().setDesignResolutionSize(false, false, false, false, true);

    Tooflya.api.call('level.get', false, {
      success: function(data) {
        var element = this.m_Icons.get(data.level - 1);

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

        this.m_List.setCenterPosition(0, -element.getCenterY() + Camera.sharedCamera().center.x / 2 - Camera.sharedCamera().margin.y / 2);
      }.bind(this)
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
  },
  onEnterTransitionDidFinish: function() {
    this._super();
  },
  onCameraSizeChanged: function(e, x, y) {
    this.updateListPosition(x, y);
  },
  updateListPosition: function(x, y) {
    Entity.prototype.setCenterPosition.call(this.m_List, Entity.prototype.getCenterX.call(this.m_List) - x / 2, Entity.prototype.getCenterY.call(this.m_List) - y / 2);
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

    this.decorations = [];
    for(var h = 0; h < 2; h++) {
      this.decorations[h] = Entity.create(s_PopupDecoration1, this);
      this.decorations[h].setZOrder(-1);
    }
  },
  onCreate: function() {
    this._super();

    this.m_Text.setCenterPosition(this.getWidth() / 2, this.getHeight() / 2 + Camera.sharedCamera().coord(8));
    this.m_Text.ccsf([this.getID() + 1]);
  },
  onDestroy: function() {
    this._super();

    for(var h = 0; h < 2; h++) {
      this.decorations[h].destroy();
    }
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
  visit: function() {
    if(cc.rectIntersectsRect(this.getBoundingBoxToWorld(), cc.rect(-Camera.sharedCamera().margin.x, -Camera.sharedCamera().margin.y, Camera.sharedCamera().width + Camera.sharedCamera().margin.x, Camera.sharedCamera().height + Camera.sharedCamera().margin.y))) {
      this._super();
    }
  },
  deepCopy: function() {
    return MapIcon.create();
  }
});

MapBackground = Entity.extend({
  ctor: function(filename, parent) {
    this._super(filename, parent);
  },
  visit: function() {
    if(cc.rectIntersectsRect(this.getBoundingBoxToWorld(), cc.rect(-Camera.sharedCamera().margin.x, -Camera.sharedCamera().margin.y, Camera.sharedCamera().width + Camera.sharedCamera().margin.x, Camera.sharedCamera().height + Camera.sharedCamera().margin.y))) {
      this._super();
    }
  }
});

MapIcon.create = function() {
  return new MapIcon();
};

MapBackground.create = function(filename, parent) {
  return new MapBackground(filename, parent);
};
