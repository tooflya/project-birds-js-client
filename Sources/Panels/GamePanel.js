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
  m_Keys: [
    references.coins.gold,
    references.coins.silver,
    references.coins.lives,
    references.coins.keys
  ],
  m_Fields: [
    DataManager.sharedManager().get(references.coins.gold),
    DataManager.sharedManager().get(references.coins.silver),
    DataManager.sharedManager().get(references.coins.lives),
    DataManager.sharedManager().get(references.coins.keys)
  ],
  ctor: function(type, parent) {
    this._super(s_GamePanel, parent);

    this.addItem(s_PanelItemsBackground1, [s_PanelIcon6, 7, 1], false, function(e) {
      e.ccsf([Game.sharedScreen().m_CurrentBlows]);
    });
    this.addItem(s_PanelItemsBackground1, [s_PanelIcon1, 5, 4], this.config.params.purchases ? [s_PanelButton, 1, 1] : false, function(e) {
      e.ccsf([GamePanel.sharedScreen().m_Fields[0]]);
    });
    this.addItem(s_PanelItemsBackground1, [s_PanelIcon2, 5, 4], this.config.params.purchases ? [s_PanelButton, 1, 1] : false, function(e) {
      e.ccsf([GamePanel.sharedScreen().m_Fields[1]]);
    });

    var u = 0;
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

        u = 3;
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

        if(!this.config.params.purchases) {
          for(var i = 3; i <= 5; i++) {
            this.getIcons()[i].setCenterPosition(this.getIcons()[i].getCenterX() - Camera.sharedCamera().coord(10), this.getIcons()[i].getCenterY());
          }
        }

        u = 3;
      break;
      case 2:
        this.addItem(s_PanelItemsBackground1, [s_PanelIcon8, 1, 1], false, function(e) {
          e.timeLeft(Game.sharedScreen().m_GameTimeElapsed, 60.0);
        });

        u = 0;
      break;
    }

    this.addItem(s_PanelItemsBackground1, [s_PanelIcon3, 3, 3], this.config.params.purchases ? [s_PanelButton, 1, 1] : false, function(e) {
      e.ccsf([GamePanel.sharedScreen().m_Fields[2]]);
    });
    this.addItem(s_PanelItemsBackground1, [s_PanelIcon4, 3, 3], this.config.params.purchases ? [s_PanelButton, 1, 1] : false, function(e) {
      e.ccsf([GamePanel.sharedScreen().m_Fields[3]]);
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

    if(this.config.params.purchases) {
      this.getButtons()[0].setTouchHandler('show', Coins);
      this.getButtons()[1].setTouchHandler('show', Coins);
      this.getButtons()[2].setTouchHandler('show', Lives);
      this.getButtons()[3].setTouchHandler('show', Keys);
    }

    this.getButtons()[this.config.params.purchases ? 4 : 0].setTouchHandler('onPauseEvent', Game);

    this.m_BackgroundCircleDecoration = EntityManager.create(5, CircleDecoration2.create(), this.getBackgrounds()[0], 0);

    Coins.sharedScreen(this).prepare();
    Keys.sharedScreen(this).prepare();
    Lives.sharedScreen(this).prepare();
    Pause.sharedScreen(this).prepare();
  },
  show: function() {
    this._super();

    this.m_Fields = [
      DataManager.sharedManager().get(references.coins.gold),
      DataManager.sharedManager().get(references.coins.silver),
      DataManager.sharedManager().get(references.coins.lives),
      DataManager.sharedManager().get(references.coins.keys)
    ];
  },
  hide: function() {
    this._super();

    GamePanel.instance = false;
  },
  onShow: function() {
    this._super();

    this.m_BackgroundCircleDecoration.clear();
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
    if(!GamePanel.instance) return;

    this._super(time);

    this.m_DecorationTimeElapsed += time;

    if(this.m_DecorationTimeElapsed >= this.m_DecorationTime) {
      this.m_DecorationTimeElapsed = 0;

      this.m_BackgroundCircleDecoration.create().setCenterPosition(this.getTexts()[0].getCenterX(), this.getTexts()[0].getCenterY());
    }

    for(var i = 0; i < 4; i++) {
      if(this.m_Fields[i] != DataManager.sharedManager().get(this.m_Keys[i])) {
        this.m_Fields[i] += this.m_Fields[i] > DataManager.sharedManager().get(this.m_Keys[i]) ? -1 : 1;
      }
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
