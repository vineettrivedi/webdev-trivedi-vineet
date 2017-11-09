const mongoose = require('mongoose');
const WidgetSchema = require('./widget.schema.server.js');
const WidgetModel = mongoose.model("WidgetModel", WidgetSchema);
const pageModel = require('../page/page.model.server.js');
WidgetModel.createWidget = createWidget;
WidgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
WidgetModel.findWidgetById = findWidgetById;
WidgetModel.updateWidget = updateWidget;
WidgetModel.deleteWidget = deleteWidget;
module.exports = WidgetModel;

function createWidget(pageId, widget) {
  let newWidget = null;
  return WidgetModel
    .create(widget)
    .then(function (widget) {
      newWidget = widget;
      pageModel
        .findPageById(pageId)
        .then(function (page) {
          page.widgets.push(newWidget);
          return page.save();
        });
    });
}

function findAllWidgetsForPage(pageId) {
  return WidgetModel
    .find({_page: pageId})
    .populate('_page', 'name')
    .exec();
}

function findWidgetById(widgetId) {
  return WidgetModel.findById(widgetId);
}

function updateWidget(widgetId, widget) {
  return WidgetModel.update({_id: widgetId}, widget);
}

function deleteWidget(widgetId) {
  return WidgetModel.delete({_id: widgetId});
}
