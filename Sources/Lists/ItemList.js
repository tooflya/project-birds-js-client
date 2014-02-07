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
    this._super(s_ListScrollSmall, 512, 650, 512, 0, parent);

    this.m_BackgroundIcon = TiledEntity.create(s_ShopItems, 10, 6, this);
    this.m_BackgroundIconProperties = TiledEntity.create(s_ItemsProperties, 1, 3, this);
    this.m_BackgroundIconRating1 = TiledEntity.create(s_ItemsRating, 1, 2, this);
    this.m_BackgroundIconRating2 = TiledEntity.create(s_ItemsRating, 2, 2, this);
    this.m_BackgroundIconSilver = AnimatedEntity.create(s_PanelIcon2, 5, 4, this);
    this.m_BackgroundIconGold = AnimatedEntity.create(s_PanelIcon1, 5, 4, this);

    this.m_TitleText = Text.create(false, this);
    this.m_PriceTextSilver = Text.create(false, this);
    this.m_PriceTextGold = Text.create(false, this);
    this.m_PropertiesText = Text.create(false, this);
    this.m_DescriptionText = Text.create(false, this);

    this.m_BackgroundIcon.create().setCenterPosition(Camera.sharedCamera().coord(128), this.getCenterY() + Camera.sharedCamera().coord(110));
    this.m_BackgroundIconSilver.create().setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(170));
    this.m_BackgroundIconGold.create().setCenterPosition(this.getCenterX() + Camera.sharedCamera().coord(130), this.getCenterY() + Camera.sharedCamera().coord(170));
    this.m_BackgroundIconProperties.create().setCenterPosition(Camera.sharedCamera().coord(256), this.getCenterY() + Camera.sharedCamera().coord(110));
    this.m_BackgroundIconRating1.create().setCenterPosition(this.getCenterX() + Camera.sharedCamera().coord(80), this.getCenterY() + Camera.sharedCamera().coord(50));
    this.m_BackgroundIconRating2.create().setCenterPosition(this.getCenterX() + Camera.sharedCamera().coord(80), this.getCenterY() + Camera.sharedCamera().coord(50));

    this.m_BackgroundIconRating1.setCurrentFrameIndex(1);
    this.m_BackgroundIconRating2.setCurrentFrameIndex(0);

    this.m_BackgroundIconSilver.setScale(0.7);
    this.m_BackgroundIconGold.setScale(0.7);

    this.m_BackgroundIconSilver.setRotation(-45);
    this.m_BackgroundIconGold.setRotation(-45);

    this.m_BackgroundIconSilver.animate(0.02);
    this.m_BackgroundIconGold.animate(0.02);

    this.m_BackgroundIconRating2.showPercentage(200);

    this.m_TitleText.setColor(cc.c3(167.0, 65.0, 7.0));
    this.m_DescriptionText.setColor(cc.c3(204.0, 102.0, 51.0));

    this.m_PriceTextSilver.setColor(cc.c3(255.0, 130.0, 0.0));
    this.m_PriceTextGold.setColor(cc.c3(255.0, 130.0, 0.0));
    this.m_PropertiesText.setColor(cc.c3(255.0, 130.0, 0.0));

    this.m_Clipper.setPosition(cc.p(parent.getWidth() / 2, parent.getHeight() / 2 + Camera.sharedCamera().coord(25)));
  },
  onShow: function(id) {
    this.m_BackgroundIcon.setCurrentFrameIndex(id);

    this.setPrices(id);
    this.setProperties(id);
    this.setDescription(id);
  },
  setPrices: function(id) {
    if(false) {
    } else {
      var silver = properties.items[id].price.silver;
      var gold = properties.items[id].price.gold;

      this.m_PriceTextSilver.ccsf([silver]);
      this.m_PriceTextGold.ccsf([gold]);

      this.m_PriceTextSilver.setCenterPosition(this.getCenterX() + Camera.sharedCamera().coord(25) + this.m_PriceTextSilver.getWidth() / 2, this.getCenterY() + Camera.sharedCamera().coord(170));
      this.m_PriceTextGold.setCenterPosition(this.getCenterX() + Camera.sharedCamera().coord(155) + this.m_PriceTextGold.getWidth() / 2, this.getCenterY() + Camera.sharedCamera().coord(170));

      this.m_PriceTextGold.setVisible(gold > 0);
      this.m_BackgroundIconGold.setVisible(gold > 0);
    }
  },
  setProperties: function(id) {
    if(id < 20) {
      this.m_BackgroundIconProperties.setCurrentFrameIndex(1);
    } else if(id < 40) {
      this.m_BackgroundIconProperties.setCurrentFrameIndex(0);
    } else {
      this.m_BackgroundIconProperties.setCurrentFrameIndex(2);
    }

    this.m_PropertiesText.ccsf([properties.items[id].properties]);
    this.m_PropertiesText.setCenterPosition(this.getCenterX() + this.m_PropertiesText.getWidth() / 2 + Camera.sharedCamera().coord(25), this.getCenterY() + Camera.sharedCamera().coord(110));
  },
  setDescription: function(id) {
    this.m_TitleText.setText('item-title-' + id);
    this.m_DescriptionText.setText('item-description-' + id);

    this.m_TitleText.setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(270));
    this.m_DescriptionText.setCenterPosition(this.getCenterX(), this.getCenterY() - this.m_DescriptionText.getHeight() / 2);
  }
});

ItemList.create = function(parent) {
  return new ItemList(parent);
};
