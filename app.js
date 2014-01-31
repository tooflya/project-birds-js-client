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
  App.run(true, {
      standalone: false,
      designed: {
        width: 1920,
        height: 1080
      },
      orientation: 'height'
    }, [
    'Sources/Resources.js',
    'Sources/Entities/Button.js',
    'Sources/Entities/LoadingWave.js',
    'Sources/Entities/PopupShader.js',
    'Sources/Screens/Screens/Preloader.js',
    'Sources/Screens/Screens/Menu.js',
    'Sources/Screens/Screens/Settings.js',
    'Sources/Screens/Screens/Credits.js',
    'Sources/Screens/Screens/Languages.js',
    'Sources/Screens/Screens/Mode.js',
    'Sources/Screens/Screens/More.js',
    'Sources/Screens/Screens/Reset.js',
    'Sources/Screens/Screens/Shop.js',
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
    'Sources/Screens/Popups/Rating.js',
    'Sources/Screens/Popups/Pause.js',
    'Sources/Screens/Popups/Achievements.js',
    'Sources/Managers/PopupShaderManager.js',
    'Sources/Panels/MenuPanel.js',
    'Sources/Panels/GamePanel.js'
  ], function() {
    Preloader.preload(resources, function() {
      ScreenManager.sharedManager().replace(Menu);
    }, application);
  });
})();
