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
  m_LoadingTime: 3.0,
  m_LoadingTimeElapsed: 0,
  ctor: function() {
    this._super();

    Loading.instance = this;

    this.name = "Loading screen";

    this.m_Background = Entity.create(Orientation.parse(s_LoadingBackground), this, true);
    this.m_BackgroundDecoration = Entity.create(s_LoadingDecoration, this, true);
    this.m_BackgroundWaves = EntityManager.create(15, CircleDecoration1.create(), this.m_Background);

    this.m_TipText = Text.create(false, this);
    //this.m_LoadingText = Text.create('loading', this);

    this.m_BackgroundDecoration.runAction(
      cc.RepeatForever.create(
        cc.Sequence.create(
          cc.ScaleTo.create(1.0, 1.02),
          cc.ScaleTo.create(1.0, 1.0),
          false
        )
      )
    );

    this.m_Background.runAction(cc.FadeIn.create(0.5));
    this.m_BackgroundDecoration.runAction(cc.ScaleTo.create(0.2, 1.0));
  },
  onShow: function() {
    this._super();

    this.m_LoadingTimeElapsed = 0;

    this.m_TipText.setText('tip-' + Random.sharedRandom().random(0, 5, true));
    this.m_TipText.setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(300) - this.m_TipText.getHeight() / 2);

    this.m_BackgroundWaves.clear();

    Music.sharedMusic().stop();

    this.m_Background.runAction(cc.FadeIn.create(0.5));
    this.m_BackgroundDecoration.runAction(cc.ScaleTo.create(0.2, 1.0));
  },
  onHide: function() {
    this._super();

    this.m_Background.setOpacity(0);
    this.m_BackgroundDecoration.setScale(0);
  },
  onComplete: function() {
    ScreenManager.sharedManager().replace(Game);
  },
  update: function(time) {
    this._super(time);

    this.m_WavesTimeElapsed += time;
    this.m_LoadingTimeElapsed += time;

    if(this.m_WavesTimeElapsed >= this.m_WavesTime) {
      this.m_WavesTimeElapsed = 0;

      this.m_BackgroundWaves.create();
    }

    if(this.m_LoadingTimeElapsed >= this.m_LoadingTime) {
      this.onComplete();
    }

    //var percent = Math.floor(this.m_LoadingTimeElapsed / this.m_LoadingTime * 100);

    //this.m_LoadingText.ccsf([percent <= 100 ? percent : 100]);
    //this.m_LoadingText.setCenterPosition(Camera.sharedCamera().width - this.m_LoadingText.getWidth() / 2 - Camera.sharedCamera().coord(32), Camera.sharedCamera().coord(50));
  }
});

Loading.instance = false;
Loading.sharedScreen = function() {
  return Loading.instance ? Loading.instance : new Loading();
};
