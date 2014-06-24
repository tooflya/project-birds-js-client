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
  ctor: function() {
    this._super();

    Levels.instance = this;

    this.name = "Levels screen";

    this.m_Background = Entity.create(s_LevelsMapBackground, this, true);

    //MenuPanel.sharedScreen().prepare();
  },
  onBackEvent: function() {
    ScreenManager.sharedManager().replace(Mode);
  },
  onShow: function() {
    this._super();

    MenuPanel.sharedScreen(this).show();
  },
  onHide: function() {
    this._super();

    Levels.instance = false;
  },
  onExitTransitionDidStart: function() {
    MenuPanel.sharedScreen(this).hide();

    this._super();
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
  },
  onTouch: function(e) {
    var x = e.getLocation().x;
    var y = e.getLocation().y;

    MapTree.create(this).create().setCenterPosition(x, y);
  }
});

MapTree = TiledEntity.extend({
  ctor: function(parent) {
    this._super(s_LevelsMapTrees, 3, 1, parent);

    this.setAnchorPoint(cc.p(0.5, 0.2));
    this.setRandomFrameIndex();

    this.runAction(
      cc.RepeatForever.create(
        cc.Sequence.create(
          cc.SkewTo.create(1.0, 5.0, 0.0),
          cc.SkewTo.create(1.0, -5.0, 0.0),
          cc.SkewTo.create(1.0, 0.0, 0.0),
          cc.DelayTime.create(2.0),
          false
        )
      )
    );
  },
  update: function(time) {
    this._super();
  }
});
MapTree.create = function(parent) {
  var entity = new MapTree(parent);

  return entity;
};

Levels.instance = false;
Levels.sharedScreen = function() {
  return Levels.instance ? Levels.instance : new Levels();
};
