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

MatrixManager = cc.Node.extend({
  m_Active: false,
  m_Size: {
    x: 10,
    y: 7
  },
  m_Padding: 115,
  m_zIndex: 100,
  m_Matrix: false,
  m_CurrentElement1: false,
  m_CurrentElement2: false,
  ctor: function() {
    this._super();

    MatrixManager.instance = this;

    this.createMatrix();
  },
  disable: function() {
    this.m_Active = false;
  },
  enable: function() {
    this.m_Active = true;
  },
  active: function() {
    return this.m_Active;
  },
  set: function(element, x, y, newby) {
    this.m_Matrix[x][y] = element;

    element.setIndex(x, y);

    if(newby) {
      element.chooseId();
    }

    element.onChangePosition();
  },
  get: function(x, y) {
    return this.m_Matrix[x][y];
  },
  remove: function(element) {
    var index = element.getIndex();

    this.m_Matrix[index.x][index.y] = false;
  },

  replace: function(element, neighbor, back) {
    if(neighbor instanceof Element) {
      this.m_CurrentElement1 = element;
      this.m_CurrentElement2 = neighbor;

      this.m_CurrentElement1.getParent().reorderChild(this.m_CurrentElement1, this.m_zIndex);
      this.m_CurrentElement1.runAction(
        cc.Sequence.create(
          cc.ScaleTo.create(0.1, 1.2),
          cc.ScaleTo.create(0.1, 1.0),
          cc.DelayTime.create(0.05),
          back ? cc.CallFunc.create(this.enable, this, this) : cc.CallFunc.create(this.find, this, this),
          false
        )
      );
      this.m_CurrentElement1.runAction(cc.MoveTo.create(0.2, cc.p(this.m_CurrentElement2.getCenterX(), this.m_CurrentElement2.getCenterY())));

      this.m_CurrentElement2.getParent().reorderChild(this.m_CurrentElement2, this.m_zIndex - 1);
      this.m_CurrentElement2.runAction(
        cc.Sequence.create(
          cc.ScaleTo.create(0.1, 0.8),
          cc.ScaleTo.create(0.1, 1.0),
          false
        )
      );
      neighbor.runAction(cc.MoveTo.create(0.2, cc.p(this.m_CurrentElement1.getCenterX(), this.m_CurrentElement1.getCenterY())));

      var x1 = this.m_CurrentElement1.getIndex().x;
      var x2 = this.m_CurrentElement2.getIndex().x;

      var y1 = this.m_CurrentElement1.getIndex().y;
      var y2 = this.m_CurrentElement2.getIndex().y;

      this.set(this.m_CurrentElement1, x2, y2);
      this.set(this.m_CurrentElement2, x1, y1);
    } else {
      if(!this.active()) return false;

      var neighbor;
      var index = element.getIndex();

      var positions = {
        top: index.y < this.getSize().y,
        down: index.y > 0,
        left: index.x > 0,
        right: index.x < this.getSize().x
      };

      switch(neighbor) {
        case 'top':
        if(!positions.top) return false;

        neighbor = this.get(index.x, index.y + 1);
        break;
        case 'down':
        if(!positions.down) return false;

        neighbor = this.get(index.x, index.y - 1);
        break;
        case 'left':
        if(!positions.left) return false;

        neighbor = this.get(index.x - 1, index.y);
        break;
        case 'right':
        if(!positions.right) return false;

        neighbor = this.get(index.x + 1, index.y);
        break;
      }

      this.replace(element, neighbor);
    }
  },
  createMatrix: function() {
    this.m_Matrix = Array(this.getSize().x + 1);

    for(var i = 0; i < this.getSize().x + 1; i++) {
      this.m_Matrix[i] = Array(this.getSize().y * 2);
    }
  },
  getSize: function() {
    return this.m_Size;
  },
  clear: function() {
    for(var i = 0; i < MatrixManager.pool.horizontal.length; i++) {
      if(MatrixManager.pool.horizontal[i]) {
        MatrixManager.pool.horizontal[i].destroy();
      }
    }
    for(var i = 0; i < MatrixManager.pool.vertical.length; i++) {
      if(MatrixManager.pool.vertical[i]) {
        MatrixManager.pool.vertical[i].destroy();
      }
    }
    if(MatrixManager.pool.element) {
      MatrixManager.pool.element.destroy();
    }

    window.setTimeout(function() {
      MatrixManager.pause = 0;

      MatrixManager.sharedManager().lookDown();

      window.setTimeout(function() {
        if(!MatrixManager.sharedManager().findAll()) {
          // TODO: Combinations?
          MatrixManager.sharedManager().enable();
        }
      }, 500 + MatrixManager.pause);
    }, 1000);
  },
  hasMatches: function(element, data) {
    if(!data) {
      MatrixManager.pool.horizontal = [];
      MatrixManager.pool.vertical = [];
      MatrixManager.pool.element = element;
    }

    var index = element.getIndex();
    var id = element.getId();

    var positions = {
      top: index.y < this.getSize().y - 1 && this.get(index.x, index.y + 1),
      down: index.y > 0 && this.get(index.x, index.y - 1),
      left: index.x > 0 && this.get(index.x - 1, index.y),
      right: index.x < this.getSize().x && this.get(index.x + 1, index.y)
    };

    if(data) {
      if(positions.top) positions.top = data.matches.top;
      if(positions.down) positions.down = data.matches.down;
      if(positions.left) positions.left = data.matches.left;
      if(positions.right) positions.right = data.matches.right;
    }

    var matches = {
      top: 0,
      down: 0,
      left: 0,
      right: 0,
      add: function(matches) {
        this.top += matches.top;
        this.down += matches.down;
        this.left += matches.left;
        this.right += matches.right;
      },
      result: function() {
        var horizontal = 1 + this.left + this.right;
        var vertical = 1 + this.top + this.down;

        if(horizontal < 3) {
          MatrixManager.pool.horizontal = [];
        }

        if(vertical < 3) {
          MatrixManager.pool.vertical = [];
        }

        if(horizontal >= 3 || vertical >= 3) {
          return true;
        } else {
          MatrixManager.pool.horizontal = [];
          MatrixManager.pool.vertical = [];
          MatrixManager.pool.element = false;

          return false;
        }
      }
    };

    var neighbor;

    {
      if(positions.top) {
        neighbor = this.get(index.x, index.y + 1);

        if(neighbor.getId() == id) {
          matches.top++;

          MatrixManager.pool.vertical.push(neighbor);

          matches.add(this.hasMatches(neighbor, {
            previous: element,
            matches: {
              top: true,
              down: false,
              left: false,
              right: false
            }
          }));
        }
      }
    }

    {
      if(positions.down) {
        neighbor = this.get(index.x, index.y - 1);

        if(neighbor.getId() == id) {
          matches.down++;

          MatrixManager.pool.vertical.push(neighbor);

          matches.add(this.hasMatches(neighbor, {
            previous: element,
            matches: {
              top: false,
              down: true,
              left: false,
              right: false
            }
          }));
        }
      }
    }

    {
      if(positions.left) {
        neighbor = this.get(index.x - 1, index.y);

        if(neighbor.getId() == id) {
          matches.left++;

          MatrixManager.pool.horizontal.push(neighbor);

          matches.add(this.hasMatches(neighbor, {
            previous: element,
            matches: {
              top: false,
              down: false,
              left: true,
              right: false
            }
          }));
        }
      }
    }

    {
      if(positions.right) {
        neighbor = this.get(index.x + 1, index.y);

        if(neighbor.getId() == id) {
          matches.right++;

          MatrixManager.pool.horizontal.push(neighbor);

          matches.add(this.hasMatches(neighbor, {
            previous: element,
            matches: {
              top: false,
              down: false,
              left: false,
              right: true
            }
          }));
        }
      }
    }

    return data ? matches : matches.result();
  },
  find: function() {
    this.disable();

    if(!this.hasMatches(this.m_CurrentElement1) && !this.hasMatches(this.m_CurrentElement2)) {
      this.replace(this.m_CurrentElement2, this.m_CurrentElement1, true);
    } else {
      this.clear();
    }
  },
  findAll: function() {
    for(var i = 0; i < this.getSize().x; i++) {
      for(var j = this.getSize().y; j < this.getSize().y * 2; j++) {
        if(!this.m_Matrix[i][j]) {
          element = ElementsManager.sharedManager().create();

          this.set(element, i, j, true);

          var x = this.m_Matrix[i][j - 1].getCenterX();
          var y = this.m_Matrix[i][j - 1].getCenterY() +  Camera.sharedCamera().coord(this.m_Padding);

          element.setCenterPosition(x, y);
        }
      }
    }
    for(var i = 0; i < this.getSize().x; i++) {
      for(var j = 0; j < this.getSize().y; j++) {
        if(this.hasMatches(this.m_Matrix[i][j])) {
          this.clear();

          return true;
        }
      }
    }

    return false;
  },
  lookDown: function() {
    for(var i = 0; i < this.getSize().x; i++) {
      for(var j = 0; j < this.getSize().y * 2; j++) {
        if(this.m_Matrix[i][j]) this.m_Matrix[i][j].lookDown();
      }
    }
  },
  moveDown: function(element, count) {
    var index = element.getIndex();

    this.m_Matrix[index.x][index.y] = false;

    this.set(element, index.x, index.y - count);
    
    element.runAction(
      cc.Sequence.create(
        cc.MoveTo.create(0.1 * count / 2, cc.p(element.getCenterX(), element.getCenterY() - Camera.sharedCamera().coord(this.m_Padding) * count)),
        cc.MoveTo.create(0.1, cc.p(element.getCenterX(), element.getCenterY() - Camera.sharedCamera().coord(this.m_Padding) * count + Camera.sharedCamera().coord(this.m_Padding) / 4)),
        cc.MoveTo.create(0.05, cc.p(element.getCenterX(), element.getCenterY() - Camera.sharedCamera().coord(this.m_Padding) * count)),
        false
      )
    );

    MatrixManager.pause = Math.max(MatrixManager.pause, 0.1 * count / 2 + 0.1 + 0.05);
  }
});

MatrixManager.pause = 0;
MatrixManager.pool = {
  horizontal: [],
  vertical: [],
  element: false
};
MatrixManager.instance = false;
MatrixManager.sharedManager = function() {
  return MatrixManager.instance ? MatrixManager.instance : new MatrixManager();
};