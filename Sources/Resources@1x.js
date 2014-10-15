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

var s_Fonts = [
  {src: "Resources/Fonts/Comic Sans MS.ttf", name: "Comic Sans MS"},
  {src: "Resources/Fonts/Comic Sans MS Bold.ttf", name: "Comic Sans MS Bold"}
];

var s_PreloaderBackground = "Resources/Graphics/@x1/preloader-background.png";
var s_PreloaderBackgroundJapan = "Resources/Graphics/@x1/preloader-background-japan.png";
var s_PreloaderBackgroundPortrait = "Resources/Graphics/@x1/preloader-background-portrait.png";
var s_PreloaderBackgroundLandscape = "Resources/Graphics/@x1/preloader-background-landscape.png";
var s_PreloaderBackgroundPortraitJapan = "Resources/Graphics/@x1/preloader-background-japan-portrait.png";
var s_PreloaderBackgroundLandscapeJapan = "Resources/Graphics/@x1/preloader-background-japan-landscape.png";
var s_LoadingBarBackground = "Resources/Graphics/@x1/preloader-bar-background.png";
var s_LoadingBar = "Resources/Graphics/@x1/preloader-bar.png";
var s_MenuBackground = "Resources/Graphics/@x1/menu-background.png";
var s_MenuBackgroundJapan = "Resources/Graphics/@x1/menu-background-japan.png";
var s_MenuBackgroundPortrait = "Resources/Graphics/@x1/menu-background-portrait.png";
var s_MenuBackgroundLandscape = "Resources/Graphics/@x1/menu-background-landscape.png";
var s_MenuBackgroundPortraitJapan = "Resources/Graphics/@x1/menu-background-japan-portrait.png";
var s_MenuBackgroundLandscapeJapan = "Resources/Graphics/@x1/menu-background-japan-landscape.png";
var s_ButtonsSprite = "Resources/Graphics/@x1/buttons-sprite.png";
var s_PauseButtonsSprite = "Resources/Graphics/@x1/pause-buttons-sprite.png";
var s_PlayButton = "Resources/Graphics/@x1/play-button.png";
var s_CircleDecoration1 = "Resources/Graphics/@x1/circle-decoration-1.png";
var s_CircleDecoration2 = "Resources/Graphics/@x1/circle-decoration-2.png";
var s_CircleDecoration3 = "Resources/Graphics/@x1/circle-decoration-3.png";
var s_ThirdPartyBackground = "Resources/Graphics/@x1/third-party-background.png";
var s_ThirdPartyBackgroundPortrait = "Resources/Graphics/@x1/third-party-background-portrait.png";
var s_ThirdPartyBackgroundLandscape = "Resources/Graphics/@x1/third-party-background-landscape.png";
var s_LongButton = "Resources/Graphics/@x1/long-button.png";
var s_SfxButtonsSprite = "Resources/Graphics/@x1/sfx-social-buttons.png";
var s_PauseSfxButtonsSprite = "Resources/Graphics/@x1/pause-sfx-social-buttons.png";
var s_BackgroundDecoration1 = "Resources/Graphics/@x1/background-decoration-1.png";
var s_BackgroundDecoration2 = "Resources/Graphics/@x1/background-decoration-2.png";
var s_BackgroundDecoration3 = "Resources/Graphics/@x1/background-decoration-3.png";
var s_SmallFlags = "Resources/Graphics/@x1/small-flags-sprite.png";
var s_LargeFlags = "Resources/Graphics/@x1/large-flags-sprite.png";
var s_FlagNotAvailable = "Resources/Graphics/@x1/flag-not-avaliable.png";
var s_Checker = "Resources/Graphics/@x1/checker.png";
var s_Lock = "Resources/Graphics/@x1/lock.png";
var s_InterfacePanel = "Resources/Graphics/@x1/interface-panel.png";
var s_GamePanel = "Resources/Graphics/@x1/game-panel.png";
var s_LoadingBackground = "Resources/Graphics/@x1/loading-background.png";
var s_LoadingBackgroundPortrait = "Resources/Graphics/@x1/loading-background-portrait.png";
var s_LoadingBackgroundLandscape = "Resources/Graphics/@x1/loading-background-landscape.png";
var s_LoadingDecoration = "Resources/Graphics/@x1/loading-decoration.png";
var s_PopupBackground = "Resources/Graphics/@x1/popup-background.png";
var s_PopupButton = "Resources/Graphics/@x1/popup-button.png";
var s_PauseButton = "Resources/Graphics/@x1/pause-button.png";
var s_PopupFullscreenButton = "Resources/Graphics/@x1/panel-button-fullscreen.png";
var s_PopupCloseButton = "Resources/Graphics/@x1/popup-close-button.png";
var s_PopupPauseButton = "Resources/Graphics/@x1/panel-button-pause.png";
var s_PopupDecoration1 = "Resources/Graphics/@x1/popup-decoration-1.png";
var s_PopupDecoration2 = "Resources/Graphics/@x1/popup-decoration-2.png";
var s_PopupDecoration3 = "Resources/Graphics/@x1/popup-decoration-3.png";
var s_PopupDecoration4 = "Resources/Graphics/@x1/popup-decoration-4.png";
var s_PopupDecoration5 = "Resources/Graphics/@x1/popup-decoration-5.png";
var s_PopupDecoration6 = "Resources/Graphics/@x1/popup-decoration-6.png";
var s_PopupDecoration7 = "Resources/Graphics/@x1/popup-decoration-7.png";
var s_PopupDecoration8 = "Resources/Graphics/@x1/popup-decoration-8.png";
var s_PopupDecoration9 = "Resources/Graphics/@x1/popup-decoration-9.png";
var s_PopupDecoration10 = "Resources/Graphics/@x1/popup-decoration-10.png";
var s_PopupDecoration11 = "Resources/Graphics/@x1/popup-decoration-11.png";
var s_PopupDecoration12 = "Resources/Graphics/@x1/popup-decoration-12.png";
var s_PopupDecoration13 = "Resources/Graphics/@x1/popup-decoration-13.png";
var s_PopupDecoration14 = "Resources/Graphics/@x1/popup-decoration-14.png";
var s_PopupDecoration15 = "Resources/Graphics/@x1/popup-decoration-15.png";
var s_PopupDecoration16 = "Resources/Graphics/@x1/popup-decoration-16.png";
var s_PopupDecoration17 = "Resources/Graphics/@x1/popup-decoration-17.png";
var s_PopupDecoration18 = "Resources/Graphics/@x1/popup-decoration-18.png";
var s_PopupDecoration19 = "Resources/Graphics/@x1/popup-decoration-19.png";
var s_PopupDecoration20 = "Resources/Graphics/@x1/popup-decoration-20.png";
var s_PanelItemsBackground1 = "Resources/Graphics/@x1/panel-item-background-1.png";
var s_PanelItemsBackground2 = "Resources/Graphics/@x1/panel-item-background-2.png";
var s_PanelItemsBackground3 = "Resources/Graphics/@x1/panel-item-background-3.png";
var s_PanelIcon1 = "Resources/Graphics/@x1/panel-icon-1.png";
var s_PanelIcon2 = "Resources/Graphics/@x1/panel-icon-2.png";
var s_PanelIcon3 = "Resources/Graphics/@x1/panel-icon-3.png";
var s_PanelIcon4 = "Resources/Graphics/@x1/panel-icon-4.png";
var s_PanelIcon5 = "Resources/Graphics/@x1/panel-icon-5.png";
var s_PanelIcon6 = "Resources/Graphics/@x1/panel-icon-6.png";
var s_PanelIcon7 = "Resources/Graphics/@x1/panel-icon-7.png";
var s_PanelIcon8 = "Resources/Graphics/@x1/panel-icon-8.png";
var s_PanelButton = "Resources/Graphics/@x1/panel-button.png";
var s_GameBackground1 = "Resources/Graphics/@x1/game-background-1.png";
var s_GameBackground2 = "Resources/Graphics/@x1/game-background-2.png";
var s_GameBackground3 = "Resources/Graphics/@x1/game-background-3.png";
var s_GameBackground4 = "Resources/Graphics/@x1/game-background-4.png";
var s_GameBackground5 = "Resources/Graphics/@x1/game-background-5.png";
var s_GameBackground1Blured = "Resources/Graphics/@x1/game-background-1-blured.png";
var s_GameBackground2Blured = "Resources/Graphics/@x1/game-background-2-blured.png";
var s_GameBackground3Blured = "Resources/Graphics/@x1/game-background-3-blured.png";
var s_GameBackground4Blured = "Resources/Graphics/@x1/game-background-4-blured.png";
var s_GameBackground5Blured = "Resources/Graphics/@x1/game-background-5-blured.png";
var s_GameBackground1Portrait = "Resources/Graphics/@x1/game-background-1-portrait.png";
var s_GameBackground2Portrait = "Resources/Graphics/@x1/game-background-2-portrait.png";
var s_GameBackground3Portrait = "Resources/Graphics/@x1/game-background-3-portrait.png";
var s_GameBackground4Portrait = "Resources/Graphics/@x1/game-background-4-portrait.png";
var s_GameBackground5Portrait = "Resources/Graphics/@x1/game-background-5-portrait.png";
var s_GameBackground1Landscape = "Resources/Graphics/@x1/game-background-1-landscape.png";
var s_GameBackground2Landscape = "Resources/Graphics/@x1/game-background-2-landscape.png";
var s_GameBackground3Landscape = "Resources/Graphics/@x1/game-background-3-landscape.png";
var s_GameBackground4Landscape = "Resources/Graphics/@x1/game-background-4-landscape.png";
var s_GameBackground5Landscape = "Resources/Graphics/@x1/game-background-5-landscape.png";
var s_GameBackground1BluredLandscape = "Resources/Graphics/@x1/game-background-1-blured-landscape.png";
var s_GameBackground2BluredLandscape = "Resources/Graphics/@x1/game-background-2-blured-landscape.png";
var s_GameBackground3BluredLandscape = "Resources/Graphics/@x1/game-background-3-blured-landscape.png";
var s_GameBackground4BluredLandscape = "Resources/Graphics/@x1/game-background-4-blured-landscape.png";
var s_GameBackground5BluredLandscape = "Resources/Graphics/@x1/game-background-5-blured-landscape.png";
var s_GetMovesPopupButton = "Resources/Graphics/@x1/popup-moves-get.png";
var s_GetLivesPopupButton = "Resources/Graphics/@x1/popup-lives-get.png";
var s_GetCoinsPopupButton = "Resources/Graphics/@x1/popup-coins-get.png";
var s_GetKeysPopupButton1 = "Resources/Graphics/@x1/popup-keys-get-1.png";
var s_GetKeysPopupButton2 = "Resources/Graphics/@x1/popup-keys-get-2.png";
var s_ListFixLarge = "Resources/Graphics/@x1/list-fix-large.png";
var s_ListFixSmall = "Resources/Graphics/@x1/list-fix-small.png";
var s_ListScrollLarge = "Resources/Graphics/@x1/list-scroll-large.png";
var s_ListScrollSmall = "Resources/Graphics/@x1/list-scroll-small.png";
var s_CreditsCompanyName = "Resources/Graphics/@x1/credits-company-name.png";
var s_CreditsGameName = "Resources/Graphics/@x1/credits-game-name.png";
var s_CreditsGameNameJapan = "Resources/Graphics/@x1/credits-game-name-japan.png";
var s_ShopWheel = "Resources/Graphics/@x1/shop-wheel.png";
var s_ShopShelfs = "Resources/Graphics/@x1/shop-shelfs.png";
var s_ShopItems = "Resources/Graphics/@x1/shop-items.png";
var s_ItemsRating = "Resources/Graphics/@x1/items-rating.png";
var s_ItemsProperties = "Resources/Graphics/@x1/items-properties.png";
var s_ModeUnlockLine = "Resources/Graphics/@x1/unlock-line.png";
var s_StarsPanel = "Resources/Graphics/@x1/stars-panel.png";
var s_Star = "Resources/Graphics/@x1/star.png";
var s_StarSmall = "Resources/Graphics/@x1/star-small.png";
var s_Mark = "Resources/Graphics/@x1/mark.png";
var s_Birds = "Resources/Graphics/@x1/birds.png";
var s_Explosion = "Resources/Graphics/@x1/explosion-1.png";
var s_ExplosionBackground = "Resources/Graphics/@x1/explosion-2.png";
var s_FinishBackground = "Resources/Graphics/@x1/finish-background.png";
var s_FinishBackgroundPortrait = "Resources/Graphics/@x1/finish-background-portrait.png";
var s_FinishBackgroundLandscape = "Resources/Graphics/@x1/finish-background-landscape.png";
var s_FinishBackgroundSquare = "Resources/Graphics/@x1/finish-background-square.png";
var s_FinishButtons = "Resources/Graphics/@x1/finish-buttons.png";
var s_UnlockKey = "Resources/Graphics/@x1/unlock-key.png";
var s_BonusBirds = "Resources/Graphics/@x1/bonus-birds.png";
var s_StarParticle = "Resources/Graphics/@x1/star-particle.png";
var s_Feathers = "Resources/Graphics/@x1/feathers.png";
var s_VkontakteButton = "Resources/Graphics/@x1/vk-button.png";
var s_ComingSoon = "Resources/Graphics/@x1/coming-soon.png";
var s_PrizeDecoration = "Resources/Graphics/@x1/prize-decoration.png";
var s_SplashStar = "Resources/Graphics/@x1/splash-star.png";
var s_AchievementLocked = "Resources/Icons/@x1/achievements-locked.png";
var s_AchievementIcon1 = "Resources/Icons/@x1/achievements-1.png";
var s_AchievementIcon2 = "Resources/Icons/@x1/achievements-2.png";
var s_AchievementIcon3 = "Resources/Icons/@x1/achievements-3.png";
var s_AchievementIcon4 = "Resources/Icons/@x1/achievements-4.png";
var s_AchievementIcon5 = "Resources/Icons/@x1/achievements-5.png";
var s_AchievementIcon6 = "Resources/Icons/@x1/achievements-6.png";
var s_AchievementIcon7 = "Resources/Icons/@x1/achievements-7.png";
var s_AchievementIcon8 = "Resources/Icons/@x1/achievements-8.png";
var s_AchievementIcon9 = "Resources/Icons/@x1/achievements-9.png";
var s_AchievementIcon10 = "Resources/Icons/@x1/achievements-10.png";
var s_AchievementIcon11 = "Resources/Icons/@x1/achievements-11.png";
var s_AchievementIcon12 = "Resources/Icons/@x1/achievements-12.png";
var s_AchievementIcon13 = "Resources/Icons/@x1/achievements-13.png";
var s_AchievementIcon14 = "Resources/Icons/@x1/achievements-14.png";
var s_AchievementIcon15 = "Resources/Icons/@x1/achievements-15.png";
var s_AchievementIcon16 = "Resources/Icons/@x1/achievements-16.png";
var s_AchievementIcon17 = "Resources/Icons/@x1/achievements-17.png";
var s_AchievementIcon18 = "Resources/Icons/@x1/achievements-18.png";
var s_AchievementIcon19 = "Resources/Icons/@x1/achievements-19.png";
var s_AchievementIcon20 = "Resources/Icons/@x1/achievements-20.png";
var s_AchievementIcon21 = "Resources/Icons/@x1/achievements-21.png";
var s_AchievementIcon22 = "Resources/Icons/@x1/achievements-22.png";
var s_AchievementIcon23 = "Resources/Icons/@x1/achievements-23.png";
var s_AchievementIcon24 = "Resources/Icons/@x1/achievements-24.png";
var s_AchievementIcon25 = "Resources/Icons/@x1/achievements-25.png";
var s_AchievementIcon26 = "Resources/Icons/@x1/achievements-26.png";
var s_AchievementIcon27 = "Resources/Icons/@x1/achievements-27.png";
var s_AchievementIcon28 = "Resources/Icons/@x1/achievements-28.png";
var s_AchievementIcon29 = "Resources/Icons/@x1/achievements-29.png";
var s_AchievementIcon30 = "Resources/Icons/@x1/achievements-30.png";
var s_AchievementIcon31 = "Resources/Icons/@x1/achievements-31.png";
var s_AchievementIcon32 = "Resources/Icons/@x1/achievements-32.png";
var s_AchievementIcon33 = "Resources/Icons/@x1/achievements-33.png";
var s_AchievementIcon34 = "Resources/Icons/@x1/achievements-34.png";
var s_AchievementIcon35 = "Resources/Icons/@x1/achievements-35.png";
var s_AchievementIcon36 = "Resources/Icons/@x1/achievements-36.png";
var s_AchievementIcon37 = "Resources/Icons/@x1/achievements-37.png";
var s_AchievementIcon38 = "Resources/Icons/@x1/achievements-38.png";
var s_AchievementIcon39 = "Resources/Icons/@x1/achievements-39.png";
var s_AchievementIcon40 = "Resources/Icons/@x1/achievements-40.png";
var s_AchievementIcon41 = "Resources/Icons/@x1/achievements-41.png";
var s_AchievementIcon42 = "Resources/Icons/@x1/achievements-42.png";
var s_AchievementIcon43 = "Resources/Icons/@x1/achievements-43.png";
var s_AchievementIcon44 = "Resources/Icons/@x1/achievements-44.png";
var s_AchievementIcon45 = "Resources/Icons/@x1/achievements-45.png";
var s_ScreenEffect1 = "Resources/Graphics/@x1/screen-effect-1.png";
var s_Confetti = "Resources/Graphics/@x1/confetti.png";
var s_DailyMapBackground = "Resources/Graphics/@x1/daily-map-background.png";
var s_DailyMapTitle = "Resources/Graphics/@x1/daily-map-title.png";
var s_MapScroll = "Resources/Graphics/@x1/map-scroll.png";
var s_DailyMapDayIcon1 = "Resources/Graphics/@x1/daily-map-icon-1.png";
var s_DailyMapDayIcon2 = "Resources/Graphics/@x1/daily-map-icon-2.png";
var s_DailyMapDayIcon3 = "Resources/Graphics/@x1/daily-map-icon-3.png";
var s_DailyMapDayIcon4 = "Resources/Graphics/@x1/daily-map-icon-4.png";
var s_DailyMapDayIcon5 = "Resources/Graphics/@x1/daily-map-icon-5.png";
var s_Dust = "Resources/Graphics/@x1/dust.png";
var s_Water = "Resources/Graphics/@x1/water-effect.png";
var s_Prick = "Resources/Graphics/@x1/prick.png";
var s_Loading = "Resources/Graphics/@x1/loading.png";
var s_WeaponParticles = "Resources/Graphics/@x1/weapon-particles.png";
var s_Bonus1 = "Resources/Graphics/@x1/bonus-1.png";
var s_Bonus2 = "Resources/Graphics/@x1/bonus-2.png";
var s_Bonus6 = "Resources/Graphics/@x1/bonus-6.png";
var s_Bonus7 = "Resources/Graphics/@x1/bonus-7.png";
var s_Elements = "Resources/Graphics/@x1/elements.png";
var s_ElementsChain = "Resources/Graphics/@x1/element-chain.png";
var s_ElementsSickles = "Resources/Graphics/@x1/elements-sickle.png";
var s_ElementsSplash = "Resources/Graphics/@x1/elements-splash.png";
var s_ElementsGlow = "Resources/Graphics/@x1/elements-glow.png";
var s_ElementsIcons = "Resources/Graphics/@x1/elements-icons.png";
var s_ElementsParts = "Resources/Graphics/@x1/elements-parts.png";
var s_ElementsBubbles = "Resources/Graphics/@x1/elements-bubble.png";
var s_ElementsBubblesPoping = "Resources/Graphics/@x1/elements-bubble-poping.png";
var s_Ground = "Resources/Graphics/@x1/game-ground.png";
var s_Catapult = "Resources/Graphics/@x1/catapult.png";
var s_CatapultPart1 = "Resources/Graphics/@x1/catapult-part1.png";
var s_CatapultPart2 = "Resources/Graphics/@x1/catapult-part2.png";
var s_CatapultPart3 = "Resources/Graphics/@x1/catapult-part3.png";
var s_CatapultBirds = "Resources/Graphics/@x1/catapult-birds.png";
var s_CatapultBirdsShield = "Resources/Graphics/@x1/catapult-birds-shield.png";
var s_Target = "Resources/Graphics/@x1/game-target.png";
var s_Notification1 = "Resources/Graphics/@x1/notification-1.png";
var s_Notification2 = "Resources/Graphics/@x1/notification-2.png";
var s_Notification3 = "Resources/Graphics/@x1/notification-3.png";
var s_Notification4 = "Resources/Graphics/@x1/notification-4.png";
var s_Notification5 = "Resources/Graphics/@x1/notification-5.png";
var s_Notification6 = "Resources/Graphics/@x1/notification-6.png";
var s_Notification1English = "Resources/Graphics/@x1/notification-1-0.png";
var s_Notification2English = "Resources/Graphics/@x1/notification-2-0.png";
var s_Notification3English = "Resources/Graphics/@x1/notification-3-0.png";
var s_Notification4English = "Resources/Graphics/@x1/notification-4-0.png";
var s_Notification5English = "Resources/Graphics/@x1/notification-5-0.png";
var s_Notification1Russian = "Resources/Graphics/@x1/notification-1-1.png";
var s_Notification2Russian = "Resources/Graphics/@x1/notification-2-1.png";
var s_Notification3Russian = "Resources/Graphics/@x1/notification-3-1.png";
var s_Notification4Russian = "Resources/Graphics/@x1/notification-4-1.png";
var s_Notification5Russian = "Resources/Graphics/@x1/notification-5-1.png";
var s_MapBackground1 = "Resources/Graphics/@x1/map-background-1.png";
var s_MapBackground2 = "Resources/Graphics/@x1/map-background-2.png";
var s_MapBackground3 = "Resources/Graphics/@x1/map-background-3.png";
var s_MapBackground4 = "Resources/Graphics/@x1/map-background-4.png";
var s_MapBackground5 = "Resources/Graphics/@x1/map-background-5.png";
var s_MapBackground6 = "Resources/Graphics/@x1/map-background-6.png";
var s_MapBackground7 = "Resources/Graphics/@x1/map-background-7.png";
var s_MapBackground8 = "Resources/Graphics/@x1/map-background-8.png";
var s_MapBackground9 = "Resources/Graphics/@x1/map-background-9.png";
var s_MapBackground10 = "Resources/Graphics/@x1/map-background-10.png";
var s_MapBackground10English = "Resources/Graphics/@x1/map-background-10-0.png";
var s_MapBackground10Russian = "Resources/Graphics/@x1/map-background-10-1.png";
var s_MapUserBackground1 = "Resources/Graphics/@x1/map-user-background-1.png";
var s_MapUserBackground2 = "Resources/Graphics/@x1/map-user-background-2.png";
var s_LevelsMapIcons = "Resources/Graphics/@x1/levels-map-icons.png";
var s_LevelsMapPoint = "Resources/Graphics/@x1/levels-map-point.png";
var s_Cloud2 = "Resources/Graphics/@x1/cloud-2.png";
var s_PlayerHealth = "Resources/Graphics/@x1/player-health.png";
var s_PlayerHealthBar = "Resources/Graphics/@x1/player-health-bar.png";
var s_TutorialFinger = "Resources/Graphics/@x1/tutorial-finger.png";
var s_TutorialTargetExplanation = "Resources/Graphics/@x1/tutorial-target-explanation.png";
var s_TutorialTeamExplanation = "Resources/Graphics/@x1/tutorial-team-explanation.png";
var s_TutorialTextArea = "Resources/Graphics/@x1/tutorial-text-area.png";
var s_TutorialElementsExplanation = "Resources/Graphics/@x1/tutorial-elements-explanation.png";
var s_TutorialElementsExplanationTexts = "Resources/Graphics/@x1/tutorial-elements-explanation-texts.png";
var s_TutorialElementsExplanationTextsEnglish = "Resources/Graphics/@x1/tutorial-elements-explanation-texts-0.png";
var s_TutorialElementsExplanationTextsRussian = "Resources/Graphics/@x1/tutorial-elements-explanation-texts-1.png";
var s_MatrixArrow1 = "Resources/Graphics/@x1/matrix-arrow-1.png";
var s_MatrixArrow2 = "Resources/Graphics/@x1/matrix-arrow-2.png";
var s_TutorialLevel = "Resources/Graphics/@x1/level-tutorial.png";
var s_LevelIcon = "Resources/Graphics/@x1/level-icon.png";
var s_NotifyIcon = "Resources/Graphics/@x1/notify-icon.png";
var s_InputTextArea = "Resources/Graphics/@x1/input-text-area.png";
var s_NetworkHolder = "Resources/Graphics/@x1/network-holder.png";
var s_LevelElementChoise = "Resources/Graphics/@x1/level-element-choise.png";
var s_LevelElementIcons = "Resources/Graphics/@x1/level-element-icons.png";
var s_UsersCrown = "Resources/Graphics/@x1/users-crown.png";
var s_LevelPointsHolder = "Resources/Graphics/@x1/level-points-holder.png";
var s_LevelStars = "Resources/Graphics/@x1/level-stars.png";
var s_LevelStarsCounterArea = "Resources/Graphics/@x1/stars-counter-area.png";
var s_PopupLongButton1 = "Resources/Graphics/@x1/lives-present-background-1.png";
var s_PopupLongButton2 = "Resources/Graphics/@x1/lives-present-background-2.png";
var s_FriendsBackground1 = "Resources/Graphics/@x1/friends-background-1.png";
var s_FriendsBackground2 = "Resources/Graphics/@x1/friends-background-2.png";
var s_FriendsCover = "Resources/Graphics/@x1/friends-list-cover.png";
var s_FriendsListBackground = "Resources/Graphics/@x1/friends-list-background.png";
var s_UserOnlineStatus = "Resources/Graphics/@x1/users-online-status.png";
var s_ListElementClose = "Resources/Graphics/@x1/list-element-close.png";
var s_ListElementHidder = "Resources/Graphics/@x1/list-name-hidder.png";
var s_Levels = [
  "Resources/Graphics/@x1/level-1.png",
  "Resources/Graphics/@x1/level-2.png",
  "Resources/Graphics/@x1/level-3.png",
  "Resources/Graphics/@x1/level-4.png",
  "Resources/Graphics/@x1/level-5.png",
  "Resources/Graphics/@x1/level-6.png",
  "Resources/Graphics/@x1/level-7.png",
  "Resources/Graphics/@x1/level-8.png",
  "Resources/Graphics/@x1/level-9.png",
  "Resources/Graphics/@x1/level-10.png",
  "Resources/Graphics/@x1/level-11.png",
  "Resources/Graphics/@x1/level-12.png",
  "Resources/Graphics/@x1/level-13.png",
  "Resources/Graphics/@x1/level-14.png",
  "Resources/Graphics/@x1/level-15.png",
  "Resources/Graphics/@x1/level-16.png",
  "Resources/Graphics/@x1/level-17.png",
  "Resources/Graphics/@x1/level-18.png",
  "Resources/Graphics/@x1/level-19.png",
  "Resources/Graphics/@x1/level-20.png",
  "Resources/Graphics/@x1/level-21.png",
  "Resources/Graphics/@x1/level-22.png",
  "Resources/Graphics/@x1/level-23.png",
  "Resources/Graphics/@x1/level-24.png",
  "Resources/Graphics/@x1/level-25.png",
  "Resources/Graphics/@x1/level-26.png",
  "Resources/Graphics/@x1/level-27.png",
  "Resources/Graphics/@x1/level-28.png",
  "Resources/Graphics/@x1/level-29.png",
  "Resources/Graphics/@x1/level-30.png",
  "Resources/Graphics/@x1/level-31.png",
  "Resources/Graphics/@x1/level-32.png",
  "Resources/Graphics/@x1/level-33.png",
  "Resources/Graphics/@x1/level-34.png",
  "Resources/Graphics/@x1/level-35.png",
  "Resources/Graphics/@x1/level-36.png",
  "Resources/Graphics/@x1/level-37.png",
  "Resources/Graphics/@x1/level-38.png",
  "Resources/Graphics/@x1/level-39.png",
  "Resources/Graphics/@x1/level-40.png",
  "Resources/Graphics/@x1/level-41.png",
  "Resources/Graphics/@x1/level-42.png",
  "Resources/Graphics/@x1/level-43.png",
  "Resources/Graphics/@x1/level-44.png",
  "Resources/Graphics/@x1/level-45.png",
  "Resources/Graphics/@x1/level-46.png",
  "Resources/Graphics/@x1/level-47.png",
  "Resources/Graphics/@x1/level-48.png",
  "Resources/Graphics/@x1/level-49.png",
  "Resources/Graphics/@x1/level-50.png",
  "Resources/Graphics/@x1/level-51.png",
  "Resources/Graphics/@x1/level-52.png",
  "Resources/Graphics/@x1/level-53.png",
  "Resources/Graphics/@x1/level-54.png",
  "Resources/Graphics/@x1/level-55.png",
  "Resources/Graphics/@x1/level-56.png",
  "Resources/Graphics/@x1/level-57.png",
  "Resources/Graphics/@x1/level-58.png",
  "Resources/Graphics/@x1/level-59.png",
  "Resources/Graphics/@x1/level-60.png",
  "Resources/Graphics/@x1/level-61.png",
  "Resources/Graphics/@x1/level-62.png",
  "Resources/Graphics/@x1/level-63.png",
  "Resources/Graphics/@x1/level-64.png",
  "Resources/Graphics/@x1/level-65.png",
  "Resources/Graphics/@x1/level-66.png",
  "Resources/Graphics/@x1/level-67.png",
  "Resources/Graphics/@x1/level-68.png",
  "Resources/Graphics/@x1/level-69.png",
  "Resources/Graphics/@x1/level-70.png",
  "Resources/Graphics/@x1/level-71.png",
  "Resources/Graphics/@x1/level-72.png",
  "Resources/Graphics/@x1/level-73.png",
  "Resources/Graphics/@x1/level-74.png",
  "Resources/Graphics/@x1/level-75.png",
  "Resources/Graphics/@x1/level-76.png",
  "Resources/Graphics/@x1/level-77.png",
  "Resources/Graphics/@x1/level-78.png",
  "Resources/Graphics/@x1/level-79.png",
  "Resources/Graphics/@x1/level-80.png",
  "Resources/Graphics/@x1/level-81.png",
  "Resources/Graphics/@x1/level-82.png",
  "Resources/Graphics/@x1/level-83.png",
  "Resources/Graphics/@x1/level-84.png",
  "Resources/Graphics/@x1/level-85.png",
  "Resources/Graphics/@x1/level-86.png",
  "Resources/Graphics/@x1/level-87.png",
  "Resources/Graphics/@x1/level-88.png",
  "Resources/Graphics/@x1/level-89.png",
  "Resources/Graphics/@x1/level-90.png"
];

