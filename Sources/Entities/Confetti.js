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

Confetti = AnimatedEntity.extend({
  id: false,
  m_MoveSpeed: {
    x: 0,
    y: 0,

    min: 100.0,
    max: 200.0
  },
  m_AlphaSpeed: {
    x: 0.5,
    y: 0,

    min: 0.5,
    max: 2.0
  },
  ctor: function() {
    this._super(s_Confetti, 20, 4);
  },
  onCreate: function() {
    this._super();

    this.id = Random.sharedRandom().random(0, 3, true);

    var frames = {
      start: this.id * 20,
      end: this.id * 20 + 19
    };
    this.animate(0.02, -1, frames);
    this.setCurrentFrameIndex(Random.sharedRandom().random(frames.start, frames.end, true));

    this.m_MoveSpeed.y = Camera.sharedCamera().coord(Random.sharedRandom().random(this.m_MoveSpeed.min, this.m_MoveSpeed.max));
    this.m_AlphaSpeed.y = Random.sharedRandom().random(this.m_AlphaSpeed.min, this.m_AlphaSpeed.max);

    this.setRotation(Random.sharedRandom().random(0, 720));
    this.setOpacity(0);
    this.runRecognizeAction(cc.CallFunc.create(AnimatedEntity.destroy, this, this), [{
      name: 'fade',
      time: this.m_AlphaSpeed.x,
      value: 255
    }, {
      name: 'fade',
      time: this.m_AlphaSpeed.y,
      value: 0
    }]);
  },
  update: function(time) {
    this._super(time);

    this.setCenterPosition(this.getCenterX(), this.getCenterY() - this.m_MoveSpeed.y * time);
  },
  deepCopy: function() {
    return Confetti.create();
  }
});

Confetti.create = function() {
  var entity = new Confetti();

  return entity;
};
