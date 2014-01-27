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

Loading = Screen.extend({
  m_WavesTime: 0.5,
  m_WavesTimeElapsed: 0.5,
  ctor: function() {
    this._super();

    Loading.instance = this;

    this.m_Background = Entity.create(s_LoadingBackground, this, true);
    this.m_BackgroundDecoration = Entity.create(s_LoadingDecoration, this, true);
    this.m_BackgroundWaves = EntityManager.create(15, LoadingWave.create(), this.m_Background);
  },
  onShow: function() {
    this.m_BackgroundWaves.clear();
  },
  update: function(time) {
    this._super(time);

    this.m_WavesTimeElapsed += time;

    if(this.m_WavesTimeElapsed >= this.m_WavesTime) {
      this.m_WavesTimeElapsed = 0;

      this.m_BackgroundWaves.create();
    }
  }
});

Loading.instance = false;
Loading.sharedScreen = function() {
  return Loading.instance ? Loading.instance : new Loading();
};
