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

Game.prototype.startPreview = function() {
  this.onPreviewStart();

  this.m_PreviewText.setScale(0.5);
  this.m_PreviewText.setOpacity(255);
  this.m_PreviewText.setVisible(true);

  switch(this.m_GamePreviewCount) {
    case 0:
    this.m_PreviewText.setVisible(false);
    this.m_PreviewBackground.runRecognizeAction(cc.CallFunc.create(this.startPreview, this, this), {
      name: 'fade',
      time: 1.0,
      value: 200
    });
    break;
    case 1:
    this.m_PreviewText.setText('game-preview-0');
    this.m_PreviewText.runRecognizeAction(cc.CallFunc.create(this.startPreview, this, this), [{
      name: 'scale',
      time: this.m_GamePreviewTime,
      value: 1.0
    }, {
      name: 'fade',
      time: this.m_GamePreviewTime,
      value: 0.0
    }]);
    break;
    case 2:
    this.m_PreviewText.setText('game-preview-1');
    this.m_PreviewText.runRecognizeAction(cc.CallFunc.create(this.startPreview, this, this), [{
      name: 'scale',
      time: this.m_GamePreviewTime,
      value: 1.0
    }, {
      name: 'fade',
      time: this.m_GamePreviewTime,
      value: 0.0
    }]);
    break;
    case 3:
    this.m_PreviewText.setVisible(false);
    this.m_PreviewBackground.runRecognizeAction(cc.CallFunc.create(this.finishPreview, this, this), {
      name: 'fade',
      time: 1.0,
      value: 0
    });
    this.m_GamePreviewCount = -1;
    break;
  }

  this.m_GamePreviewCount++;
};

Game.prototype.finishPreview = function() {
  this.onPreviewFinish();
};
