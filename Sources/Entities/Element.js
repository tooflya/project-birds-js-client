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

Element = TiledEntity.extend({
  m_Id: -1,
  m_Index: -1,
  m_Glow: false,
  m_GlowAnimationRunning: false,
  ctor: function() {
    this._super(s_Elements, 7, 2);

    this.m_Index = {
      x: -1,
      y: -1
    };
  },
  onCreate: function() {
    this._super();
  },
  onDestroy: function() {
    this._super();

    MatrixManager.sharedManager().remove(this);

    ElementsManager.sharedManager().m_ElementsIcons.create(this);
    for(var i = 0; i < 2; i++) {
      ElementsManager.sharedManager().m_ElementsParts.create({
        element: this,
        index: i
      });
    }
  },
  onChangePosition: function() {
    if(this.getIndex().y < MatrixManager.sharedManager().getSize().y) {
      if(!this.isRegisterTouchable()) {
        this.registerTouchable(true);
      }
    } else {
      if(this.isRegisterTouchable()) {
        this.registerTouchable(false);
      }
    }

    if(this.m_Glow) {
      this.m_Glow.destroy();
    }
  },
  onHover: function() {
    if(!MatrixManager.sharedManager().active()) return false;

    this.setCurrentFrameIndex(this.m_Id + this.getHorizontalFramesCount());
  },
  onUnHover: function() {
    this.setCurrentFrameIndex(this.m_Id);
  },
  onTouch: function() {
    if(!this.isRegisterTouchable()) return false;
    if(!MatrixManager.sharedManager().active()) return false;

    if(!this.m_GlowAnimationRunning) {
      this.onUnHover();

      ElementsManager.sharedManager().m_ElementsGlows.create(this);

      MatrixManager.sharedManager().check(this);
    }
  },
  onDragTop: function() {
    this._super();

    MatrixManager.sharedManager().replace(this, 'top');
  },
  onDragDown: function() {
    this._super();

    MatrixManager.sharedManager().replace(this, 'down');
  },
  onDragLeft: function() {
    this._super();

    MatrixManager.sharedManager().replace(this, 'left');
  },
  onDragRight: function() {
    this._super();

    MatrixManager.sharedManager().replace(this, 'right');
  },
  onMouseDragged: function(e) {
    if(this.getNumberOfRunningActions() > 0) return false;

    return this._super(e);
  },
  setIndex: function(x, y) {
    this.m_Index.x = x;
    this.m_Index.y = y;
  },
  getIndex: function() {
    return this.m_Index;
  },
  getId: function() {
    return this.m_Id;
  },
  chooseId: function(created) {
    if(Game.tutorial && Game.sharedScreen().m_TutorialState == 1 && created) {
      var index = this.getIndex();

      this.m_Id = MatrixManager.sharedManager().m_TutorialMatrix[index.y][index.x];

      this.setCurrentFrameIndex(this.m_Id);
    } else {
      this.m_Id = Random.sharedRandom().random(0, this.getHorizontalFramesCount() - 2, true);

      if(MatrixManager.sharedManager().hasMatches(this)) {
        this.chooseId();
      }

      this.setCurrentFrameIndex(this.m_Id);
    }
  },
  lookDown: function() {
    if(this.getIndex().y > 0) {
      var free = true;
      var count = 0;
      while(free) {
        if(this.getIndex().y - (count + 1) >= 0 && !MatrixManager.sharedManager().get(this.getIndex().x, this.getIndex().y - (count + 1))) {
          count++;
        } else {
          free = false;
        }
      }

      if(count > 0) {
        MatrixManager.sharedManager().moveDown(this, count);
      }
    }
  },
  update: function(time) {
    this._super(time);
  },
  deepCopy: function() {
    return Element.create();
  }
});

ElementGlow = AnimatedEntity.extend({
  m_Element: false,
  m_ElementAnimationTime: 1.0,
  m_ElementAnimationTimeElapsed: 0.0,
  ctor: function() {
    this._super(s_ElementsGlow, 1, 7);
  },
  create: function(element) {
    this.m_Element = element;

    this._super();
  },
  onCreate: function() {
    this._super();

    this.m_Element.m_GlowAnimationRunning = true;
    this.m_Element.m_Glow = this;

    this.setCenterPosition(this.m_Element.getCenterX(), this.m_Element.getCenterY());
    this.animate(0.06, 1);
  },
  onDestroy: function() {
    this._super();

    this.m_Element.m_GlowAnimationRunning = false;
    this.m_Element.m_Glow = false;
  },
  onAnimationStart: function() {
    this._super();

    this.setVisible(true);
  },
  onAnimationFinish: function() {
    this._super();

    this.setVisible(false);
  },
  update: function(time) {
    this._super(time);

    if(!this.isAnimationRunning()) {
      this.m_ElementAnimationTimeElapsed += time;
      if(this.m_ElementAnimationTimeElapsed >= this.m_ElementAnimationTime) {
        this.m_ElementAnimationTimeElapsed = 0;

        this.animate(0.06, 1);
      }
    }
  },
  deepCopy: function() {
    return ElementGlow.create();
  }
});

Element.colors = [
  cc.c3(211, 33, 17),
  cc.c3(231, 199, 0),
  cc.c3(0, 173, 255),
  cc.c3(223, 34, 232),
  cc.c3(0, 211, 0),
];
Element.create = function() {
  var entity = new Element();

  return entity;
};

ElementGlow.create = function() {
  var entity = new ElementGlow();

  return entity;
};
