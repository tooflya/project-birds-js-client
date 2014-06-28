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
  m_Busy: true,
  m_Size: {
    x: 10,
    y: 7
  },
  m_zIndex: 100,
  m_Matrix: false,
  m_CurrentElement1: false,
  m_CurrentElement2: false,
  m_Combinations: false,
  m_TutorialMatrix: [
    [4, 2, 4, 1, 2, 3, 3, 1, 2, 1],
    [4, 1, 0, 3, 1, 4, 3, 2, 3, 1],
    [2, 2, 1, 3, 3, 4, 0, 0, 2, 0],
    [0, 0, 3, 1, 3, 3, 2, 0, 4, 3],
    [3, 3, 4, 2, 4, 0, 2, 1, 0, 0],
    [4, 3, 0, 3, 4, 4, 3, 4, 1, 0],
    [1, 1, 2, 4, 1, 0, 0, 2, 0, 2],
    [1, 3, 0, 3, 0, 4, 3, 4, 3, 0],
    [3, 4, 3, 0, 2, 2, 0, 3, 1, 3],
    [1, 3, 4, 1, 4, 0, 2, 4, 4, 0],
    [3, 2, 3, 4, 4, 2, 4, 4, 3, 1],
    [4, 3, 4, 3, 0, 0, 2, 0, 4, 3],
    [0, 0, 2, 3, 4, 1, 4, 1, 2, 4],
    [2, 1, 4, 0, 3, 2, 1, 1, 0, 0]
  ],
  m_TestMatrixes: [
    [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, -3, 1, 1, 1, 1, 1, 1, 1],
    [1, -2, 1, 1, 1, 1, 1, 1, -2, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, -3, 1],
    [1, 1, 1, -1, -1, -1, -1, 1, 1, 1],
    [1, 1, -1, -1, -1, -1, -1, -1, 1, 1],
    [1, -1, -1, 1, 1, 1, 1, -1, -1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  ],
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
  busy: function() {
    return this.m_Busy;
  },
  set: function(element, x, y, created) {
    if(element === etypes.empty || element === etypes.block) {
      this.m_Matrix[x][y] = element;
    } else {
      this.m_Matrix[x][y] = element;

      element.setIndex(x, y);

      if(created) {
        element.chooseId(true);
      }

      element.onChangePosition();
    }
  },
  get: function(x, y) {
    if(x >= 0 && y >= 0 && x < this.getSize().x && y < this.getSize().y * 2) {
      return this.m_Matrix[x][y];
    }

    return false;
  },
  remove: function(element) {
    var index = element.getIndex();

    this.m_Matrix[index.x][index.y] = false;
  },
  check: function(element) {
    if(!this.m_CurrentElement1) {
      this.m_CurrentElement1 = element;
    } else {
      this.m_CurrentElement2 = element;

      var x = Math.abs(this.m_CurrentElement1.getIndex().x - this.m_CurrentElement2.getIndex().x);
      var y = Math.abs(this.m_CurrentElement1.getIndex().y - this.m_CurrentElement2.getIndex().y);

      var can = (x <= 1 && y <= 1) && (x + y <= 1);

      if(can) {
        this.replace(this.m_CurrentElement1, this.m_CurrentElement2);
      } else {
        this.m_CurrentElement1.onChangePosition();
        this.m_CurrentElement2.onChangePosition();

        this.m_CurrentElement1 = false;
        this.m_CurrentElement2 = false;

        element.onTouch();
      }
    }
  },
  computer: function(selector, automatic) {
    if(!automatic) this.m_Busy = true;

    this.m_Combinations = [];

    for(var i = 0; i < this.getSize().x; i++) {
      for(var j = 0; j < this.getSize().y; j++) {
        var element = this.m_Matrix[i][j];

        if(!element || element === etypes.empty || element === etypes.block) continue;

        var neighbor = false;
        for(var k = 0; k < 4; k++) {
          switch(k) {
            case 0:
            if(element.getIndex().y < this.getSize().y - 1) neighbor = this.get(element.getIndex().x, element.getIndex().y + 1);
            break;
            case 1:
            neighbor = this.get(element.getIndex().x, element.getIndex().y - 1);
            break;
            case 2:
            neighbor = this.get(element.getIndex().x - 1, element.getIndex().y);
            break;
            case 3:
            neighbor = this.get(element.getIndex().x + 1, element.getIndex().y);
            break;
          }

          if(neighbor && neighbor != etypes.empty && neighbor != etypes.block) {
            var result = this.hasMatchesWith(element, neighbor);
            if(result) {
              this.m_Combinations.push({
                element: element,
                neighbor: neighbor,
                count: result
              });
            }
          }
        }
      }
    }

    if(this.m_Combinations.length > 0) {
      var priority = 0;
      var combination = false;
      var types = [[], [], [], [], [], []];
      var health = Game.sharedScreen().m_Catapults.get(1).m_Health;

      for(var i = 0; i < this.m_Combinations.length; i++) {
        types[this.m_Combinations[i].element.getId()].push(this.m_Combinations[i]);
      }

      if(health < 50) {
        priority = 1;
      }

      if(priority == 0) {
        if(types[0].length < 1) {
          priority = 4;
        }
      }

      for(var i = 0; i < this.m_Combinations.length; i++) {
        if(this.m_Combinations[i].element.getId() == priority) {
          combination = this.m_Combinations[i];
        }
      }

      if(!combination) {
        combination = this.m_Combinations[Random.sharedRandom().random(0, this.m_Combinations.length, true)];
      }

      var id = combination.element.getId();
      for(var i = 0; i < this.m_Combinations.length; i++) {
        if(this.m_Combinations[i].element.getId() == id) {
          if(this.m_Combinations[i].count > combination.count) {
            combination = this.m_Combinations[i];
          }
        }
      }

      if(automatic) {
        return true;
      }

      this.replace(combination.element, combination.neighbor);
    }

    return false;
  },
  replace: function(element, neighbor, back) {
    if(neighbor instanceof Element) {
      if(!back) {
        if(this.m_CurrentElement1) this.m_CurrentElement1.onChangePosition();
        if(this.m_CurrentElement2) this.m_CurrentElement2.onChangePosition();
      }

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

      if(back) {
        this.m_CurrentElement1 = false;
        this.m_CurrentElement2 = false;
      }
    } else {
      if(!this.active()) return false;

      var neighbor;
      var index = element.getIndex();

      var positions = {
        top: index.y < this.getSize().y && (this.get(index.x, index.y + 1) != etypes.empty && this.get(index.x, index.y + 1) != etypes.block),
        down: index.y > 0 && (this.get(index.x, index.y - 1) != etypes.empty && this.get(index.x, index.y - 1) != etypes.block),
        left: index.x > 0 && (this.get(index.x - 1, index.y) != etypes.empty && this.get(index.x - 1, index.y) != etypes.block),
        right: index.x < this.getSize().x && (this.get(index.x + 1, index.y) != etypes.empty && this.get(index.x + 1, index.y) != etypes.block)
      };

      if(Game.tutorial) {
        switch(Game.sharedScreen().m_TutorialState) {
          case 5:
          positions.top = false;
          positions.down = false;
          positions.right = false;
          break;
        }
      }

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
    var factor = 0;

    for(var i = 0; i < MatrixManager.pool.horizontal.length; i++) {
      if(MatrixManager.pool.horizontal[i]) {
        MatrixManager.pool.horizontal[i].remove();

        factor++;
      }
    }
    for(var i = 0; i < MatrixManager.pool.vertical.length; i++) {
      if(MatrixManager.pool.vertical[i]) {
        MatrixManager.pool.vertical[i].remove();

        factor++;
      }
    }
    if(MatrixManager.pool.element) {
      factor++;

      ActionsManager.sharedManager().add({
        id: MatrixManager.pool.element.getId(),
        factor: factor - 2
      });

      MatrixManager.pool.element.remove();

      Game.sharedScreen().onBlow(MatrixManager.pool.element);
    }

    MatrixManager.pool.horizontal = [];
    MatrixManager.pool.vertical = [];
    MatrixManager.pool.element = false;

    if(!Game.sharedScreen().m_TutorialRunning) {
      window.setTimeout(function() {
        MatrixManager.pause = 0;

        MatrixManager.sharedManager().lookDown();

        window.setTimeout(function() {
          if(!MatrixManager.sharedManager().findAll()) {
            // TODO: Combinations?
    
            ActionsManager.sharedManager().run();
          }
        }, 500 + MatrixManager.pause);
      }, 1000);
    }
  },
  hasMatchesWith: function(element, neighbor) {
    if(!element || element === etypes.empty || element === etypes.block) return false;
    if(!neighbor || neighbor === etypes.empty || neighbor === etypes.block) return false;

    var index1 = {
      x: -1,
      y: -1
    };
    var index2 = {
      x: -1,
      y: -1
    };

    index1.x = element.getIndex().x;
    index1.y = element.getIndex().y;

    index2.x = neighbor.getIndex().x;
    index2.y = neighbor.getIndex().y;

    this.set(neighbor, index1.x, index1.y);
    this.set(element, index2.x, index2.y);

    var result = this.hasMatches(element);

    if(!result) {
      this.set(element, index1.x, index1.y);
      this.set(neighbor, index2.x, index2.y);

      return false;
    } else {
      this.set(element, index1.x, index1.y);
      this.set(neighbor, index2.x, index2.y);

      return result;
    }
  },
  hasMatches: function(element, data) {
    if(!element || element === etypes.empty || element === etypes.block) return false;

    if(!data) {
      MatrixManager.pool.horizontal = [];
      MatrixManager.pool.vertical = [];
      MatrixManager.pool.element = element;
    }

    var index = element.getIndex();
    var id = element.getId();

    var frames = {
      top: this.get(index.x, index.y + 1),
      down: this.get(index.x, index.y - 1),
      left: this.get(index.x - 1, index.y),
      right: this.get(index.x + 1, index.y)
    };

    var positions = {
      top: index.y < (this.getSize().y - 1) && frames.top && frames.top != etypes.empty && frames.top != etypes.block,
      down: index.y > 0 && frames.down && frames.down != etypes.empty && frames.down != etypes.block,
      left: index.x > 0 && frames.left && frames.left != etypes.empty && frames.left != etypes.block,
      right: index.x < this.getSize().x && frames.right && frames.right != etypes.empty && frames.right != etypes.block
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
          return (MatrixManager.pool.horizontal.length + MatrixManager.pool.vertical.length + 1);
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

        if(neighbor != etypes.empty && neighbor != etypes.block) {
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
    }

    {
      if(positions.down) {
        neighbor = this.get(index.x, index.y - 1);

        if(neighbor != etypes.empty && neighbor != etypes.block) {
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
    }

    {
      if(positions.left) {
        neighbor = this.get(index.x - 1, index.y);

        if(neighbor != etypes.empty && neighbor != etypes.block) {
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
    }

    {
      if(positions.right) {
        neighbor = this.get(index.x + 1, index.y);

        if(neighbor != etypes.empty && neighbor != etypes.block) {
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
    }

    return data ? matches : matches.result();
  },
  find: function() {
    this.disable();

    if(!this.hasMatches(this.m_CurrentElement1) && !this.hasMatches(this.m_CurrentElement2)) {
      this.replace(this.m_CurrentElement2, this.m_CurrentElement1, true);
    } else {
      this.m_CurrentElement1.onChangePosition(false, true);
      this.m_CurrentElement2.onChangePosition(false, true);

      this.m_CurrentElement1 = false;
      this.m_CurrentElement2 = false;

      if(Game.tutorial) {
        Game.sharedScreen().onReplaceTutorial();
      }

      this.clear();
    }
  },
  findAll: function() {
    for(var i = 0; i < this.getSize().x; i++) {
      for(var j = this.getSize().y; j < this.getSize().y * 2; j++) {
        var frame = this.m_Matrix[i][j];
        if(!frame) {
          element = ElementsManager.sharedManager().create();

          this.set(element, i, j, true);

          var x = this.m_Matrix[i][j - 1].getCenterX();
          var y = this.m_Matrix[i][j - 1].getCenterY() + element.getHeight();

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
    if(!Game.sharedScreen().m_TutorialRunning) {
      for(var i = 0; i < this.getSize().x; i++) {
        for(var j = 0; j < this.getSize().y * 2; j++) {
          var frame = this.m_Matrix[i][j];
          if(frame && frame != etypes.empty && frame != etypes.block) this.m_Matrix[i][j].lookDown();
        }
      }
    }
  },
  moveDown: function(element, data) {
    var index = element.getIndex();

    this.m_Matrix[index.x][index.y] = false;

    if(data.left > 0 && data.right > 0) {
      if(Random.sharedRandom().probably(50)) {
        data.left = 0;
      } else {
        data.right = 0;
      }
    }

    if(data.left > 0) {
      this.set(element, index.x - data.left, index.y - data.down);
      
      element.runAction(
        cc.Sequence.create(
          cc.MoveTo.create(0.1 * (data.down - data.left) / 2, cc.p(element.getCenterX(), element.getCenterY() - element.getHeight() * (data.down - data.left))),
          cc.MoveTo.create(0.1 * data.left / 2, cc.p(element.getCenterX() - element.getWidth() * data.left, element.getCenterY() - element.getHeight())),
          cc.MoveTo.create(0.1, cc.p(element.getCenterX() - element.getWidth() * data.left, element.getCenterY() - element.getHeight() * data.down + element.getHeight() / 4)),
          cc.MoveTo.create(0.05, cc.p(element.getCenterX() - element.getWidth() * data.left, element.getCenterY() - element.getHeight() * data.down)),
          cc.CallFunc.create(element.onChangePosition, element, {replaced: true}),
          false
        )
      );
    } else if(data.right > 0) {
      this.set(element, index.x + data.right, index.y - data.down);
      
      element.runAction(
        cc.Sequence.create(
          cc.MoveTo.create(0.1 * (data.down - data.right) / 2, cc.p(element.getCenterX(), element.getCenterY() - element.getHeight() * (data.down - data.right))),
          cc.MoveTo.create(0.1 * data.right / 2, cc.p(element.getCenterX() + element.getWidth() * data.right, element.getCenterY() - element.getHeight())),
          cc.MoveTo.create(0.1, cc.p(element.getCenterX() + element.getWidth() * data.right, element.getCenterY() - element.getHeight() * data.down + element.getHeight() / 4)),
          cc.MoveTo.create(0.05, cc.p(element.getCenterX() + element.getWidth() * data.right, element.getCenterY() - element.getHeight() * data.down)),
          cc.CallFunc.create(element.onChangePosition, element, {replaced: true}),
          false
        )
      );
    } else {
      this.set(element, index.x, index.y - data.down);

      element.runAction(
        cc.Sequence.create(
          cc.MoveTo.create(0.1 * data.down / 2, cc.p(element.getCenterX(), element.getCenterY() - element.getHeight() * data.down)),
          cc.MoveTo.create(0.1, cc.p(element.getCenterX(), element.getCenterY() - element.getHeight() * data.down + element.getHeight() / 4)),
          cc.MoveTo.create(0.05, cc.p(element.getCenterX(), element.getCenterY() - element.getHeight() * data.down)),
          cc.CallFunc.create(element.onChangePosition, element, {replaced: true}),
          false
        )
      );
    }

    MatrixManager.pause = Math.max(MatrixManager.pause, 0.1 * data.down / 2 + 0.1 + 0.05);
  },
  shuffle: function() {
    var counter = 0;
    for(var i = 0; i < this.getSize().x; i++) {
      for(var j = 0; j < this.getSize().y; j++) {
        var frame = this.m_Matrix[i][j];

        if(frame && frame != etypes.empty && frame != etypes.block) {
          if(frame.getId() != Element.types.star) {
            frame.runAction(
              cc.Sequence.create(
                cc.ScaleTo.create(0.25, 0.0),
                cc.CallFunc.create(frame.chooseId, frame, frame),
                cc.ScaleTo.create(0.25, 1.0),
                false
              )
            );

            counter++;
          }
        }
      }
    }
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