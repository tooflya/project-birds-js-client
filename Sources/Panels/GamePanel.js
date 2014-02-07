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

GamePanel = Panel.extend({
  m_DecorationTime: 1.0,
  m_DecorationTimeElapsed: 0,
  ctor: function(type, parent) {
    this._super(s_GamePanel, parent);

    this.addItem(s_PanelItemsBackground1, [s_PanelIcon6, 7, 1], false, function(e) {
      e.ccsf([0]);
    });
    this.addItem(s_PanelItemsBackground1, [s_PanelIcon1, 5, 4], [s_PanelButton, 1, 1], function(e) {
      e.ccsf([0]);
    });
    this.addItem(s_PanelItemsBackground1, [s_PanelIcon2, 5, 4], [s_PanelButton, 1, 1], function(e) {
      e.ccsf([0]);
    });

    var u=0;
    switch(type) {
      case 0:
        this.addItem(s_PanelItemsBackground2, [s_Star, 3, 2]);
        this.addItem(s_PanelItemsBackground2, [s_Star, 3, 2]);
        this.addItem(s_PanelItemsBackground2, [s_Star, 3, 2]);

    this.getIcons()[3].setCurrentFrameIndex(0);
    this.getIcons()[4].setCurrentFrameIndex(1);
    this.getIcons()[5].setCurrentFrameIndex(2);

    this.getIcons()[3].setScale(0.3);
    this.getIcons()[4].setScale(0.3);
    this.getIcons()[5].setScale(0.3);

    this.getIcons()[3].setCenterPosition(this.getIcons()[3].getCenterX() + Camera.sharedCamera().coord(10), this.getIcons()[3].getCenterY());
    this.getIcons()[5].setCenterPosition(this.getIcons()[5].getCenterX() - Camera.sharedCamera().coord(10), this.getIcons()[5].getCenterY());

        u=3;
      break;
      case 1:
        this.addItem(s_PanelItemsBackground2, [s_PanelIcon7, 2, 1]);
        this.addItem(s_PanelItemsBackground2, [s_PanelIcon7, 2, 1]);
        this.addItem(s_PanelItemsBackground2, [s_PanelIcon7, 2, 1]);

    this.getIcons()[3].setCurrentFrameIndex(1);
    this.getIcons()[4].setCurrentFrameIndex(1);
    this.getIcons()[5].setCurrentFrameIndex(1);

    this.getIcons()[3].setScale(0.95);
    this.getIcons()[5].setScale(0.95);

    this.getIcons()[3].setRotation(-5);
    this.getIcons()[5].setRotation(5);

    this.getIcons()[3].setCenterPosition(this.getIcons()[3].getCenterX() + Camera.sharedCamera().coord(10), this.getIcons()[3].getCenterY());
    this.getIcons()[5].setCenterPosition(this.getIcons()[5].getCenterX() - Camera.sharedCamera().coord(10), this.getIcons()[5].getCenterY());

        u=3;
      break;
      case 2:
        this.addItem(s_PanelItemsBackground2, [s_PanelIcon7, 2, 1]);
        this.addItem(s_PanelItemsBackground2, [s_PanelIcon7, 2, 1]);
        this.addItem(s_PanelItemsBackground2, [s_PanelIcon7, 2, 1]);

    this.getIcons()[3].setCurrentFrameIndex(1);
    this.getIcons()[4].setCurrentFrameIndex(1);
    this.getIcons()[5].setCurrentFrameIndex(1);

    this.getIcons()[3].setScale(0.95);
    this.getIcons()[5].setScale(0.95);

    this.getIcons()[3].setRotation(-5);
    this.getIcons()[5].setRotation(5);

    this.getIcons()[3].setCenterPosition(this.getIcons()[3].getCenterX() + Camera.sharedCamera().coord(10), this.getIcons()[3].getCenterY());
    this.getIcons()[5].setCenterPosition(this.getIcons()[5].getCenterX() - Camera.sharedCamera().coord(10), this.getIcons()[5].getCenterY());

        u=3;
      break;
    }

    this.addItem(s_PanelItemsBackground1, [s_PanelIcon3, 3, 3], [s_PanelButton, 1, 1], function(e) {
      e.ccsf([0]);
    });
    this.addItem(s_PanelItemsBackground1, [s_PanelIcon4, 3, 3], [s_PanelButton, 1, 1], function(e) {
      e.ccsf([0]);
    });
    this.addItem(s_PanelItemsBackground2, false, [s_PopupPauseButton, 1, 1]);

    this.getIcons()[0].animate(0.06, 2, {start: 0, end: 7}, {start: 0, end: 5.0});
    this.getIcons()[1].animate(0.02);
    this.getIcons()[2].animate(0.02);
    this.getIcons()[3 + u].animate(0.06, 2, {start: 0, end: 7}, {start: 0, end: 5.0});
    this.getIcons()[4 + u].animate(0.06, 2, {start: 0, end: 7}, {start: 0, end: 5.0});

    this.getIcons()[1].setScale(0.8);
    this.getIcons()[2].setScale(0.8);

    this.getIcons()[1].setRotation(-45);
    this.getIcons()[2].setRotation(-45);

    this.getButtons()[0].setTouchHandler('show', Coins);
    this.getButtons()[1].setTouchHandler('show', Coins);
    this.getButtons()[2].setTouchHandler('show', Lives);
    this.getButtons()[3].setTouchHandler('show', Keys);
    this.getButtons()[4].setTouchHandler('onPauseEvent', Game);

    this.m_BackgroundCircleDecoration = EntityManager.create(5, CircleDecoration2.create(), this.getBackgrounds()[0], 0);

    Coins.sharedScreen(this).prepare();
    Keys.sharedScreen(this).prepare();
    Lives.sharedScreen(this).prepare();
    Pause.sharedScreen(this).prepare();
  },
  show: function() {
    this._super();
  },
  hide: function() {
    this._super();

    GamePanel.instance = false;
  },
  onShow: function() {
    this._super();

    //this.m_BackgroundCircleDecoration.clear();
  },
  onHide: function() {
    this._super();
  },
  onEnter: function() {
    this._super();
  },
  onExit: function() {
    this._super();
  },
  update: function(time) {
    this._super(time);

    this.m_DecorationTimeElapsed += time;

    if(this.m_DecorationTimeElapsed >= this.m_DecorationTime) {
      this.m_DecorationTimeElapsed = 0;

      this.m_BackgroundCircleDecoration.create().setCenterPosition(this.getTexts()[0].getCenterX(), this.getTexts()[0].getCenterY());
    }
  }
});

GamePanel.instance = false;
GamePanel.sharedScreen = function(type, parent) {
  if(GamePanel.instance) {
    GamePanel.instance.m_Parent = parent;
  } else {
    GamePanel.instance = new GamePanel(type, parent);
  }

  return GamePanel.instance;
};
