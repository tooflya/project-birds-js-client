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

MenuPanel = Panel.extend({
  m_Keys: [
    references.coins.gold,
    references.coins.silver,
    references.coins.lives,
    references.coins.keys,
    references.coins.rating
  ],
  m_Fields: [
    DataManager.sharedManager().get(references.coins.gold),
    DataManager.sharedManager().get(references.coins.silver),
    DataManager.sharedManager().get(references.coins.lives),
    DataManager.sharedManager().get(references.coins.keys),
    DataManager.sharedManager().get(references.rating)
  ],
  m_LeaderboardAnimationIndex: 1,
  m_LeaderboardAnimationTime: 0.1,
  m_LeaderboardAnimationTimeElapsed: 0,
  m_LeaderboardAnimationCompleted: false,
  m_LeaderboardIndex: -1,
  ctor: function(parent) {
    this._super(s_InterfacePanel, parent);

    this.addItem(s_PanelItemsBackground1, [s_PanelIcon1, 5, 4], this.config.params.purchases ? [s_PanelButton, 1, 1] : false, function(e) {
      e.ccsf([MenuPanel.sharedScreen().m_Fields[0]]);
    });
    this.addItem(s_PanelItemsBackground1, [s_PanelIcon2, 5, 4], this.config.params.purchases ? [s_PanelButton, 1, 1] : false, function(e) {
      e.ccsf([MenuPanel.sharedScreen().m_Fields[1]]);
    });
    this.addItem(s_PanelItemsBackground1, [s_PanelIcon3, 3, 3], this.config.params.purchases ? [s_PanelButton, 1, 1] : false, function(e) {
      EnergyManager.sharedManager().check();

      if(DataManager.sharedManager().get(EnergyManager.sharedManager().getReference()) <= 0) {
        e.timeLeft(EnergyManager.sharedManager().time() / 1000, EnergyManager.sharedManager().getRestoreTime() / 1000);
      } else {
        e.ccsf([DataManager.sharedManager().get(EnergyManager.sharedManager().getReference())]);
      }
    });
    this.addItem(s_PanelItemsBackground1, [s_PanelIcon4, 3, 3], this.config.params.purchases ? [s_PanelButton, 1, 1] : false, function(e) {
      e.ccsf([MenuPanel.sharedScreen().m_Fields[3]]);
    });
    this.addItem(s_PanelItemsBackground1, [s_PanelIcon5, 3, 3], false, function(e) {
      if(!MenuPanel.sharedScreen().m_LeaderboardAnimationCompleted) {
        var loading = '';
        
        switch(MenuPanel.sharedScreen().m_LeaderboardAnimationIndex) {
          case 1:
          loading = '.';
          break;
          case 2:
          loading = '..';
          break;
          case 3:
          loading = '...';
          break;
          case 4:
          loading = '....';
          break;
          case 5:
          loading = '.....';
          break;
        }

        e.ccsf([loading]);
      } else {
        e.ccsf([MenuPanel.sharedScreen().m_LeaderboardIndex]);
      }
    });

    this.getIcons()[0].animate(0.02);
    this.getIcons()[1].animate(0.02);
    this.getIcons()[2].animate(0.06, 2, {start: 0, end: 7}, {start: 0, end: 5.0});
    this.getIcons()[3].animate(0.06, 2, {start: 0, end: 7}, {start: 0, end: 5.0});
    this.getIcons()[4].animate(0.06, 2, {start: 0, end: 7}, {start: 0, end: 5.0});

    this.getIcons()[0].setScale(0.8);
    this.getIcons()[1].setScale(0.8);

    this.getIcons()[0].setRotation(-45);
    this.getIcons()[1].setRotation(-45);

    if(this.config.params.purchases) {
      this.getButtons()[0].setTouchHandler('show', Coins);
      this.getButtons()[1].setTouchHandler('show', Coins);
      this.getButtons()[2].setTouchHandler('show', Lives);
      this.getButtons()[3].setTouchHandler('show', Keys);
    }

    Coins.sharedScreen(this).prepare();
    Keys.sharedScreen(this).prepare();
    Lives.sharedScreen(this).prepare();
  },
  show: function() {
    this._super();
  },
  hide: function() {
    this._super();

    MenuPanel.instance = false;
  },
  onShow: function() {
    this._super();

    DataManager.sharedManager().emit('leaderboard-id', 'my id', function(id) {
      MenuPanel.sharedScreen().m_LeaderboardAnimationCompleted = true;
      MenuPanel.sharedScreen().m_LeaderboardIndex = id;
    });
  },
  onHide: function() {
    this._super();

    this.removeFromParent();
  },
  onEnter: function() {
    this._super();

    this.updateData();
  },
  onExit: function() {
    this._super();
  },
  update: function(time) {
    this._super(time);

    for(var i = 0; i < 5; i++) {
      if(this.m_Fields[i] != DataManager.sharedManager().get(this.m_Keys[i])) {
        this.m_Fields[i] += this.m_Fields[i] > DataManager.sharedManager().get(this.m_Keys[i]) ? -1 : 1;
      }
    }

    if(!this.m_LeaderboardAnimationCompleted) {
      this.m_LeaderboardAnimationTimeElapsed += time;
      if(this.m_LeaderboardAnimationTimeElapsed >= this.m_LeaderboardAnimationTime) {
        this.m_LeaderboardAnimationTimeElapsed = 0;

        if(++this.m_LeaderboardAnimationIndex >= 6) {
          this.m_LeaderboardAnimationIndex = 1;
        }
      }
    }
  },
  updateData: function() {
    this.m_Fields = [
      DataManager.sharedManager().get(references.coins.gold),
      DataManager.sharedManager().get(references.coins.silver),
      DataManager.sharedManager().get(references.coins.lives),
      DataManager.sharedManager().get(references.coins.keys),
      DataManager.sharedManager().get(references.rating)
    ];
  }
});

MenuPanel.instance = false;
MenuPanel.sharedScreen = function(parent) {
  if(MenuPanel.instance) {
    if(parent) {
      MenuPanel.instance.m_Parent = parent;
    }
  } else {
    MenuPanel.instance = new MenuPanel(parent);
  }

  return MenuPanel.instance;
};
