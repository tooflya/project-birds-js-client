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

Game.prototype.updateThrower = function(time) {
  if(!this.m_GameRunning) return false;

  this.m_ThrowParams.timeElapsed += time;

  if(this.m_ThrowParams.timeElapsed >= this.m_ThrowParams.time) {
    this.m_ThrowParams.timeElapsed = 0;

    this.m_ThrowParams.count--;

    if(this.m_ThrowParams.count <= 0) {
      this.generateThrowTime();
      this.generateThrowCount();
    } else {
      this.m_ThrowParams.time = 0.5;
    }

    this.m_Birds.create().throwup();
  }
};

Game.prototype.generateThrowTime = function() {
  this.m_ThrowParams.time = Random.sharedRandom().random(this.m_ThrowParams.min.time, this.m_ThrowParams.max.time);
};

Game.prototype.generateThrowCount = function() {
  this.m_ThrowParams.count = Random.sharedRandom().random(this.m_ThrowParams.min.count, this.m_ThrowParams.max.count, true);
};
