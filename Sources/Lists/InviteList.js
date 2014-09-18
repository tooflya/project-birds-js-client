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

InviteList = PatternList.extend({
  m_AnimationTime: 0.5,
  m_AnimationTimeElapsed: 0,
  ctor: function(parent) {
    this._super(s_ListScrollSmall, 512, 700, 512, 0, parent);

    this.m_Decoration = Entity.create(s_PopupDecoration18, this);

    this.m_Text = [];
    this.m_Elements = [];

    this.m_Text[0] = Text.create('challenge-popup-1', this);
    this.m_Text[1] = Text.create('challenge-popup-2', this);

    this.m_Text[0].setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(300));
    this.m_Text[1].setCenterPosition(this.getCenterX(), this.getCenterY() - Camera.sharedCamera().coord(230));
    this.m_Decoration.create().setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(70));

    this.m_Text[0].setColor(cc.c3(204.0, 102.0, 51.0));
    this.m_Text[1].setColor(cc.c3(255.0, 130.0, 0.0));

    var count = 0;
    FriendsManager.sharedInstance().getFriends().shuffle().forEach(function(user) {
      if(count > 10) return;

      var holder = Entity.create(s_FriendsBackground1, this);

      var stencil = cc.Sprite.create(s_FriendsBackground2);
      var clipper = cc.ClippingNode.create(stencil);

      holder.addChild(clipper);

      holder.create().setPosition(cc.p(100, 150));
      clipper.setPosition(cc.p(holder.getWidth() / 2, holder.getHeight() / 2));

      var element = Entity.create(s_FriendsBackground1, clipper);

      element.create().setCenterPosition(Camera.sharedCamera().coord(0), Camera.sharedCamera().coord(0));
      element.setScale(0.9);

      InternetEntity.create(user.photo_medium, element, function(entity) {
        entity.create().setCenterPosition(element.getWidth() / 2, element.getHeight() / 2);
      });

      count++;

      this.m_Elements.push(holder);
    }.bind(this));

    this.m_Elements.forEach(function(element) {
      element.setCenterPosition(Camera.sharedCamera().coord(250), Camera.sharedCamera().coord(400));
      element.setScale(0);

      var speed = 2;
      var radius = Camera.sharedCamera().coord(150);

      element.angle = 0;
      element.cx = Camera.sharedCamera().coord(250);
      element.cy = Camera.sharedCamera().coord(400);
      element.update = function(time) {
        Entity.prototype.update.call(this, time);

        this.angle -= Math.acos(1 - Math.pow(speed / radius, 2) / 2);

        var x = this.cx + radius * Math.cos(this.angle)
        var y = this.cy + radius * Math.sin(this.angle);

        this.setCenterPosition(x, y);
      };
    });

    this.m_Elements.index = -1;
  },
  onEnter: function() {
    this._super();
  },
  onExit: function() {
    this._super();
  },
  next: function() {
    if(this.m_Elements.index == (this.m_Elements.length - 1)) this.m_Elements.index = -1;

    this.m_Elements.index++;

    this.m_Elements[this.m_Elements.index].angle = 0;
    this.m_Elements[this.m_Elements.index].cx = Camera.sharedCamera().coord(250);
    this.m_Elements[this.m_Elements.index].cy = Camera.sharedCamera().coord(400);
    this.m_Elements[this.m_Elements.index].setCenterPosition(Camera.sharedCamera().coord(250), Camera.sharedCamera().coord(400));
    this.m_Elements[this.m_Elements.index].runAction(
      cc.Sequence.create(
        cc.ScaleTo.create(1.5, 1.0),
        cc.ScaleTo.create(2.0, 0.0),
        false
      )
    );
  },
  update: function(time) {
    this._super(time);

    this.m_AnimationTimeElapsed += time;
    if(this.m_AnimationTimeElapsed >= this.m_AnimationTime) {
      this.m_AnimationTimeElapsed = 0;

      this.next();
    }
  }
});

InviteList.create = function(parent) {
  return new InviteList(parent);
};
