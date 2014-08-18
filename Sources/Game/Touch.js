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

Game.power = 0;
Game.prototype.onMouseDragged = function(e) {
  switch(this.m_Type) {
    case this.m_Types.progress:
    break;
    case this.m_Types.classic:
    case this.m_Types.arcade:
    if(Screen.prototype.onMouseDragged.call(this, e)) {
      this.m_Touch.point.x = e.getLocation().x;
      this.m_Touch.point.y = e.getLocation().y;

      this.m_WeaponParticles1.create().setCenterPosition(this.m_Touch.point.x, this.m_Touch.point.y);
      this.m_WeaponParticles2.create().setCenterPosition(this.m_Touch.point.x, this.m_Touch.point.y);
    }
    break;
  }
};

Game.prototype.onTouch = function(e) {
  if(!this.m_GameRunning || this.m_TutorialRunning) return false;

  if(Game.network) {
    if(this.m_InputBackground.getNumberOfRunningActions() > 0) return false;

    if(this.m_InputBackground.isVisible()) {
      this.m_InputBackground.runAction(
        cc.Sequence.create(
          cc.ScaleTo.create(0.1, 1.1),
          cc.ScaleTo.create(0.1, 0.0),
          cc.CallFunc.create(this.m_InputBackground.destroy, this.m_InputBackground, this.m_InputBackground),
          false
        )
      );
    } else {
      var x = e.getLocation().x;
      var y = e.getLocation().y;

      this.m_InputBackground.setCenterPosition(x, y);
      this.m_InputBackground.create().runAction(
        cc.Sequence.create(
          cc.ScaleTo.create(0.2, 1.1),
          cc.ScaleTo.create(0.1, 1.0),        
          false
        )
      );
    }
  }
};
