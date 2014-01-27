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

PlayButton = Button.extend({
  m_DecorationAnimationTime: 0,
  m_DecorationAnimationTimeElapsed: 0,
  ctor: function(parent) {
      this._super(s_PlayButton, 6, 2, parent);
  },
  onAnimationStart: function() {
  },
  onAnimationFinish: function() {
    this.m_DecorationAnimationTime = Random.sharedRandom().random(1.0, 5.0, true);
  },
  update: function(time) {
    this._super(time);

    this.m_DecorationAnimationTimeElapsed += time;

    if(this.m_DecorationAnimationTimeElapsed >= this.m_DecorationAnimationTime) {
      this.m_DecorationAnimationTimeElapsed = 0;

      this.animate(0.06, 1);
    }
  }
});

PlayButton.create = function(parent) {
  var entity = new PlayButton(parent);

  return entity;
};
