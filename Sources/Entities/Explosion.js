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

Explosion = AnimatedEntity.extend({
  m_Background: false,
  ctor: function() {
    this._super(s_Explosion, 3, 4);

    this.m_Background = AnimatedEntity.create(s_ExplosionBackground, 3, 4, this);

    this.m_Background.setCenterPosition(this.getWidth() / 2, this.getHeight() / 2 + Camera.sharedCamera().coord(10));
    this.m_Background.setZOrder(-1);
  },
  onCreate: function() {
    this._super();

    this.animate(0.06, 1);
    this.m_Background.create().animate(0.06, 1);
    //this.m_Background.setColor(cc.c3(255, 0, 0));
    this.m_Background.onAnimationFinish = function() {
      this.destroy();
    };
  },
  onAnimationFinish: function() {
    this.destroy();
  },
  update: function(time) {
    this._super(time);
  },
  deepCopy: function() {
    return Explosion.create();
  }
});

Explosion.create = function() {
  var entity = new Explosion();

  return entity;
};
