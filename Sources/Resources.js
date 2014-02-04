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

var s_PreloaderBackground = "preloader-background.png";
var s_LoadingBarBackground = "preloader-bar-background.png";
var s_LoadingBar = "preloader-bar.png";
var s_MenuBackground = "menu-background.png";
var s_ButtonsSprite = "buttons-sprite.png";
var s_PlayButton = "play-button.png";
var s_CircleDecoration = "circle-decoration.png";
var s_ThirdPartyBackground = "third-party-background.png";
var s_LongButton = "long-button.png";
var s_SfxButtonsSprite = "sfx-social-buttons.png";
var s_BackgroundDecoration1 = "background-decoration-1.png";
var s_BackgroundDecoration2 = "background-decoration-2.png";
var s_BackgroundDecoration3 = "background-decoration-3.png";
var s_SmallFlags = "small-flags-sprite.png";
var s_LargeFlags = "large-flags-sprite.png";
var s_FlagNotAvailable = "flag-not-avaliable.png";
var s_Checker = "checker.png";
var s_Lock = "lock.png";
var s_InterfacePanel = "interface-panel.png";
var s_GamePanel = "game-panel.png";
var s_LoadingBackground = "loading-background.png";
var s_LoadingDecoration = "loading-decoration.png";
var s_LoadingWave = "loading-wave.png";
var s_PopupBackground = "popup-background.png";
var s_PopupButton = "popup-button.png";
var s_PopupFullscreenButton = "panel-button-fullscreen.png";
var s_PopupCloseButton = "popup-close-button.png";
var s_PopupPauseButton = "panel-button-pause.png";
var s_PopupDecoration1 = "popup-decoration-1.png";
var s_PopupDecoration2 = "popup-decoration-2.png";
var s_PopupDecoration3 = "popup-decoration-3.png";
var s_PopupDecoration4 = "popup-decoration-4.png";
var s_PopupDecoration5 = "popup-decoration-5.png";
var s_PopupDecoration6 = "popup-decoration-6.png";
var s_PopupDecoration7 = "popup-decoration-7.png";
var s_PopupDecoration8 = "popup-decoration-8.png";
var s_PopupDecoration9 = "popup-decoration-9.png";
var s_PopupDecoration10 = "popup-decoration-10.png";
var s_PopupDecoration11 = "popup-decoration-11.png";
var s_PopupDecoration12 = "popup-decoration-12.png";
var s_PanelItemsBackground1 = "panel-item-background-1.png";
var s_PanelItemsBackground2 = "panel-item-background-2.png";
var s_PanelIcon1 = "panel-icon-1.png";
var s_PanelIcon2 = "panel-icon-2.png";
var s_PanelIcon3 = "panel-icon-3.png";
var s_PanelIcon4 = "panel-icon-4.png";
var s_PanelIcon5 = "panel-icon-5.png";
var s_PanelButton = "panel-button.png";
var s_GameBackground1 = "game-background-1.png";
var s_GameBackground2 = "game-background-2.png";
var s_GameBackground3 = "game-background-3.png";
var s_GameBackground4 = "game-background-4.png";
var s_GameBackground5 = "game-background-5.png";
var s_GetLivesPopupButton = "popup-lives-get.png";
var s_GetCoinsPopupButton = "popup-coins-get.png";
var s_GetKeysPopupButton1 = "popup-keys-get-1.png";
var s_GetKeysPopupButton2 = "popup-keys-get-2.png";
var s_ListFixLarge = "list-fix-large.png";
var s_ListFixSmall = "list-fix-small.png";
var s_ListScrollLarge = "list-scroll-large.png";
var s_ListScrollSmall = "list-scroll-small.png";
var s_CreditsCompanyName = "credits-company-name.png";
var s_CreditsGameName = "credits-game-name.png";
var s_ShopWheel = "shop-wheel.png";
var s_ShopShelfs = "shop-shelfs.png";
var s_ShopItems = "shop-items.png";

var resources = [
  {src: s_PreloaderBackground},
  {src: s_LoadingBarBackground},
  {src: s_LoadingBar},
  {src: s_MenuBackground},
  {src: s_ButtonsSprite},
  {src: s_PlayButton},
  {src: s_CircleDecoration},
  {src: s_ThirdPartyBackground},
  {src: s_LongButton},
  {src: s_SfxButtonsSprite},
  {src: s_BackgroundDecoration1},
  {src: s_BackgroundDecoration2},
  {src: s_BackgroundDecoration3},
  {src: s_LargeFlags},
  {src: s_SmallFlags},
  {src: s_FlagNotAvailable},
  {src: s_Checker},
  {src: s_Lock},
  {src: s_InterfacePanel},
  {src: s_GamePanel},
  {src: s_LoadingBackground},
  {src: s_LoadingDecoration},
  {src: s_LoadingWave},
  {src: s_PopupBackground},
  {src: s_PopupButton},
  {src: s_PopupFullscreenButton},
  {src: s_PopupCloseButton},
  {src: s_PopupPauseButton},
  {src: s_PopupDecoration1},
  {src: s_PopupDecoration2},
  {src: s_PopupDecoration3},
  {src: s_PopupDecoration4},
  {src: s_PopupDecoration5},
  {src: s_PopupDecoration6},
  {src: s_PopupDecoration7},
  {src: s_PopupDecoration8},
  {src: s_PopupDecoration9},
  {src: s_PopupDecoration10},
  {src: s_PopupDecoration11},
  {src: s_PopupDecoration12},
  {src: s_PanelItemsBackground1},
  {src: s_PanelItemsBackground2},
  {src: s_PanelIcon1},
  {src: s_PanelIcon2},
  {src: s_PanelIcon3},
  {src: s_PanelIcon4},
  {src: s_PanelIcon5},
  {src: s_PanelButton},
  {src: s_GameBackground1},
  {src: s_GameBackground2},
  {src: s_GameBackground3},
  {src: s_GameBackground4},
  {src: s_GameBackground5},
  {src: s_GetLivesPopupButton},
  {src: s_GetCoinsPopupButton},
  {src: s_GetKeysPopupButton1},
  {src: s_GetKeysPopupButton2},
  {src: s_ListFixLarge},
  {src: s_ListFixSmall},
  {src: s_ListScrollLarge},
  {src: s_ListScrollSmall},
  {src: s_CreditsGameName},
  {src: s_CreditsCompanyName},
  {src: s_ShopWheel},
  {src: s_ShopShelfs},
  {src: s_ShopItems}
];
