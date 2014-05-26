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

PurchasesBackground = BackgroundColor.extend({
  m_zIndex: 600,
  m_Type: -1,
  m_Coins: false,
  m_Lives: false,
  m_Keys: false,
  m_AnimationTime: 0,
  m_AnimationTimeElapsed: 0,
  m_ElementsCount: 0,
  ctor: function(parent) {
    this._super(cc.c4(0, 0, 0, 0));

    this.m_Parent = parent;

    this.m_Coins = EntityManager.create(50, ParticleCoin.create(false, this.m_Parent.getPhysicsWorld()), this);
    this.m_Lives = EntityManager.create(50, ParticleLive.create(false, this.m_Parent.getPhysicsWorld()), this);
    this.m_Keys = EntityManager.create(50, ParticleKey.create(false, this.m_Parent.getPhysicsWorld()), this);
  },
  show: function(type) {
    this.m_Parent.addChild(this, this.m_zIndex);

    this.m_Coins.clear();
    this.m_Lives.clear();
    this.m_Keys.clear();

    this.m_Type = type;

    switch(this.m_Type) {
      case purchase.coins.pack1:
      this.m_AnimationTime = 1.0;
      this.m_ElementsCount = 5;
      break;
      case purchase.coins.pack2:
      this.m_AnimationTime = 0.8;
      this.m_ElementsCount = 15;
      break;
      case purchase.coins.pack3:
      this.m_AnimationTime = 0.08;
      this.m_ElementsCount = 100;
      break;
      case purchase.coins.pack4:
      this.m_AnimationTime = 0.02;
      this.m_ElementsCount = 200;
      break;
      case purchase.lives:
      this.m_AnimationTime = 0.2;
      this.m_ElementsCount = 10;
      break;
      case purchase.keys.pack1:
      this.m_AnimationTime = 0.08;
      this.m_ElementsCount = 50;
      break;
      case purchase.keys.pack2:
      this.m_AnimationTime = 0.02;
      this.m_ElementsCount = 100;
      break;
    }

    this.m_AnimationTimeElapsed = 0;
  },
  hide: function() {
    this.removeFromParent();
  },
  update: function(time) {
    this._super(time);

    this.m_AnimationTimeElapsed += time;
    if(this.m_AnimationTimeElapsed >= this.m_AnimationTime) {
      this.m_AnimationTimeElapsed = 0;

      if(--this.m_ElementsCount > 0) {
        switch(this.m_Type) {
          case purchase.coins.pack1:
          case purchase.coins.pack2:
          case purchase.coins.pack3:
          case purchase.coins.pack4:
          this.m_Coins.create();
          break;
          case purchase.lives:
          this.m_Lives.create();
          break;
          case purchase.keys.pack1:
          case purchase.keys.pack2:
          this.m_Keys.create();
          break;
        }
      }

      if(this.m_ElementsCount <= 0 && (this.m_Coins.getCount() <= 0 && this.m_Lives.getCount() <= 0 && this.m_Keys.getCount() <= 0)) {
        this.hide();
      }
    }
  },
  onEnter: function() {
    this._super();
  },
  onExit: function() {
    this._super();

    PurchasesBackground.instance = false;
  }
});

PurchasesBackground.instance = false;
PurchasesBackground.sharedScreen = function(parent) {
  if(PurchasesBackground.instance) {
    PurchasesBackground.instance.m_Parent = parent;
  } else {
    PurchasesBackground.instance = new PurchasesBackground(parent);
  }

  return PurchasesBackground.instance;
};