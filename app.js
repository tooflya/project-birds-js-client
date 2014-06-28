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

(function() {
  App.run(false, {
    platform: 'standalone',
    language: 0,
    designed: {
      size: {
        width: 980,
        height: 551
      },
      graphics: {
        width: 1920,
        height: 1080
      },
      margin: {
        x: 0,
        y: 0
      }
    },
    orientations: {
      portrait: false,
      landscape: true
    },
    analytics: 0,
    purchases: true,
    vendor: 'tooflya',
    server: {
      url: 'http://www.tooflya.com',
      port: 82
    }
  }, [
  'Sources/Resources.js',
  'Sources/Language.js',
  'Sources/Properties.js',
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
  'Sources/Entities/ElementIcon.js',
  'Sources/Entities/ElementPart.js',
  'Sources/Entities/Target.js',
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
  'Sources/Screens/Popups/Challenge.js',
  'Sources/Screens/Popups/Purchase.js',
  'Sources/Screens/Popups/Multiplayer.js',
  'Sources/Managers/PopupShaderManager.js',
  'Sources/Managers/ElementsManager.js',
  'Sources/Managers/MatrixManager.js',
  'Sources/Managers/ActionsManager.js',
  'Sources/Panels/MenuPanel.js',
  'Sources/Panels/GamePanel.js',
  'Sources/Lists/AboutList.js',
  'Sources/Lists/ItemList.js',
  'Sources/Lists/HelpList.js',
  'Sources/Lists/AchievementsList.js',
  'Sources/Lists/LeaderboardList.js',
  'Sources/Lists/ChallengeList.js',
  'Sources/Game/Preview.js',
  'Sources/Game/Events.js',
  'Sources/Game/Thrower.js',
  'Sources/Game/Timer.js',
  'Sources/Game/Level.js',
  'Sources/Game/Pause.js',
  'Sources/Game/Touch.js',
  'Sources/Game/Animations.js',
  'Sources/Game/Tutorial.js',
  'Sources/Layers/ConfettiBackground.js',
  'Sources/Layers/DustBackground.js',
  'Sources/Layers/PurchasesBackground.js',
  'Sources/Maps/Promotion.js'
  ], function() {
    Preloader.preload(resources, function() {
      DataManager.sharedManager().getCurrentUser(function() {
        cc.canvas.style.cursor = "url('Resources/Graphics/cursor.png'), -moz-zoom-in";

        AchievementsManager.sharedManager();
        EnergyManager.sharedManager(references.coins.lives, 5, 30 * 60 * 1000);

        ScreenManager.sharedManager().replace(Menu);
      });
    }, application);
  }, function(callback) {
    console.log('Your are a new user - welcome!');

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

    AchievementsManager.sharedManager().install(achievements);

    DataManager.sharedManager().save(references.info.install, 1);
    DataManager.sharedManager().save(references.language, -1);
    DataManager.sharedManager().save(references.rating, 0);
    DataManager.sharedManager().save(references.coins.gold, 0);
    DataManager.sharedManager().save(references.coins.silver, 0);
    DataManager.sharedManager().save(references.coins.keys, 0);
    DataManager.sharedManager().save(references.coins.lives, 5);
    DataManager.sharedManager().save(references.lock.modes.classic, 0);
    DataManager.sharedManager().save(references.lock.modes.arcade, 0);
    DataManager.sharedManager().save(references.time.reward, 0);
    DataManager.sharedManager().save(references.weapon, 1);

    DataManager.sharedManager().save(references.items.weapon1, 1);
    DataManager.sharedManager().save(references.items.weapon2, 0);
    DataManager.sharedManager().save(references.items.weapon3, 0);
    DataManager.sharedManager().save(references.items.weapon4, 0);
    DataManager.sharedManager().save(references.items.weapon5, 0);
    DataManager.sharedManager().save(references.items.weapon6, 0);
    DataManager.sharedManager().save(references.items.weapon7, 0);
    DataManager.sharedManager().save(references.items.weapon8, 0);
    DataManager.sharedManager().save(references.items.weapon9, 0);
    DataManager.sharedManager().save(references.items.weapon10, 0);
    DataManager.sharedManager().save(references.items.weapon11, 0);

    DataManager.sharedManager().save(references.items.bird1, 0);
    DataManager.sharedManager().save(references.items.bird2, 0);
    DataManager.sharedManager().save(references.items.bird3, 0);
    DataManager.sharedManager().save(references.items.bird4, 0);
    DataManager.sharedManager().save(references.items.bird5, 0);
    DataManager.sharedManager().save(references.items.bird6, 0);
    DataManager.sharedManager().save(references.items.bird7, 0);
    DataManager.sharedManager().save(references.items.bird8, 0);

    DataManager.sharedManager().save(references.items.bonus1, 0);
    DataManager.sharedManager().save(references.items.bonus2, 0);
    DataManager.sharedManager().save(references.items.bonus3, 0);
    DataManager.sharedManager().save(references.items.bonus4, 0);
    DataManager.sharedManager().save(references.items.bonus5, 0);
    DataManager.sharedManager().save(references.items.bonus6, 0);
    DataManager.sharedManager().save(references.items.bonus7, 0);
    DataManager.sharedManager().save(references.items.bonus8, 0);

    DataManager.sharedManager().save(references.tutorial.enable, 1);
    DataManager.sharedManager().save(references.tutorial.element1, 1);
    DataManager.sharedManager().save(references.tutorial.element2, 1);
    DataManager.sharedManager().save(references.tutorial.element3, 1);
    DataManager.sharedManager().save(references.tutorial.element4, 1);
    DataManager.sharedManager().save(references.tutorial.element5, 1);
    DataManager.sharedManager().save(references.tutorial.element6, 1);

    callback();
  });
})();
