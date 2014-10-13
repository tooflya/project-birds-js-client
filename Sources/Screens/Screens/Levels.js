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
    {x: 1138.2857142857142, y: -7711.787755102004},
    {x: 805.2244897959183, y: -7774.4816326530245},
    {x: 619.1020408163265, y: -7566.808163265269},
    {x: 1065.795918367347, y: -7552.032653061225},
    {x: 1199.0204081632653, y: -7279.379591836735},
    {x: 846.3673469387755, y: -7088.571428571435},
    {x: 525.0612244897959, y: -6998.4489795918425},
    {x: 133.22448979591837, y: -6712.408163265312},
    {x: 650.4489795918367, y: -6575.2653061224555},
    {x: 934.530612244898, y: -6696.5714285714375},
    {x: 1445.8775510204082, y: -6825.877551020418},
    {x: 1716.2448979591836, y: -6665.224489795928},
    {x: 1532.0816326530612, y: -6178.857142857149},
    {x: 956.0816326530612, y: -6227.836734693883},
    {x: 613.2244897959183, y: -6194.530612244904},
    {x: 397.7142857142857, y: -5972.424489795917},
    {x: 413.3877551020408, y: -5682.857142857146},
    {x: 630.8571428571429, y: -5582.938775510208},
    {x: 873.7959183673469, y: -5635.836734693881},
    {x: 1110.857142857143, y: -5712.244897959187},
    {x: 1345.9591836734694, y: -5706.367346938779},
    {x: 1465.469387755102, y: -5363.510204081636},
    {x: 1263.6734693877552, y: -5230.122448979596},
    {x: 1024.6530612244899, y: -5206.612244897963},
    {x: 740.5714285714286, y: -5224.244897959187},
    {x: 442.7755102040816, y: -5228.163265306126},
    {x: 382.0408163265306, y: -4918.1224489795895},
    {x: 1110.857142857143, y: -4875.020408163263},
    {x: 1371.4285714285713, y: -4943.591836734691},
    {x: 1516.408163265306, y: -4704.571428571427},
    {x: 1240.1632653061224, y: -4504.571428571427},
    {x: 877.7142857142857, y: -4492.81632653061},
    {x: 564.2448979591836, y: -4473.061224489795},
    {x: 346.7755102040816, y: -4234.040816326529},
    {x: 576, y: -4075.3469387755094},
    {x: 822.8571428571429, y: -3941.0775510204053},
    {x: 1026.6122448979593, y: -3841.1591836734665},
    {x: 1228.408163265306, y: -3746.595918367283},
    {x: 1369.469387755102, y: -3602.1387755102014},
    {x: 1152, y: -3463.0367346938747},
    {x: 1003.1020408163265, y: -3305.453061224427},
    {x: 769.9591836734694, y: -3195.7387755101413},
    {x: 544.6530612244898, y: -3121.289795918304},
    {x: 681.7959183673469, y: -2950.6775510203447},
    {x: 871.8367346938775, y: -2819.7714285714283},
    {x: 1093.2244897959183, y: -2775.983673469326},
    {x: 1304.8163265306123, y: -2715.2489795917745},
    {x: 1510.5306122448978, y: -2603.57551020402},
    {x: 1332.2448979591836, y: -2513.453061224428},
    {x: 1110.857142857143, y: -2427.2489795917745},
    {x: 889.469387755102, y: -2455.0367346938774},
    {x: 630.8571428571429, y: -2405.5346938774887},
    {x: 442.7755102040816, y: -2266.26938775504},
    {x: 646.530612244898, y: -2152.6367346938155},
    {x: 903.1836734693877, y: -2107.5755102040193},
    {x: 1177.469387755102, y: -2122.922448979529},
    {x: 1404.734693877551, y: -2009.2897959183042},
    {x: 1291.1020408163265, y: -1795.7387755101408},
    {x: 883.5918367346939, y: -1729.5510204080936},
    {x: 448.65306122448976, y: -1523.8040816325833},
    {x: 813.0612244897959, y: -1370.8571428570733},
    {x: 1232.3265306122448, y: -1155.1836734693184},
    {x: 879.6734693877551, y: -910.285714285645},
    {x: 532.8979591836735, y: -675.0204081631962},
    {x: 899.2653061224489, y: -449.3877551019712},
    {x: 995.2653061224489, y: -198.4489795917677}
  ],
  ctor: function() {
    this._super();

    Levels.instance = this;

    this.name = "Levels screen";

    this.m_List = List.create(1920, 1080, 0, 1080 * 3, this);
    this.m_Background1 = MapBackground.create(LanguagesManager.sharedManager().parse(s_MapBackground10), this.m_List);
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
    this.m_UserBackground = Entity.create(s_MapUserBackground1, this.m_List);

    this.m_Icons = EntityManager.create(this.m_IconsCoordinates.length, MapIcon.create(), this.m_List, 101);

    this.m_BackButton.create().setCenterPosition(Camera.sharedCamera().coord(100), Camera.sharedCamera().coord(100));
    this.m_Background10.create();
    this.m_Background9.create();
    this.m_Background8.create();
    this.m_Background7.create();
    this.m_Background6.create();
    this.m_Background5.create();
    this.m_Background4.create();
    this.m_Background3.create();
    this.m_Background2.create();
    this.m_Background1.create();
    this.m_UserBackground.create().setZOrder(200);
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

    this.m_List.fixed = true;
    this.m_List.strict = true;

    InternetEntity.create(DataManager.instance.get(false, references.info.personal.photo), this.m_UserBackground, function(entity) {
      entity.create().setCenterPosition(this.m_UserBackground.getWidth() / 2 - Camera.sharedCamera().coord(5), this.m_UserBackground.getHeight() / 2 - Camera.sharedCamera().coord(1));
      entity.setScale(0.8);
    }.bind(this));

    this.m_BackgroundHolder = Background.create(this.m_List);

    this.m_BackButton.setTouchHandler('onBackEvent', Levels);
  },
  placeLevel: function() {
    Tooflya.api.call('level.get', false, {
      success: function(data) {
        Game.level = data.level;

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

        this.m_UserBackground.setCenterPosition(element.getCenterX() - Camera.sharedCamera().coord(130), element.getCenterY());
        this.m_List.setCenterPosition(0, -element.getCenterY() + Camera.sharedCamera().center.x / 2 - Camera.sharedCamera().margin.y / 2);
      }.bind(this)
    });
  },
  placeStars: function() {
    Tooflya.api.call('level.stars', false, {
      success: function(data) {
        this.m_StarsCounterArea.text.ccsf([data.count, 90]);

        this.useCallbacks('onscreenready');
      }.bind(this)
    });
  },
  placeFriends: function() {
    var uids = [];
    FriendsManager.sharedInstance().getAppFriends().forEach(function(friend) {
      uids.push(friend.uid);
    });

    Tooflya.api.call('storage.get', {
      uids: uids,
      key: references.levels.current
    }, {
      success: function(data) {
        data.forEach(function(d) {
          FriendsManager.sharedInstance().getAppFriends().forEach(function(friend) {
            if(friend.uid == d.uid) {
              friend.level = d.storage[0];
            }
          });
        });

        FriendsManager.sharedInstance().getAppFriends().forEach(function(friend) {
          if(friend.level > 0) {
            var holder = Holder.create(this.m_BackgroundHolder);
            var element = this.m_Icons.get(friend.level - 1);

            holder.create().setCenterPosition(element.getCenterX() - Camera.sharedCamera().coord(130), element.getCenterY());

            InternetEntity.create(friend.photo_medium, holder, function(entity) {
              entity.create().setCenterPosition(holder.getWidth() / 2 - Camera.sharedCamera().coord(5), holder.getHeight() / 2 - Camera.sharedCamera().coord(1));
              entity.setScale(0.8);
            });
          }
        }.bind(this));
      }.bind(this)
    });
  },
  onBackEvent: function() {
    Camera.sharedCamera().setDesignResolutionSize();

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
  onLevelBack: function() {
    var elements = {
      previous: false,
      current: false
    };

    elements.current = this.m_Icons.get(Game.level - 1);
    elements.previous = this.m_Icons.get(Game.level - 2);

    elements.current.locked = true;

    for(var h = 0; h < 2; h++) {
      elements.current.decorations[h].create().setCenterPosition(elements.current.getWidth() / 2, elements.current.getHeight() / 2);
      elements.current.decorations[h].setScale(0.6);
      elements.current.decorations[h].setOpacity(100.0);
      elements.current.decorations[h].runAction(
        cc.RepeatForever.create(
          cc.RotateTo.create(30.0, h == 0 ? 720 : -720),
          false
          )
        );
    }

    elements.current.m_Text.setVisible(false);
    elements.current.setCurrentFrameIndex(5);

    this.m_UserBackground.setCenterPosition(elements.previous.getCenterX() - Camera.sharedCamera().coord(130), elements.previous.getCenterY());
    this.m_UserBackground.runAction(
      cc.Sequence.create(
        cc.DelayTime.create(0.5),
        cc.MoveTo.create(0.5, cc.p(elements.current.getCenterX() - Camera.sharedCamera().coord(130), elements.current.getCenterY())),
        cc.CallFunc.create(this.onLevelForward, this, elements),
        false
      )
    );

    new PausableTimeout(function() {
      this.onSelected({
        id: Game.level
      });
    }.bind(this), 1500);
  },
  onLevelForward: function(selector, elements) {
    elements.current.setCurrentFrameIndex(4);
    elements.current.m_Text.setVisible(true);
    if(!elements.current.isRegisterTouchable()) {
      elements.current.registerTouchable(true);
    }

    for(var h = 0; h < 2; h++) {
      elements.current.decorations[h].runAction(
        cc.Sequence.create(
          cc.FadeIn.create(0.4),
          false
        )
      );
      elements.current.decorations[h].runAction(
        cc.Sequence.create(
          cc.ScaleTo.create(0.2, 1.2),
          cc.ScaleTo.create(0.1, 0.8),
          cc.ScaleTo.create(0.1, 1.0),
          false
        )
      );
    }
  },
  onEnter: function() {
    this._super();

    Camera.sharedCamera().setDesignResolutionSize(false, false, false, false, true);

    this.m_Background10.setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().height - Camera.sharedCamera().height * 9 - Camera.sharedCamera().margin.y / 2);
    this.m_Background9.setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().height - Camera.sharedCamera().height * 8 - Camera.sharedCamera().margin.y / 2);
    this.m_Background8.setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().height - Camera.sharedCamera().height * 7 - Camera.sharedCamera().margin.y / 2);
    this.m_Background7.setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().height - Camera.sharedCamera().height * 6 - Camera.sharedCamera().margin.y / 2);
    this.m_Background6.setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().height - Camera.sharedCamera().height * 5 - Camera.sharedCamera().margin.y / 2);
    this.m_Background5.setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().height - Camera.sharedCamera().height * 4 - Camera.sharedCamera().margin.y / 2);
    this.m_Background4.setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().height - Camera.sharedCamera().height * 3 - Camera.sharedCamera().margin.y / 2);
    this.m_Background3.setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().height - Camera.sharedCamera().height * 2 - Camera.sharedCamera().margin.y / 2);
    this.m_Background2.setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().height - Camera.sharedCamera().height * 1 - Camera.sharedCamera().margin.y / 2);
    this.m_Background1.setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().height - this.m_Background1.getHeight() / 2 - Camera.sharedCamera().margin.y / 2);

    for(var i = 0; i < this.m_IconsCoordinates.length; i++) {
      var element = this.m_Icons.create();

      element.setCenterPosition(Camera.sharedCamera().coord(this.m_IconsCoordinates[i].x), Camera.sharedCamera().coord(this.m_IconsCoordinates[i].y) + this.m_Background1.getHeight() - Camera.sharedCamera().margin.y / 2);
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

    this.placeLevel();
    this.placeStars();
    this.placeFriends();
  },
  onExit: function() {
    this._super();

    this.m_Icons.clear();
    this.m_BackgroundHolder.removeAllChildren();
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
  deepCopy: function() {
    return MapIcon.create();
  }
});

Holder = Entity.extend({
  current: 0,
  max: 0,
  time: 2.0,
  ctor: function(parent) {
    this._super(s_MapUserBackground2, parent);
  },
  addChild: function(child, zindex) {
    this._super(child, zindex);

    this.max++;

    if(this.max > 1) {
      child.setOpacity(0);
    }
  },
  removeChild: function(child) {
    this._super(child);

    this.max--;
  },
  update: function(time) {
    this._super();

    if(this.max > 1) {
      this.time += time;

      if(this.time >= 5.0) {
        this.time = 0;

        this.getChildren()[this.current].runAction(cc.FadeOut.create(0.5));
        this.current = this.current >= this.max ? 0 : (this.current + 1);
        this.getChildren()[this.current].runAction(
          cc.Sequence.create(
            cc.DelayTime.create(0.5),
            cc.FadeIn.create(0.5),
            false
          )
        );
      }
    }
  }
});

MapBackground = Entity.extend({
  ctor: function(filename, parent) {
    this._super(filename, parent);
  }
});

MapIcon.create = function() {
  return new MapIcon();
};

Holder.create = function(parent) {
  return new Holder(parent);
};

MapBackground.create = function(filename, parent) {
  return new MapBackground(filename, parent);
};
