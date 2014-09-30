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

Button.prototype.onStart = function() {
  this.stopAllActions();

  this.runRecognizeAction(false, {
    name: 'scale',
    time: 0.1,
    value: 0.95
  });
};

Button.prototype.onCancel = function(callback) {
  this.stopAllActions();

  this.runRecognizeAction(callback, {
    name: 'scale',
    time: 0.1,
    value: 1.0
  });
};

Button.prototype.onTouch = function() {
  cc.canvas.focus();

  Sound.sharedSound().play(s_SoundButtonTouch);

  this.onCancel(cc.CallFunc.create(this.onFinish, this, this));
};

Button.prototype.onHover = function() {
};

Button.prototype.onUnHover = function() {
};

Button.prototype.createNotifier = function(handler, x, y) {
  this.notifier = Notify.create(this);
  this.notifier.text = Text.create('zero-bold', this.notifier);

  this.notifier.handler = handler;

  this.notifier.setCenterPosition(this.getWidth() - Camera.sharedCamera().coord(x), this.getHeight() - Camera.sharedCamera().coord(y));
  this.notifier.text.setCenterPosition(this.notifier.getWidth() / 2, this.notifier.getHeight() / 2);

  this.notifier.setScale(0);

  this.notifier.handler(this);

  this.notifier.updateTime = 5.0;
  this.notifier.updateTimeElapsed = 0.0;
};

Button.prototype.showNotifier = function(text) {
  if(this.notifier) {
    this.notifier.text.ccsf([text]);
    if(!this.notifier.isVisible()) {
      this.notifier.runAction(
        cc.Sequence.create(
          cc.CallFunc.create(this.notifier.create, this.notifier),
          cc.EaseExponentialOut.create(
            cc.ScaleTo.create(0.2, 1.0)
          ),
          false
        )
      );
    }
  }
};

Button.prototype.hideNotifier = function(text) {
  if(this.notifier) {
    if(this.notifier.isVisible()) {
      this.notifier.runAction(
        cc.Sequence.create(
          cc.EaseExponentialIn.create(
            cc.ScaleTo.create(0.2, 0.0)
          ),
          cc.CallFunc.create(this.notifier.destroy, this.notifier),
          false
        )
      );
    }
  }
};

Button.prototype.update = function(time) {
  AnimatedEntity.prototype.update.call(this, time);

  if(this.notifier) {
    this.notifier.updateTimeElapsed += time;
    if(this.notifier.updateTimeElapsed >= this.notifier.updateTime) {
      this.notifier.updateTimeElapsed = 0;

      this.notifier.handler(this, time);
    }
  }
};
