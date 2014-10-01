/**
 * Tooflya Inc. Development
 *
 * @author Igor Mats from Tooflya Inc.
 * @copyright (c) 2013 by Igor Mats
 * http://www.tooflya.com/development/
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * @version of cocos2d-x is 2.1.4
 *
 */

EntryManager = Background.extend({
  m_Parent: false,
  m_Margin: 0,
  m_Callbacks: false,
  m_Position: false,
  m_Elements: [],
  ctor: function(parent, callbacks, position) {
    this._super(parent);

    this.m_Elements = [];
    this.m_Parent = parent;
    this.m_Position = position;
    this.m_Callbacks = callbacks;
    this.m_Margin = 0;

    if(this.m_Callbacks) {
      if(this.m_Callbacks.update) {
        if(this.m_Callbacks.update.start) {
          this.m_Callbacks.update.start = this.m_Callbacks.update.start.bind(this.m_Parent);
        }
        if(this.m_Callbacks.update.update) {
          this.m_Callbacks.update.update = this.m_Callbacks.update.update.bind(this.m_Parent);
        }
        if(this.m_Callbacks.update.finish) {
          this.m_Callbacks.update.finish = this.m_Callbacks.update.finish.bind(this.m_Parent);
        }
      }
      if(this.m_Callbacks.empty) {
        this.m_Callbacks.empty = this.m_Callbacks.empty.bind(this.m_Parent);
      }
      if(this.m_Callbacks.create) {
        this.m_Callbacks.create = this.m_Callbacks.create.bind(this.m_Parent);
      }
      if(this.m_Callbacks.elements) {
        if(this.m_Callbacks.elements.remove) {
          this.m_Callbacks.elements.remove = this.m_Callbacks.elements.remove.bind(this.m_Parent);
        }
      }
      if(this.m_Callbacks.events) {
        if(this.m_Callbacks.events.enter) {
          this.m_Callbacks.events.enter = this.m_Callbacks.events.enter.bind(this.m_Parent);
        }
        if(this.m_Callbacks.events.exit) {
          this.m_Callbacks.events.exit = this.m_Callbacks.events.exit.bind(this.m_Parent);
        }
      }
    }
  },
  create: function(data, callback) {
    this.onCreate(Entry.create(data, {
      x: this.m_Position.x,
      y: this.m_Position.y - (this.m_Elements.length * Camera.sharedCamera().coord(120)) - this.m_Margin
    }, this, callback));
  },
  destroy: function(element) {
    this.onDestroy(element);
  },
  remove: function(element) {
    this.onRemove(element);
  },
  up: function(event) {
    this.onUp();

    this.m_Elements.forEach(function(element) {
      if(element.getParent() && (this.m_Elements.indexOf(element) > this.m_Elements.indexOf(event))) {
        element.runAction(
          cc.EaseBounceOut.create(
            cc.MoveTo.create(0.5, cc.p(element.getCenterX(), element.getCenterY() + Camera.sharedCamera().coord(120)))
          )
        );
      }
    }.bind(this));

    this.destroy(event);

    if(this.m_Elements.length < 1) {
      this.onEmpty();
    }
  },
  down: function() {
    this.onDown();
  },
  margin: function(margin, callback) {
    this.m_Margin += Camera.sharedCamera().coord(margin);

    if(callback) {
      callback = callback.bind(this.m_Parent);
      callback();
    }

    return  Camera.sharedCamera().coord(margin);
  },
  upgrade: function() {
    if(this.m_Callbacks) {
      if(this.m_Callbacks.update.start) {
        this.m_Callbacks.update.start();
      }
    }

    this.timeout = new PausableTimeout(function() {
      this.timeout = false;

      if(this.m_Callbacks) {
        if(this.m_Callbacks.update.update) {
          this.m_Callbacks.update.update({
            finish: this.m_Callbacks.update.finish,
            create: this.m_Callbacks.create,
            empty: this.m_Callbacks.empty
          });
        }
      }
    }.bind(this), 1000);

    this.onUpdate();
  },
  cancel: function() {
    if(this.timeout) {
      this.timeout.pause();
    }
  },
  clear: function() {
    this.m_Margin = 0;
    this.m_Elements = [];
    this.removeAllChildrenWithCleanup(true);

    this.cancel();
  },
  onCreate: function(element) {
    this.m_Elements.push(element);
  },
  onDestroy: function(element) {
    this.m_Elements.remove(this.m_Elements.indexOf(element));
  },
  onUp: function() {
  },
  onDown: function() {
  },
  onEmpty: function() {
    if(this.m_Callbacks) {
      if(this.m_Callbacks.empty) {
        this.m_Callbacks.empty();
      }
    }
  },
  onUpdate: function() {
  },
  onRemove: function(element) {
    var removed = false;
    if(this.m_Callbacks) {
      if(this.m_Callbacks.elements) {
        if(this.m_Callbacks.elements.remove) {
          removed = true;
          this.m_Callbacks.elements.remove(element.data, function(force) {
            this.close(force);
          }.bind(element));
        }
      }
    }

    if(!removed) {
      element.close(true);
    }
  },
  onEnter: function() {
    this._super();

    if(this.m_Callbacks) {
      if(this.m_Callbacks.events) {
        if(this.m_Callbacks.events.enter) {
          return this.m_Callbacks.events.enter();
        }
      }
    }

    this.upgrade();
  },
  onExit: function() {
    this._super();

    if(this.m_Callbacks) {
      if(this.m_Callbacks.events) {
        if(this.m_Callbacks.events.exit) {
          return this.m_Callbacks.events.exit();
        }
      }
    }

    this.clear();
  }
});

EntryManager.create = function(parent, callbacks, position) {
  return new EntryManager(parent, callbacks, position);
};

/**
this.m_BackgroundHolder = EntryManager.create(this, {
  update: {
    start: function() {
    },
    update: function(callback) {
    },
    finish: function() {
    }
  },
  elements: {
    remove: function(data, callback) {
    }
  },
  empty: function() {
  },
  create: function(data) {
    data.forEach(function(row) {
      row.supports = {
        close: true,
        status: true
      };

      this.m_BackgroundHolder.create(row, function() {
        var handlers = {
          update: function() {
          },
          touch: function() {
          }
        };

        this.createButton({
          texts: {
            original: '',
            hover: '',
            complete: ''
          },
          icon: Entity.create(false),
          handlers: {
            create: function() {
            },
            touch: handlers.touch,
            update: handlers.update
          }
        });
      });
    }.bind(this));
  }
}, {
  x: 0,
  y: 0
});
**/