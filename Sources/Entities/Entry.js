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

Entry = Entity.extend({
  data: false,
  supports: false,
  position: false,
  elements: false,
  manager: false,
  callback: false,
  ctor: function(data, position, parent, callback) {
    this._super(false, parent);

    this.data = data;
    this.supports = data.supports;
    this.position = position;
    this.manager = parent;
    this.callback = callback.bind(this);
    this.elements = {};

    this.create().setCascadeOpacityEnabled(true);
    this.setContentSize(cc.size(Camera.sharedCamera().coord(450), Camera.sharedCamera().coord(100)));
    this.setAnchorPoint(cc.p(0.5, 0.5));
    this.setCenterPosition(this.position.x, this.position.y);
    this.registerTouchable(true);
  },
  onStart: function() {
    this.stopAllActions();
  },
  onCancel: function() {
    this.stopAllActions();
  },
  onTouch: function() {
  },
  onHover: function() {
    if(this.elements.close) {
      this.elements.close.stopAllActions();
      this.elements.close.runAction(cc.FadeIn.create(0.2));
    }
  },
  onUnHover: function() {
    if(this.elements.close) {
      this.elements.close.stopAllActions();
      this.elements.close.runAction(cc.FadeOut.create(0.2));
    }
  },
  onDragLeft: function() {
    if(this.supports.close) {
      this.remove();
    }
  },
  onCreate: function() {
    this._super();

    if(this.data) {
      InternetEntity.create((this.data.photo || this.data.photo_medium), this, function(entity) {
        this.elements.photo = entity;
        this.elements.photo.create().setCenterPosition(this.elements.photo.getWidth() / 2 + Camera.sharedCamera().coord(20), this.elements.photo.getHeight() / 2);
        this.elements.photo.setCascadeOpacityEnabled(true);

        this.elements.name = Text.create('list-name', this, cc.TEXT_ALIGNMENT_LEFT);
        this.elements.name.ccsf([(this.data.name || this.data.first_name), (this.data.surname || this.data.last_name)]);
        this.elements.name.create().setCenterPosition(this.elements.name.getWidth() / 2 + Camera.sharedCamera().coord(130), Camera.sharedCamera().coord(100) - this.elements.name.getHeight() / 4);
        this.elements.name.setColor(cc.c3(255.0, 130.0, 0.0));

        this.elements.hidder = Entity.create(s_ListElementHidder, this);
        this.elements.hidder.create().setCenterPosition(Camera.sharedCamera().coord(380), this.elements.name.getCenterY());

        if(this.supports.close) {
          this.elements.close = Button.create(s_ListElementClose, 1, 1, this);
          this.elements.close.create().setCenterPosition(Camera.sharedCamera().coord(420), Camera.sharedCamera().coord(100) - this.elements.close.getHeight() / 2);
          this.elements.close.setOpacity(0);

          this.elements.close.manager = this;
          this.elements.close.registerTouchable(true);
          this.elements.close.onTouch = function(e) {
            Button.prototype.onTouch.call(this, e);

            this.registerTouchable(false);
            this.manager.remove();
          };
        }

        if(this.supports.status) {
          if(this.data.online) {
            this.data.online = ((Date.now() / 1000) - parseInt(this.data.online) < 30);
          }

          this.elements.status = TiledEntity.create(s_UserOnlineStatus, 1, 2, this.elements.photo);
          this.elements.status.create().setCenterPosition(Camera.sharedCamera().coord(8), Camera.sharedCamera().coord(8));
          this.elements.status.setCurrentFrameIndex(this.data.online ? 0 : 1);
        }

        if(this.supports.crown) {
          this.elements.crown = Entity.create(s_UsersCrown, this.elements.photo);
          this.elements.crown.create().setCenterPosition(Camera.sharedCamera().coord(50), Camera.sharedCamera().coord(100));
        }

        if(this.supports.level) {
          this.elements.level = Entity.create(s_LevelIcon, this.elements.photo);
          this.elements.level.create().setCenterPosition(Camera.sharedCamera().coord(10), Camera.sharedCamera().coord(10));
          this.elements.level.setCascadeOpacityEnabled(true);

          this.elements.level.text = Text.create('zero', this.elements.level);
          this.elements.level.text.setColor(cc.BLACK);
          this.elements.level.text.disableShadow();
          this.elements.level.text.setFontSize(Camera.sharedCamera().coord(24));
          this.elements.level.text.ccsf([this.data.level]);
          this.elements.level.text.create().setCenterPosition(this.elements.level.getWidth() / 2, this.elements.level.getHeight() / 2);
        }

        if(this.elements.photo) this.elements.photo.setCascadeOpacityEnabled(true);

        this.callback();
      }.bind(this));
    }
  },
  onDestroy: function() {
    this._super();
  },
  remove: function() {
    this.manager.remove(this);
  },
  close: function(force) {
    this.runAction(
      cc.Sequence.create(
        cc.DelayTime.create(force ? 0.0 : 1.5),
        cc.MoveTo.create(0.2, cc.p(this.getCenterX() - Camera.sharedCamera().coord(10), this.getCenterY())),
        false
      )
    );
    this.runAction(
      cc.Sequence.create(
        cc.DelayTime.create(force ? 0.0 : 1.5),
        cc.FadeOut.create(0.2),
        cc.CallFunc.create(this.removeFromParent, this),
        cc.CallFunc.create(this.manager.up, this.manager, this),
        false
      )
    );
  },
  createButton: function(params) {
    if(params.handlers) {
      if(params.handlers.create) {
        params.handlers.create = params.handlers.create.bind(this);
      }
      if(params.handlers.hover) {
        params.handlers.hover = params.handlers.hover.bind(this);
      }
      if(params.handlers.unhover) {
        params.handlers.unhover = params.handlers.unhover.bind(this);
      }
      if(params.handlers.touch) {
        params.handlers.touch = params.handlers.touch.bind(this);
      }
      if(params.handlers.update) {
        params.handlers.update = params.handlers.update.bind(this);
      }
    }

    this.elements.button = Button.create(s_PopupLongButton1, 1, 1, this);
    this.elements.button.create().setCenterPosition(Camera.sharedCamera().coord(130) + this.elements.button.getWidth() / 2, this.elements.button.getHeight() / 2);
    this.elements.button.setCascadeOpacityEnabled(true);
    this.elements.button.registerTouchable(true);
    this.elements.button.onHover = function(e) {
      Button.prototype.onHover.call(this, e);

      if(params.handlers.hover) {
        params.handlers.hover(e);
      }

      if(!this.isRegisterTouchable()) return false;

      if(this.text) {
        if(this.text.texts) {
          if(this.text.texts.hover) {
            this.text.stopAllActions();
            this.text.runAction(
              cc.Sequence.create(
                //cc.FadeTo.create(0.1, 0.0),
                cc.CallFunc.create(this.text.setTextWithAction, this.text, this.text.texts.hover),
                //cc.FadeTo.create(0.1, 255.0),
                false
              )
            );
          }
        }
      }
    };
    this.elements.button.onUnHover = function(e) {
      Button.prototype.onUnHover.call(this, e);

      if(params.handlers.unhover) {
        params.handlers.unhover(e);
      }

      if(!this.isRegisterTouchable()) return false;

      if(this.text) {
        if(this.text.texts) {
          if(this.text.texts.original) {
            this.text.stopAllActions();
            this.text.runAction(
              cc.Sequence.create(
                //cc.FadeTo.create(0.1, 0.0),
                cc.CallFunc.create(this.text.setTextWithAction, this.text, this.text.texts.original),
                //cc.FadeTo.create(0.1, 255.0),
                false
              )
            );
          }
        }
      }
    };
    this.elements.button.onTouch = function(e) {
      Button.prototype.onTouch.call(this, e);

      if(params.handlers.touch) {
        params.handlers.touch(e);
      }
    };
    this.elements.button.update = function(time) {
      Button.prototype.update.call(this, time);

      if(params.handlers.update) {
        params.handlers.update(time);
      }
    };

    if(params.icon) {
      this.elements.button.icon = params.icon;
      this.elements.button.icon.create().setCenterPosition(Camera.sharedCamera().coord(35), this.elements.button.getHeight() / 2);

      this.elements.button.addChild(this.elements.button.icon);
    }

    if(params.texts) {
      this.elements.button.text = Text.create(params.texts.original, this.elements.button);
      this.elements.button.text.setCenterPosition();
      this.elements.button.text.setColor(cc.c3(204.0, 102.0, 51.0));
      this.elements.button.text.texts = params.texts;
    }

    params.handlers.create();
  },
  createText: function(text, callback) {
    this.elements.text = Text.create(text, this, cc.TEXT_ALIGNMENT_LEFT);

    if(callback) {
      callback = callback.bind(this);
      callback();
    }
  },
  update: function(time) {
    this._super(time);
  },
  draw: function() {
  },
  visit: function() {
    this._super();
  }
});

Entry.create = function(data, position, parent, callback) {
  return new Entry(data, position, parent, callback);
};
