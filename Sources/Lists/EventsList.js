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

EventsList = PatternList.extend({
  ctor: function(parent) {
    this._super(s_ListScrollSmall, 512, 700, 512, 700, parent);

    this.m_Loading = Entity.create(s_Loading, this);

    this.m_Loading.setCenterPosition(this.getCenterX(), this.getCenterY() - Camera.sharedCamera().coord(100));

    this.m_Text = [];

    this.m_Text[1] = Text.create('events-popup-1', this);
    this.m_Text[2] = Text.create('events-popup-2', this);
    this.m_Text[3] = Text.create('events-popup-3', this);

    this.m_Text[1].setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(300));
    this.m_Text[2].setCenterPosition(this.getCenterX(), this.getCenterY());
    this.m_Text[3].setCenterPosition(this.getCenterX(), this.m_Text[1].getCenterY() - this.m_Text[1].getHeight() / 2 - this.m_Text[3].getHeight() / 2 - Camera.sharedCamera().coord(30));

    this.m_Text[1].setColor(cc.c3(204.0, 102.0, 51.0));

    this.m_Text[2].setColor(cc.c3(255.0, 130.0, 0.0));
    this.m_Text[3].setColor(cc.c3(255.0, 130.0, 0.0));

    this.m_BackgroundHolder = Background.create(this);
  },
  onEnter: function() {
    this._super();

    this.m_Loading.create().runAction(
      cc.RepeatForever.create(
        cc.RotateTo.create(1.0, 720)
      )
    );

    this.m_Text[2].setVisible(false);

    new PausableTimeout(function() {
      this.m_Loading.destroy();

      Tooflya.api.call('request.find', {
        force: true
      }, {
        success: function(data) {
          if(data.requests.length > 0) {
            var y = this.m_Text[3].getCenterY() - this.m_Text[3].getHeight() / 2 - Camera.sharedCamera().coord(80);
            data.requests.forEach(function(request) {
              var s = y;
              InternetEntity.create(request.photo, this.m_BackgroundHolder, function(entity) {
                entity.create().setCenterPosition(Camera.sharedCamera().coord(100), s);

                var button = Entity.create(s_LivesPresentBackground, this.m_BackgroundHolder);
                var icon = AnimatedEntity.create(s_PanelIcon3, 3, 3, button);

                var name = Text.create('leaderboard-name', this.m_BackgroundHolder, cc.TEXT_ALIGNMENT_LEFT);
                var text = Text.create('friends-live-present-5', button);

                name.ccsf([request.name + " " + request.surname]);

                name.setCenterPosition(name.getWidth() / 2 + Camera.sharedCamera().coord(160), s + Camera.sharedCamera().coord(60) - name.getHeight() / 2);
                text.setCenterPosition(button.getWidth() / 2 + Camera.sharedCamera().coord(15), button.getHeight() / 2);
                button.create().setCenterPosition(this.getCenterX() + Camera.sharedCamera().coord(60), s - Camera.sharedCamera().coord(20));
                icon.create().setCenterPosition(Camera.sharedCamera().coord(35), button.getHeight() / 2);
                icon.animate(0.06, 2, {start: 0, end: 7}, {start: 0, end: 5.0});

                name.setColor(cc.c3(255.0, 130.0, 0.0));
                text.setColor(cc.c3(204.0, 102.0, 51.0));
              }.bind(this));

              y -= Camera.sharedCamera().coord(120);
            }.bind(this));
          } else {
            this.m_Text[2].setVisible(true);
          }
        }.bind(this)
      });
    }.bind(this), 1500);
  }
});

EventsList.create = function(parent) {
  return new EventsList(parent);
};
