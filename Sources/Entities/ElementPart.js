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

ElementPart = TiledEntity.extend({
  m_Id: -1,
  m_Status: -1,
  m_SpeedX: 0,
  m_SpeedY: 0,
  m_RotationSpeed: 0,
  m_AlphaSpeed: 0,
  m_ScaleSpeed: 0,
  ctor: function() {
    this._super(s_ElementsParts, 5, 2);
  },
  create: function(params) {
    this._super();

    this.m_Id = params.element.getId();
    this.setCurrentFrameIndex(params.index ? this.m_Id : this.m_Id + this.getHorizontalFramesCount());
    this.setCenterPosition(params.element.convertToWorldSpace(cc.p(0, 0)).x + params.element.getWidth() / 2, params.element.convertToWorldSpace(cc.p(0, 0)).y + params.element.getHeight() / 2);
    this.setOpacity(255.0);
    this.setRotation(0);
    this.setScale(1.0);

    this.m_SpeedX = Camera.sharedCamera().coord(Random.sharedRandom().random(100.0, 500.0)) * (params.index ? -1 : 1);
    this.m_SpeedY = Camera.sharedCamera().coord(Random.sharedRandom().random(400.0, 700.0));
    this.m_RotationSpeed = Random.sharedRandom().random(0.1, 1.0) * (params.index ? -1 : 1);
    this.m_AlphaSpeed = Random.sharedRandom().random(1.0, 5.0);
    this.m_ScaleSpeed = 0.006;
  },
  onCreate: function() {
    this._super();

    this.m_Status = 0;
  },
  onDestroy: function() {
    this._super();
  },
  update: function(time) {
    this._super(time);

    switch(this.m_Status) {
      case 0:
      this.setCenterPosition(this.getCenterX() + this.m_SpeedX * time, this.getCenterY() + this.m_SpeedY * time);
      this.setRotation(this.getRotation() + this.m_RotationSpeed);
      this.setScale(this.getScaleX() - this.m_ScaleSpeed);

      if(this.getCenterY() < this.getHeight() / 2 && this.m_SpeedY < 0) {
        this.m_SpeedY = Camera.sharedCamera().coord(Random.sharedRandom().random(500.0, 1000.0));

        this.m_Status++;
      }
      break;
      case 1:
      this.setCenterPosition(this.getCenterX() + this.m_SpeedX * time, this.getCenterY() + this.m_SpeedY * time);
      this.setRotation(this.getRotation() + this.m_RotationSpeed);

      if(this.getCenterY() < 0 && this.m_SpeedY < 0) {
        this.m_Status++;
      }
      break;
      case 2:
      this.setOpacity(this.getOpacity() - this.m_AlphaSpeed);

      if(this.getOpacity() <= 0) {
        this.destroy();
      }
      break;
    }

    this.m_SpeedY -= Camera.sharedCamera().coord(Random.sharedRandom().random(50.0, 100.0));
  },
  deepCopy: function() {
    return ElementPart.create();
  }
});

ElementPart.create = function() {
  var entity = new ElementPart();

  return entity;
};
