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

ActionsManager = cc.Node.extend({
  m_Pool: [],
  ctor: function() {
    this._super();

    ActionsManager.instance = this;
  },
  add: function(data) {
    var exist = false;

    for(var i = 0; i < this.m_Pool.length; i++) {
      if(data.id == this.m_Pool[i].id) {
        this.m_Pool[i].repeat++;
        this.m_Pool[i].factor = Math.max(this.m_Pool[i].factor, data.factor);

        exist = true;
      }
    }

    if(!exist) {
      data.repeat = 1;

      this.m_Pool.push(data);
    }

    this.m_Pool.sort(function(previous, next) {
      return next.id - previous.id;
    });
  },
  remove: function(data) {
    this.m_Pool.splice(this.m_Pool.indexOf(data), 1);
  },
  empty: function() {
    return this.m_Pool.length <= 0;
  },
  clear: function() {
    this.m_Pool = [];
  },
  run: function() {
    if(this.m_Pool.length > 0) {
      if(!Game.sharedScreen().m_TutorialRunning) {
        Game.sharedScreen().onTurnStart(this.m_Pool[0]);

        this.remove(this.m_Pool[0]);
      }
    } else {
      Game.sharedScreen().onTurnChange();
      MatrixManager.sharedManager().m_Busy = false;
    }
  }
});

ActionsManager.instance = false;
ActionsManager.sharedManager = function() {
  return ActionsManager.instance ? ActionsManager.instance : new ActionsManager();
};