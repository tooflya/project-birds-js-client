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
    references.coins.rating,
  ],
  m_Fields: [
    DataManager.sharedManager().get(references.coins.gold),
    DataManager.sharedManager().get(references.coins.silver),
    DataManager.sharedManager().get(references.coins.lives),
    DataManager.sharedManager().get(references.coins.keys),
    DataManager.sharedManager().get(references.rating)
  ],
  ctor: function(parent) {
    this._super(s_InterfacePanel, parent);

    this.addItem(s_PanelItemsBackground1, [s_PanelIcon1, 5, 4], [s_PanelButton, 1, 1], function(e) {
      e.ccsf([MenuPanel.sharedScreen().m_Fields[0]]);
    });
    this.addItem(s_PanelItemsBackground1, [s_PanelIcon2, 5, 4], [s_PanelButton, 1, 1], function(e) {
      e.ccsf([MenuPanel.sharedScreen().m_Fields[1]]);
    });
    this.addItem(s_PanelItemsBackground1, [s_PanelIcon3, 3, 3], [s_PanelButton, 1, 1], function(e) {
      e.ccsf([MenuPanel.sharedScreen().m_Fields[2]]);
    });
    this.addItem(s_PanelItemsBackground1, [s_PanelIcon4, 3, 3], [s_PanelButton, 1, 1], function(e) {
      e.ccsf([MenuPanel.sharedScreen().m_Fields[3]]);
    });
    this.addItem(s_PanelItemsBackground1, [s_PanelIcon5, 3, 3], false, function(e) {
      e.ccsf([MenuPanel.sharedScreen().m_Fields[4]]);
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

    this.getButtons()[0].setTouchHandler('show', Coins);
    this.getButtons()[1].setTouchHandler('show', Coins);
    this.getButtons()[2].setTouchHandler('show', Lives);
    this.getButtons()[3].setTouchHandler('show', Keys);

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
    if(!MenuPanel.instance) return;

    this._super(time);

    for(var i = 0; i < 5; i++) {
      if(this.m_Fields[i] != DataManager.sharedManager().get(this.m_Keys[i])) {
        this.m_Fields[i] += this.m_Fields[i] > DataManager.sharedManager().get(this.m_Keys[i]) ? -1 : 1;
      }
    }
  }
});

MenuPanel.instance = false;
MenuPanel.sharedScreen = function(parent) {
  if(MenuPanel.instance) {
    MenuPanel.instance.m_Parent = parent;
  } else {
    MenuPanel.instance = new MenuPanel(parent);
  }

  return MenuPanel.instance;
};