var s_Music1 = "Resources/Music/music-1.wav";
var s_Music2 = "Resources/Music/music-2.wav";
var s_SoundButtonTouch = "Resources/Sound/button-touch.wav";
var s_SoundEquipUnlock = "Resources/Sound/equip-unlock.wav";
var s_SoundEquipSword = "Resources/Sound/equip-sword.wav";
var s_SoundComplete = "Resources/Sound/complete.wav";
var s_SoundSlash = "Resources/Sound/slash.wav";
var s_SoundThrowBird = "Resources/Sound/throw-bird.wav";
var s_SoundThrowBomb = "Resources/Sound/throw-bomb.wav";
var s_SoundThrowBombFuse = "Resources/Sound/throw-bomb-fuse.wav";
var s_SoundExplosion = "Resources/Sound/explosion.wav";
var s_SoundBirdExplosion = "Resources/Sound/bird-explosion.wav";
var s_SoundLoseLife = "Resources/Sound/lose-life.wav";
var s_SoundExchange = "Resources/Sound/exchange.wav";
var s_SoundSwitch = "Resources/Sound/switch.wav";
var s_SoundStar = "Resources/Sound/star.wav";
var s_SoundLine = "Resources/Sound/line.wav";
var s_SoundLose = "Resources/Sound/lose.wav";
var s_SoundWin = "Resources/Sound/win.wav";
var s_SoundExtraMove = "Resources/Sound/pome-zoomout.wav";
var s_SoundDefence = "Resources/Sound/defence.mp3";
var s_SoundBloom = ["Resources/Sound/bloom-1.wav", "Resources/Sound/bloom-2.wav", "Resources/Sound/bloom-3.wav", "Resources/Sound/bloom-4.wav"];
var s_SoundChew = ["Resources/Sound/chew-1.wav", "Resources/Sound/chew-2.wav", "Resources/Sound/chew-3.wav"];
var s_SoundDrop = ["Resources/Sound/drop-1.wav", "Resources/Sound/drop-2.wav", "Resources/Sound/drop-3.wav"];
var s_SoundStars = ["Resources/Sound/star1.wav", "Resources/Sound/star2.wav", "Resources/Sound/star3.wav"];

