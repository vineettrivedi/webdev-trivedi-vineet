module.exports = function (app) {

  widgets = [
    {'_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO'},
    {'_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    {
      '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
      'url': 'http://images.all-free-download.com/images/graphiclarge/canoe_water_nature_221611.jpg'
    },
    {'_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'},
    {'_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    {
      '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
      'url': 'https://www.youtube.com/embed/AM2Ivdi9c4E'
    },
    {'_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'}
  ];

  app.post("/api/page/:pid/widget", createWidget);
  app.get("/api/page/:pid/widget", findAllWidgetsForPage);
  app.get("/api/widget/:wgid", findWidgetById);
  app.put("/api/widget/:wgid", updateWidget);
  app.delete("/api/widget/:wgid", deleteWidget);

  function createWidget(req, res) {
    const pageId = req.params['pid'];
    const widget = req.body;
    widget._id = Math.random();
    widget.pageId = pageId;
    this.widgets.push(widget);
    res.json(widget);
  }

  function updateWidget(req, res) {
    const widgetId = req.params['wgid'];
    const widget = req.body;
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        if (this.widgets[x].widgetType === 'HEADING') {
          this.widgets[x].pageId = widget.pageId;
          this.widgets[x].size = widget.size;
          this.widgets[x].text = widget.text;
          res.json(this.widgets[x]);
        } else if (this.widgets[x].widgetType === 'IMAGE') {
          this.widgets[x].pageId = widget.pageId;
          this.widgets[x].width = widget.width;
          this.widgets[x].url = widget.url;
          res.json(this.widgets[x]);
        } else if (this.widgets[x].widgetType === 'YOUTUBE') {
          this.widgets[x].pageId = widget.pageId;
          this.widgets[x].width = widget.width;
          this.widgets[x].url = widget.url;
          res.json(this.widgets[x]);
        } else if (this.widgets[x].widgetType === 'HTML') {
          this.widgets[x].pageId = widget.pageId;
          this.widgets[x].text = widget.text;
          res.json(this.widgets[x]);
        }
      }
    }
  }

  function deleteWidget(req, res) {
    const widgetId = req.params['wgid'];
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        this.widgets.splice(x, 1);
      }
    }
  }

  function findAllWidgetsForPage(req, res) {
    const pageId = req.params['pid'];
    const result = [];
    let count  = 0;
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x].pageId === pageId) {
        result[count++] = this.widgets[x];
      }
    }
    res.json(result);
  }

  function findWidgetById(req, res) {
    const widgetId = req.params['wgid'];
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        res.json(this.widgets[x]);
      }
    }
  }

};
