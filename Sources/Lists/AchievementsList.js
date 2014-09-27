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

AchievementsList = PatternList.extend({
  ctor: function(parent) {
    this._super(s_ListScrollSmall, 512, 700, 512, 0, parent);

    this.m_Loading = Entity.create(s_Loading, this);

    this.m_Loading.setCenterPosition(this.getCenterX(), this.getCenterY());

    this.m_Text = [];

    this.m_Text[1] = Text.create('achievements-popup-1', this);

    this.m_Text[1].setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(300));

    this.m_Text[1].setColor(cc.c3(204.0, 102.0, 51.0));

    this.m_BackgroundHolder = Background.create(this);
  },
  onEnter: function() {
    this._super();

    this.m_Loading.create().runAction(
      cc.RepeatForever.create(
        cc.RotateTo.create(1.0, 720)
      )
    );

    new PausableTimeout(function() {
      this.m_Loading.destroy();

      var x = Camera.sharedCamera().coord(100);
      var y = this.getCenterY() + Camera.sharedCamera().coord(180);

      var icon;
      var name;
      var descritption;
      var locked;

      AchievementsManager.sharedManager().get().forEach(function(element) {
        icon = Entity.create(element.icon, this.m_BackgroundHolder);
        name = Text.create(element.name, this.m_BackgroundHolder, cc.TEXT_ALIGNMENT_LEFT);
        descritption = Text.create(element.state <= 0 ? 'achievement-locked' : element.description, this.m_BackgroundHolder, cc.TEXT_ALIGNMENT_LEFT);

        if(element.state <= 0) {
          locked = Entity.create(s_AchievementLocked, icon);
          locked.create();
          locked.setCenterPosition(icon.getWidth() / 2, icon.getHeight() / 2);
        }

        icon.create().setCenterPosition(x, y);

        name.setCenterPosition(x + Camera.sharedCamera().coord(80) + name.getWidth() / 2, y + Camera.sharedCamera().coord(55));
        descritption.setCenterPosition(x + Camera.sharedCamera().coord(80) + descritption.getWidth() / 2, name.getCenterY() - Camera.sharedCamera().coord(80));

        name.setColor(cc.c3(204.0, 102.0, 51.0));
        descritption.setColor(element.state <= 0 ? cc.c3(255.0, 50.0, 0.0) : cc.c3(255.0, 130.0, 0.0));

        y -= Camera.sharedCamera().coord(170);
      }.bind(this));
    }.bind(this), 1500);
  },
  onExit: function() {
    this._super();

    this.m_BackgroundHolder.removeAllChildrenWithCleanup(true);
  }
});

AchievementsList.create = function(parent) {
  return new AchievementsList(parent);
};
