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

AppInitialization = function(params, files) {
  App.run(false, params, files.concat([
    'Sources/Entities/Button.js',
    'Sources/Entities/CircleDecoration1.js',
    'Sources/Entities/CircleDecoration2.js',
    'Sources/Entities/PopupShader.js',
    'Sources/Entities/Mark.js',
    'Sources/Entities/Star.js',
    'Sources/Entities/Feather.js',
    'Sources/Entities/Explosion.js',
    'Sources/Entities/Bird.js',
    'Sources/Entities/BombBird.js',
    'Sources/Entities/FlayerBird.js',
    'Sources/Entities/BonusBird.js',
    'Sources/Entities/BirdExplosion.js',
    'Sources/Entities/SplashStar.js',
    'Sources/Entities/Confetti.js',
    'Sources/Entities/Key.js',
    'Sources/Entities/Dust.js',
    'Sources/Entities/Water.js',
    'Sources/Entities/ParticleCoin.js',
    'Sources/Entities/ParticleKey.js',
    'Sources/Entities/ParticleLive.js',
    'Sources/Entities/WeaponParticle1.js',
    'Sources/Entities/WeaponParticle2.js',
    'Sources/Entities/Bonus.js',
    'Sources/Entities/Bonus1.js',
    'Sources/Entities/Bonus2.js',
    'Sources/Entities/Bonus6.js',
    'Sources/Entities/Bonus7.js',
    'Sources/Entities/Catapult.js',
    'Sources/Entities/CatapultBird.js',
    'Sources/Entities/Element.js',
    'Sources/Entities/ElementSplash.js',
    'Sources/Entities/ElementIcon.js',
    'Sources/Entities/ElementPart.js',
    'Sources/Entities/ElementStar.js',
    'Sources/Entities/Target.js',
    'Sources/Entities/BubbleTarget.js',
    'Sources/Entities/HealthParticle.js',
    'Sources/Entities/SplashText.js',
    'Sources/Entities/Notify.js',
    'Sources/Entities/Entry.js',
    'Sources/Entities/Bubble.js',
    'Sources/Entities/BubblePoping.js',
    'Sources/Entities/Holder.js',
    'Sources/Screens/Screens/Preloader.js',
    'Sources/Screens/Screens/Menu.js',
    'Sources/Screens/Screens/Settings.js',
    'Sources/Screens/Screens/Credits.js',
    'Sources/Screens/Screens/Languages.js',
    'Sources/Screens/Screens/Mode.js',
    'Sources/Screens/Screens/More.js',
    'Sources/Screens/Screens/Reset.js',
    'Sources/Screens/Screens/Shop.js',
    'Sources/Screens/Screens/Levels.js',
    'Sources/Screens/Screens/Loading.js',
    'Sources/Screens/Screens/Game.js',
    'Sources/Screens/Popups/ExtendedPopup.js',
    'Sources/Screens/Popups/Rate.js',
    'Sources/Screens/Popups/Social.js',
    'Sources/Screens/Popups/Exit.js',
    'Sources/Screens/Popups/ResetProgress.js',
    'Sources/Screens/Popups/Coins.js',
    'Sources/Screens/Popups/Keys.js',
    'Sources/Screens/Popups/Lives.js',
    'Sources/Screens/Popups/Moves.js',
    'Sources/Screens/Popups/Gift.js',
    'Sources/Screens/Popups/Help.js',
    'Sources/Screens/Popups/Lock.js',
    'Sources/Screens/Popups/Item.js',
    'Sources/Screens/Popups/Bought.js',
    'Sources/Screens/Popups/Rating.js',
    'Sources/Screens/Popups/Pause.js',
    'Sources/Screens/Popups/Achievements.js',
    'Sources/Screens/Popups/Finish.js',
    'Sources/Screens/Popups/Invite.js',
    'Sources/Screens/Popups/Purchase.js',
    'Sources/Screens/Popups/Multiplayer.js',
    'Sources/Screens/Popups/Level.js',
    'Sources/Screens/Popups/LivesSend.js',
    'Sources/Screens/Popups/LivesReceive.js',
    'Sources/Screens/Popups/LivesRequest.js',
    'Sources/Screens/Popups/Events.js',
    'Sources/Managers/PopupShaderManager.js',
    'Sources/Managers/ElementsManager.js',
    'Sources/Managers/MatrixManager.js',
    'Sources/Managers/ActionsManager.js',
    'Sources/Managers/EntryManager.js',
    'Sources/Panels/MenuPanel.js',
    'Sources/Panels/GamePanel.js',
    'Sources/Panels/FriendsPanel.js',
    'Sources/Lists/AboutList.js',
    'Sources/Lists/ItemList.js',
    'Sources/Lists/HelpList.js',
    'Sources/Lists/LevelList.js',
    'Sources/Lists/AchievementsList.js',
    'Sources/Lists/LeaderboardList.js',
    'Sources/Lists/InviteList.js',
    'Sources/Lists/LivesSendList.js',
    'Sources/Lists/FriendsList.js',
    'Sources/Lists/MultiplayerList.js',
    'Sources/Lists/EventsList.js',
    'Sources/Lists/LivesReceiveList.js',
    'Sources/Lists/LivesRequestList.js',
    'Sources/Game/Preview.js',
    'Sources/Game/Events.js',
    'Sources/Game/Thrower.js',
    'Sources/Game/Timer.js',
    'Sources/Game/Level.js',
    'Sources/Game/Levels.js',
    'Sources/Game/Pause.js',
    'Sources/Game/Touch.js',
    'Sources/Game/Score.js',
    'Sources/Game/Animations.js',
    'Sources/Game/Tutorial.js',
    'Sources/Layers/ConfettiBackground.js',
    'Sources/Layers/DustBackground.js',
    'Sources/Layers/PurchasesBackground.js',
    'Sources/Maps/Promotion.js'
  ]), function() {
    Preloader.preload(resources, function() {
      cc.canvas.style.cursor = "url('Resources/Graphics/cursor.png'), -moz-zoom-in";

      DataManager.sharedManager().setup(function() {
        EnergyManager.sharedManager(references.coins.lives, 5, 60 * 60 * 1000);

        App.reload(function() {
          ScreenManager.sharedManager().replace(Menu);
        });
      });
    });
  }, function(callback) {
    var achievements = [];

    achievements.push({id: '', icon: s_AchievementIcon1, name: 'achievement-name-1', description: 'achievement-description-1', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon2, name: 'achievement-name-2', description: 'achievement-description-2', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon3, name: 'achievement-name-3', description: 'achievement-description-3', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon4, name: 'achievement-name-4', description: 'achievement-description-4', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon5, name: 'achievement-name-5', description: 'achievement-description-5', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon6, name: 'achievement-name-6', description: 'achievement-description-6', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon7, name: 'achievement-name-7', description: 'achievement-description-7', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon8, name: 'achievement-name-8', description: 'achievement-description-8', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon9, name: 'achievement-name-9', description: 'achievement-description-9', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon10, name: 'achievement-name-10', description: 'achievement-description-10', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon11, name: 'achievement-name-11', description: 'achievement-description-11', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon12, name: 'achievement-name-12', description: 'achievement-description-12', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon13, name: 'achievement-name-13', description: 'achievement-description-13', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon14, name: 'achievement-name-14', description: 'achievement-description-14', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon15, name: 'achievement-name-15', description: 'achievement-description-15', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon16, name: 'achievement-name-16', description: 'achievement-description-16', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon17, name: 'achievement-name-17', description: 'achievement-description-17', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon18, name: 'achievement-name-18', description: 'achievement-description-18', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon19, name: 'achievement-name-19', description: 'achievement-description-19', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon20, name: 'achievement-name-20', description: 'achievement-description-20', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon21, name: 'achievement-name-21', description: 'achievement-description-21', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon22, name: 'achievement-name-22', description: 'achievement-description-22', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon23, name: 'achievement-name-23', description: 'achievement-description-23', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon24, name: 'achievement-name-24', description: 'achievement-description-24', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon25, name: 'achievement-name-25', description: 'achievement-description-25', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon26, name: 'achievement-name-26', description: 'achievement-description-26', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon27, name: 'achievement-name-27', description: 'achievement-description-27', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon28, name: 'achievement-name-28', description: 'achievement-description-28', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon29, name: 'achievement-name-29', description: 'achievement-description-29', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon30, name: 'achievement-name-30', description: 'achievement-description-30', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon31, name: 'achievement-name-31', description: 'achievement-description-31', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon32, name: 'achievement-name-32', description: 'achievement-description-32', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon33, name: 'achievement-name-33', description: 'achievement-description-34', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon34, name: 'achievement-name-34', description: 'achievement-description-34', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon35, name: 'achievement-name-35', description: 'achievement-description-35', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon36, name: 'achievement-name-36', description: 'achievement-description-36', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon37, name: 'achievement-name-37', description: 'achievement-description-37', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon38, name: 'achievement-name-38', description: 'achievement-description-38', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon39, name: 'achievement-name-39', description: 'achievement-description-39', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon40, name: 'achievement-name-40', description: 'achievement-description-40', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon41, name: 'achievement-name-41', description: 'achievement-description-41', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon42, name: 'achievement-name-42', description: 'achievement-description-42', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon43, name: 'achievement-name-43', description: 'achievement-description-43', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon44, name: 'achievement-name-44', description: 'achievement-description-44', state: 0});
    achievements.push({id: '', icon: s_AchievementIcon45, name: 'achievement-name-45', description: 'achievement-description-45', state: 0});

    AchievementsManager.sharedManager().install(achievements, function() {
      DataManager.sharedManager().set(true,
      [
        references.sound,
        references.music,
        references.language,
        references.info.install,
        references.info.game,
        references.info.rate,
        references.coins.gold,
        references.coins.silver,
        references.coins.keys,
        references.coins.lives,

        references.lock.modes.classic,
        references.lock.modes.arcade,
        references.time.reward,
        references.time.days,
        references.info.weapon,

        references.items.weapon1,
        references.items.weapon2,
        references.items.weapon3,
        references.items.weapon4,
        references.items.weapon5,
        references.items.weapon6,
        references.items.weapon7,
        references.items.weapon8,
        references.items.weapon9,
        references.items.weapon10,
        references.items.weapon11,

        references.items.bird1,
        references.items.bird2,
        references.items.bird3,
        references.items.bird4,
        references.items.bird5,
        references.items.bird6,
        references.items.bird7,
        references.items.bird8,

        references.items.bonus1,
        references.items.bonus2,
        references.items.bonus3,
        references.items.bonus4,
        references.items.bonus5,
        references.items.bonus6,
        references.items.bonus7,
        references.items.bonus8,

        references.tutorial.enable,
        references.tutorial.element1,
        references.tutorial.element2,
        references.tutorial.element3,
        references.tutorial.element4,
        references.tutorial.element5,
        references.tutorial.element6,

        references.tutorial.any1,

        references.levels.level1,
        references.levels.level2,
        references.levels.level3,
        references.levels.level4,
        references.levels.level5,
        references.levels.level6,
        references.levels.level7,
        references.levels.level8,
        references.levels.level9,
        references.levels.level10,
        references.levels.level11,
        references.levels.level12,
        references.levels.level13,
        references.levels.level14,
        references.levels.level15,
        references.levels.level16,
        references.levels.level17,
        references.levels.level18,
        references.levels.level19,
        references.levels.level20,
        references.levels.level21,
        references.levels.level22,
        references.levels.level23,
        references.levels.level24,
        references.levels.level25,
        references.levels.level26,
        references.levels.level27,
        references.levels.level28,
        references.levels.level29,
        references.levels.level30,
        references.levels.level31,
        references.levels.level32,
        references.levels.level33,
        references.levels.level34,
        references.levels.level35,
        references.levels.level36,
        references.levels.level37,
        references.levels.level38,
        references.levels.level39,
        references.levels.level40,
        references.levels.level41,
        references.levels.level42,
        references.levels.level43,
        references.levels.level44,
        references.levels.level45,
        references.levels.level46,
        references.levels.level47,
        references.levels.level48,
        references.levels.level49,
        references.levels.level50,
        references.levels.level51,
        references.levels.level52,
        references.levels.level53,
        references.levels.level54,
        references.levels.level55,
        references.levels.level56,
        references.levels.level57,
        references.levels.level58,
        references.levels.level59,
        references.levels.level60,
        references.levels.level61,
        references.levels.level62,
        references.levels.level63,
        references.levels.level64,
        references.levels.level65,
        references.levels.level66,
        references.levels.level67,
        references.levels.level68,
        references.levels.level69,
        references.levels.level70,
        references.levels.level71,
        references.levels.level72,
        references.levels.level73,
        references.levels.level74,
        references.levels.level75,
        references.levels.level76,
        references.levels.level77,
        references.levels.level78,
        references.levels.level79,
        references.levels.level80,
        references.levels.level81,
        references.levels.level82,
        references.levels.level83,
        references.levels.level84,
        references.levels.level85,
        references.levels.level86,
        references.levels.level87,
        references.levels.level88,
        references.levels.level89,
        references.levels.level90,

        references.levels.current
      ],
      [
        1, 1, -1, 1, 0, 0, 0, 0, 0, 5,
        0, 0, 0, -1, 1,
        1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1,
        1, 0, 0, 0, 0, 0, 0,
        0,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0
      ], {
        success: function() {
          callback();
        }
      });
    });
  });

  App.reload = function(callback) {
    FriendsList.sharedScreen(DisplayManager.sharedManager());
    var screens = [
      Menu,
      Settings,
      Credits,
      Languages,
      Mode,
      More,
      Reset,
      Shop,
      Levels,
      Loading,
      Rate,
      Social,
      Exit,
      ResetProgress,
      Coins,
      Keys,
      Lives,
      Moves,
      Gift,
      Help,
      Lock,
      Item,
      Bought,
      Rating,
      Pause,
      Achievements,
      Invite,
      Purchase,
      Multiplayer,
      Level,
      LivesSend,
      LivesReceive,
      LivesRequest,
      Events
    ];

    screens.forEach(function(c) {
      c.instance = false;
    });

    screens.forEach(function(c) {
      c.sharedScreen();
    });

    if(callback) {
      new PausableTimeout(function() {
        callback();
      }, 3000);
    }
  };
};
