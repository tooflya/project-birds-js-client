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

Preloader = Screen.extend({
  ctor: function() {
    this._super();

    Preloader.instance = this;

    this.name = "Preloader screen";

    this.m_Background = Entity.create(LanguagesManager.sharedManager().getLanguageId() == 7 ? Orientation.parse(s_PreloaderBackgroundJapan) : Orientation.parse(s_PreloaderBackground), this, true);
    this.m_LoadingBarBackground = Entity.create(s_LoadingBarBackground, this);
    this.m_LoadingBar = TiledEntity.create(s_LoadingBar, 1, 1, this);
    this.m_LoadingText = Text.create('loading', this);

    this.m_LoadingBarBackground.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().coord(100));
    this.m_LoadingBar.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().coord(100));
    this.m_LoadingText.setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().coord(100));

    this.m_LoadingBar.setSize(577, 38);
    this.m_LoadingBar.showPercentage(0);
  },
  initWithResources: function(resources, selector, target) {
    this.resources = resources;
    this.selector = selector;
    this.target = target;
  },
  startLoading: function() {
    this.unschedule(this.startLoading);

    cc.Loader.preload(this.resources, this.selector, this.target);
    this.schedule(this.updatePercent);
  },
  updatePercent: function() {
    var percent = cc.Loader.getInstance().getPercentage();

    this.m_LoadingText.ccsf([percent]);
    this.m_LoadingBar.showPercentage(percent);
    this.m_LoadingBar.setCenterPosition(Camera.sharedCamera().center.x +  this.m_LoadingBar.getTextureRect().getWidth() / 2 - this.m_LoadingBar.getWidth() / 2, Camera.sharedCamera().coord(100));

    if(percent >= 100) {
      this.unschedule(this.updatePercent);
    }
  },
  onShow: function() {
    this.schedule(this.startLoading, 1.0);

    this.m_LoadingText.ccsf([0]);

    this._super();
  },
  onHide: function() {
    this._super();

    Preloader.instance = false;
  }
});

Preloader.preload = function(resources, selector, target) {
  Preloader.sharedScreen().initWithResources(resources, selector, target);
  ScreenManager.sharedManager().replace(Preloader);
};

Preloader.instance = false;
Preloader.sharedScreen = function() {
  return Preloader.instance ? Preloader.instance : new Preloader();
};