var resources = [
  {src: s_Fonts[0].src, fontName: s_Fonts[0].name},
  {src: s_Fonts[1].src, fontName: s_Fonts[1].name},

  {src: s_PreloaderBackgroundPortrait},
  {src: s_PreloaderBackgroundLandscape},
  {src: s_PreloaderBackgroundPortraitJapan},
  {src: s_PreloaderBackgroundLandscapeJapan},
  {src: s_LoadingBarBackground},
  {src: s_LoadingBar},
  {src: s_MenuBackgroundPortrait},
  {src: s_MenuBackgroundLandscape},
  {src: s_MenuBackgroundPortraitJapan},
  {src: s_MenuBackgroundLandscapeJapan},
  {src: s_ButtonsSprite},
  {src: s_PauseButtonsSprite},
  {src: s_PlayButton},
  {src: s_CircleDecoration1},
  {src: s_CircleDecoration2},
  {src: s_CircleDecoration3},
  {src: s_ThirdPartyBackgroundPortrait},
  {src: s_ThirdPartyBackgroundLandscape},
  {src: s_LongButton},
  {src: s_SfxButtonsSprite},
  {src: s_PauseSfxButtonsSprite},
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
  {src: s_LoadingBackgroundPortrait},
  {src: s_LoadingBackgroundLandscape},
  {src: s_LoadingDecoration},
  {src: s_PopupBackground},
  {src: s_PopupButton},
  {src: s_PauseButton},
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
  {src: s_PopupDecoration13},
  {src: s_PopupDecoration14},
  {src: s_PopupDecoration15},
  {src: s_PopupDecoration16},
  {src: s_PopupDecoration17},
  {src: s_PopupDecoration18},
  {src: s_PopupDecoration19},
  {src: s_PopupDecoration20},
  {src: s_PanelItemsBackground1},
  {src: s_PanelItemsBackground2},
  {src: s_PanelItemsBackground3},
  {src: s_PanelIcon1},
  {src: s_PanelIcon2},
  {src: s_PanelIcon3},
  {src: s_PanelIcon4},
  {src: s_PanelIcon5},
  {src: s_PanelIcon6},
  {src: s_PanelIcon7},
  {src: s_PanelIcon8},
  {src: s_PanelButton},
  {src: s_GameBackground1Portrait},
  {src: s_GameBackground2Portrait},
  {src: s_GameBackground3Portrait},
  {src: s_GameBackground4Portrait},
  {src: s_GameBackground5Portrait},
  {src: s_GameBackground1Landscape},
  {src: s_GameBackground2Landscape},
  {src: s_GameBackground3Landscape},
  {src: s_GameBackground4Landscape},
  {src: s_GameBackground5Landscape},
  {src: s_GameBackground1BluredLandscape},
  {src: s_GameBackground2BluredLandscape},
  {src: s_GameBackground3BluredLandscape},
  {src: s_GameBackground4BluredLandscape},
  {src: s_GameBackground5BluredLandscape},
  {src: s_GetMovesPopupButton},
  {src: s_GetLivesPopupButton},
  {src: s_GetCoinsPopupButton},
  {src: s_GetKeysPopupButton1},
  {src: s_GetKeysPopupButton2},
  {src: s_ListFixLarge},
  {src: s_ListFixSmall},
  {src: s_ListScrollLarge},
  {src: s_ListScrollSmall},
  {src: s_CreditsGameName},
  {src: s_CreditsGameNameJapan},
  {src: s_CreditsCompanyName},
  {src: s_ShopWheel},
  {src: s_ShopShelfs},
  {src: s_ShopItems},
  {src: s_ItemsRating},
  {src: s_ItemsProperties},
  {src: s_ModeUnlockLine},
  {src: s_StarsPanel},
  {src: s_Star},
  {src: s_StarSmall},
  {src: s_Mark},
  {src: s_Birds},
  {src: s_FinishBackgroundPortrait},
  {src: s_FinishBackgroundLandscape},
  {src: s_FinishBackgroundSquare},
  {src: s_Explosion},
  {src: s_ExplosionBackground},
  {src: s_FinishButtons},
  {src: s_UnlockKey},
  {src: s_BonusBirds},
  {src: s_StarParticle},
  {src: s_Feathers},
  {src: s_VkontakteButton},
  {src: s_ComingSoon},
  {src: s_PrizeDecoration},
  {src: s_SplashStar},
  {src: s_AchievementLocked},
  {src: s_AchievementIcon1},
  {src: s_AchievementIcon2},
  {src: s_AchievementIcon3},
  {src: s_AchievementIcon4},
  {src: s_AchievementIcon5},
  {src: s_AchievementIcon6},
  {src: s_AchievementIcon7},
  {src: s_AchievementIcon8},
  {src: s_AchievementIcon9},
  {src: s_AchievementIcon10},
  {src: s_AchievementIcon11},
  {src: s_AchievementIcon12},
  {src: s_AchievementIcon13},
  {src: s_AchievementIcon14},
  {src: s_AchievementIcon15},
  {src: s_AchievementIcon16},
  {src: s_AchievementIcon17},
  {src: s_AchievementIcon18},
  {src: s_AchievementIcon19},
  {src: s_AchievementIcon20},
  {src: s_AchievementIcon21},
  {src: s_AchievementIcon22},
  {src: s_AchievementIcon23},
  {src: s_AchievementIcon24},
  {src: s_AchievementIcon25},
  {src: s_AchievementIcon26},
  {src: s_AchievementIcon27},
  {src: s_AchievementIcon28},
  {src: s_AchievementIcon29},
  {src: s_AchievementIcon30},
  {src: s_AchievementIcon31},
  {src: s_AchievementIcon32},
  {src: s_AchievementIcon33},
  {src: s_AchievementIcon34},
  {src: s_AchievementIcon35},
  {src: s_AchievementIcon36},
  {src: s_AchievementIcon37},
  {src: s_AchievementIcon38},
  {src: s_AchievementIcon39},
  {src: s_AchievementIcon40},
  {src: s_AchievementIcon41},
  {src: s_AchievementIcon42},
  {src: s_AchievementIcon43},
  {src: s_AchievementIcon44},
  {src: s_AchievementIcon45},
  {src: s_ScreenEffect1},
  {src: s_Confetti},
  {src: s_DailyMapBackground},
  {src: s_DailyMapTitle},
  {src: s_MapScroll},
  {src: s_DailyMapDayIcon1},
  {src: s_DailyMapDayIcon2},
  {src: s_DailyMapDayIcon3},
  {src: s_DailyMapDayIcon4},
  {src: s_DailyMapDayIcon5},
  {src: s_Dust},
  {src: s_Water},
  {src: s_Prick},
  {src: s_Loading},
  {src: s_WeaponParticles},
  {src: s_Bonus1},
  {src: s_Bonus2},
  {src: s_Bonus6},
  {src: s_Bonus7},
  {src: s_Elements},
  {src: s_ElementsSickles},
  {src: s_ElementsSplash},
  {src: s_ElementsGlow},
  {src: s_ElementsIcons},
  {src: s_ElementsParts},
  {src: s_ElementsBubbles},
  {src: s_ElementsBubblesPoping},
  {src: s_Ground},
  {src: s_Catapult},
  {src: s_CatapultPart1},
  {src: s_CatapultPart2},
  {src: s_CatapultPart3},
  {src: s_CatapultBirds},
  {src: s_CatapultBirdsShield},
  {src: s_Target},
  {src: s_Notification1Russian},
  {src: s_Notification1English},
  {src: s_Notification2Russian},
  {src: s_Notification2English},
  {src: s_Notification3Russian},
  {src: s_Notification3English},
  {src: s_Notification4Russian},
  {src: s_Notification4English},
  {src: s_Notification5Russian},
  {src: s_Notification5English},
  {src: s_Notification6},
  {src: s_PlayerHealth},
  {src: s_PlayerHealthBar},
  {src: s_MapBackground1},
  {src: s_MapBackground2},
  {src: s_MapBackground3},
  {src: s_MapBackground4},
  {src: s_MapBackground5},
  {src: s_MapBackground6},
  {src: s_MapBackground7},
  {src: s_MapBackground8},
  {src: s_MapBackground9},
  {src: s_MapBackground10Russian},
  {src: s_MapBackground10English},
  {src: s_MapUserBackground1},
  {src: s_MapUserBackground2},
  {src: s_LevelsMapIcons},
  {src: s_LevelsMapPoint},
  {src: s_Cloud2},
  {src: s_TutorialFinger},
  {src: s_TutorialTargetExplanation},
  {src: s_TutorialTeamExplanation},
  {src: s_TutorialTextArea},
  {src: s_TutorialElementsExplanation},
  {src: s_TutorialElementsExplanationTextsRussian},
  {src: s_TutorialElementsExplanationTextsEnglish},
  {src: s_MatrixArrow1},
  {src: s_MatrixArrow2},
  {src: s_TutorialLevel},
  {src: s_LevelIcon},
  {src: s_NotifyIcon},
  {src: s_InputTextArea},
  {src: s_NetworkHolder},
  {src: s_LevelElementChoise},
  {src: s_LevelElementIcons},
  {src: s_UsersCrown},
  {src: s_LevelPointsHolder},
  {src: s_LevelStars},
  {src: s_LevelStarsCounterArea},
  {src: s_PopupLongButton1},
  {src: s_PopupLongButton2},
  {src: s_FriendsBackground1},
  {src: s_FriendsBackground2},
  {src: s_FriendsCover},
  {src: s_FriendsListBackground},
  {src: s_UserOnlineStatus},
  {src: s_ListElementClose},
  {src: s_ListElementHidder},
  {src: s_Levels[0]},
  {src: s_Levels[1]},
  {src: s_Levels[2]},
  {src: s_Levels[3]},
  {src: s_Levels[4]},
  {src: s_Levels[5]},
  {src: s_Levels[6]},
  {src: s_Levels[7]},
  {src: s_Levels[8]},
  {src: s_Levels[9]},
  {src: s_Levels[10]},
  {src: s_Levels[11]},
  {src: s_Levels[12]},
  {src: s_Levels[13]},
  {src: s_Levels[14]},
  {src: s_Levels[15]},
  {src: s_Levels[16]},
  {src: s_Levels[17]},
  {src: s_Levels[18]},
  {src: s_Levels[19]},
  {src: s_Levels[20]},
  {src: s_Levels[21]},
  {src: s_Levels[22]},
  {src: s_Levels[23]},
  {src: s_Levels[24]},
  {src: s_Levels[25]},
  {src: s_Levels[26]},
  {src: s_Levels[27]},
  {src: s_Levels[28]},
  {src: s_Levels[29]},
  {src: s_Levels[30]},
  {src: s_Levels[31]},
  {src: s_Levels[32]},
  {src: s_Levels[33]},
  {src: s_Levels[34]},
  {src: s_Levels[35]},
  {src: s_Levels[36]},
  {src: s_Levels[37]},
  {src: s_Levels[38]},
  {src: s_Levels[39]},
  {src: s_Levels[40]},
  {src: s_Levels[41]},
  {src: s_Levels[42]},
  {src: s_Levels[43]},
  {src: s_Levels[44]},
  {src: s_Levels[45]},
  {src: s_Levels[46]},
  {src: s_Levels[47]},
  {src: s_Levels[48]},
  {src: s_Levels[49]},
  {src: s_Levels[50]},
  {src: s_Levels[51]},
  {src: s_Levels[52]},
  {src: s_Levels[53]},
  {src: s_Levels[54]},
  {src: s_Levels[55]},
  {src: s_Levels[56]},
  {src: s_Levels[57]},
  {src: s_Levels[58]},
  {src: s_Levels[59]},
  {src: s_Levels[60]},
  {src: s_Levels[61]},
  {src: s_Levels[62]},
  {src: s_Levels[63]},
  {src: s_Levels[64]},
  {src: s_Levels[65]},
  {src: s_Levels[66]},
  {src: s_Levels[67]},
  {src: s_Levels[68]},
  {src: s_Levels[69]},
  {src: s_Levels[70]},
  {src: s_Levels[71]},
  {src: s_Levels[72]},
  {src: s_Levels[73]},
  {src: s_Levels[74]},
  {src: s_Levels[75]},
  {src: s_Levels[76]},
  {src: s_Levels[77]},
  {src: s_Levels[78]},
  {src: s_Levels[79]},
  {src: s_Levels[80]},
  {src: s_Levels[81]},
  {src: s_Levels[82]},
  {src: s_Levels[83]},
  {src: s_Levels[84]},
  {src: s_Levels[85]},
  {src: s_Levels[86]},
  {src: s_Levels[87]},
  {src: s_Levels[88]},
  {src: s_Levels[89]},

  {src: s_Music1},
  {src: s_Music2},
  {src: s_SoundButtonTouch},
  {src: s_SoundEquipUnlock},
  {src: s_SoundEquipSword},
  {src: s_SoundComplete},
  {src: s_SoundSlash},
  {src: s_SoundThrowBird},
  {src: s_SoundThrowBomb},
  {src: s_SoundThrowBombFuse},
  {src: s_SoundExplosion},
  {src: s_SoundBirdExplosion},
  {src: s_SoundLoseLife},
  {src: s_SoundExchange},
  {src: s_SoundSwitch},
  {src: s_SoundStar},
  {src: s_SoundLine},
  {src: s_SoundWin},
  {src: s_SoundLose},
  {src: s_SoundExtraMove},
  {src: s_SoundDefence},
  {src: s_SoundStars[0]},
  {src: s_SoundStars[1]},
  {src: s_SoundStars[2]},
  {src: s_SoundBloom[0]},
  {src: s_SoundBloom[1]},
  {src: s_SoundBloom[2]},
  {src: s_SoundBloom[3]},
  {src: s_SoundChew[0]},
  {src: s_SoundChew[1]},
  {src: s_SoundChew[2]},
  {src: s_SoundDrop[0]},
  {src: s_SoundDrop[1]},
  {src: s_SoundDrop[2]}
];
