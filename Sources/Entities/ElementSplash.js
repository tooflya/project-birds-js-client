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

ElementSplash = AnimatedEntity.extend({
  ctor: function() {
    this._super(s_ElementsSplash, 9, 5);
  },
  create: function(element) {
    this._super();

    this.setCenterPosition(element.getCenterX(), element.getCenterY() + element.getHeight() / 2);
    this.animate(0.02, 1, {
      start: element.getId() * this.getHorizontalFramesCount(),
      end: element.getId() * this.getHorizontalFramesCount() + this.getHorizontalFramesCount() - 1
    });

    return this;
  },
  onCreate: function() {
    this._super();
  },
  onDestroy: function() {
    this._super();
  },
  onAnimationFinish: function() {
    this.destroy();
  },
  update: function(time) {
    this._super(time);
  },
  deepCopy: function() {
    return ElementSplash.create();
  }
});

ElementSplash.create = function() {
  var entity = new ElementSplash();

  return entity;
};
