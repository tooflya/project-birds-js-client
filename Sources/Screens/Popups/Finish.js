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

Finish = Background.extend({
  ctor: function(parent) {
    this._super(parent);

    this.m_Background = BackgroundColor.create(cc.c4(0, 0, 0, 0), this);
    this.m_BackgroundSquare = Entity.create(s_FinishBackgroundSquare, this, true);

    this.m_Background1 = TiledEntity.create(s_FinishBackground, 1, 2, this.m_Background);
    this.m_Background2 = TiledEntity.create(s_FinishBackground, 1, 2, this.m_Background);

    this.m_Background1.setCurrentFrameIndex(0);
    this.m_Background2.setCurrentFrameIndex(1);

    this.m_Background1.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().height + this.m_Background1.getHeight() / 2);
    this.m_Background2.create().setCenterPosition(Camera.sharedCamera().center.x, -this.m_Background1.getHeight() / 2);
  },
  show: function() {
    this.m_BackgroundSquare.setScale(3.0);
    this.m_BackgroundSquare.setOpacity(0.0);
    this.m_BackgroundSquare.runRecognizeAction(cc.CallFunc.create(this.onShow, this, this), [{
      name: 'fade',
      time: 0.3,
      value: 0.0
    }, {
      name: 'fade',
      time: 0.0,
      value: 255.0
    }, {
      name: 'scale',
      time: 0.3,
      value: {
        x: 0.9,
        y: 1.1
      }
    }, {
      name: 'scale',
      time: 0.1,
      value: {
        x: 1.1,
        y: 0.9
      }
    }, {
      name: 'scale',
      time: 0.1,
      value: {
        x: 1.0,
        y: 1.0
      }
    }]);
    this.m_Background1.runRecognizeAction(false, {
      name: 'move',
      time: 0.2,
      x: Camera.sharedCamera().center.x,
      y: Camera.sharedCamera().center.y + this.m_Background1.getHeight() / 2
    });
    this.m_Background2.runRecognizeAction(false, {
      name: 'move',
      time: 0.2,
      x: Camera.sharedCamera().center.x,
      y: Camera.sharedCamera().center.y - this.m_Background2.getHeight() / 2
    });
    this.m_Background.runRecognizeAction(false, [{
      name: 'fade',
      time: 0.2,
      value: 0
    }, {
      name: 'scale',
      time: 0.1,
      value: {
        x: 1.2,
        y: 1.0
      }
    }, {
      name: 'scale',
      time: 0.1,
      value: {
        x: 1.0,
        y: 1.2
      }
    }, {
      name: 'scale',
      time: 0.1,
      value: {
        x: 1.0,
        y: 1.0
      }
    }]);
  },
  hide: function() {
    this.m_BackgroundSquare.runRecognizeAction(cc.CallFunc.create(this.onHide, this, this), {
      name: 'scale',
      time: 0.2,
      value: 0.0
    });
    this.m_Background1.runRecognizeAction(false, {
      name: 'move',
      time: 0.2,
      x: Camera.sharedCamera().center.x,
      y: Camera.sharedCamera().height + this.m_Background1.getHeight() / 2
    });
    this.m_Background2.runRecognizeAction(false, {
      name: 'move',
      time: 0.2,
      x: Camera.sharedCamera().center.x,
      y: -this.m_Background2.getHeight() / 2
    });
  },
  onShow: function() {
  },
  onHide: function() {
  },
  onEnter: function() {
    this._super();
  },
  onExit: function() {
    this._super();

    Finish.instance = false;
  }
});

Finish.instance = false;
Finish.sharedScreen = function(parent) {
  if(Finish.instance) {
    Finish.instance.m_Parent = parent;
  } else {
    Finish.instance = new Finish(parent);
  }

  return Finish.instance;
};
