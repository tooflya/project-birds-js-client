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
  m_DragFactor: 32,
  ctor: function() {
    this._super(s_Elements, 5, 2);

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
    for(var i = 0; i < 10; i++) {
      ElementsManager.sharedManager().m_ElementsParts.create(this);
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
  },
  onHover: function() {
    if(!MatrixManager.sharedManager().active()) return false;

    this.setCurrentFrameIndex(this.m_Id + 5);
  },
  onUnHover: function() {
    this.setCurrentFrameIndex(this.m_Id);
  },
  onTouch: function() {
    if(!MatrixManager.sharedManager().active()) return false;
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
  chooseId: function() {
    this.m_Id = Random.sharedRandom().random(0, this.getHorizontalFramesCount(), true);

    if(MatrixManager.sharedManager().hasMatches(this)) {
      this.chooseId();
    }

    this.setCurrentFrameIndex(this.m_Id);
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

Element.create = function() {
  var entity = new Element();

  return entity;
};
