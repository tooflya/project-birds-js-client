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

Promotion = ClippedEntity.extend({
  m_Day: -1,
  m_Showed: false,
  m_Background: false,
  m_Title: false,
  m_Scroll: false,
  m_IsAnimationRunning: false,
  m_IsShowAnimationRunning: false,
  m_IsHideAnimationRunning: false,
  m_Water: false,
  m_Pricks: false,
  m_Stars: false,
  m_TextsHolder: false,
  m_Coins: [],
  m_Days: [],
  m_Texts: [],
  ctor: function(parent) {
    this._super(s_DailyMapBackground, parent);

    Promotion.instance = this;

    this.m_Background = BackgroundColor.create(cc.c4(0, 0, 0, 0), parent);
    this.m_TextsHolder = Entity.create(Orientation.parse(s_LoadingBackground), parent);
    this.m_Title = Entity.create(s_DailyMapTitle, this);
    this.m_Scroll = AnimatedEntity.create(s_MapScroll, 2, 2, parent);

    this.m_TitleText = Text.create('daily-revenue-title', this.m_Title);

    this.m_Water = EntityManager.create(30, Water.create(), this);
    this.m_Pricks = EntityManager.create(20, Entity.create(s_Prick), this);
    this.m_Stars = EntityManager.create(100, Star.create(1), this);

    this.m_Days[0] = Entity.create(s_DailyMapDayIcon1, this);
    this.m_Days[1] = Entity.create(s_DailyMapDayIcon2, this);
    this.m_Days[2] = Entity.create(s_DailyMapDayIcon3, this);
    this.m_Days[3] = Entity.create(s_DailyMapDayIcon4, this);
    this.m_Days[4] = Entity.create(s_DailyMapDayIcon5, this);

    this.m_Coins[0] = AnimatedEntity.create(s_PanelIcon1, 5, 4, this.m_TextsHolder);
    this.m_Coins[1] = AnimatedEntity.create(s_PanelIcon2, 5, 4, this.m_TextsHolder);

    this.m_Texts[0] = Text.create('daily-reward-side-title', this.m_TextsHolder, cc.TEXT_ALIGNMENT_LEFT);
    this.m_Texts[1] = Text.create('daily-reward-side-coins-1', this.m_TextsHolder, cc.TEXT_ALIGNMENT_LEFT);
    this.m_Texts[2] = Text.create('daily-reward-side-coins-2', this.m_TextsHolder, cc.TEXT_ALIGNMENT_LEFT);
    this.m_Texts[3] = Text.create('daily-reward-side-description', this.m_TextsHolder, cc.TEXT_ALIGNMENT_LEFT);
    this.m_Texts[4] = Text.create('tap-to-continue', this.m_TextsHolder, cc.TEXT_ALIGNMENT_LEFT);

    this.m_Scroll.animate(0.02);

    this.m_Coins[0].animate(0.02);
    this.m_Coins[1].animate(0.02);

    this.m_Coins[0].setRotation(-45);
    this.m_Coins[1].setRotation(-45);

    this.registerTouchable(true);
    this.setClippedWidth(Camera.sharedCamera().width);
    this.setClippedHeight(-500);

    this.setZOrder(1);
    this.m_Scroll.setZOrder(2);

    this.m_Background.setCascadeOpacityEnabled(true);
    this.m_TextsHolder.setCascadeOpacityEnabled(true);
    this.m_TextsHolder.setOpacity(0);

    this.m_Texts[4].runAction(
      cc.RepeatForever.create(
        cc.Sequence.create(
          cc.FadeTo.create(0.5, 0),
          cc.FadeTo.create(0.5, 255)
          )
        )
      );
  },
  show: function() {
    this.assert(this.m_Showed, "The Daily Revenue Map alredy been showed.");

    if(Date.now() - DataManager.sharedManager().get(references.time.reward) > this.getEventsInMilliseconds('day') && !cc.Browser.isMobile) {
      if(Date.now() - DataManager.sharedManager().get(references.time.reward) > this.getEventsInMilliseconds('day') * 2) {
        this.m_Day = 1;
      } else {
        this.m_Day = DataManager.sharedManager().get(references.time.days) + 1;
      }

      DataManager.sharedManager().save(references.time.reward, Date.now());
      DataManager.sharedManager().save(references.time.days, this.m_Day);
    } else {
      this.onHide();

      return false;
    }

    this.m_Background.runRecognizeAction(false, {
      name: 'fade',
      time: 0.5,
      value: 200
    });

    this.m_IsShowAnimationRunning = true;

    this.create();

    this.m_TextsHolder.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y);
    this.m_Title.create().setCenterPosition(this.getWidth() / 2, this.getHeight());
    this.m_Scroll.create().setCenterPosition(Camera.sharedCamera().center.x / 2, 0);
    this.m_TitleText.setCenterPosition(this.m_Title.getWidth() / 2, this.m_Title.getHeight() / 2);

    this.m_Days[0].create().setCenterPosition(this.getWidth() / 2 - Camera.sharedCamera().coord(150), this.getHeight() / 2 + Camera.sharedCamera().coord(80));
    this.m_Days[1].create().setCenterPosition(this.getWidth() / 2 + Camera.sharedCamera().coord(30), this.getHeight() / 2 + Camera.sharedCamera().coord(350));
    this.m_Days[2].create().setCenterPosition(this.getWidth() / 2 + Camera.sharedCamera().coord(130), this.getHeight() / 2 + Camera.sharedCamera().coord(30));
    this.m_Days[3].create().setCenterPosition(this.getWidth() / 2 - Camera.sharedCamera().coord(120), this.getHeight() / 2 - Camera.sharedCamera().coord(200));
    this.m_Days[4].create().setCenterPosition(this.getWidth() / 2 + Camera.sharedCamera().coord(120), this.getHeight() / 2 - Camera.sharedCamera().coord(340));

    this.m_Water.create().setCenterPosition(this.getWidth() / 2 - Camera.sharedCamera().coord(20), this.getHeight() / 2 + Camera.sharedCamera().coord(180));
    this.m_Water.create().setCenterPosition(this.getWidth() / 2 - Camera.sharedCamera().coord(10), this.getHeight() / 2 + Camera.sharedCamera().coord(170));
    this.m_Water.create().setCenterPosition(this.getWidth() / 2 - Camera.sharedCamera().coord(25), this.getHeight() / 2 + Camera.sharedCamera().coord(160));
    this.m_Water.create().setCenterPosition(this.getWidth() / 2 + Camera.sharedCamera().coord(25), this.getHeight() / 2 + Camera.sharedCamera().coord(130));
    this.m_Water.create().setCenterPosition(this.getWidth() / 2 + Camera.sharedCamera().coord(35), this.getHeight() / 2 + Camera.sharedCamera().coord(120));
    this.m_Water.create().setCenterPosition(this.getWidth() / 2 + Camera.sharedCamera().coord(15), this.getHeight() / 2 + Camera.sharedCamera().coord(110));
    this.m_Water.create().setCenterPosition(this.getWidth() / 2 + Camera.sharedCamera().coord(70), this.getHeight() / 2 + Camera.sharedCamera().coord(170));
    this.m_Water.create().setCenterPosition(this.getWidth() / 2 + Camera.sharedCamera().coord(80), this.getHeight() / 2 + Camera.sharedCamera().coord(160));
    this.m_Water.create().setCenterPosition(this.getWidth() / 2 + Camera.sharedCamera().coord(90), this.getHeight() / 2 + Camera.sharedCamera().coord(150));
    this.m_Water.create().setCenterPosition(this.getWidth() / 2 + Camera.sharedCamera().coord(200), this.getHeight() / 2 + Camera.sharedCamera().coord(250));
    this.m_Water.create().setCenterPosition(this.getWidth() / 2 + Camera.sharedCamera().coord(190), this.getHeight() / 2 + Camera.sharedCamera().coord(240));
    this.m_Water.create().setCenterPosition(this.getWidth() / 2 + Camera.sharedCamera().coord(200), this.getHeight() / 2 + Camera.sharedCamera().coord(230));
    this.m_Water.create().setCenterPosition(this.getWidth() / 2 + Camera.sharedCamera().coord(200), this.getHeight() / 2 + Camera.sharedCamera().coord(170));
    this.m_Water.create().setCenterPosition(this.getWidth() / 2 + Camera.sharedCamera().coord(190), this.getHeight() / 2 + Camera.sharedCamera().coord(160));
    this.m_Water.create().setCenterPosition(this.getWidth() / 2 + Camera.sharedCamera().coord(200), this.getHeight() / 2 + Camera.sharedCamera().coord(150));
    this.m_Water.create().setCenterPosition(this.getWidth() / 2 + Camera.sharedCamera().coord(210), this.getHeight() / 2 - Camera.sharedCamera().coord(130));
    this.m_Water.create().setCenterPosition(this.getWidth() / 2 + Camera.sharedCamera().coord(190), this.getHeight() / 2 - Camera.sharedCamera().coord(140));
    this.m_Water.create().setCenterPosition(this.getWidth() / 2 + Camera.sharedCamera().coord(210), this.getHeight() / 2 - Camera.sharedCamera().coord(150));
    this.m_Water.create().setCenterPosition(this.getWidth() / 2 - Camera.sharedCamera().coord(190), this.getHeight() / 2 - Camera.sharedCamera().coord(50));
    this.m_Water.create().setCenterPosition(this.getWidth() / 2 - Camera.sharedCamera().coord(200), this.getHeight() / 2 - Camera.sharedCamera().coord(60));
    this.m_Water.create().setCenterPosition(this.getWidth() / 2 - Camera.sharedCamera().coord(190), this.getHeight() / 2 - Camera.sharedCamera().coord(70));
    this.m_Water.create().setCenterPosition(this.getWidth() / 2 - Camera.sharedCamera().coord(60), this.getHeight() / 2 - Camera.sharedCamera().coord(0));
    this.m_Water.create().setCenterPosition(this.getWidth() / 2 - Camera.sharedCamera().coord(80), this.getHeight() / 2 - Camera.sharedCamera().coord(10));
    this.m_Water.create().setCenterPosition(this.getWidth() / 2 - Camera.sharedCamera().coord(60), this.getHeight() / 2 - Camera.sharedCamera().coord(20));
    this.m_Water.create().setCenterPosition(this.getWidth() / 2 - Camera.sharedCamera().coord(40), this.getHeight() / 2 - Camera.sharedCamera().coord(80));
    this.m_Water.create().setCenterPosition(this.getWidth() / 2 - Camera.sharedCamera().coord(50), this.getHeight() / 2 - Camera.sharedCamera().coord(90));
    this.m_Water.create().setCenterPosition(this.getWidth() / 2 - Camera.sharedCamera().coord(40), this.getHeight() / 2 - Camera.sharedCamera().coord(100));
    this.m_Water.create().setCenterPosition(this.getWidth() / 2 + Camera.sharedCamera().coord(20), this.getHeight() / 2 - Camera.sharedCamera().coord(150));
    this.m_Water.create().setCenterPosition(this.getWidth() / 2 + Camera.sharedCamera().coord(10), this.getHeight() / 2 - Camera.sharedCamera().coord(160));
    this.m_Water.create().setCenterPosition(this.getWidth() / 2 + Camera.sharedCamera().coord(20), this.getHeight() / 2 - Camera.sharedCamera().coord(170));

    this.m_Pricks.create().setCenterPosition(this.getWidth() / 2 - Camera.sharedCamera().coord(150), this.getHeight() / 2 + Camera.sharedCamera().coord(160)); this.m_Pricks.get(0).setRotation(90);
    this.m_Pricks.create().setCenterPosition(this.getWidth() / 2 - Camera.sharedCamera().coord(130), this.getHeight() / 2 + Camera.sharedCamera().coord(230)); this.m_Pricks.get(1).setRotation(125);
    this.m_Pricks.create().setCenterPosition(this.getWidth() / 2 - Camera.sharedCamera().coord(70), this.getHeight() / 2 + Camera.sharedCamera().coord(280)); this.m_Pricks.get(2).setRotation(145);

    this.m_Pricks.create().setCenterPosition(this.getWidth() / 2 + Camera.sharedCamera().coord(150), this.getHeight() / 2 + Camera.sharedCamera().coord(290)); this.m_Pricks.get(3).setRotation(40);
    this.m_Pricks.create().setCenterPosition(this.getWidth() / 2 + Camera.sharedCamera().coord(190), this.getHeight() / 2 + Camera.sharedCamera().coord(230)); this.m_Pricks.get(4).setRotation(80);
    this.m_Pricks.create().setCenterPosition(this.getWidth() / 2 + Camera.sharedCamera().coord(190), this.getHeight() / 2 + Camera.sharedCamera().coord(150)); this.m_Pricks.get(5).setRotation(100);

    this.m_Pricks.create().setCenterPosition(this.getWidth() / 2 + Camera.sharedCamera().coord(30), this.getHeight() / 2 - Camera.sharedCamera().coord(10)); this.m_Pricks.get(6).setRotation(-5);
    this.m_Pricks.create().setCenterPosition(this.getWidth() / 2 - Camera.sharedCamera().coord(30), this.getHeight() / 2 - Camera.sharedCamera().coord(25)); this.m_Pricks.get(7).setRotation(-25);
    this.m_Pricks.create().setCenterPosition(this.getWidth() / 2 - Camera.sharedCamera().coord(80), this.getHeight() / 2 - Camera.sharedCamera().coord(60)); this.m_Pricks.get(8).setRotation(-45);

    this.m_Pricks.create().setCenterPosition(this.getWidth() / 2 - Camera.sharedCamera().coord(90), this.getHeight() / 2 - Camera.sharedCamera().coord(330)); this.m_Pricks.get(9).setRotation(50);
    this.m_Pricks.create().setCenterPosition(this.getWidth() / 2 - Camera.sharedCamera().coord(40), this.getHeight() / 2 - Camera.sharedCamera().coord(360)); this.m_Pricks.get(10).setRotation(20);
    this.m_Pricks.create().setCenterPosition(this.getWidth() / 2 + Camera.sharedCamera().coord(20), this.getHeight() / 2 - Camera.sharedCamera().coord(370)); this.m_Pricks.get(11).setRotation(10);

    this.m_Coins[0].create().setCenterPosition(Camera.sharedCamera().center.x + Camera.sharedCamera().coord(150), Camera.sharedCamera().center.y + Camera.sharedCamera().coord(50));
    this.m_Coins[1].create().setCenterPosition(Camera.sharedCamera().center.x + Camera.sharedCamera().coord(150), Camera.sharedCamera().center.y + Camera.sharedCamera().coord(150));

    var coins = {
      silver: 0,
      gold: 0
    };

    switch(this.m_Day) {
      case 1:
      coins.silver = 500;
      coins.gold = 10;
      break;
      case 2:
      coins.silver = 1000;
      coins.gold = 25;
      break;
      case 3:
      coins.silver = 4000;
      coins.gold = 50;
      break;
      case 4:
      coins.silver = 8000;
      coins.gold = 100;
      break;
      case 5:
      coins.silver = 10000;
      coins.gold = 500;
      break;
    }

    DataManager.sharedManager().update(references.coins.silver, coins.silver);
    DataManager.sharedManager().update(references.coins.gold, coins.gold);

    this.m_Texts[1].ccsf([coins.silver]);
    this.m_Texts[2].ccsf([coins.gold]);

    this.m_Texts[0].setCenterPosition(Camera.sharedCamera().center.x + Camera.sharedCamera().coord(120) + this.m_Texts[0].getWidth() / 2, Camera.sharedCamera().center.y + Camera.sharedCamera().coord(350));
    this.m_Texts[1].setCenterPosition(Camera.sharedCamera().center.x + Camera.sharedCamera().coord(190) + this.m_Texts[1].getWidth() / 2, Camera.sharedCamera().center.y + Camera.sharedCamera().coord(50));
    this.m_Texts[2].setCenterPosition(Camera.sharedCamera().center.x + Camera.sharedCamera().coord(190) + this.m_Texts[2].getWidth() / 2, Camera.sharedCamera().center.y + Camera.sharedCamera().coord(150));
    this.m_Texts[3].setCenterPosition(Camera.sharedCamera().center.x + Camera.sharedCamera().coord(120) + this.m_Texts[3].getWidth() / 2, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(150));
    this.m_Texts[4].setCenterPosition(Camera.sharedCamera().center.x + Camera.sharedCamera().coord(120) + this.m_Texts[4].getWidth() / 2, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(400));

    for(var i = 0; i < 5; i++) {
      this.m_Days[i].setVisible(false);
    }

    for(var i = 0; i < this.m_Pricks.getCount(); i++) {
      this.m_Pricks.get(i).setVisible(false);
    }

    return true;
  },
  hide: function() {
    this.assert(!this.m_Showed, "The Daily Revenue Map doesn't showing.");

    if(this.m_IsAnimationRunning || this.m_IsShowAnimationRunning || this.m_IsHideAnimationRunning) return;

    this.m_Background.runRecognizeAction(false, {
      name: 'fade',
      time: 0.5,
      value: 0
    });
    this.m_TextsHolder.runRecognizeAction(false, {
      name: 'fade',
      time: 0.5,
      value: 0
    });

    this.m_IsHideAnimationRunning = true;
  },
  isShowed: function() {
    return this.m_Showed;
  },
  onCreate: function() {
    this._super();
  },
  onDestroy: function() {
    this._super();
  },
  onShow: function() {
    this.m_Showed = true;
    this.m_IsShowAnimationRunning = false;
    this.m_IsAnimationRunning = true;

    this.continueAnimation(false, {type: 0, index: 0, prick: 0});
  },
  onHide: function() {
    this.m_Showed = false;
    this.m_IsHideAnimationRunning = false;

    this.removeFromParent();
    this.m_Background.removeFromParent();
    this.m_TextsHolder.removeFromParent();

    Promotion.instance = false;
  },
  onEnter: function() {
    if(cc.Browser.isMobile) {
      cc.Director.getInstance().getTouchDispatcher()._addTargetedDelegate(this, 0, true);
    } else {
      cc.Director.getInstance().getMouseDispatcher().addMouseDelegate(this, Touchable.priority--);
    }

    this.scheduleUpdate();

    this._super();
  },
  onExit: function() {
    if(cc.Browser.isMobile) {
      cc.Director.getInstance().getTouchDispatcher()._removeDelegate(this);
    } else {
      cc.Director.getInstance().getMouseDispatcher().removeMouseDelegate(this);
    }

    this.stopAllActions();
    this.unscheduleUpdate();

    this._super();
  },
  onTouch: function() {
    if(!(this.m_IsShowAnimationRunning || this.m_IsHideAnimationRunning || this.m_IsAnimationRunning) && this.m_Showed) {
      this.hide();
    }
  },
  containsTouchLocation: function() {
    return true;
  },
  continueAnimation: function(object, params) {
    Sound.sharedSound().play(s_SoundComplete);

    switch(params.type) {
      case 0:
      if(params.index == 5 - 1) {
        this.onAnimationEnd();
      }

      if(true) {
        this.m_Days[params.index].setVisible(true);
        this.m_Days[params.index].setScale(0);
        this.m_Days[params.index].runAction(
          cc.Sequence.create(
            cc.ScaleTo.create(0.15, 0.8, 1.2),
            cc.ScaleTo.create(0.15, 1.2, 0.8),
            cc.ScaleTo.create(0.2, 1.0, 1.0),
            params.index == 5 - 1 ? false : cc.CallFunc.create(this.continueAnimation, this, {type: 1, index: ++params.index, prick: params.prick})
            )
          );
      }
      break;
      case 1:
        this.m_Pricks.get(params.prick).setVisible(true);
        this.m_Pricks.get(params.prick).setScale(3.0);
        this.m_Pricks.get(params.prick).runAction(
          cc.Sequence.create(
            cc.EaseBounceOut.create(
              cc.ScaleTo.create(0.5, 1.0)
              ),
            cc.CallFunc.create(this.continueAnimation, this, {type: ++params.prick % 3 == 0 ? 0 : 1, index: params.index, prick: params.prick})
            )
          );
      break;
    }
  },
  onAnimationEnd: function(index) {
    Sound.sharedSound().play(s_SoundEquipUnlock);

    switch(index) {
      default:
      ConfettiBackground.sharedScreen(this.m_Background.getParent(0)).show();

      for(var i = 0; i < 5; i++) {
        if(i > this.m_Day - 1) {
          this.m_Days[i].setColor(cc.c3(100, 100, 100));
        }
      }

      for(var i = 0; i < this.m_Stars.getCapacity(); i++) {
        this.m_Stars.create().setCenterPosition(this.m_Days[this.m_Day - 1].getCenterX(), this.m_Days[this.m_Day - 1].getCenterY());
      }

      this.m_Days[this.m_Day - 1].runAction(
        cc.Sequence.create(
        cc.ScaleTo.create(0.1, 0.8, 1.2),
        cc.ScaleTo.create(0.1, 1.2, 0.8),
        cc.ScaleTo.create(0.1, 1.0, 1.0)
        )
      );

      this.runAction(
        cc.Sequence.create(cc.EaseBounceOut.create(
          cc.MoveTo.create(1.0, cc.p(this.getCenterX() - Camera.sharedCamera().coord(200), this.getCenterY()))
          ),
          cc.CallFunc.create(this.showDescription, this, this)
        )
      );
      this.m_IsAnimationRunning = false;
      break;
      case 1:
      this.m_IsAnimationRunning = false;
      break;
    }
  },
  showDescription: function() {
    this.m_TextsHolder.runAction(
      cc.Sequence.create(
        cc.FadeTo.create(0.5, 255)
        )
      );
  },
  update: function(time) {
    this._super(time);

    if(this.m_IsShowAnimationRunning) {
      this.setClippedHeight(this.getClippedHeight() + Camera.sharedCamera().coord(1000) * time);

      if(this.getClippedHeight() >= this.getHeight() + Camera.sharedCamera().coord(200)) {
        this.onShow();
      }
    }

    if(this.m_IsHideAnimationRunning) {
      this.setClippedHeight(this.getClippedHeight() - Camera.sharedCamera().coord(1000) * time);

      if(this.getClippedHeight() <= -Camera.sharedCamera().coord(200)) {
        this.onHide();
      }
    }

    if(this.m_IsShowAnimationRunning || this.m_IsHideAnimationRunning) {
      this.m_Scroll.setCenterPosition(Camera.sharedCamera().center.x - (this.m_IsHideAnimationRunning ? Camera.sharedCamera().coord(200) : 0), this.getHeight() - this.getClippedHeight() + this.m_Scroll.getHeight() / 2);
    }
  }
});

Promotion.instance = false;
Promotion.sharedInstance = function(parent) {
  return Promotion.instance ? Promotion.instance : new Promotion(parent);
};
