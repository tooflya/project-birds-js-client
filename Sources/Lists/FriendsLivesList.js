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

FriendsLivesList = PatternList.extend({
  ctor: function(parent) {
    this._super(s_ListScrollSmall, 512, 700, 512, 0, parent);

    this.m_Decoration1 = Entity.create(s_PopupDecoration19, this);
    this.m_Decoration2 = Entity.create(s_PopupDecoration20, this);

    this.m_Text = [];

    this.m_Text[0] = Text.create('friends-lives-popup-1', this);
    this.m_Text[1] = Text.create('friends-lives-popup-2', this);

    this.m_Text[0].setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(320));
    this.m_Text[1].setCenterPosition(this.getCenterX(), this.getCenterY() - Camera.sharedCamera().coord(230));
    this.m_Decoration1.setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(100));
    this.m_Decoration2.setCenterPosition(this.getCenterX() - Camera.sharedCamera().coord(10), this.getCenterY() + Camera.sharedCamera().coord(100));

    this.m_Text[0].setColor(cc.c3(204.0, 102.0, 51.0));
    this.m_Text[1].setColor(cc.c3(255.0, 130.0, 0.0));

    this.m_Decoration2.runAction(
      cc.RepeatForever.create(
        cc.Sequence.create(
          cc.MoveTo.create(2.2, cc.p(this.m_Decoration2.getCenterX(), this.m_Decoration2.getCenterY() + Camera.sharedCamera().coord(5))),
          cc.MoveTo.create(2.2, cc.p(this.m_Decoration2.getCenterX(), this.m_Decoration2.getCenterY() - Camera.sharedCamera().coord(5))),
          false
        )
      )
    );

    this.m_BackgroundHolder = Background.create(this);
  },
  onActionEvent: function() {
    this.m_Text[1].setVisible(false);

    this.m_Decoration1.destroy();
    this.m_Decoration2.destroy();

    var y = this.getCenterY() + Camera.sharedCamera().coord(200);
    FriendsManager.instance.getAppFriends().forEach(function(user) {
      if(true) {
        var s = y;
        InternetEntity.create(user.photo_medium, this.m_BackgroundHolder, function(entity) {
          entity.create().setCenterPosition(Camera.sharedCamera().coord(100), s);

          var button = Entity.create(s_LivesPresentBackground, this.m_BackgroundHolder);
          var icon = AnimatedEntity.create(s_PanelIcon3, 3, 3, button);

          var name = Text.create('leaderboard-name', this.m_BackgroundHolder, cc.TEXT_ALIGNMENT_LEFT);
          var text = Text.create('friends-live-present-1', button);

          name.ccsf([user.first_name + " " + user.last_name]);

          name.setCenterPosition(name.getWidth() / 2 + Camera.sharedCamera().coord(160), s + Camera.sharedCamera().coord(60) - name.getHeight() / 2);
          text.setCenterPosition(button.getWidth() / 2 + Camera.sharedCamera().coord(15), button.getHeight() / 2);
          button.create().setCenterPosition(this.getCenterX() + Camera.sharedCamera().coord(60), s - Camera.sharedCamera().coord(20));
          icon.create().setCenterPosition(Camera.sharedCamera().coord(35), button.getHeight() / 2);
          icon.animate(0.06, 2, {start: 0, end: 7}, {start: 0, end: 5.0});

          name.setColor(cc.c3(255.0, 130.0, 0.0));
          text.setColor(cc.c3(204.0, 102.0, 51.0));

          button.registerTouchable(true);
          button.onCancel = function() {
          };
          button.onMouseDown = function(e) {
            if(Entity.prototype.onMouseDown.call(this, e)) {
              this.stopAllActions();

              this.runRecognizeAction(false, {
                name: 'scale',
                time: 0.1,
                value: 0.95
              });
            }
          };
          button.onMouseUp = function(e) {
            if(Entity.prototype.onMouseUp.call(this, e)) {
              this.stopAllActions();

              this.runRecognizeAction(false, {
                name: 'scale',
                time: 0.1,
                value: 1.0
              });
            }
          };
          button.onTouch = function(e) {
            Button.prototype.onTouch.call(this, e);

            var messages = [
              LanguagesManager.sharedManager().get('friends-notification-vk-11').title,
              LanguagesManager.sharedManager().get('friends-notification-vk-12').title,
              LanguagesManager.sharedManager().get('friends-notification-vk-13').title,
              LanguagesManager.sharedManager().get('friends-notification-vk-14').title
            ];

            Tooflya.VK.api.call('friends.request', {
              id: user.uid,
              message: messages.random()
            }, {
              success: function() {
                Tooflya.api.call('request.send', {
                  type: 'live.send',
                  uid: user.uid
                }, {
                  success: function(data) {
                    this.registerTouchable(false);
                    text.setText('friends-live-present-2');
                    text.runAction(
                      cc.Sequence.create(
                        cc.DelayTime.create(0.2),
                        cc.EaseBounceOut.create(
                          cc.MoveTo.create(0.5, cc.p(text.getCenterX() - Camera.sharedCamera().coord(100), text.getCenterY()))
                        ),
                        false
                      )
                    );
                    icon.runAction(cc.FadeOut.create(0.2));
                  }.bind(this)
                });
                this.registerTouchable(false);
              }.bind(this)
            });
          };

          this.m_ListMaxHeight = Math.abs(entity.getCenterY() - entity.getHeight() / 2 - Camera.sharedCamera().coord(50));
        }.bind(this));

        y -= Camera.sharedCamera().coord(120);
      }
    }.bind(this));
  },
  onEnter: function() {
    this._super();

    this.m_Text[1].setVisible(true);

    this.m_Decoration1.create();
    this.m_Decoration2.create();
  },
  onExit: function() {
    this._super();

    this.m_BackgroundHolder.removeAllChildrenWithCleanup(true);
  }
});

FriendsLivesList.create = function(parent) {
  return new FriendsLivesList(parent);
};
