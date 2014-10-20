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

AppInitialization({
    version: '0.9.88',
    application: 9,
    platform: 'arkadium',
    auto: true,
    playtest: false,
    language: 0,
    designed: {
      size: {
        width: 640,
        height: 360,
        margin: {
          x: 0,
          y: 100
        }
      },
      graphics: {
        width: 640,
        height: 360
      },
      margin: {
        x: 0,
        y: 0
      },
      scale: 3.0
    },
    orientations: {
      portrait: false,
      landscape: true
    },
    analytics: 'UA-48406912-5',
    purchases: true,
    vendor: 'arkadium',
    server: {
      url: 'http://www.tooflya.com',
      port: 8082
    }
  }, ['Sources/Resources@1x.js']
);
