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

WeaponParticle2 = AnimatedEntity.extend({
  m_AlphaSpeed: 0,
  m_ScaleSpeed: 0,
  m_RotationSpeed: 0,
  m_VectorX: 0,
  m_VectorY: 0,
  ctor: function() {
    this._super(s_WeaponParticles, 6, 6);
  },
  onCreate: function() {
    this._super();

    var id = DataManager.sharedManager().get(references.weapon) - 1;

    this.m_AlphaSpeed = 0;
    this.m_ScaleSpeed = Random.sharedRandom().random(0.01, 0.05);
    this.m_RotationSpeed =  Random.sharedRandom().random(-10.0, 10.0);

    this.m_VectorX = Camera.sharedCamera().coord(Random.sharedRandom().random(-3.0, 3.0));
    this.m_VectorY = Camera.sharedCamera().coord(Random.sharedRandom().random(-3.0, 3.0));

    this.setCurrentFrameIndex(id * 3 + (Random.sharedRandom().probably(50) ? 0 : 1));
    this.setOpacity(255.0);
    this.setScale(1.0);
  },
  onDestroy: function() {
    this._super();
  },
  update: function(time) {
    this._super(time);

    var x = this.getCenterX();
    var y = this.getCenterY();

    this.setRotation(this.getRotation() + this.m_RotationSpeed);
    this.setOpacity(this.getOpacity() - this.m_AlphaSpeed);
    this.setScale(this.getScaleX() - this.m_ScaleSpeed);

    x += this.m_VectorX;
    y += this.m_VectorY;

    this.setCenterPosition(x, y);

    if(this.getOpacity() <= this.m_AlphaSpeed || this.getScaleX() <= 0) {
      this.destroy();
    }
  },
  deepCopy: function() {
    return WeaponParticle2.create();
  }
});

WeaponParticle2.create = function() {
  var entity = new WeaponParticle2();

  return entity;
};
