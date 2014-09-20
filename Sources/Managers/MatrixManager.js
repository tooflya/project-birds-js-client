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
  m_ClearBox: true,
  m_ExtaMove: false,
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
  unbusy: function() {
    this.m_Busy = false;
  },
  set: function(element, x, y, created, probably) {
    if(element === etypes.empty || element === etypes.block) {
      this.m_Matrix[x][y] = element;
    } else {
      this.m_Matrix[x][y] = element;

      element.setIndex(x, y);

      if(probably || created) {
        element.chooseId(created, probably);
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
    if(element instanceof Element) {
      if(element.__instanceId == this.m_CurrentElement1.__instanceId) {
        this.m_CurrentElement1.onChangePosition();
        this.m_CurrentElement1 = false;

        return false;
      }
    }

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
  fix: function(element) {
    if(this.soe(element)) return false;

    var x = element.getIndex().x;
    var y = element.getIndex().y;

    var elements = [];

    elements.push(this.get(x - 1, y));
    elements.push(this.get(x - 1, y + 1));
    elements.push(this.get(x, y + 1));
    elements.push(this.get(x + 1, y + 1));
    elements.push(this.get(x + 1, y));
    elements.push(this.get(x + 1, y - 1));
    elements.push(this.get(x, y - 1));
    elements.push(this.get(x - 1, y - 1));

    elements.forEach(function(current) {
      if(current && current != etypes.empty && current != etypes.block) {
        if(current.getId() != Element.types.star) {
          if(!current._custom) {
            if(current.getId() == element.getId()) {
              current.chooseId();
            }
          }
        }
      }
    });
  },
  s: function(element, soft) {
    if(element instanceof Element) {
      if(!soft) {
        if(element.chained()) return true;
      }

      if(element.special() == Element.types.box) return true;
    } else {
      if(element == etypes.block) return true;
    }

    return false;
  },
  e: function(element) {
    return element == etypes.empty;
  },
  soe: function(element, soft) {
    return this.e(element) || this.s(element, soft);
  },
  sae: function(element, soft) {
    return this.e(element) && this.s(element, soft);
  },
  getRandomElement: function() {
    var elements = [];

    for(var i = 0; i < this.getSize().x; i++) {
      for(var j = 0; j < this.getSize().y; j++) {
        var element = this.get(i, j);

        if(element instanceof Element) {
          elements.push(element);
        }
      }
    }

    return elements.random();
  },
  getFreeRandomElement: function() {
    var elements = [];

    for(var i = 0; i < this.getSize().x; i++) {
      for(var j = 0; j < this.getSize().y; j++) {
        var element = this.get(i, j);

        if(element instanceof Element) {
          if(!this.soe(element)) {
            if(!this.m_Bonus) {
              elements.push(element);
            }
          }
        }
      }
    }

    return elements.random();
  },
  computer: function(selector, automatic) {
    if(!automatic) this.m_Busy = true;

    this.m_Combinations = [];

    for(var i = 0; i < this.getSize().x; i++) {
      for(var j = 0; j < this.getSize().y; j++) {
        var element = this.m_Matrix[i][j];

        if(!element || element === etypes.empty || element === etypes.block) continue;
        if(element instanceof Element) {
          if(element.chained()) {
            continue;
          }
        }

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
            } else {
              if(element.m_Bonus == Element.bonus.types.bomb) {
                this.m_Combinations.push({
                  element: element,
                  neighbor: neighbor,
                  count: 100
                });
              }
            }
          }
        }
      }
    }

    if(this.m_Combinations.length > 0) {
      var priority = 0;
      var combination = false;
      var types = [[], [], [], [], [], [], [], [], [], [], [], [], []];
      var health = Game.sharedScreen().m_Catapults.get(1).m_Health * 100 / Game.sharedScreen().m_Catapults.get(1).m_HealthBasic;

      for(var i = 0; i < this.m_Combinations.length; i++) {
        if(this.m_Combinations[i].element.getId() < 0) {
          types[10].push(this.m_Combinations[i]);
        } else {
          types[this.m_Combinations[i].element.getId()].push(this.m_Combinations[i]);
        }
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

      var ccb = false;
      var bonus = false;
      var arr = [];
      for(var i = 0; i < this.m_Combinations.length; i++) {
        if(this.m_Combinations[i].element.getId() < 0) {
          bonus = true;

          if(this.m_Combinations[i].neighbor.getId() == priority) {
            ccb = this.m_Combinations[i];
          } else {
            arr.push(this.m_Combinations[i]);
          }
        }
      }

      if(bonus) {
        if(!ccb) {
          combination = arr.random();
        } else {
          combination = ccb;
        }
      }

      if(automatic) {
        return true;
      }

      this.replace(combination.element, combination.neighbor);
    }

    return false;
  },
  replace: function(element, neighbor, back, network, force) {
    if(this.soe(element)) return false;

    if(neighbor instanceof Element) {
      Sound.sharedSound().play(s_SoundExchange);

      if(!back) {
        if(this.m_CurrentElement1) this.m_CurrentElement1.onChangePosition();
        if(this.m_CurrentElement2) this.m_CurrentElement2.onChangePosition();
      }

      this.m_CurrentElement1 = element;
      this.m_CurrentElement2 = neighbor;

      this.m_CurrentElement1.onUnHover();
      this.m_CurrentElement2.onUnHover();

      if(!back) {
        if(!network) {
          if(Game.network) {
            NetworkManager.sharedInstance().emit('data', {
              e: 1,
              element1: this.m_CurrentElement1.getIndex(),
              element2: this.m_CurrentElement2.getIndex()
            });
          }
        }
      }

      this.m_CurrentElement1.getParent().reorderChild(this.m_CurrentElement1, this.m_zIndex);
      this.m_CurrentElement1.runAction(
        cc.Sequence.create(
          cc.ScaleTo.create(0.1, 1.2),
          cc.ScaleTo.create(0.1, 1.0),
          cc.DelayTime.create(0.05),
          back ? (network ? false : cc.CallFunc.create(this.enable, this, this)) : (force ? false : cc.CallFunc.create(this.find, this, network)),
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

      if(back || force) {
        this.m_CurrentElement1 = false;
        this.m_CurrentElement2 = false;
      }
    } else {
      if(!this.active()) return false;

      var neighbor;
      var index = element.getIndex();

      var positions = {
        top: index.y < this.getSize().y && this.get(index.x, index.y + 1) && !this.soe(this.get(index.x, index.y + 1)),
        down: index.y > 0 && this.get(index.x, index.y - 1) && !this.soe(this.get(index.x, index.y - 1)),
        left: index.x > 0 && this.get(index.x - 1, index.y) && !this.soe(this.get(index.x - 1, index.y)),
        right: index.x < this.getSize().x && this.get(index.x + 1, index.y) && !this.soe(this.get(index.x + 1, index.y))
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
    this.m_PauseTime = Array();

    if(MatrixManager.timeout) {
      window.clearTimeout(MatrixManager.timeout);

      MatrixManager.timeout = false;
    }

    for(var a = 0; a < MatrixManager.pools.length; a++) {
      var bonus = {
        horizontal: 0,
        vertical: 0,

        element: false,
        elements: [],
        icons: []
      };

      var factor = 0;
      var pool = MatrixManager.pools[a];

      for(var i = 0; i < pool.horizontal.length; i++) {
        if(pool.horizontal[i]) {
          if(!pool.horizontal[i].m_Removed) {
            if(!pool.horizontal[i].chained()) {
              bonus.horizontal++;
            }

            bonus.icons = bonus.icons.concat(pool.horizontal[i].remove());
            bonus.elements.push(pool.horizontal[i]);

            factor++;
          }
        }
      }

      for(var i = 0; i < pool.vertical.length; i++) {
        if(pool.vertical[i]) {
          if(!pool.vertical[i].m_Removed) {
            if(!pool.vertical[i].chained()) {
              bonus.vertical++;
            }

            bonus.icons = bonus.icons.concat(pool.vertical[i].remove());
            bonus.elements.push(pool.vertical[i]);

            factor++;
          }
        }
      }

      if(pool.element) {
        if(!pool.element.m_Removed) {
          if(!pool.element.chained()) {
            bonus.element = pool.element;
          }

          factor++;

          ActionsManager.sharedManager().add({
            id: pool.element.getId(),
            factor: factor - 2
          });

          pool.element.remove();

          if(bonus.horizontal > 3 || bonus.vertical > 3) {
            MatrixManager.sharedManager().m_ExtaMove = true;

            ElementsManager.sharedManager().createBonus(bonus, Element.bonus.types.bomb);
          } else if(bonus.horizontal >= 2 && bonus.vertical >= 2) {
            ElementsManager.sharedManager().createBonus(bonus, Element.bonus.types.pack);
          } else if(bonus.horizontal >= 3) {
            ElementsManager.sharedManager().createBonus(bonus, Element.bonus.types.vertical);
          } else if(bonus.vertical >= 3) {
            ElementsManager.sharedManager().createBonus(bonus, Element.bonus.types.horizontal);
          }

          Game.sharedScreen().onBlow(pool.element);
        }
      }
    }

    MatrixManager.pools = [];

    if(!Game.sharedScreen().m_TutorialRunning) {
      MatrixManager.timeout = new PausableTimeout(function() {
        MatrixManager.sharedManager().lookDown();

        MatrixManager.timeout = new PausableTimeout(function() {
          MatrixManager.pause = 0;
          MatrixManager.timeout = false;

          if(!MatrixManager.sharedManager().findAll()) {
            if(!MatrixManager.sharedManager().findStars()) {
              var pack = MatrixManager.sharedManager().hasBonus(Element.bonus.types.pack);
              var bomb = MatrixManager.sharedManager().hasBonus(Element.bonus.types.bomb);

              if(!pack && !bomb) {
                ActionsManager.sharedManager().run();
              } else {
                if(pack) {
                  MatrixManager.sharedManager().removeSquare(pack.getIndex().x, pack.getIndex().y, pack);

                  MatrixManager.timeout = new PausableTimeout(function() {
                    MatrixManager.sharedManager().clear();
                  }, 600);
                } else if(bomb && MatrixManager.sharedManager().m_ExtaMove) {
                  Game.instance.onExtraMove();
                } else {
                  ActionsManager.sharedManager().run();
                }
              }
            }
          }
        }, MatrixManager.pause * 1000);
      }, 1000);
    }
  },
  hasMatchesWith: function(element, neighbor) {
    if(!element || this.soe(element)) return false;
    if(!neighbor || this.soe(neighbor)) return false;

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

    MatrixManager.pools = [];

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
    if(!element || this.soe(element, true)) return false;
    if(element.getId() === Element.types.star) return false;
    if(element.special()) return false;

    if(!data) {
      MatrixManager.pools.push(MatrixManager.pool());

      MatrixManager.pools.last().horizontal = [];
      MatrixManager.pools.last().vertical = [];
      MatrixManager.pools.last().element = element;
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
      top: index.y < (this.getSize().y - 1) && frames.top && !this.soe(frames.top, true),
      down: index.y > 0 && frames.down && !this.soe(frames.down, true),
      left: index.x > 0 && frames.left && !this.soe(frames.left, true),
      right: index.x < this.getSize().x && frames.right && !this.soe(frames.right, true)
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

        var free1 = false;
        MatrixManager.pools.last().horizontal.forEach(function(element) {
          if(element instanceof Element) {
            if(!element.chained()) {
              free1 = true;
            }
          }
        });
        if(horizontal < 3) {
          MatrixManager.pools.last().horizontal = [];
        }

        var free2 = false;
        MatrixManager.pools.last().vertical.forEach(function(element) {
          if(element instanceof Element) {
            if(!element.chained()) {
              free2 = true;
            }
          }
        });
        if(vertical < 3) {
          MatrixManager.pools.last().vertical = [];
        }

        if(!free1 && MatrixManager.pools.last().element.chained()) {
          MatrixManager.pools.last().horizontal = [];horizontal = 0;
        }

        if(!free2 && MatrixManager.pools.last().element.chained()) {
          MatrixManager.pools.last().vertical = [];vertical = 0;
        }

        if(horizontal >= 3 || vertical >= 3) {
          return (MatrixManager.pools.last().horizontal.length + MatrixManager.pools.last().vertical.length + 1);
        } else {
          MatrixManager.pools.pop();

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

            MatrixManager.pools.last().vertical.push(neighbor);

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

            MatrixManager.pools.last().vertical.push(neighbor);

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

            MatrixManager.pools.last().horizontal.push(neighbor);

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

            MatrixManager.pools.last().horizontal.push(neighbor);

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
  find: function(_selector, network) {
    this.disable();

    MatrixManager.pools = [];

    var result1 = this.hasMatches(this.m_CurrentElement1);
    var result2 = this.hasMatches(this.m_CurrentElement2);

    if(!result1 && !result2) {
      if(this.m_CurrentElement1.m_Bonus == Element.bonus.types.bomb || this.m_CurrentElement2.m_Bonus == Element.bonus.types.bomb) {
        if(this.m_CurrentElement1.m_Bonus) this.m_CurrentElement1.remove();
        if(this.m_CurrentElement2.m_Bonus) this.m_CurrentElement2.remove();

        this.clear();
      } else {
        this.replace(this.m_CurrentElement2, this.m_CurrentElement1, true, network);
      }
    } else {
      if(Game.instance.m_PlayerTurn) {
        Game.instance.m_CurrentBlows--;
      }

      this.m_CurrentElement1.onChangePosition(false, true);
      this.m_CurrentElement2.onChangePosition(false, true);

      if(!result1) {
        if(this.m_CurrentElement1.m_Bonus) {
          this.m_CurrentElement1.remove();
        }
      }

      if(!result2) {
        if(this.m_CurrentElement2.m_Bonus) {
          this.m_CurrentElement2.remove();
        }
      }

      if(Game.tutorial) {
        Game.sharedScreen().onReplaceTutorial();
      }

      this.clear();
    }

    this.m_CurrentElement1 = false;
    this.m_CurrentElement2 = false;
  },
  fillAll: function(matrix) {
    if(!Game.network || Game.server) {
      matrix = [];

      for(var i = 0; i < this.getSize().x; i++) {
        for(var j = this.getSize().y; j < this.getSize().y * 2; j++) {
          var frame = this.m_Matrix[i][j];
          if(!frame) {
            element = ElementsManager.sharedManager().create();

            this.set(element, i, j, true, true);

            matrix.push(element.getId());

            var down = this.m_Matrix[i][j - 1];

            if(down && down != etypes.empty && down != etypes.block) {
              var x = down.getCenterX();
              var y = down.getCenterY() + element.getHeight();

              element.setCenterPosition(x, y);
            }
          }
        }
      }

      if(Game.network) {
        NetworkManager.sharedInstance().emit('data', {
          e: 2,
          matrix: matrix
        });
      }
    }

    if(Game.network) {
      if(!Game.server && matrix) {
        var counter = 0;

        for(var i = 0; i < this.getSize().x; i++) {
          for(var j = this.getSize().y; j < this.getSize().y * 2; j++) {
            var frame = this.m_Matrix[i][j];
            if(!frame) {
              element = ElementsManager.sharedManager().create();

              this.set(element, i, j);

              element.setId(matrix[counter]);
              element.setCurrentFrameIndex(matrix[counter]);

              counter++;

              var down = this.m_Matrix[i][j - 1];

              if(down && down != etypes.empty && down != etypes.block) {
                var x = down.getCenterX();
                var y = down.getCenterY() + element.getHeight();

                element.setCenterPosition(x, y);
              }
            }
          }
        }
      }
    }

    for(var i = 0; i < this.getSize().x; i++) {
      for(var j = 0; j < this.getSize().y * 2; j++) {
        var frame = this.m_Matrix[i][j];
        if(frame && frame != etypes.empty && frame != etypes.block) {
          frame.setCenterPosition(ElementsManager.sharedManager().getParent().getWidth() / 4 + frame.getWidth() * frame.getIndex().x - frame.getWidth() / 4 + Camera.sharedCamera().coord(4), frame.getHeight() * frame.getIndex().y + Camera.sharedCamera().coord(3));
        }
      }
    }
  },
  findAll: function() {
    MatrixManager.pools = [];

    this.fillAll();

    var combinations = 0;
    for(var i = 0; i < this.getSize().x; i++) {
      for(var j = 0; j < this.getSize().y; j++) {
        if(this.hasMatches(this.m_Matrix[i][j])) {
          combinations++;
        }
      }
    }

    if(combinations > 0) {
      this.clear();
    }

    return combinations > 0;
  },
  findStars: function() {
    for(var i = 0; i < this.getSize().x; i++) {
      for(var j = 0; j < this.getSize().y; j++) {
        if(this.m_Matrix[i][j] instanceof Element) {
          if(this.m_Matrix[i][j].starred()) {
            return true;
          }
        }
      }
    }

    return false;
  },
  lookDown: function(clear) {
    if(!Game.sharedScreen().m_TutorialRunning) {
      for(var j = 0; j < this.getSize().y * 2; j++) {
        for(var i = 0; i < this.getSize().x; i++) {
          var frame = this.m_Matrix[i][j];
          if(frame && !this.soe(frame)) this.m_Matrix[i][j].lookDown(true);
        }
      }
    }
  },
  moveDown: function(element, data, actions) {
    var index = {
      x: element.getIndex().x,
      y: element.getIndex().y,
    };

    if(!this.m_PauseTime[index.x]) this.m_PauseTime[index.x] = 0;

    this.m_Matrix[index.x][index.y] = false;

    var x = element.getCenterX();
    var y = element.getCenterY();
    var w = element.getWidth();
    var h = element.getHeight();

    this.set(element, index.x - data.left + data.right, index.y - data.down);

    actions.unshift(cc.DelayTime.create(this.m_PauseTime[index.x]));
    actions.push(cc.CallFunc.create(element.onChangePosition, element, {replaced: true}));
    actions.push(cc.ScaleTo.create(0.2, 1.1, 0.9));
    actions.push(cc.ScaleTo.create(0.1, 1.0, 1.0));
    actions.push(false);

    var sequence = cc.Sequence.create(actions);

    element.runAction(sequence);

    this.m_PauseTime[index.x] += 0.1;

    if(index.y - data.down < this.getSize().y) {
      MatrixManager.pause = Math.max(MatrixManager.pause, sequence.getDuration() + this.m_PauseTime.max());
    }
  },
  shuffle: function() {
    var inc = 0;
    var counter = 0;
    for(var i = 0; i < this.getSize().x; i++) {
      for(var j = 0; j < this.getSize().y; j++) {
        var frame = this.m_Matrix[i][j];

        if(frame && frame != etypes.empty && frame != etypes.block) {
          if(frame.getId() != Element.types.star && !frame.m_Bonus && !frame.m_Special) {
            if(!this.soe(frame)) {
              frame.runAction(
                cc.Sequence.create(
                  cc.DelayTime.create(0.01 * inc),
                  cc.ScaleTo.create(0.25, 0.0),
                  cc.CallFunc.create(frame.chooseId, frame),
                  cc.ScaleTo.create(0.25, 1.0),
                  false
                )
              );

              inc++;
            }

            counter++;
          }
        }
      }
    }
  },
  selectRandomCombination: function() {
    if(this.m_CurrentElement1 || this.m_CurrentElement2) {
      return false;
    }

    if(MatrixManager.sharedManager().computer(false, true)) {
      var element = this.m_Combinations.random().element;
      var neighbor = this.m_Combinations.random().neighbor;

      if(element instanceof Element) {
        var x1 = element.convertToWorldSpace(cc.p(0, 0)).x + element.getWidth() / 2;
        var y1 = element.convertToWorldSpace(cc.p(0, 0)).y + element.getHeight() / 2;
        var x2 = neighbor.convertToWorldSpace(cc.p(0, 0)).x + neighbor.getWidth() / 2;
        var y2 = neighbor.convertToWorldSpace(cc.p(0, 0)).y + neighbor.getHeight() / 2;

        var finger = Game.instance.m_HelpFinger;
        finger.create().setCenterPosition(x1, y1);
        finger.setOpacity(0);
        finger.stopAllActions();
        finger.runAction(
          cc.RepeatForever.create(
            cc.Sequence.create(
              cc.MoveTo.create(0.0, cc.p(x1, y1)),
              cc.FadeIn.create(0.5),
              cc.DelayTime.create(0.5),
              cc.MoveTo.create(1.0, cc.p(x2, y2)),
              cc.FadeOut.create(0.5),
              cc.DelayTime.create(0.5),
              false
            )
          )
        );

        return true;
      }
    }

    return false;
  },
  uselectCombination: function() {
    var finger = Game.instance.m_HelpFinger;
    finger.stopAllActions();
    finger.runAction(
      cc.Sequence.create(
        cc.FadeOut.create(0.5),
        cc.CallFunc.create(finger.destroy, finger, finger),
        false
      )
    );
  },
  removeHorizontalLine: function(x, y, element) {
    var sickle1 = ElementsManager.instance.m_ElementsSickles.create();
    var sickle2 = ElementsManager.instance.m_ElementsSickles.create();

    sickle1.setCenterPosition(element.convertToWorldSpace(cc.p(0, 0)).x + element.getWidth() / 2, element.convertToWorldSpace(cc.p(0, 0)).y + element.getHeight() / 2);
    sickle1.setOpacity(255);
    sickle1.setRotation(0);
    sickle1.setFlippedHorizontally(true);
    sickle1.runAction(cc.MoveTo.create(1.0, cc.p(sickle1.getCenterX() - Camera.sharedCamera().width, sickle1.getCenterY())));
    sickle1.runAction(
      cc.Sequence.create(
        cc.DelayTime.create(0.9),
        cc.FadeTo.create(0.1, 0.0),
        false
      )
    );

    sickle2.setCenterPosition(element.convertToWorldSpace(cc.p(0, 0)).x + element.getWidth() / 2, element.convertToWorldSpace(cc.p(0, 0)).y + element.getHeight() / 2);
    sickle2.setOpacity(255);
    sickle2.setRotation(0);
    sickle2.setFlippedHorizontally(false);
    sickle2.runAction(cc.MoveTo.create(1.0, cc.p(sickle2.getCenterX() + Camera.sharedCamera().width, sickle2.getCenterY())));
    sickle2.runAction(
      cc.Sequence.create(
        cc.DelayTime.create(0.9),
        cc.FadeTo.create(0.1, 0.0),
        false
      )
    );

    var time;

    time = 0.05;
    for(var i = x - 1; i >= 0; i--) {
      var current = this.get(i, y);

      if(current && current != etypes.empty && current != etypes.block) {
        if(current.getId() != Element.types.star) {
          ActionsManager.sharedManager().add({
            id: current.getId()
          });

          current.runAction(
            cc.Sequence.create(
              cc.DelayTime.create(time),
              cc.CallFunc.create(current.remove, current, current),
              false
            )
          );
        }
      }

      time += 0.05;

      if(!this.m_PauseTime[i]) {
        this.m_PauseTime[i] = time;
      } else {
        this.m_PauseTime[i] += time;
      }
    }

    time = 0.05;
    for(var i = x + 1; i < this.getSize().x; i++) {
      var current = this.get(i, y);

      if(current && current != etypes.empty && current != etypes.block) {
        if(current.getId() != Element.types.star) {
          ActionsManager.sharedManager().add({
            id: current.getId()
          });

          current.runAction(
            cc.Sequence.create(
              cc.DelayTime.create(time),
              cc.CallFunc.create(current.remove, current, current),
              false
            )
          );
        }
      }

      time += 0.05;

      if(!this.m_PauseTime[i]) {
        this.m_PauseTime[i] = time;
      } else {
        this.m_PauseTime[i] += time;
      }
    }

    MatrixManager.pause += 1.0;

    Sound.sharedSound().play(s_SoundLine);
  },
  removeVerticalLine: function(x, y, element) {
    var sickle1 = ElementsManager.instance.m_ElementsSickles.create();
    var sickle2 = ElementsManager.instance.m_ElementsSickles.create();

    sickle1.setCenterPosition(element.convertToWorldSpace(cc.p(0, 0)).x + element.getWidth() / 2, element.convertToWorldSpace(cc.p(0, 0)).y + element.getHeight() / 2);
    sickle1.setOpacity(255);
    sickle1.setRotation(-90);
    sickle1.setFlippedHorizontally(false);
    sickle1.runAction(cc.MoveTo.create(1.0, cc.p(sickle1.getCenterX(), sickle1.getCenterY() + Camera.sharedCamera().height)));
    sickle1.runAction(
      cc.Sequence.create(
        cc.DelayTime.create(0.9),
        cc.FadeTo.create(0.1, 0.0),
        false
      )
    );

    sickle2.setCenterPosition(element.convertToWorldSpace(cc.p(0, 0)).x + element.getWidth() / 2, element.convertToWorldSpace(cc.p(0, 0)).y + element.getHeight() / 2);
    sickle2.setOpacity(255);
    sickle2.setRotation(90);
    sickle2.setFlippedHorizontally(false);
    sickle2.runAction(cc.MoveTo.create(1.0, cc.p(sickle2.getCenterX(), sickle2.getCenterY() - Camera.sharedCamera().height)));
    sickle2.runAction(
      cc.Sequence.create(
        cc.DelayTime.create(0.9),
        cc.FadeTo.create(0.1, 0.0),
        false
      )
    );

    var time;

    time = 0.05;
    for(var i = y - 1; i >= 0; i--) {
      var current = this.get(x, i);

      if(current && current != etypes.empty && current != etypes.block) {
        if(current.getId() != Element.types.star) {
          ActionsManager.sharedManager().add({
            id: current.getId()
          });

          current.runAction(
            cc.Sequence.create(
              cc.DelayTime.create(time),
              cc.CallFunc.create(current.remove, current, current),
              false
            )
          );
        }
      }

      time += 0.05;
    }

    time = 0.05;
    for(var i = y + 1; i < this.getSize().y; i++) {
      var current = this.get(x, i);

      if(current && current != etypes.empty && current != etypes.block) {
        if(current.getId() != Element.types.star) {
          ActionsManager.sharedManager().add({
            id: current.getId()
          });

          current.runAction(
            cc.Sequence.create(
              cc.DelayTime.create(time),
              cc.CallFunc.create(current.remove, current, current),
              false
            )
          );
        }
      }

      time += 0.05;
    }

    if(!this.m_PauseTime[x]) {
      this.m_PauseTime[x] = time;
    } else {
      this.m_PauseTime[x] += time;
    }

    Sound.sharedSound().play(s_SoundLine);
  },
  removeSquare: function(x, y, element) {
    var speed = 0.5;

    var elements = [];

    elements.push(element);
    elements.push(this.get(x - 1, y));
    elements.push(this.get(x - 1, y + 1));
    elements.push(this.get(x, y + 1));
    elements.push(this.get(x + 1, y + 1));
    elements.push(this.get(x + 1, y));
    elements.push(this.get(x + 1, y - 1));
    elements.push(this.get(x, y - 1));
    elements.push(this.get(x - 1, y - 1));

    elements.forEach(function(current) {
      if(current && current != etypes.empty && current != etypes.block) {
        if(current.getId() != Element.types.star) {
          current.runAction(
            cc.Sequence.create(
              cc.DelayTime.create(speed),
              cc.CallFunc.create(current.remove, current, current),
              false
            )
          );
        }
      }
    });

    MatrixManager.pause += 1.0;

    Game.instance.m_BombBirds.create().run({
      speed: speed,
      element: element
    });
  },
  removeSimilar: function(x, y, element) {
    var speed = 0.5;

    for(var i = 0; i < this.getSize().x; i++) {
      for(var j = 0; j < this.getSize().y; j++) {
        var current = this.get(i, j);

        if(current && current != etypes.empty && current != etypes.block) {
          if(current.getId() != Element.types.star) {
            if(current.getId() == element.getId()) {
              ActionsManager.sharedManager().add({
                id: current.getId()
              });

              current.runAction(
                cc.Sequence.create(
                  cc.DelayTime.create(speed),
                  cc.CallFunc.create(current.remove, current, current),
                  false
                )
              );
              Game.instance.m_FlayerBirds.create().run({
                speed: speed,
                element: current
              });
            }
          }
        }
      }
    }
  },
  removeBoxes: function(x, y, element) {
    var elements = [];

    elements.push(this.get(x - 1, y));
    elements.push(this.get(x, y + 1));
    elements.push(this.get(x + 1, y));
    elements.push(this.get(x, y - 1));

    elements.forEach(function(current) {
      if(current instanceof Element) {
        if(current.special() == Element.types.box) {
          current.remove();

          this.m_ClearBox = true;
        }
      }
    }.bind(this));
  },
  hasBonus: function(type) {
    for(var i = 0; i < this.getSize().x; i++) {
      for(var j = 0; j < this.getSize().y; j++) {
        var current = this.get(i, j);

        if(current && current != etypes.empty && current != etypes.block) {
          if(current.getId() != Element.types.star) {
            if(current.m_Bonus == type) return current;
          }
        }
      }
    }

    return false;
  },
  addBoxes: function() {
    if(!this.m_ClearBox) {
      var elements = [];

      for(var i = 0; i < this.getSize().x; i++) {
        for(var j = 0; j < this.getSize().y; j++) {
          var current = this.get(i, j);

          if(current instanceof Element) {
            if(current.special() == Element.types.box) {
              elements.push(current);
            }
          }
        }
      }

      var build = false;

      elements.shuffle();

      elements.forEach(function(element) {
        var x = element.getIndex().x;
        var y = element.getIndex().y;

        var els = [];

        if(x > 0) els.push(this.get(x - 1, y));
        if(y < this.getSize().y) els.push(this.get(x, y + 1));
        if(x < this.getSize().x) els.push(this.get(x + 1, y));
        if(y > 0) els.push(this.get(x, y - 1));

        els.forEach(function(el) {
          if(!build) {
            if(el instanceof Element) {
              if(!el.special() && !el.chained() && el.getId() != Element.types.star) {
                if(true) {
                  el.setSpecial(Element.types.box);
                  el.setScale(0);
                  el.runAction(cc.ScaleTo.create(0.5, 1.0));

                  Sound.sharedSound().play(s_SoundChew[Random.sharedRandom().random(0, 3, true)]);

                  build = true;
                }
              }
            }
          }
        }.bind(this));
      }.bind(this));
    }

    this.m_ClearBox = false;
  },
  addChange: function() {
    var elements = [];

    for(var i = 0; i < this.getSize().x; i++) {
      for(var j = 0; j < this.getSize().y; j++) {
        var current = this.get(i, j);

        if(current instanceof Element) {
          if(current.special() == Element.types.change) {
            elements.push(current);
          }
        }
      }
    }

    elements.forEach(function(element) {
      var x = element.getIndex().x;
      var y = element.getIndex().y;

      var els = [];

      if((x - 1) >= 0) els.push(this.get(x - 1, y));
      if((y + 1) < this.getSize().y) els.push(this.get(x, y + 1));
      if((x + 1) < this.getSize().x) els.push(this.get(x + 1, y));
      if((y - 1) >= 0) els.push(this.get(x, y - 1));

      els.shuffle();

      var build = false;

      els.forEach(function(el) {
        if(!build) {
          if(el instanceof Element) {
            if(!this.s(el) && el.getId() != Element.types.star) {
              if(!this.hasMatchesWith(el, element) && !this.hasMatchesWith(element, el)) {
                this.replace(element, el, false, false, true);

                build = true;
              }
            }
          }
        }
      }.bind(this));
    }.bind(this));
  }
});

MatrixManager.pause = 0;
MatrixManager.pools = [];
MatrixManager.pool = function () {
  return {
    horizontal: [],
    vertical: [],
    element: false
  };
};
MatrixManager.instance = false;
MatrixManager.sharedManager = function() {
  return MatrixManager.instance ? MatrixManager.instance : new MatrixManager();
};