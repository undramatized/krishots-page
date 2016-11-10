/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `MainController.index()`
   */
  index: function (req, res) {
    return res.view('main/index')
  },


  /**
   * `MainController.about()`
   */
  about: function (req, res) {
    return res.view('main/about')
  },


  /**
   * `MainController.gallery()`
   */
  gallery: function (req, res) {
    return res.view('main/gallery')
  },


  /**
   * `MainController.pricing()`
   */
  pricing: function (req, res) {
    return res.view('main/pricing')
  },


  /**
   * `MainController.contact()`
   */
  contact: function (req, res) {
    return res.view('main/contact')
  }
};
