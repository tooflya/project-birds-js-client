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

CatapultBird = TiledEntity.extend({
  m_Id: 0,
  m_OpponentId: 0,
  ctor: function(parent, id) {
    this._super(s_CatapultBirds, 1, 4, parent);

    this.m_Id = id;

    if(this.m_Id == 1) this.m_OpponentId = 0;
    if(this.m_Id == 0) this.m_OpponentId = 1;
  },
  onCreate: function() {
    this._super();
  },
  onDestroy: function() {
    this._super();

    Game.sharedScreen().m_Explosions.create().setCenterPosition(this.getCenterX(), this.getCenterY());
  },
  fire: function() {
    var target = Game.instance.m_Catapults.get(this.m_OpponentId);

    var bezier = Array();
    bezier[0] = cc.p(this.getCenterX()/2, this.getCenterY()/2);
    bezier[1] = cc.p(Camera.instance.center.x/2, Camera.instance.height);
    bezier[2] = cc.p(target.getCenterX()/2, target.getCenterY()/2);

    this.runAction(
      cc.Sequence.create(
        cc.BezierTo.create(2.0, bezier),
        cc.CallFunc.create(this.destroy, this),
        false
      )
    );
  },
  updateRotation: function() {
    var target = Game.instance.m_Catapults.get(this.m_OpponentId);

    var x = target.getCenterX();
    var y = target.getCenterY();

    var dx = x - this.getCenterX();
    var dy = y - this.getCenterY();

    var r = Math.atan2(dy, dx);

    this.setRotation(r * 180 / Math.PI);
  },
  update: function(time) {
    this._super(time);

    this.updateRotation();
  },
  deepCopy: function() {
    return CatapultBird.create(false, this.m_Id);
  }
});

CatapultBird.create = function(parent, id) {
  var entity = new CatapultBird(parent, id);

  return entity;
};
