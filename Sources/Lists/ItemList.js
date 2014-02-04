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

ItemList = PatternList.extend({
  ctor: function(parent) {
    this._super(s_ListScrollSmall, 512, 700, 512, 0, parent);

    this.m_BackgroundIcon = TiledEntity.create(s_ShopItems, 10, 6, this);
    this.m_BackgroundIconProperties = TiledEntity.create(s_ItemsProperties, 1, 3, this);
    this.m_BackgroundIconRating1 = TiledEntity.create(s_ItemsRating, 1, 2, this);
    this.m_BackgroundIconRating2 = TiledEntity.create(s_ItemsRating, 2, 2, this);

    this.m_TitleText = Text.create('item-title-1', this);
    this.m_PriceText = Text.create('item-already-bought', this);
    this.m_PropertiesText = Text.create('item-already-bought', this);
    this.m_DescriptionText = Text.create('item-description-1', this);

    this.m_BackgroundIcon.create().setCenterPosition(Camera.sharedCamera().coord(128), this.getCenterY() + Camera.sharedCamera().coord(140));
    this.m_BackgroundIconProperties.create().setCenterPosition(Camera.sharedCamera().coord(256), this.getCenterY() + Camera.sharedCamera().coord(140));
    this.m_BackgroundIconRating1.create().setCenterPosition(this.getCenterX() + Camera.sharedCamera().coord(75), this.getCenterY() + Camera.sharedCamera().coord(80));
    this.m_BackgroundIconRating2.create().setCenterPosition(this.getCenterX() + Camera.sharedCamera().coord(75), this.getCenterY() + Camera.sharedCamera().coord(80));

    this.m_TitleText.setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(300));
    this.m_PriceText.setCenterPosition(this.getCenterX() + Camera.sharedCamera().coord(80), this.getCenterY() + Camera.sharedCamera().coord(200));
    this.m_PropertiesText.setCenterPosition(this.getCenterX() + Camera.sharedCamera().coord(120), this.getCenterY() + Camera.sharedCamera().coord(140));
    this.m_DescriptionText.setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(30) - this.m_DescriptionText.getHeight() / 2);

    this.m_BackgroundIconRating1.setCurrentFrameIndex(1);
    this.m_BackgroundIconRating2.setCurrentFrameIndex(0);

    this.m_BackgroundIconRating2.showPercentage(200);

    this.m_TitleText.setColor(cc.c3(167.0, 65.0, 7.0));
    this.m_DescriptionText.setColor(cc.c3(204.0, 102.0, 51.0));

    this.m_PriceText.setColor(cc.c3(255.0, 130.0, 0.0));
    this.m_PropertiesText.setColor(cc.c3(255.0, 130.0, 0.0));
  },
  onShow: function(id) {
    this.m_BackgroundIcon.setCurrentFrameIndex(id);

    this.m_TitleText.setText('item-title-' + id);
    this.m_DescriptionText.setText('item-description-' + id);

    this.m_DescriptionText.setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(30) - this.m_DescriptionText.getHeight() / 2);
  }
});

ItemList.create = function(parent) {
  return new ItemList(parent);
};
