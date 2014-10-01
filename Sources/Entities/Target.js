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

Target = TiledEntity.extend({
  m_Finish: false,
  m_Decorations: [],
  ctor: function(parent) {
    this._super(s_Target, 2, 1, parent);

    this.registerTouchable(true);

    this.m_Text = Text.create('zero', this, cc.TEXT_ALIGNMENT_CENTER);
  },
  onCreate: function() {
    this._super();

    this.setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().coord(18));
    this.setCurrentFrameIndex(0);

    this.setScale(0.0);
    this.setAnchorPoint(cc.p(0.5, 0.1));
    this.runAction(
      cc.Sequence.create(
        cc.DelayTime.create(1.5),
        cc.ScaleTo.create(0.3, 1.2),
        cc.ScaleTo.create(0.2, 0.8),
        cc.ScaleTo.create(0.2, 1.0),
        false
        )
      );

    this.m_Decorations = [];

    for(var i = 0; i < 2; i++) {
      this.m_Decorations[i] = Entity.create(s_PopupDecoration1, this.getParent());

      this.m_Decorations[i].create().setCenterPosition(this.getCenterX(), this.getCenterY() + this.getHeight() / 2);
      this.m_Decorations[i].setScale(0.0);
      this.m_Decorations[i].setZOrder(300);
      this.m_Decorations[i].runAction(
        cc.Sequence.create(
          cc.DelayTime.create(2.0),
          cc.ScaleTo.create(0.3, 1.2),
          cc.ScaleTo.create(0.2, 0.8),
          cc.ScaleTo.create(0.2, 1.0),
          false
          )
        );
    }

    this.m_Text.create().setCenterPosition(this.getWidth() / 2, this.getHeight() / 2 + Camera.sharedCamera().coord(5));
    this.m_Text.score = 0;
  },
  onDestroy: function() {
    this._super();

    for(var i = 0; i < 2; i++) {
      this.m_Decorations[i].removeFromParent();
    }
  },
  onTouch: function() {
    if(this.getNumberOfRunningActions() <= 0) {
      this.runAction(
        cc.Sequence.create(
          cc.ScaleTo.create(0.1, 0.9),
          cc.ScaleTo.create(0.2, 1.1),
          cc.ScaleTo.create(0.3, 0.8),
          cc.ScaleTo.create(0.2, 1.0),
          false
          )
        );
    }

    if(!Game.network) {
      if(Game.instance.m_PlayerTurn) {
        MatrixManager.sharedManager().selectRandomCombination();
      }
    }
  },
  finish: function(state) {
    this.m_Finish = true;

    this.m_Text.destroy();

    this.m_Decorations[0].setZOrder(700);
    this.m_Decorations[1].setZOrder(700);

    this.nextFrameIndex();

    this.setAnchorPoint(cc.p(0.5, 0.5));
    this.setZOrder(701);

    this.runAction(
      cc.EaseExponentialInOut.create(
        cc.MoveTo.create(3.0, cc.p(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y))
      )
    );
    this.runAction(cc.ScaleTo.create(3.0, 1.5));

    Game.instance.runAction(
      cc.Sequence.create(
        cc.DelayTime.create(3.0),
        cc.CallFunc.create(Game.instance.finishGame, Game.instance, state),
        false
      )
    );

    Game.instance.m_ElementsExplanationTexts.runAction(
      cc.Sequence.create(
        cc.EaseExponentialIn.create(
          cc.MoveTo.create(0.5, cc.p(Camera.sharedCamera().center.x, Camera.sharedCamera().height + Camera.sharedCamera().coord(200)))
        ),
        false
      )
    );
  },
  update: function(time) {
    this._super(time);

    this.m_Decorations[0].setRotation(this.m_Decorations[0].getRotation() - 0.1);
    this.m_Decorations[1].setRotation(this.m_Decorations[1].getRotation() + 0.1);

    this.m_Decorations[0].setScale(this.getScaleX());
    this.m_Decorations[1].setScale(this.getScaleX());

    this.m_Decorations[0].setCenterPosition(this.getCenterX(), this.getCenterY() + (this.m_Finish ? 0 : this.getHeight() / 2));
    this.m_Decorations[1].setCenterPosition(this.getCenterX(), this.getCenterY() + (this.m_Finish ? Camera.sharedCamera().coord(50) : this.getHeight() / 2));

    if(this.m_Text.score != Game.score) {
      if(Game.score - this.m_Text.score > 1111) this.m_Text.score += 1111;
      else if(Game.score - this.m_Text.score > 111) this.m_Text.score += 111;
      else if(Game.score - this.m_Text.score > 11) this.m_Text.score += 11;
      else this.m_Text.score++;
    }

    this.m_Text.ccsf([this.m_Text.score]);
  }
});

Target.create = function(parent) {
  var entity = new Target(parent);

  return entity;
};
