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

Bubble = Entity.extend({
  ctor: function() {
    this._super(s_ElementsBubbles);

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

    ElementsManager.sharedManager().m_ElementsBubblesPoping.create().setCenterPosition(this.getCenterX(), this.getCenterY());

    MatrixManager.sharedManager().m_BubbleMatrix[this.getIndex().x][this.getIndex().y] = false;
  },
  setIndex: function(x, y) {
    this.m_Index.x = x;
    this.m_Index.y = y;
  },
  getIndex: function() {
    return this.m_Index;
  },
  update: function(time) {
    this._super(time);
  },
  deepCopy: function() {
    return Bubble.create();
  }
});

Bubble.create = function() {
  return new Bubble();
};
