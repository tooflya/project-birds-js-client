<?

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

require_once '../../tools/vk/library/vkontakte.php';

$secret_key = 'aj46bvwrCrAZVSIWu2Nd';

switch($_GET['type'])
{
  default:
  echo file_get_contents('vk.html');
  break;
  case "notify":
  $vk = new VKontakte(array('testMode' => true));
  try {
    $profiles = $vk->api('getProfiles', array(
      'uids' => $vk->getViewerId()
    ));
  } catch (VKontakteApiException $e) {
    print $vk->getViewerId();
  }
  break;
  case 'payment':
  $input = $_POST; 
  $sig = $input['sig']; 
  unset($input['sig']); 
  ksort($input); 
  $str = ''; 
  foreach ($input as $k => $v)
  {
    $str .= $k.'='.$v;
  }

  if($sig != md5($str.$secret_key))
  {
    $response['error'] = array(
      'error_code' => 10,
      'error_msg' => 'Calculated and passed signatures are not the same',
      'critical' => true
    ); 
  }
  else
  {
    switch ($input['notification_type']) {
    case 'get_item_test':
      switch($input['item'])
      {
        case 0:
        $response['response'] = array(
          'item_id' => 0,
          'title' => 'Coins Pack #1 (Test Mode)',
          'photo_url' => 'http://www.tooflya.com/games/project-birds/Resources/Icons/vk-purchase-1.png',
          'price' => 5
        );
        break;
        case 1:
        $response['response'] = array(
          'item_id' => 1,
          'title' => 'Coins Pack #2 (Test Mode)',
          'photo_url' => 'http://www.tooflya.com/games/project-birds/Resources/Icons/vk-purchase-2.png',
          'price' => 5
        );
        break;
        case 2:
        $response['response'] = array(
          'item_id' => 2,
          'title' => 'Coins Pack #3 (Test Mode)',
          'photo_url' => 'http://www.tooflya.com/games/project-birds/Resources/Icons/vk-purchase-3.png',
          'price' => 5
        );
        break;
        case 3:
        $response['response'] = array(
          'item_id' => 3,
          'title' => 'Coins Pack #4 (Test Mode)',
          'photo_url' => 'http://www.tooflya.com/games/project-birds/Resources/Icons/vk-purchase-4.png',
          'price' => 5
        );
        break;
        case 4:
        $response['response'] = array(
          'item_id' => 3,
          'title' => 'Keys Pack #1 (Test Mode)',
          'photo_url' => 'http://www.tooflya.com/games/project-birds/Resources/Icons/vk-purchase-5.png',
          'price' => 5
        );
        break;
        case 5:
        $response['response'] = array(
          'item_id' => 3,
          'title' => 'Keys Pack #2  (Test Mode)',
          'photo_url' => 'http://www.tooflya.com/games/project-birds/Resources/Icons/vk-purchase-6.png',
          'price' => 5
        );
        break;
        case 6:
        $response['response'] = array(
          'item_id' => 6,
          'title' => 'Restoring of gold lives (Test Mode)',
          'photo_url' => 'http://www.tooflya.com/games/project-birds/Resources/Icons/vk-purchase-7.png',
          'price' => 5
        );
        break;
      }
    break;
    case 'order_status_change_test':
    if($input['status'] == 'chargeable')
    {
      $order_id = intval($input['order_id']);

      $response['response'] = array(
        'order_id' => $order_id
      );
    } else {
      $response['error'] = array(
        'error_code' => 100,
        'error_msg' => 'Incorrect chargeable.',
        'critical' => true
      );
    }
    break;
    }
  }

  echo json_encode($response);
  break;
}
