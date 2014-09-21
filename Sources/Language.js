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

var g_language  = {
  'zero': [
    {title: '$1', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '$1', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '$1', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '$1', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '$1', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '$1', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '$1', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '$1', font: 'RiiPopkk-R', size: 32, dimensions: false}
    ],
  'splash-message': [
    {title: '$1', font: 'Comic Sans MS Bold', size: 38, dimensions: false},
    {title: '$1', font: 'Comic Sans MS Bold', size: 38, dimensions: false},
    {title: '$1', font: 'Comic Sans MS Bold', size: 38, dimensions: false},
    {title: '$1', font: 'Comic Sans MS Bold', size: 38, dimensions: false},
    {title: '$1', font: 'Comic Sans MS Bold', size: 38, dimensions: false},
    {title: '$1', font: 'Comic Sans MS Bold', size: 38, dimensions: false},
    {title: '$1', font: 'Comic Sans MS Bold', size: 38, dimensions: false},
    {title: '$1', font: 'RiiPopkk-R', size: 38, dimensions: false}
    ],
  'level': [
    {title: '$1', font: 'Comic Sans MS Bold', size: 32, dimensions: false},
    {title: '$1', font: 'Comic Sans MS Bold', size: 32, dimensions: false},
    {title: '$1', font: 'Comic Sans MS Bold', size: 32, dimensions: false},
    {title: '$1', font: 'Comic Sans MS Bold', size: 32, dimensions: false},
    {title: '$1', font: 'Comic Sans MS Bold', size: 32, dimensions: false},
    {title: '$1', font: 'Comic Sans MS Bold', size: 32, dimensions: false},
    {title: '$1', font: 'Comic Sans MS Bold', size: 32, dimensions: false},
    {title: '$1', font: 'RiiPopkk-R', size: 32, dimensions: false}
    ],
  'total-stars': [
    {title: 'Collect stars!\n$1/$2', font: 'Comic Sans MS Bold', size: 26, dimensions: false},
    {title: 'Собирайте звезды!\n$1/$2', font: 'Comic Sans MS Bold', size: 26, dimensions: false},
    {title: '$1/$2', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '$1/$2', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '$1/$2', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '$1/$2', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '$1/$2', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '$1/$2', font: 'RiiPopkk-R', size: 32, dimensions: false}
    ],
  'tutorial-1': [
    {title: 'Move green square to the left to match 3 of the same!', font: 'Comic Sans MS', size: 46, dimensions: false},
    {title: 'Передвиньте зеленую иконку влево чтобы сократить 3 одинаковых иконки!', font: 'Comic Sans MS', size: 46, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'RiiPopkk-R', size: 32, dimensions: false}
    ],
  'tutorial-2': [
    {title: 'Get the gold heart quicker than your rival', font: 'Comic Sans MS Bold', size: 46, dimensions: [550, 280]},
    {title: 'Доберитесь к Большому сердцу быстрее Вашего соперника', font: 'Comic Sans MS Bold', size: 38, dimensions: [550, 350]},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: [550, 280]},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: [550, 280]},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: [550, 280]},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: [550, 280]},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: [550, 280]},
    {title: '', font: 'RiiPopkk-R', size: 32, dimensions: [550, 280]}
    ],
  'tutorial-3': [
    {title: 'This is you!', font: 'Comic Sans MS Bold', size: 46, dimensions: [550, 280]},
    {title: 'Это Ваша катапульта!', font: 'Comic Sans MS Bold', size: 46, dimensions: [550, 280]},
    {title: '', font: 'Comic Sans MS Bold', size: 32, dimensions: [550, 280]},
    {title: '', font: 'Comic Sans MS Bold', size: 32, dimensions: [550, 280]},
    {title: '', font: 'Comic Sans MS Bold', size: 32, dimensions: [550, 280]},
    {title: '', font: 'Comic Sans MS Bold', size: 32, dimensions: [550, 280]},
    {title: '', font: 'Comic Sans MS Bold', size: 32, dimensions: [550, 280]},
    {title: '', font: 'RiiPopkk-R', size: 32, dimensions: [550, 280]}
    ],
  'tutorial-4': [
    {title: 'This is your rival!', font: 'Comic Sans MS Bold', size: 46, dimensions: [550, 280]},
    {title: 'Это катапульта соперника!', font: 'Comic Sans MS Bold', size: 46, dimensions: [550, 280]},
    {title: '', font: 'Comic Sans MS Bold', size: 32, dimensions: [550, 280]},
    {title: '', font: 'Comic Sans MS Bold', size: 32, dimensions: [550, 280]},
    {title: '', font: 'Comic Sans MS Bold', size: 32, dimensions: [550, 280]},
    {title: '', font: 'Comic Sans MS Bold', size: 32, dimensions: [550, 280]},
    {title: '', font: 'Comic Sans MS Bold', size: 32, dimensions: [550, 280]},
    {title: '', font: 'RiiPopkk-R', size: 32, dimensions: [550, 280]}
    ],
  'no-more-combinations': [
    {title: 'No more combinations! Shuffling!', font: 'Comic Sans MS Bold', size: 46, dimensions: false},
    {title: 'Вариантов больше нет! Перемешиваем!', font: 'Comic Sans MS Bold', size: 46, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'RiiPopkk-R', size: 32, dimensions: false}
    ],
  'tutorial-elements-explanation-title-0': [
    {title: 'ATTACK AND DESTROY YOUR RIVAL', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: 'АТАКУЙТЕ И УНИЧТОЖТЕ ВАШЕГО ПРОТИВНИКА', font: 'Comic Sans MS Bold', size: 32, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'RiiPopkk-R', size: 36, dimensions: [300, 0]}
    ],
  'tutorial-elements-explanation-title-1': [
    {title: 'THIS IS YOUR LIVES', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: 'ЭТО ВАШИ ЖИЗНИ', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'RiiPopkk-R', size: 36, dimensions: [300, 0]}
    ],
  'tutorial-elements-explanation-title-2': [
    {title: 'PROTECT YOURSELF FROM RIVAL ATTACKS', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: 'ЗАЩИТИТЕ СЕБЯ ОТ АТАК ПРОТИВНИКА', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'RiiPopkk-R', size: 36, dimensions: [300, 0]}
    ],
  'tutorial-elements-explanation-title-3': [
    {title: 'COLLECT KEYS TO UNLOCK NEW LEVELS', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: 'СОБИРАЙТЕ КЛЮЧИ, ЧТОБЫ ОТКРЫТЬ НОВЫЕ УРОВНИ', font: 'Comic Sans MS Bold', size: 32, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'RiiPopkk-R', size: 36, dimensions: [300, 0]}
    ],
  'tutorial-elements-explanation-title-4': [
    {title: 'GO FORWARD TO THE VICTORY', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: 'ИДИТЕ ВПЕРЕД К ПОБЕДЕ', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'RiiPopkk-R', size: 36, dimensions: [300, 0]}
    ],
  'tutorial-elements-explanation-title-5': [
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'Comic Sans MS Bold', size: 36, dimensions: [300, 0]},
    {title: '', font: 'RiiPopkk-R', size: 36, dimensions: [300, 0]}
    ],
  'tutorial-elements-explanation-0': [
    {title: 'When you collected "Attack" your catapult launches birds to the rival and strikes him.\nGet more powerful weapons in shop to increase the damage.', font: 'Comic Sans MS', size: 46, dimensions: false},
    {title: 'Когда вы соберете атаку, ваша катапульта запустит\nптицу в противника и нанесет ему урон.', font: 'Comic Sans MS', size: 46, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'RiiPopkk-R', size: 32, dimensions: false}
    ],
  'tutorial-elements-explanation-1': [
    {title: 'Collect hearts to fill up the scale of life and stay in the game for a long time.\nThe game will be defeat when you lost all lives.', font: 'Comic Sans MS', size: 46, dimensions: false},
    {title: 'Собирайте сердца, чтобы пополнить шкалу жизни и оставаться в игре\nкак можно дольше. Вы проиграете, если у вас закончатся жизни.', font: 'Comic Sans MS', size: 46, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'RiiPopkk-R', size: 32, dimensions: false}
    ],
  'tutorial-elements-explanation-2': [
    {title: 'If you collect "Shield" you will protected from heavy damage your rival.', font: 'Comic Sans MS', size: 46, dimensions: false},
    {title: 'Соберете щит и вы будете защищены от атак Вашего противника.', font: 'Comic Sans MS', size: 46, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'RiiPopkk-R', size: 32, dimensions: false}
    ],
  'tutorial-elements-explanation-3': [
    {title: 'You must successfully finish level to get keys collected in it.\nAlso you can buy keys in shop.', font: 'Comic Sans MS', size: 46, dimensions: false},
    {title: 'Вы должны успешно завершить уровень, чтобы получить ключи собранные в нем.\nТак же вы можете купить ключи в магазине.', font: 'Comic Sans MS', size: 46, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'RiiPopkk-R', size: 32, dimensions: false}
    ],
  'tutorial-elements-explanation-4': [
    {title: 'If you collect Move - your catapult will move closer to big heart.\nThe more Moves you got, the more closer you are to win!', font: 'Comic Sans MS', size: 46, dimensions: false},
    {title: 'Соберите движение и катапульта подкатится ближе к большому сердцу.\nЧем больше движений вы соберете - тем ближе будете к победе!', font: 'Comic Sans MS', size: 46, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'RiiPopkk-R', size: 32, dimensions: false}
    ],
  'tutorial-elements-explanation-5': [
    {title: 'Text?', font: 'Comic Sans MS', size: 46, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 46, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'RiiPopkk-R', size: 32, dimensions: false}
    ],
  'moves': [
    {title: {string: '', nom: ' move', gen: ' move', plu: ' moves'}, font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: {string: '', nom: ' ход', gen: ' хода', plu: ' ходов'}, font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '$1', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '$1', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '$1', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '$1', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '$1', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '$1', font: 'RiiPopkk-R', size: 32, dimensions: false}
    ],
  'bonus-keys': [
    {title: {string: '$1 ', nom: 'key', gen: 'keys', plu: 'keys'}, font: 'Comic Sans MS Bold', size: 36, dimensions: false},
    {title: {string: '$1 ', nom: 'ключ', gen: 'ключа', plu: 'ключей'}, font: 'Comic Sans MS Bold', size: 36, dimensions: false},
    {title: '$1', font: 'Comic Sans MS Bold', size: 36, dimensions: false},
    {title: '$1', font: 'Comic Sans MS Bold', size: 36, dimensions: false},
    {title: '$1', font: 'Comic Sans MS Bold', size: 36, dimensions: false},
    {title: '$1', font: 'Comic Sans MS Bold', size: 36, dimensions: false},
    {title: '$1', font: 'Comic Sans MS Bold', size: 36, dimensions: false},
    {title: '$1', font: 'RiiPopkk-R', size: 36, dimensions: false}
    ],
  'player-health': [
    {title: 'HP $1', font: 'Comic Sans MS Bold', size: 24, dimensions: false},
    {title: 'Здоровье: $1', font: 'Comic Sans MS Bold', size: 24, dimensions: false},
    {title: 'HP $1', font: 'Comic Sans MS Bold', size: 24, dimensions: false},
    {title: 'HP $1', font: 'Comic Sans MS Bold', size: 24, dimensions: false},
    {title: 'HP $1', font: 'Comic Sans MS Bold', size: 24, dimensions: false},
    {title: 'HP $1', font: 'Comic Sans MS Bold', size: 24, dimensions: false},
    {title: 'HP $1', font: 'Comic Sans MS Bold', size: 24, dimensions: false},
    {title: 'HP $1', font: 'RiiPopkk-R', size: 24, dimensions: false}
    ],
  'player-defence': [
    {title: 'DF $1', font: 'Comic Sans MS Bold', size: 24, dimensions: false},
    {title: 'Защита: $1', font: 'Comic Sans MS Bold', size: 24, dimensions: false},
    {title: 'DF $1', font: 'Comic Sans MS Bold', size: 24, dimensions: false},
    {title: 'DF $1', font: 'Comic Sans MS Bold', size: 24, dimensions: false},
    {title: 'DF $1', font: 'Comic Sans MS Bold', size: 24, dimensions: false},
    {title: 'DF $1', font: 'Comic Sans MS Bold', size: 24, dimensions: false},
    {title: 'DF $1', font: 'Comic Sans MS Bold', size: 24, dimensions: false},
    {title: 'DF $1', font: 'RiiPopkk-R', size: 24, dimensions: false}
    ],
  'vk-price-text': [
    {title: '$1 votes', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '$1 голосов', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'RiiPopkk-R', size: 32, dimensions: false}//
    ],
  'lives-counter': [
    {title: '$1', font: 'Comic Sans MS', size: 48, dimensions: false},
    {title: '$1', font: 'Comic Sans MS', size: 48, dimensions: false},
    {title: '$1', font: 'Comic Sans MS', size: 48, dimensions: false},
    {title: '$1', font: 'Comic Sans MS', size: 48, dimensions: false},
    {title: '$1', font: 'Comic Sans MS', size: 48, dimensions: false},
    {title: '$1', font: 'Comic Sans MS', size: 48, dimensions: false},
    {title: '$1', font: 'Comic Sans MS', size: 48, dimensions: false},
    {title: '$1', font: 'RiiPopkk-R', size: 48, dimensions: false}
    ],
  'game-center-welcome': [
    {title: 'Welcome!', font: 'Times New Roman', size: 32, dimensions: false},
    {title: 'Добро пожаловать!', font: 'Times New Roman', size: 32, dimensions: false},
    {title: '', font: 'Times New Roman', size: 32, dimensions: false},
    {title: '', font: 'Times New Roman', size: 32, dimensions: false},
    {title: '', font: 'Times New Roman', size: 32, dimensions: false},
    {title: '', font: 'Times New Roman', size: 32, dimensions: false},
    {title: '', font: 'Times New Roman', size: 32, dimensions: false},
    {title: 'お帰りなさい！', font: 'RiiPopkk-R', size: 32, dimensions: false}//
    ],
  'game-center-information': [
    {title: "You have $1 from $2 unclocked achievements.", font: 'Times New Roman', size: 24, dimensions: [500, 0]},
    {title: 'Вами было достигнуто $1 из $2 достижений.', font: 'Times New Roman', size: 24, dimensions: [500, 0]},
    {title: '', font: 'Times New Roman', size: 24, dimensions: [500, 0]},
    {title: '', font: 'Times New Roman', size: 24, dimensions: [500, 0]},
    {title: '', font: 'Times New Roman', size: 24, dimensions: [500, 0]},
    {title: '', font: 'Times New Roman', size: 24, dimensions: [500, 0]},
    {title: '', font: 'Times New Roman', size: 24, dimensions: [500, 0]},
    {title: 'あなたは、$1 $2の成果を達成している。', font: 'RiiPopkk-R', size: 24, dimensions: [500, 0]}//
    ],
  'loading': [
    {title: 'Loading resources... $1%', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: 'Загрузка ресурсов... $1%', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: 'リソース読み込んでいます... $1%', font: 'RiiPopkk-R', size: 36, dimensions: false}//
    ],
  'connect-api': [
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: 'Обновление информации...', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: '', font: 'RiiPopkk-R', size: 36, dimensions: false}//
    ],
  'connect': [
    {title: 'Connecting to the server...', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: 'Подключение к серверу...', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: 'サーバーに接続している...', font: 'RiiPopkk-R', size: 36, dimensions: false}//
    ],
  'connect-error': [
    {title: 'Conection error', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: 'Ошибка подключения', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: '接続エラー', font: 'RiiPopkk-R', size: 36, dimensions: false}//
    ],
  'login': [
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: 'Ожидание авторизации...', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: false},
    {title: 'サーバーに接続している...', font: 'RiiPopkk-R', size: 36, dimensions: false}//
    ],
  'daily-revenue-title': [
    {title: 'Daily Revenue', font: 'Comic Sans MS', size: 38, dimensions: false},
    {title: 'Вознаграждение', font: 'Comic Sans MS', size: 38, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 38, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 38, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 38, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 38, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 38, dimensions: false},
    {title: '毎日の収入', font: 'RiiPopkk-R', size: 38, dimensions: false}//
    ],
  'daily-reward-side-title': [
    {title: 'Congratulations!\nYou got the daily reward!', font: 'Comic Sans MS', size: 52, dimensions: false},
    {title: 'Поздравляем!\nВы получили дневное\nвознаграждение!', font: 'Comic Sans MS', size: 52, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 52, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 52, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 52, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 52, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 52, dimensions: false},
    {title: 'おめでとう！\nあなたは一日の報酬を得る！', font: 'RiiPopkk-R', size: 52, dimensions: false}//
    ],
  'daily-reward-side-coins-1': [
    {title: '$1 gold coins', font: 'Comic Sans MS', size: 52, dimensions: false},
    {title: '$1 золотых монет', font: 'Comic Sans MS', size: 52, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 52, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 52, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 52, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 52, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 52, dimensions: false},
    {title: '$1 金貨', font: 'RiiPopkk-R', size: 52, dimensions: false}//
    ],
  'daily-reward-side-coins-2': [
    {title: '$1 silver coins', font: 'Comic Sans MS', size: 52, dimensions: false},
    {title: '$1 серебряных монет', font: 'Comic Sans MS', size: 52, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 52, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 52, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 52, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 52, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 52, dimensions: false},
    {title: '$1 銀貨', font: 'RiiPopkk-R', size: 52, dimensions: false}//
    ],
  'daily-reward-side-description': [
    {title: 'Come again to play with birds\nevery day and\nget valuable gifts! ', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: 'Приходите играть с птицами\nкаждый день и получайте все более\nи более ценные призы и подарки!', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '毎日鳥と遊ぶ来て、より多くの\n価値のある賞品やギフトを入手！', font: 'RiiPopkk-R', size: 32, dimensions: false}//
    ],
  'language-not-available': [
    {title: 'Not available', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: 'Не доступно', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '制限時間は1分です！', font: 'RiiPopkk-R', size: 24, dimensions: false}
    ],
  'continue': [
    {title: 'Continue', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: 'Продолжить', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '進む', font: 'RiiPopkk-R', size: 40, dimensions: false}//
    ],
  'choose-mode': [
    {title: 'Choose mode', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: 'Выбор режима', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '選択', font: 'RiiPopkk-R', size: 40, dimensions: false}//
    ],
  'about': [
    {title: 'About', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: 'Об игре', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: 'ゲームについて', font: 'RiiPopkk-R', size: 40, dimensions: false}
    ],
  'progress': [
    {title: 'Progress', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: 'Прогресс', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '進行状況', font: 'RiiPopkk-R', size: 40, dimensions: false}
    ],
  'more': [
    {title: 'More', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: 'Больше', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: 'その他', font: 'RiiPopkk-R', size: 40, dimensions: false}
    ],
  'language': [
    {title: 'Language', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: 'Язык', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '言語', font: 'RiiPopkk-R', size: 40, dimensions: false}
    ],
  'keys-popup': [
    {title: 'You need to buy \n some keys for unlock!', font: 'Comic Sans MS', size: 48, dimensions: [512, 0]},
    {title: 'Желаете купить несколько ключей?', font: 'Comic Sans MS', size: 48, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 48, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 48, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 48, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 48, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 48, dimensions: [512, 0]},
    {title: 'ロック解除のためにキーを購入しますか？', font: 'RiiPopkk-R', size: 48, dimensions: [512, 0]}
    ],
  'progress-mode': [
    {title: 'Progress', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: 'Прохождение', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: 'プログレス', font: 'RiiPopkk-R', size: 40, dimensions: false}
    ],
  'classic-mode': [
    {title: 'Classic', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: 'Классический', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: 'クラシック', font: 'RiiPopkk-R', size: 40, dimensions: false}
    ],
  'arcade-mode': [
    {title: 'Arcade', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: 'Аркада', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: 'アーケード', font: 'RiiPopkk-R', size: 40, dimensions: false}
    ],
  'lives-popup-1': [
    {title: 'You have run out of extra lives! Restore them or wait until they recover.', font: 'Comic Sans MS', size: 42, dimensions: [512, 0]},
    {title: 'У вас закончились экстра жизни! Восстановите их или подождите пока они восстановятся.', font: 'Comic Sans MS', size: 36, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: [512, 0]},
    {title: 'コインを購入する必要があります！', font: 'RiiPopkk-R', size: 36, dimensions: [512, 0]}
    ],
  'lives-popup-2': [
    {title: 'If you run out of gold hearts you should to find their to continue! ', font: 'Comic Sans MS', size: 42, dimensions: [512, 0]},
    {title: 'Если у вас закончатся золотые сердечки вам придётся отыскать их для продолжения!', font: 'Comic Sans MS', size: 36, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: [512, 0]},
    {title: '', font: 'RiiPopkk-R', size: 36, dimensions: [512, 0]}//
    ],
  'lives-popup-3': [
    {title: 'Gold hearts will soon be over! You can restore them now.', font: 'Comic Sans MS', size: 42, dimensions: [512, 0]},
    {title: 'Золотые сердечки на исходе! Вы можете восстановить их прямо сейчас.', font: 'Comic Sans MS', size: 36, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: [512, 0]},
    {title: '', font: 'RiiPopkk-R', size: 36, dimensions: [512, 0]}//
    ],
  'moves-popup-1': [
    {title: 'You have run out of moves but you can restore them right now!', font: 'Comic Sans MS', size: 42, dimensions: [512, 0]},
    {title: 'У вас закончились ходы, но вы можете восстановить их прямо сейчас!', font: 'Comic Sans MS', size: 36, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 36, dimensions: [512, 0]},
    {title: '', font: 'RiiPopkk-R', size: 36, dimensions: [512, 0]}
    ],
  'coins-popup': [
    {title: 'You need to buy some coins!', font: 'Comic Sans MS', size: 48, dimensions: [512, 0]},
    {title: 'Желаете купить несколько монет?', font: 'Comic Sans MS', size: 48, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 48, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 48, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 48, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 48, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 48, dimensions: [512, 0]},
    {title: '復活して、このレベルを続けますか？', font: 'RiiPopkk-R', size: 48, dimensions: [512, 0]}
    ],
  'not-enoght-coins': [
    {title: 'You do not have coins to buy this item', font: 'Comic Sans MS', size: 42, dimensions: false},
    {title: 'У вас недостаточно монет для покупки', font: 'Comic Sans MS', size: 42, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 42, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 42, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 42, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 42, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 42, dimensions: false},
    {title: 'あなたがコインを購入する必要はありません', font: 'RiiPopkk-R', size: 42, dimensions: false}//
    ],
  'purchase-popup-1': [
    {title: 'Waiting for connect to server...', font: 'Comic Sans MS', size: 42, dimensions: [512, 0]},
    {title: 'Ожидаем подключения к серверу...', font: 'Comic Sans MS', size: 42, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 42, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 42, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 42, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 42, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 42, dimensions: [512, 0]},
    {title: 'サーバーに接続するように期待して...', font: 'RiiPopkk-R', size: 42, dimensions: [512, 0]}//
    ],
  'purchase-popup-2': [
    {title: 'This operation may take some time.', font: 'Comic Sans MS', size: 32, dimensions: [512, 0]},
    {title: 'Данная операция может занять некоторое время.', font: 'Comic Sans MS', size: 32, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: [512, 0]},
    {title: 'この操作は時間がかかることがあります。', font: 'RiiPopkk-R', size: 32, dimensions: [512, 0]}//
    ],
  'rate-popup-1': [
    {title: 'Do you like our awesome game?', font: 'Comic Sans MS', size: 48, dimensions: [512, 0]},
    {title: 'Вам понравилась наша игра?', font: 'Comic Sans MS', size: 48, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 48, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 48, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 48, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 48, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 48, dimensions: [512, 0]},
    {title: 'ゲームは気に入ってくれましたか？', font: 'RiiPopkk-R', size: 48, dimensions: [512, 0]}
    ],
  'rate-popup-2': [
    {title: 'Please rate it in the your social network!', font: 'Comic Sans MS', size: 48, dimensions: [512, 0]},
    {title: 'Пожалуйста оцените ее в магазине приложений!', font: 'Comic Sans MS', size: 42, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 42, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 42, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 42, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 42, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 42, dimensions: [512, 0]},
    {title: 'アプリケーションストアでそれを評価してください！', font: 'RiiPopkk-R', size: 42, dimensions: [512, 0]}//
    ],
  'rate-popup-3': [
    {title: 'Rate', font: 'Comic Sans MS', size: 48, dimensions: false},
    {title: 'Оценить', font: 'Comic Sans MS', size: 48, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 48, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 48, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 48, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 48, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 48, dimensions: false},
    {title: '率', font: 'RiiPopkk-R', size: 48, dimensions: false}//
    ],
  'reset-popup-1': [
    {title: 'Are you sure that you want to reset your progress?', font: 'Comic Sans MS', size: 40, dimensions: [512, 0]},
    {title: 'Вы уверены что хотите сбросить прогресс?', font: 'Comic Sans MS', size: 40, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: [512, 0]},
    {title: '進行状況をリセットしてもよろしいですか？', font: 'RiiPopkk-R', size: 40, dimensions: [512, 0]}
    ],
  'reset-popup-2': [
    {title: 'You will start game from the first level!', font: 'Comic Sans MS', size: 40, dimensions: [512, 0]},
    {title: 'Вы начнете игру с первого уровня!', font: 'Comic Sans MS', size: 40, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: [512, 0]},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: [512, 0]},
    {title: '最初のレベルからゲームを開始します。', font: 'RiiPopkk-R', size: 40, dimensions: [512, 0]}
    ],
  'reset-popup-3': [
    {title: 'Reset', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: 'Сбросить', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: 'リセット', font: 'RiiPopkk-R', size: 40, dimensions: false}
    ],
  'reset': [
    {title: 'If you want to start game again you can completely reset your progress now.', font: 'Comic Sans MS', size: 48, dimensions: [1200, 0]},
    {title: 'Если вы хотите начать игру заново вы можете полностью сбросить прогресс игры.', font: 'Comic Sans MS', size: 48, dimensions: [1200, 0]},
    {title: '', font: 'Comic Sans MS', size: 48, dimensions: [800, 0]},
    {title: '', font: 'Comic Sans MS', size: 48, dimensions: [800, 0]},
    {title: '', font: 'Comic Sans MS', size: 48, dimensions: [800, 0]},
    {title: '', font: 'Comic Sans MS', size: 48, dimensions: [800, 0]},
    {title: '', font: 'Comic Sans MS', size: 48, dimensions: [800, 0]},
    {title: '再度起動する場合には、完全にゲームの進行をリセットすることができます。', font: 'RiiPopkk-R', size: 48, dimensions: [800, 0]}//
    ],
  'reset-button': [
    {title: 'Reset', font: 'Comic Sans MS', size: 48, dimensions: false},
    {title: 'Сбросить', font: 'Comic Sans MS', size: 48, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 48, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 48, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 48, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 48, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 48, dimensions: false},
    {title: 'リセット', font: 'RiiPopkk-R', size: 48, dimensions: false}
    ],
  'video': [
    {title: 'Watch video', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: 'Смотреть видео', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: 'ビデオを見る', font: 'RiiPopkk-R', size: 40, dimensions: false}
    ],
  'more-games': [
    {title: 'More games', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: 'Другие игры', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: 'その他のゲーム', font: 'RiiPopkk-R', size: 40, dimensions: false}
    ],
  'privacy-policy': [
    {title: 'Privacy policy', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: 'Политика \n конфиденциальности', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 40, dimensions: false},
    {title: 'プライバシーポリシー', font: 'RiiPopkk-R', size: 36, dimensions: false}
    ],
  'text-credits-1': [
    {title: "About", font: "Comic Sans MS", size: 56, dimensions: false},
    {title: "Об игре", font: "Comic Sans MS", size: 56, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 56, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 56, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 56, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 56, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 56, dimensions: false},
    {title: "ゲームについて", font: "RiiPopkk-R", size: 56, dimensions: false}
    ],
  'text-credits-2': [
    {title: "Version: 1.0", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Версия: 1.0", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "バージョン: 1.0", font: "RiiPopkk-R", size: 36, dimensions: false}
    ],
  'text-credits-3': [
    {title: "Build: 1001", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Сборка: 1001", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "ビルド: 1001", font: "RiiPopkk-R", size: 36, dimensions: false}
    ],
  'text-credits-4': [
    {title: "Created by:", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "На игрой работали:", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "制作：", font: "RiiPopkk-R", size: 36, dimensions: false}
    ],
  'text-credits-5': [
    {title: "Progreammers", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Программисты", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "プログラマ", font: "RiiPopkk-R", size: 36, dimensions: false}
    ],
  'text-credits-6': [
    {title: "Igor Mats", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Игорь Мац", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Igor Mats", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Igor Mats", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Igor Mats", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Igor Mats", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Igor Mats", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Igor Mats", font: "RiiPopkk-R", size: 36, dimensions: false}
    ],
  'text-credits-7': [
    {title: "Designers", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Дизайнеры", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "デザイナー", font: "RiiPopkk-R", size: 36, dimensions: false}
    ],
  'text-credits-8': [
    {title: "Dmitry Shane", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Дмитрий Шейн", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Dmitry Shane", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Dmitry Shane", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Dmitry Shane", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Dmitry Shane", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Dmitry Shane", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Dmitry Shane", font: "RiiPopkk-R", size: 36, dimensions: false}
    ],
  'text-credits-9': [
    {title: "Artists", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Художники", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "アーティスト", font: "RiiPopkk-R", size: 36, dimensions: false}
    ],
  'text-credits-10': [
    {title: "Maksim Petrov", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Максим Петров", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Maksim Petrov", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Maksim Petrov", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Maksim Petrov", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Maksim Petrov", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Maksim Petrov", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Maksim Petrov", font: "RiiPopkk-R", size: 36, dimensions: false}
    ],
  'text-credits-11': [
    {title: "Vyacheslav Shevchenko", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Вячеслав Шевченко", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Vyacheslav Shevchenko", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Vyacheslav Shevchenko", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Vyacheslav Shevchenko", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Vyacheslav Shevchenko", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Vyacheslav Shevchenko", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Vyacheslav Shevchenko", font: "RiiPopkk-R", size: 36, dimensions: false}
    ],
  'text-credits-12': [
    {title: "PR & Marketing", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Маркетологи", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "マーケティング", font: "RiiPopkk-R", size: 36, dimensions: false}
    ],
  'text-credits-13': [
    {title: "Aleksandr Lysenko", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Александр Лысенко", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Aleksandr Lysenko", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Aleksandr Lysenko", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Aleksandr Lysenko", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Aleksandr Lysenko", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Aleksandr Lysenko", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Aleksandr Lysenko", font: "RiiPopkk-R", size: 36, dimensions: false}
    ],
  'birds': [
    {title: "birds", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "птицы", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "鳥達", font: "RiiPopkk-R", size: 36, dimensions: false}
    ],
  'weapons': [
    {title: "weapons", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "оружие", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "武器", font: "RiiPopkk-R", size: 36, dimensions: false}
    ],
  'bonuses': [
    {title: "bonuses", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "бонусы", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "ボーナス", font: "RiiPopkk-R", size: 36, dimensions: false}
    ],
  'item-already-bought': [
    {title: "Alredy bought", font: "Comic Sans MS", size: 32, dimensions: false},
    {title: "Уже куплено", font: "Comic Sans MS", size: 32, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 32, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 32, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 32, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 32, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 32, dimensions: false},
    {title: "購入済み", font: "RiiPopkk-R", size: 32, dimensions: false}
    ],
  'buy': [
    {title: "Buy", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "Купить", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "購入", font: "RiiPopkk-R", size: 48, dimensions: false}
    ],
  'choose': [
    {title: "Choose", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "Выбрать", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "選択", font: "RiiPopkk-R", size: 48, dimensions: false}
    ],
  'tap-to-continue': [
    {title: "Tap to continue", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "Нажмите для продолжения", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "タップして継続", font: "RiiPopkk-R", size: 48, dimensions: false}
    ],
  'click-to-continue': [
    {title: "click to continue", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "нажмите для продолжения", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "タップして継続", font: "RiiPopkk-R", size: 48, dimensions: false}
    ],
  'unlocked': [
    {title: "was unlocked", font: "Comic Sans MS", size: 62, dimensions: false},
    {title: "было куплено", font: "Comic Sans MS", size: 62, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 62, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 62, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 62, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 62, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 62, dimensions: false},
    {title: "ロック解除されました", font: "RiiPopkk-R", size: 62, dimensions: false}
    ],
  'go': [
    {title: "Play", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "Играть", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "", font: "RiiPopkk-R", size: 48, dimensions: false}
    ],
  'unlock': [
    {title: "Unlock", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "Открыть", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: false},
    {title: "ロック解除", font: "RiiPopkk-R", size: 48, dimensions: false}
    ],
  'mode-unlock': [
    {title: "You can unlock this game mode just for:", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "Вы можете открыть этот режим всего за:", font: "Comic Sans MS", size: 42, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [450, 0]},
    {title: "このモードのロックを解除するには：", font: "RiiPopkk-R", size: 42, dimensions: [450, 0]}
    ],
  'item-unlock': [
    {title: "This item is locked. You must unlock it first just for:", font: "Comic Sans MS", size: 42, dimensions: [450, 0]},
    {title: "Этот элемент закрыт. \n Его можно открыть всего за:", font: "Comic Sans MS", size: 40, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [450, 0]},
    {title: "このモードのロックを解除するには：", font: "RiiPopkk-R", size: 42, dimensions: [450, 0]}
    ],
  'multiplayer-popup-1': [
    {title: "Play online?", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "Сыграть онлайн?", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 48, dimensions: [450, 0]}
    ],
  'multiplayer-popup-2': [
    {title: "Let's begin to play online mode! Earn many gold coins and increase your global ranking!", font: "Comic Sans MS", size: 36, dimensions: [500, 0]},
    {title: "Начните игру в онлайн режиме! Заработайте много золотых монет и увеличте свой глобальный рейтинг!", font: "Comic Sans MS", size: 36, dimensions: [500, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [500, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [500, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [500, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [500, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [500, 0]},
    {title: "", font: "RiiPopkk-R", size: 36, dimensions: [500, 0]}
    ],
  'network-1': [
    {title: "Connecting to server...", font: "Comic Sans MS", size: 52, dimensions: false},
    {title: "Соединяемся с сервером...", font: "Comic Sans MS", size: 52, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 52, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 52, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 52, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 52, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 52, dimensions: false},
    {title: "", font: "RiiPopkk-R", size: 52, dimensions: false}
    ],
  'network-2': [
    {title: "Searching the player...", font: "Comic Sans MS", size: 52, dimensions: false},
    {title: "Поиск игрока...", font: "Comic Sans MS", size: 52, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 52, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 52, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 52, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 52, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 52, dimensions: false},
    {title: "", font: "RiiPopkk-R", size: 52, dimensions: false}
    ],
  'network-3': [
    {title: "Waiting to start game...", font: "Comic Sans MS", size: 52, dimensions: false},
    {title: "Ожидание начала битвы...", font: "Comic Sans MS", size: 52, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 52, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 52, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 52, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 52, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 52, dimensions: false},
    {title: "", font: "RiiPopkk-R", size: 52, dimensions: false}
    ],
  'network-4': [
    {title: "Rival has disconnected \n trying to restore connection...", font: "Comic Sans MS", size: 52, dimensions: false},
    {title: "Соперник отключился! \n Пробуем восстановить соединение...", font: "Comic Sans MS", size: 52, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 52, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 52, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 52, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 52, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 52, dimensions: false},
    {title: "", font: "RiiPopkk-R", size: 52, dimensions: false}
    ],
  'help-popup-1': [
    {title: "About modes", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "О режимах", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "モードについて", font: "RiiPopkk-R", size: 48, dimensions: [450, 0]}
    ],
  'help-popup-2': [
    {title: "Progress mode", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "Режим прохождения", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "プログレスモード", font: "RiiPopkk-R", size: 36, dimensions: [450, 0]}
    ],
  'help-popup-3': [
    {title: "Classic mode", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "Классический режим", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},,
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},,
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},,
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},,
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},,
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "クラシックモード", font: "RiiPopkk-R", size: 36, dimensions: [450, 0]}
    ],
  'help-popup-4': [
    {title: "Arcade modes", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "Аркадный режим", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},,
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},,
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},,
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},,
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},,
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "アーケードモード", font: "RiiPopkk-R", size: 36, dimensions: [450, 0]}
    ],
  'help-popup-5': [
    {title: "Progress mode - a special mode. Available to you 30 levels (update soon) with a variety of tasks. As you progress through levels you will unlock new opportunities that you can get to use in other game modes.", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "Прохождение - это особый режим. Вам доступно 30 уровней (обновления совсем скоро) с различными заданиями. По мере прохождения уровней вам будут открываться новые возможности, которые вы можте использовать в других режимах игры.", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "プログレスモード - さまざまなミッションに挑戦。", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'help-popup-6': [
    {title: "Arcade mode - allow you to show what you can do in one minute! As the game progresses your skills increase and you are quite able to surpass its previous record!", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "Режим аркады - позволит вам показать на что вы способны за одну минуту! По мере прохождения игры ваши навыки увеличиваются и вы вполне в силах превзойти свой предыдущий рекорд!", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "アーケードモード - 1分間で記録に挑戦！", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'help-popup-7': [
    {title: "Classic mode - the game in which you have to compete with other players to earn coins, to increase its global ranking and use the bonus earned.", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "Классический режим - режим игры в котором вам предстоит соревноваться с другими игроками, зарабатывать монеты, увеличивать свой глобальный рейтинг и пользоваться заработанными бонусами.", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "クラシックモード -  ランキングやコイン獲得を目指すゲーム！", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'level-points': [
    {title: "Beat your record in \n $1 $2!", font: "Comic Sans MS", size: 28, dimensions: [450, 0]},
    {title: "Побейте свой рекорд в \n $1 $2!", font: "Comic Sans MS", size: 28, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 28, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 28, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 28, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 28, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 28, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 28, dimensions: [450, 0]}
    ],
  'level-points-point': [
    {title: {string: '', nom: 'point', gen: 'points', plu: 'points'}, font: "Comic Sans MS", size: 28, dimensions: [450, 0]},
    {title: {string: '', nom: 'очко', gen: 'очка', plu: 'очков'}, font: "Comic Sans MS", size: 28, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 28, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 28, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 28, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 28, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 28, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 28, dimensions: [450, 0]}
    ],
  'level-popup-1': [
    {title: "Level - $1", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "Уровень - $1", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 48, dimensions: [450, 0]}
    ],
  'level-popup-2': [
    {title: "Rating of friends", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "Рейтинг друзей", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 36, dimensions: [450, 0]}
    ],
  'level-popup-3': [
    {title: "Global rating", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "Глобальный рейтинг", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 36, dimensions: [450, 0]}
    ],
  'level-popup-4': [
    {title: "Difficulty", font: "Comic Sans MS", size: 28, dimensions: false},
    {title: "Сложность:", font: "Comic Sans MS", size: 28, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 28, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 28, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 28, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 28, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 28, dimensions: false},
    {title: "", font: "RiiPopkk-R", size: 28, dimensions: false}
    ],
  'level-popup-level-1': [
    {title: "All starts here. Royal Guard can no longer cope with the increased pressure from the home guard. We can win?", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "Все начинается здесь. Королевская гвардия больше не может справляться с возросшим давлением со стороны ополчения. Мы же сможем победить?", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'level-popup-level-2': [
    {title: "The first attempt was successful, but not too surprised crown. On you has been sent just more faster squad.", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "Первая попытка была удачной, но не сильно взволновала корону. К вам отправлен всего лишь более быстрый отряд.", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'level-popup-level-3': [
    {title: "The Royal Society doesn't believe in the threat on your part, but nonetheless sends the fastest squad in your area. Your strength is almost exhausted.", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "Королевское общество не верит в угрозу с вашей стороны, но тем не менее посылает самый быстрый отряд в вашем регионе. Ваши силы на исходе.", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'level-popup-level-4': [
    {title: "You have shown themselves well in the battle for truth. Has already a little bit restored strength, you meet even more angry enemies!", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "Вы проявили себя хорошо в битве за правду и немного восстановив силы, встречаете еще более злейшего врага!", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'level-popup-level-5': [
    {title: "Royal throne shaken. Threat felt by all royal jesters. They don't outright armed ...", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "Королевский трон пошатнулся. Угрозу чувствуют все предворные шуты. Они не на шутку вооружились...", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'level-popup-level-6': [
    {title: "Just can't believe that you survived after such a battle! You are closer to the kingdom, but still meets pockets of resistance. Ahead very fast catapult!", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "Просто не верится что вы уцелели после такой битвы! Вы все ближе к королевству, но все еще встречаете очаги сопротивления. Впереди очень быстрая катапульта!", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'level-popup-level-7': [
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'level-popup-level-8': [
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'level-popup-level-9': [
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'level-popup-level-10': [
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'level-popup-level-11': [
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'level-popup-level-12': [
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'level-popup-level-13': [
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'level-popup-level-14': [
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'level-popup-level-15': [
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'level-popup-level-16': [
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'level-popup-level-17': [
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'level-popup-level-18': [
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'level-popup-level-19': [
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'level-popup-level-20': [
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'level-popup-level-21': [
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'level-popup-level-22': [
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'level-popup-level-23': [
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'level-popup-level-24': [
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'level-popup-level-25': [
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'level-popup-level-26': [
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'level-popup-level-27': [
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'level-popup-level-28': [
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'level-popup-level-29': [
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'level-popup-level-30': [
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: [450, 0]}
    ],
  'tip-0': [
    {title: "Each of the bonus birds has unique abilities in different game modes - let's check what they can do!", font: "Comic Sans MS", size: 42, dimensions: [1200, 0]},
    {title: "Каждая бонусная птица обладает уникальными способностями в каждом из режимов игры - посмотрите на что они способны!", font: "Comic Sans MS", size: 42, dimensions: [1200, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [1200, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [1200, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [1200, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [1200, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [1200, 0]},
    {title: "各ボーナスの鳥は、ゲームモードのそれぞれにユニークな能力を持っている - 彼らは何ができるかを参照してください！", font: "RiiPopkk-R", size: 42, dimensions: [1200, 0]}//
    ],
  'tip-1': [
    {title: "Tip 1", font: "Comic Sans MS", size: 42, dimensions: [1200, 0]},
    {title: "Tip 1", font: "Comic Sans MS", size: 42, dimensions: [1200, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "ヒント", font: "RiiPopkk-R", size: 42, dimensions: [800, 0]}//
    ],
  'tip-2': [
    {title: "Tip 2", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "Tip 2", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "ヒント", font: "RiiPopkk-R", size: 42, dimensions: [800, 0]}//
    ],
  'tip-3': [
    {title: "Tip 3", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "Tip 3", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "ヒント", font: "RiiPopkk-R", size: 42, dimensions: [800, 0]}//
    ],
  'tip-4': [
    {title: "Tip 4", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "Tip 4", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "ヒント", font: "RiiPopkk-R", size: 42, dimensions: [800, 0]}//
    ],
  'tip-5': [
    {title: "Tip 5", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "Tip 5", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "ヒント", font: "RiiPopkk-R", size: 42, dimensions: [800, 0]}//
    ],
  'tip-6': [
    {title: "Tip 6", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "Tip 6", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "ヒント", font: "RiiPopkk-R", size: 42, dimensions: [800, 0]}//
    ],
  'tip-7': [
    {title: "Tip 7", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "Tip 7", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "ヒント", font: "RiiPopkk-R", size: 42, dimensions: [800, 0]}//
    ],
  'tip-8': [
    {title: "Tip 8", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "Tip 8", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "ヒント", font: "RiiPopkk-R", size: 42, dimensions: [800, 0]}//
    ],
  'tip-9': [
    {title: "Tip 9", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "Tip 9", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "ヒント", font: "RiiPopkk-R", size: 42, dimensions: [800, 0]}//
    ],
  'tip-10': [
    {title: "Tip 10", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "Tip 10", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: [800, 0]},
    {title: "ヒント", font: "RiiPopkk-R", size: 42, dimensions: [800, 0]}//
    ],
  'game-preview-0': [
    {title: "Ready?", font: "Comic Sans MS", size: 128, dimensions: false},
    {title: "Готовы?", font: "Comic Sans MS", size: 128, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 128, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 128, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 128, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 128, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 128, dimensions: false},
    {title: "Ready?", font: "RiiPopkk-R", size: 128, dimensions: false}
    ],
  'game-preview-1': [
    {title: "Go!", font: "Comic Sans MS", size: 128, dimensions: false},
    {title: "Вперед!", font: "Comic Sans MS", size: 128, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 128, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 128, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 128, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 128, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 128, dimensions: false},
    {title: "Go!", font: "RiiPopkk-R", size: 128, dimensions: false}
    ],
  'connect-to-the-server': [
    {title: "Now we trying to connect to the server...", font: "Comic Sans MS", size: 64, dimensions: false},
    {title: "Мы сейчас подключаемся к серверу...", font: "Comic Sans MS", size: 64, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 64, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 64, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 64, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 64, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 64, dimensions: false},
    {title: "我々は現在のサーバーに接続...", font: "RiiPopkk-R", size: 64, dimensions: false}//
    ],
  'game-level-update': [
    {title: "Level - $1", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "Уровень - $1", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: false},
    {title: "レベルアップ！", font: "RiiPopkk-R", size: 36, dimensions: false} // Wrong text
    ],
  'leaderboard-popup-1': [
    {title: "Leaderboard", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "Рейтинг игроков", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "プレイヤーランキング", font: "RiiPopkk-R", size: 48, dimensions: [450, 0]}//
    ],
  'leaderboard-popup-2': [
    {title: "Ваша позиция в рейтинге: $1", font: "Comic Sans MS", size: 30, dimensions: [450, 0]},
    {title: "Ваша позиция в рейтинге: $1", font: "Comic Sans MS", size: 30, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 30, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 30, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 30, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 30, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 30, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 30, dimensions: [450, 0]}
    ],
  'leaderboard-popup-3': [
    {title: "Всего игроков: $1", font: "Comic Sans MS", size: 30, dimensions: [450, 0]},
    {title: "Всего игроков: $1", font: "Comic Sans MS", size: 30, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 30, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 30, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 30, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 30, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 30, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 30, dimensions: [450, 0]}
    ],
  'achievements-popup-1': [
    {title: "Achievements", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "Ваши достижения", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 48, dimensions: [450, 0]},
    {title: "あなたの成果", font: "RiiPopkk-R", size: 48, dimensions: [450, 0]}//
    ],
  'challenge-popup-1': [
    {title: "Invite friends", font: "Comic Sans MS", size: 45, dimensions: [450, 0]},
    {title: "Пригласить друзей", font: "Comic Sans MS", size: 45, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 45, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 45, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 45, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 45, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 45, dimensions: [450, 0]},
    {title: "友人を招待", font: "RiiPopkk-R", size: 45, dimensions: [450, 0]}//
    ],
  'challenge-popup-2': [
    {title: "Invite your friends and receive valuable prizes and gifts!", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "Приглашайте друзей и получайте ценные призы и подарки!", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "$1 すでにこのゲームをプレイ。鳥の戦い、それを呼び出す、またはクロスをクリックして、ウィンドウを閉じます。", font: "RiiPopkk-R", size: 36, dimensions: [450, 0]}//
    ],
  'friends-lives-popup-1': [
    {title: "Friends needs help!", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "Друзьям нужна помощь!", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 36, dimensions: [450, 0]}//
    ],
  'friends-lives-popup-2': [
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "У некоторых ваших друзей закончились золотые сердечки! Подарите им сердечки!", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "Comic Sans MS", size: 36, dimensions: [450, 0]},
    {title: "", font: "RiiPopkk-R", size: 36, dimensions: [450, 0]}//
    ],
  'request-battle': [
    {title: 'Request', font: 'Comic Sans MS', size: 48, dimensions: false},
    {title: 'Пригласить', font: 'Comic Sans MS', size: 38, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 38, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 38, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 38, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 38, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 38, dimensions: false},
    {title: '招待', font: 'RiiPopkk-R', size: 38, dimensions: false}//
    ],
  'friends-help': [
    {title: 'Help', font: 'Comic Sans MS', size: 48, dimensions: false},
    {title: 'Помочь', font: 'Comic Sans MS', size: 38, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 38, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 38, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 38, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 38, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 38, dimensions: false},
    {title: '招待', font: 'RiiPopkk-R', size: 38, dimensions: false}//
    ],
  'finish-text-1': [
    {title: 'Caught birds: $1', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: 'Поймано птиц: $1', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: 'キャッチ鳥： $1', font: 'RiiPopkk-R', size: 32, dimensions: false}//
    ],
  'finish-text-2': [
    {title: 'Combo attack: $1', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: 'Комбо ударов: $1', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: 'コンボ攻撃： $1', font: 'RiiPopkk-R', size: 32, dimensions: false}//
    ],
  'finish-text-3': [
    {title: 'Ccaught aviators: $1', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: 'Поймано летчиков: $1', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: 'キャッチパイロット： $1', font: 'RiiPopkk-R', size: 32, dimensions: false}//
    ],
  'finish-text-4': [
    {title: 'Total coins earned:', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: 'Всего монет заработано:', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '総コインが獲得した。', font: 'RiiPopkk-R', size: 32, dimensions: false}
    ],
  'finish-text-5': [
    {title: 'Rating increased by: $1', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: 'Рейтинг увеличен на: $1', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'RiiPopkk-R', size: 32, dimensions: false}
    ],
  'finish-text-6': [
    {title: 'Moves left: $1', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: 'Ходов осталось: $1', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'RiiPopkk-R', size: 32, dimensions: false}
    ],
  'finish-text-7': [
    {title: 'Earned the keys: $1 ', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: 'Заработано ключей: $1', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'Comic Sans MS', size: 32, dimensions: false},
    {title: '', font: 'RiiPopkk-R', size: 32, dimensions: false}
    ],
  'finish-total-coins': [
    {title: '$1', font: 'Comic Sans MS', size: 48, dimensions: false},
    {title: '$1', font: 'Comic Sans MS', size: 48, dimensions: false},
    {title: '$1', font: 'Comic Sans MS', size: 48, dimensions: false},
    {title: '$1', font: 'Comic Sans MS', size: 48, dimensions: false},
    {title: '$1', font: 'Comic Sans MS', size: 48, dimensions: false},
    {title: '$1', font: 'Comic Sans MS', size: 48, dimensions: false},
    {title: '$1', font: 'Comic Sans MS', size: 48, dimensions: false},
    {title: '$1', font: 'RiiPopkk-R', size: 48, dimensions: false}
    ],

  'item-title-0': [
    {title: "Bamboo truth", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Бамбуковая палка", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "竹の棒", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-1': [
    {title: "Slat", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Доска", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "木の板", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-2': [
    {title: "Dubin", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Дубина", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "棍棒", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-3': [
    {title: "Shovel", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Лопата", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "シャベル", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-4': [
    {title: "Hammer of truth", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Молот правды", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "真実のハンマー", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-5': [
    {title: "Axe of power", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Топор всевластия", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "力の斧", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-6': [
    {title: "Magic Wand", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Волшебная палочка", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "魔法の杖", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-7': [
    {title: "Clown head baseball bat", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Бита клоуна", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "ピエロバット", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-8': [
    {title: "Fish", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Рыба", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "魚の干物", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-9': [
    {title: "The mechanical arm", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Механическая рука", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "メカニカルアーム", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-10': [
    {title: "Sword of Jedi", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Меч Джедая", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "ジェダイの剣", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-11': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-12': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-13': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-14': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-15': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-16': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-17': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-18': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-19': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-20': [
    {title: "Ice Bird", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Ледяная Птица", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "アイスバード", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-21': [
    {title: "Redskin Bird", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Птица Индеец", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "インディアンバード", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-22': [
    {title: "Robo Bird", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Птица Робот", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "ロボバード", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-23': [
    {title: "Bird Pirate", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Птица Пират", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "パイレーツバード", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-24': [
    {title: "Mexican Bird", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Птица Мексиканец", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "メキシカンバード", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-25': [
    {title: "Comandos Bird", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Птица Командор", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "コマンドーバード", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-26': [
    {title: "Zombie Bird", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Птица Зомби", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "ゾンビバード", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-27': [
    {title: "Samurai Bird", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Птица Ниндзя", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "サムライバード", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-28': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-29': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-30': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-31': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-32': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-33': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-34': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-35': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-36': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-37': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-38': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-39': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-40': [
    {title: "Shield of Wind", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Щит Ветра", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "ウインドシールド", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-41': [
    {title: "Hearts of Lives", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Сердца жизней", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "ライフハート", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-42': [
    {title: "Sand of time", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Песок времени", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "時の砂", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-43': [
    {title: "Extra Lives", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Экстра жизни", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "エクストラライフ", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-44': [
    {title: "Happy Keys", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Счастливый ключ", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "ハッピーキー", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-45': [
    {title: "Coin Boost", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Увеличение монет", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "コインブースト", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-46': [
    {title: "Coin Boost", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Увеличение монет", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "コインブースト", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-47': [
    {title: "Multiple kills", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Множитель убийств", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "マルチキル", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-48': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-49': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-50': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-51': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-52': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-53': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-54': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-55': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-56': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-57': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-58': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-title-59': [
    {title: "Information not found", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "Информация не найдена", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 42, dimensions: false},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 42, dimensions: false}
    ],
  'item-description-0': [
    {title: "This is ancient bamboo stick is a talisman and a symbol of truth in the house of old chinaman. Long ago was used as a strong and perhaps the only weapons the Royal Army. Now stick serves as an excellent means to combat flies.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Эта древняя бамбуковая палица является оберегом и символом правды в доме у старого китайца. Раньше была сильным и пожалуй единственным оружием царской армии. Сейчас же палица служит как отличное средство для борьбы с мухами.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "この古代の竹の棒は中国のお守りと真実の象徴です。 おそらく大昔は唯一の武器でした。 今はハエと戦うための優れた道具としても役立ちます。", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-1': [
    {title: "Slat was tear off from favorite doghouse of angry bullterrier. While he was sleeping in the back yard. After finding out about it, he ran in search around of the entire quarter, but did not find her. Now, will be better for you, dont turn up on his way!", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Доска была оторвана от любимой будки злого бультерьера. Пока тот спал на заднем дворе. После обнаружения о пропаже он в поисках оббежал весь квартал, но так и не нашел её. Теперь вам лучше не попадаться ему на пути!", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "この細長い板は愛犬のブルテリアが裏庭で寝ている間に犬小屋からはがしたものです。 それを知った犬は探し回りましたが見付けることができていません。", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-2': [
    {title: "Dubin - cunning raccoon broke the this dubin from branches of eternal tree , around which all forest animals were going on the quiet advice. According to legend, was broken dubin on the tenth night moon will give the his owner strength and longevity.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Хитрый енот выломал её из ветки вечного дерева, возле которого собирались все звери на тихий совет. По поверью, выломанная дубина в ночь на десятую светлую луну придаст обладателю сил и долголетия.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "棍棒は永遠の木から作られました。 伝説によると第十の月夜に所有者に力と長寿を与えます。", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-3': [
    {title: "Shovel - old gardener's shovel Johnny. It not as simple as it seems at first glance. Only with it help you can get a great treasure of old Johnny, who are buried under the blue stone which is in the Green Valley.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Старая лопата садовника Джонни. Она не так проста, как кажется на первый взгляд. Только с её помощью можно получить огромные сокровища старика Джонни, которые зарыты под голубым камнем в Зеленой Долине.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "古い庭師のシャベルです。 一目見ただけでは普通のシャベルに見えますが、グリーンバレーにある青い石の下に埋もれていた偉大な宝です。", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-4': [
    {title: "Hammer - Stone Hammer of truth. With it, ancient people of the Lost World, builded huts and hunted for food. In crowd, they went on a hunt in search of a mammoth. When they are found his lair, were surrounded it and walked to mortal combat with the beast.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Каменный молот правды. С его помощью древние жители забытой страны строили себе хижины и добывали еду. Собираясь толпой они ходили на охоту в поисках мамонта. Когда они находили его берлогу, окружали её и шли на смертный бой со зверем.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "真実のストーンハンマー。 ロストワールドの古代の人々は小屋を建て、仲間を集めてマンモス狩りをしました。 その時、獣との戦いに使われた道具です。", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-5': [
    {title: "This two-sided ax was a symbol of the absolute power of an old Indian. Axe reminds to the Indian about pasts times, when he go on the greats reds dragons that once in 10 years, come from high dark mountains and burned the indian village.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Этот двух сторонний топор был символом всевластия старого индейца. Топор напоминал индейцу о былых временах, когда он ходил с ним на великих красных драконов, которые раз в 10 лет прилетали со своих высоких темных гор и сжигали деревню индейца.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "この両刃の斧は、古いインディアンの絶対的な力の象徴でした。 インディアンの村を燃やしたレッドドラゴンを退治したときに使われた話が残っています。", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-6': [
    {title: "Magic wand fairy godmother which was found in the hollow of a huge old oak tree which grows on the outskirts next to the dense forest. Be careful, rumored to live there unknown monsters. In all probability, they took the magic wand of fairy godmother and hid it. What's wrong with fairy nobody knows.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Ее нашли в дупле старого огромного дуба, вблизи густого дремучего леса. Будьте осторожны, по слухам там живут неведомые чудища. По всей вероятности они отобрали волшебную палочку у доброй феи и спрятали её. Что случилось с феей никому не известно.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "魔法の杖は、うっそうとした密林で古い巨大な樫の木のくぼみで発見されました。 そこには妖精から杖を奪ったモンスターがいる噂があります。気をつけて。", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-7': [
    {title: "At Baseball bat portrayed the first clown of old circus. The audience has loved his performance with trained dinosaurs and flying elephants. As a result, good people decided to portrayed his look on this bat.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "На бите изображен первый клоун старого цирка. Зрителям очень нравились его выступления с дрессированными динозаврами и летающими слонами. В результате добрые люди решили увековечить его облик на этой бите.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "古いサーカスの最初のピエロをかたどったバットです。 観客は訓練された象や彼のパフォーマンスを愛していました。 これはその功績を称えて作られたもののようです。", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-8': [
    {title: "Dried fish, which fulfilled the wishes of the royal Family. Was found near the dark side of the fast river, of little gnomes. Be careful and cautious in their whishes, maybe your wish will come true right now!", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Та самая рыба из сказки, что желания деда исполняла, когда тот неводом её вытянул. Была найдена у темного берега быстрой реки кучкой маленьких гномов. Будьте внимательны и осторожны в своих желаниях, возможно ваше исполнится прямо сейчас!", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "魚の干物です。この魚は、速い流れの川で取れました。 取り扱いには注意が必要です！ たぶん、あなたの希望どおりの働きをしてくれます。", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-9': [
    {title: "Iron mechanical arm, the result of years of secret developments the leading companies in the world in nanotechnologies. It was the beginning of creating a top-secret project - Steel bearings. Now the hand used as an industrial coffee machine.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Железная механическая рука, результат многолетних засекреченных разработок ведущих компаний мира в наноиндустрии. Она стала началом создания сверх секретного проекта - Стальной подшипник. Сейчас же руку используют как промышленную кофеварку.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "鉄のメカニカルアームはナノテクノロジー業界で世界をリードする企業の成果です。 スチール製ベアリング、それは極秘プロジェクトの始まりでした。 現在、メカニカルハンドは産業用コーヒーマシンにも使われているようです。", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-10': [
    {title: "The legendary Sword of the Jedi, which captured spacecrafts, that there spacecraft - the whole galaxy! His owner endowed unusual strength and abilities, but only until the charge battery is out.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Легендарный Меч Джедая, которым захватывались космические корабли, да что там корабли - целые галактики! Его владельца меч наделял необыкновенной силой и возможностями, но лишь до тех пор пока не сядут батарейки.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "ジェダイの伝説的な剣。 銀河系を守る正義のエネルギー！ 所有者は特別な強さと能力を得られます。 ただし、バッテリー切れに注意です。", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-11': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-12': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-13': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-14': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-15': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-16': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-17': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-18': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-19': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-20': [
    {title: "When all the birds flew away to warmer climes, this bird remained sitting on a branch fabulous tree, no one knew what she expected. But with the advent of cold weather, this bird was completely frozen and turned into ice. Since then, wherever bird appeared, all around freezing.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Когда все птицы улетали в теплые края, эта птица оставалась сидеть на ветке сказочного дерева, никто не знал чего она ждала. Но с приходом холодов, она насквозь промерзла и превратилась в льдышку. С тех пор, где бы она не появилась, все вокруге замерзает.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "すべての鳥が暖かい地方に飛び去った時も、この鳥は木の枝に残ったままでした。 寒さがきてこの鳥は完全に凍結し氷に変わります。 この鳥が現れるところすべてが凍ってしまいます。", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-21': [
    {title: "In times of drought, it has always helped the dux to bring rain, after that, chief of indians was let go the bird fly and she always came back. One day, after another flight, the bird brought the bad news that the paleface go on the attack on the redskins. Nobody gave this value, in consequence of which the Redskins camp was burned. Remember, the bird never lies!", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Эта любимая птица вождя племени краснокожих. Когда наступали периоды засухи,она всегда помогала вождю вызывать дождь, после чего индеец выпускал птицу полетать и она всегда возвращалась. Однажды, после очередного полета, птица принесла плохую новость о том, что бледнолицие идут в атаку на краснокожих. Никто не предал этому значение, в следствии чего лагерь краснокожих был сожжен. Помните, птица никогда не врет!", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "この鳥はインディアンのペットで、干ばつのときには雨をもたらすのを助けていました。 インディアンのチーフは鳥を自由に飛ばせていましたが、ある日キャンプが襲われ燃やされてしまいます。 忘れないで！この鳥はだまっていません。", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-22': [
    {title: "This bird kept involuntarily in a secret laboratory, where scientists are developing laser weapons. At one point it all went wrong: as a result of man-made disaster this bird has evolved. She also remembered all the scientific developments and now this bird can self made laser gun. Try it bird!", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Эта птица невольно удерживалась в лаборатории секретной базы, где ученые проводили разработки лазерного оружия. В один момент все пошло не так: в результате техногенной катастрофы птица эволюционировала. Так же она запомнила все разработки ученых и теперь может сама создавать лазерные пушки. Попробуйте эту птицу!", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "この鳥は科学者がレーザー兵器を開発している秘密の研究室で誕生しました。 ある時、それはすべて間違っていたと分かります。 人災の結果、この鳥は進化しました。 この鳥はレーザーガンを利用できます。試してみてください！", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-23': [
    {title: "Ship bird of filibusters, participated in all the campaigns and battles. This bird was mascot and key to the success of the battle. It will definitely bring you good luck! Possibly give you a pirate chest full of gold or other no less valuable prize!", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Корабельная птица флибустьеров, участвовала во всех походах и боях. Была талисманом и залогом успешной битвы. Она определенно принесет вам удачу! Это может быть полный сундук пиратского золота или другой не менее ценный приз!", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "海賊船のこの鳥はすべての戦いに参加し、マスコットとして戦いを勝利に導く鍵になりました。 間違いなくあなたにも幸運をもたらすでしょう！", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-24': [
    {title: "This bird is a big fan of tacos and burritos, she also likes to drink a few glasses of the famous Mexican tequila. But when she starts to drink - no one can't stop it. This bird will drink until, she will have double eyesight, and in eyes will blink stars. Exactly the ability of this bird you like! ;)", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Эта птица большая любительница тако и бурито, так же она не прочь опрокинуть стопку, другую знаменитой мексиканской текилы. Но когда она начинает пить - её уже не остановить. Пьет до тех пор, пока не начнет все вокруг двоится, а в глазах сыпаться звезды. Вам точно придется по вкусу способность этой птицы! ;)", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "この鳥はタコスやブリトーが大好きです。またメキシコの有名なお酒、テキーラをグラスで２、３杯は飲みます。 この鳥が飲み始めると誰も止められません。 しかしあなたはきっとこの鳥の能力を好きになるでしょう！", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-25': [
    {title: "Experienced fighter, held a lot of great battles and battles, in past - blaster. Very explosive character. With him is dangerous to negotiate - he always have hidden grenade somewhere and you never know where and at what time it exploding.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Бывалый вояка, прошедший множество великих битв и сражений, в прошлом подрывник. Очень взрывной персонаж. С ним опасно вести переговоры - у него всегда где-то запрятана граната и никогда не знаешь в каком месте и в какой момент она рванет.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "経験豊富なファイターです。過去に大きな戦いをたくさん経験してきました。 非常に爆発的なキャラクターでこの鳥との交渉は危険です。 いつもどこかに手榴弾を隠していて、それがいつ爆発するかはわかりません。", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-26': [
    {title: "There is an ancient legend about this bird, some fear, some not. But no one has never seen her. The legend says that this bird leaves a trails - a poison cloud of green smoke. Ordinary birds that flying behind her, thru these clouds may have never come back.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Существует древняя легенда о этой птице, некоторые боятся её, некоторые нет. Но никто так и не встречал её. В легенде говорится, что эта птица оставляет за собой следы - облака ядовитого зеленого дыма. Обыкновенные птицы, которые полетят за ней в эти облака уже могут никогда не вернуться.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "この鳥には恐怖の伝説があります。 伝説ではこの鳥が飛ぶと緑色の毒の雲がでると言われています。 その雲の中を普通の鳥が飛ぶと戻ってこなくなるらしいです。", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-27': [
    {title: "Completed courses samurai in the nearby forest. Specialization: \"Master of warglaive and throwing weapons\". A big fan of sushi and all sorts of insects. Especially worth noting his ability - Mass Attack all enemies of the shurikens. You're lucky if you has this bird!", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Закончил курсы самураев в соседнем лесу. Специальность: \"Мастер боевых клинков и метательного оружия\". Большой любитель суши и всяческих насекомых. Особенно, стоит отметить его умение - массово атаковать всех противников сюрикэнами. Вы счастливчик, если владеете этой птицей!", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "サムライバードは投てき武器のマスターで、寿司や昆虫が好きです。 すべての敵を総攻撃する手裏剣に注目！ この鳥を持ったあなたは幸運でしょう！", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-28': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-29': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-30': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-31': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-32': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-33': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-34': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-35': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-36': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-37': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-38': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-39': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-40': [
    {title: "Ancient shield was in service during the time of the bird's crusade, bringing the crusade was defeated. When using this shield that all birds has reduced protection and you can easily deal with them.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Древний щит был на вооружении во времена птичьего похода, в результате чего поход был провален. \n При использовании этого щита у всех птиц снижается защита и вы без труда разделаетесь с ними.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "古代のシールドは十字軍に敗北をもたらしました。 このシールドを使用するとすべての鳥たちの保護が低下し、簡単に対処できるようになります。", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-41': [
    {title: "A kind of talisman. Be sure to purchase it for best results in game. \n While you have it - you can continue playing.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Является своего рода талисманом. Обязательно приобретите его для достижения лучших результатов в игре. \n Пока у вас есть сердца - вы можете продолжать игру.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "お守りの一種です。ゲームで最高の結果を得るために購入してください。 あなたがハートを持っているとコンティニューできます。", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-42': [
    {title: "This bonus is specifically for arcade mode game. When you buy this bonus you get a chance to earn extra time of the arcade game. Thus you will be able to overcome rivals and set new records.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Этот бонус специально для аркадного режима игры. С покупкой этого бонуса вы получаете возможность выбить из птиц дополнительное время игры. Таким образом вы сможете преодолеть своих соперников и поставить новые рекорды.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "このボーナスは特にアーケードモードで効果があります。 ボーナスの購入でアーケードゲームの延長時間を獲得できます。 ライバルに打ち勝って新記録を目指せます。", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-43': [
    {title: "After each level you losing burns on one's heart, but it also restored: one in 30 minutes. Tired of waiting - buy more extra lives to continue game.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "После каждого проигранного уровня у вас сгорает по 1 сердцу, но оно так же восстанавливается за 30 минут. \n Надоело ждать - купите больше экстра жизней, чтобы продолжить игру.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "各レベルの後にはハートを失います。 30分間で一つ回復しますが、待つのにくたびれた場合には追加で購入できます。", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-44': [
    {title: "Buy more keys and you can unlock new game modes. And also, if you can't pass a some level - with the aid of this keys, you can unlock new levels.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Купите больше ключей и сможете открыть новые режимы игры. \n А так же, если не можете пройти какой-то уровень - с помошью ключей вы сможете открыть новые уровни.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "たくさんのキーを購入すると新しいゲームモードのロックを解除できます。 あなたが特定のレベルをパス出来ない時は、キーの助けを借りて新しいレベルのロックを解除することができます。", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-45': [
    {title: "Bonus from uncle Sam - the old rockefeller. With this bonus, you will recive in 2 times more coins and will be able to buy better weapons or a cool bird. Next, earn coins!", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Бонус от дядюшки Сэма - старого рокфеллера. С этим бонусом, вы будет в 2 раза больше получать монеты и быстрее сможете купить крутую пушку или птицу. Вперед, зарабатывать монеты!", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "アンクルサムからのボーナス。 このボーナスを使用すると、２倍以上のコインを受け取ることができるのでより早く良い武器やクールな鳥を購入できるようになります。", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-46': [
    {title: "Bonus from uncle Sam - the old rockefeller. With this bonus, you will recive in 2 times more coins and will be able to buy better weapons or a cool bird. Next, earn coins!", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Бонус от дядюшки Сэма - старого рокфеллера. С этим бонусом, вы будет в 2 раза больше получать монеты и быстрее сможете купить крутую пушку или птицу. Вперед, зарабатывать монеты!", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "アンクルサムからのボーナス。 このボーナスを使用すると、２倍以上のコインを受け取ることができるのでより早く良い武器やクールな鳥を購入できるようになります。", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-47': [
    {title: "2-fold increases all your kills. With this bonus, you can easily beat records of your friends, and take a leadership.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "В 2 раза увеличит все ваши убийства. С этим бонусом, вы с легкостью можете побить рекорды ваших друзей и занять лидирующую позицию.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "すべてのキル数が２倍になります。このボーナスを使用すると簡単に友人のスコアを破って記録を作れます。", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-48': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-49': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-50': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-51': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-52': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-53': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-54': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-55': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-56': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-57': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-58': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'item-description-59': [
    {title: "Information not found.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "Информация не найдена.", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [420, 0]},
    {title: "情報が見つかりません", font: "RiiPopkk-R", size: 25, dimensions: [420, 0]}
    ],
  'achievement-locked': [
    {title: "Achievement locked", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Недостигнутое достижение", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "未到達の達成", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}//
    ],

  'achievement-name-1': [
    {title: "Classic mode", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Классический режим", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "クラシックモード", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-2': [
    {title: "Arcade mode", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Режим аркады", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "アーケードモード", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-3': [
    {title: "Freezer bird", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Ледяная птица", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "アイスバード", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-4': [
    {title: "Redskin bird", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Краснокожий", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "インディアンバード", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-5': [
    {title: "Mexican bird", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Мексиканец", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "メキシカンバード", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-6': [
    {title: "Samurai bird", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Самурай", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "サムライバード", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-7': [
    {title: "Pirate bird", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Пират", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "パイレーツバード", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-8': [
    {title: "Robo bird", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Робооптица", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ロボバード", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-9': [
    {title: "Comando bird", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Командос", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "コマンドーバード", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-10': [
    {title: "Zombie bird", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Зомби", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ゾンビバード", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-11': [
    {title: "Junior", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Новичок", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニア", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-12': [
    {title: "Aviarist", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Птицевод", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "管理人", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-13': [
    {title: "Killer", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Убийца", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "キラー", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-14': [
    {title: "Lord of birds", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Повелитель птиц", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "バードキング", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-15': [
    {title: "Triple kill", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Тройное убийство", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "トリプルキル", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-16': [
    {title: "Ultra kill", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Супер убийство", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ウルトラキル", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-17': [
    {title: "Rampage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Ярость", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "大暴れ", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-18': [
    {title: "Fan of green birds", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Любитель зеленых птиц", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "緑の鳥ファン", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-19': [
    {title: "Fan of yellow birds", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Любитель желтых птиц", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "黄色い鳥ファン", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-20': [
    {title: "Fan of azure birds", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Любитель голубых птиц", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "紺の鳥ファン", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-21': [
    {title: "Fan of purple birds", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Любитель фиолетовых птиц", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "紫の鳥ファン", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-22': [
    {title: "Fan of red birds", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Любитель красных птиц", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "赤い鳥ファン", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-23': [
    {title: "Fan of orange birds", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Любитель оранжевых птиц", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "オレンジの鳥ファン", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-24': [
    {title: "Fan of blue birds", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Любитель синих птиц", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "青い鳥ファン", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-25': [
    {title: "Killer of green birds", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Убийца зеленых птиц", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "緑の鳥キラー", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-26': [
    {title: "Killer of yellow birds", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Убийца желтых птиц", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "黄色い鳥キラー", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-27': [
    {title: "Killer of azure birds", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Убийца голубых птиц", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "紺の鳥キラー", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-28': [
    {title: "Killer of purple birds", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Убийца фиолетовых птиц", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "紫の鳥キラー", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-29': [
    {title: "Killer of red birds", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Убийца красных птиц", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "赤い鳥キラー", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-30': [
    {title: "Killer of orange birds", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Убийца оранжевых птиц", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "オレンジの鳥キラー", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-31': [
    {title: "Killer of blue birds", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Убийца синих птиц", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "青い鳥キラー", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-32': [
    {title: "Hunter on green birds", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Охотник на зеленых птиц", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "緑の鳥ハンター", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-33': [
    {title: "Hunter on yellow birds", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Охотник на желтых птиц", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "黄色い鳥ハンター", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-34': [
    {title: "Hunter on azure birds", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Охотник на голубых птиц", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "紺の鳥ハンター", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]},
    ],
  'achievement-name-35': [
    {title: "Hunter on purple birds", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Охотник на фиолетовых птиц", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "紫の鳥ハンター", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-36': [
    {title: "Hunter on red birds", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Охотник на красных птиц", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "赤い鳥ハンター", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-37': [
    {title: "Hunter on orange birds", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Охотник на оранжевых птиц", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "オレンジの鳥ハンター", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-38': [
    {title: "Hunter on blue birds", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Охотник на синих птиц", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "青い鳥ハンター", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-39': [
    {title: "Lord of green birds", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Повелитель зеленых птиц", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "緑の鳥キング", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-40': [
    {title: "Lord of yellow birds", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Повелитель желтых птиц", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "黄色い鳥キング", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-41': [
    {title: "Lord of azure birds", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Повелитель голубых птиц", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "紺の鳥キング", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-42': [
    {title: "Lord of purple birds", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Повелитель фиолетовых птиц", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "紫の鳥キング", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-43': [
    {title: "Lord of red birds", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Повелитель красных птиц", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "赤い鳥キング", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-44': [
    {title: "Lord of orange birds", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Повелитель оранжевых птиц", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "オレンジの鳥キング", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-name-45': [
    {title: "Lord of blue birds", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Повелитель синих птиц", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "青い鳥キング", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],

  'achievement-description-1': [
    {title: "You have open classic mode", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли классический режим", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "オープンなクラシックモードがあります", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-2': [
    {title: "You have open arcade mode", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли режим аркады", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "オープンなアーケードモードがあります", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-3': [
    {title: "You have earn ice bird", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы получили ледяную птицу", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "アイスバードを獲得しました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-4': [
    {title: "You earn redskin bird", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы получили птицу краснокожих", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "レッドスキンバードを獲得しました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-5': [
    {title: "You earn mexican bird", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы получили птицу мексиканца", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "メキシカンバードを獲得しました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-6': [
    {title: "You earn samurai bird", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы получили птицу самурая", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "サムライバードを獲得しました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-7': [
    {title: "You earn pirate bird", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы получили птицу пирата", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "パイレーツバードを獲得しました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-8': [
    {title: "You earn robobird", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы получили робоптицу", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ロボバードを獲得しました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-9': [
    {title: "You earn comando bird", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы  получили птицу командос", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "コマンドーバードを獲得しました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-10': [
    {title: "You eran zombie bird", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы получили птицу зомби", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ゾンビバードを獲得しました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-11': [
    {title: "You unlock junior bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-12': [
    {title: "You unlock aviarist bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-13': [
    {title: "You unlock keller bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-14': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-15': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-16': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-17': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-18': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-19': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-20': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-21': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-22': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-23': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-24': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-25': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-26': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-27': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-28': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-29': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-30': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-31': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-32': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-33': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-34': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-35': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-36': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-37': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-38': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-39': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-40': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-41': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-42': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-43': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-44': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'achievement-description-45': [
    {title: "You unlock new bage", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "Вы открыли новый бейдж", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: [280, 0]},
    {title: "ジュニアバッジをアンロックしました", font: "RiiPopkk-R", size: 25, dimensions: [280, 0]}
    ],
  'leaderboard-name': [
    {title: "$1", font: "Comic Sans MS", size: 28, dimensions: false},
    {title: "$1", font: "Comic Sans MS", size: 28, dimensions: false},
    {title: "$1", font: "Comic Sans MS", size: 28, dimensions: false},
    {title: "$1", font: "Comic Sans MS", size: 28, dimensions: false},
    {title: "$1", font: "Comic Sans MS", size: 28, dimensions: false},
    {title: "$1", font: "Comic Sans MS", size: 28, dimensions: false},
    {title: "$1", font: "Comic Sans MS", size: 28, dimensions: false},
    {title: "$1", font: "RiiPopkk-R", size: 28, dimensions: false}
    ],
  'leaderboard-score': [
    {title: "Ranking: $1 $2", font: "Comic Sans MS", size: 25, dimensions: false},
    {title: "Рейтинг: $1 $2", font: "Comic Sans MS", size: 25, dimensions: false},
    {title: "$1", font: "Comic Sans MS", size: 25, dimensions: false},
    {title: "$1", font: "Comic Sans MS", size: 25, dimensions: false},
    {title: "$1", font: "Comic Sans MS", size: 25, dimensions: false},
    {title: "$1", font: "Comic Sans MS", size: 25, dimensions: false},
    {title: "$1", font: "Comic Sans MS", size: 25, dimensions: false},
    {title: "$1", font: "RiiPopkk-R", size: 25, dimensions: false}
    ],
  'friends-live-present-1': [
    {title: "Give live", font: "Comic Sans MS", size: 25, dimensions: false},
    {title: "Подарить жизнь", font: "Comic Sans MS", size: 25, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: false},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: false}
    ],
  'friends-live-present-2': [
    {title: "Thanks!", font: "Comic Sans MS", size: 25, dimensions: false},
    {title: "Спасибо!", font: "Comic Sans MS", size: 25, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: false},
    {title: "", font: "Comic Sans MS", size: 25, dimensions: false},
    {title: "", font: "RiiPopkk-R", size: 25, dimensions: false}
    ],
  'friends-live-present-3': [
    {title: '', font: 'Times New Roman', size: 32, dimensions: false},
    {title: 'Вам подарили жизнь', font: 'Times New Roman', size: 32, dimensions: false},
    {title: '', font: 'Times New Roman', size: 32, dimensions: false},
    {title: '', font: 'Times New Roman', size: 32, dimensions: false},
    {title: '', font: 'Times New Roman', size: 32, dimensions: false},
    {title: '', font: 'Times New Roman', size: 32, dimensions: false},
    {title: '', font: 'Times New Roman', size: 32, dimensions: false},
    {title: '', font: 'RiiPopkk-R', size: 32, dimensions: false}//
    ],
  'friends-live-present-4': [
    {title: '', font: 'Times New Roman', size: 24, dimensions: [500, 0]},
    {title: '$1 $2 подарил вам жизнь!', font: 'Times New Roman', size: 24, dimensions: [500, 0]},
    {title: '', font: 'Times New Roman', size: 24, dimensions: [500, 0]},
    {title: '', font: 'Times New Roman', size: 24, dimensions: [500, 0]},
    {title: '', font: 'Times New Roman', size: 24, dimensions: [500, 0]},
    {title: '', font: 'Times New Roman', size: 24, dimensions: [500, 0]},
    {title: '', font: 'Times New Roman', size: 24, dimensions: [500, 0]},
    {title: '', font: 'RiiPopkk-R', size: 24, dimensions: [500, 0]}
    ]
};
