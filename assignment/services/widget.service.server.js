module.exports = function (app) {

  const widgetModel = require("../model/widget/widget.model.server.js");
  const pageModel = require("../model/page/page.model.server.js");

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

  app.put("/api/page/:pid/widget/", sortWidgets);
  app.post("/api/page/:pid/widget", createWidget);
  app.get("/api/page/:pid/widget", findAllWidgetsForPage);
  app.get("/api/widget/:wgid", findWidgetById);
  app.put("/api/widget/:wgid", updateWidget);
  app.delete("/api/widget/:wgid", deleteWidget);

  const multer = require('multer'); // npm install multer --save
  const upload = multer({ dest: __dirname+'/../../public/uploads' });

  app.post ("/api/upload", upload.single('myFile'), uploadImage);


  function createWidget(req, res) {
    const pageId = req.params['pid'];
    const widget = req.body;
    widget._page = pageId;
    delete widget._id;
    widgetModel
      .createWidget(pageId,widget)
      .then(function (widget) {
        pageModel
          .findPageById(pageId)
          .then(function(page){
            page.widgets.push(widget);
            pageModel
              .updatePage({_id: pageId},page)
              .then(function(){
                res.json(widget);
              });
          });
      });
    // widget._id = Math.random();
    // widget.pageId = pageId;
    // this.widgets.push(widget);
    // res.json(widget);
  }

  function sortWidgets(req, res) {
    const pageId = req.params['pid'];
    const start = req.query['start'];
    const end = req.query['end'];
    pageModel
      .findPageById(pageId)
      .then(function(page){
        let widgetArr = page.widgets;
        widgetArr.splice(end, 0, widgetArr.splice(start, 1)[0]);
        page.widgets = widgetArr;
        pageModel
          .updatePage({_id: pageId},page)
          .then(function(page){
            res.json(page);
          });
      });
  }

  function updateWidget(req, res) {
    const widgetId = req.params['wgid'];
    const widget = req.body;
    widgetModel
      .updateWidget(widgetId, widget)
      .then(function (widget) {
        res.json(widget);
      });
    // for (let x = 0; x < this.widgets.length; x++) {
    //   if (this.widgets[x]._id === widgetId) {
    //     if (this.widgets[x].widgetType === 'HEADING') {
    //       this.widgets[x].pageId = widget.pageId;
    //       this.widgets[x].size = widget.size;
    //       this.widgets[x].text = widget.text;
    //       res.json(this.widgets[x]);
    //     } else if (this.widgets[x].widgetType === 'IMAGE') {
    //       this.widgets[x].pageId = widget.pageId;
    //       this.widgets[x].width = widget.width;
    //       this.widgets[x].url = widget.url;
    //       res.json(this.widgets[x]);
    //     } else if (this.widgets[x].widgetType === 'YOUTUBE') {
    //       this.widgets[x].pageId = widget.pageId;
    //       this.widgets[x].width = widget.width;
    //       this.widgets[x].url = widget.url;
    //       res.json(this.widgets[x]);
    //     } else if (this.widgets[x].widgetType === 'HTML') {
    //       this.widgets[x].pageId = widget.pageId;
    //       this.widgets[x].text = widget.text;
    //       res.json(this.widgets[x]);
    //     }
    //   }
    // }
  }

  function deleteWidget(req, res) {
    const widgetId = req.params['wgid'];
    widgetModel
      .deleteWidget(widgetId)
      .then(function () {
        res.json();
      });
    // for (let x = 0; x < this.widgets.length; x++) {
    //   if (this.widgets[x]._id === widgetId) {
    //     this.widgets.splice(x, 1);
    //   }
    // }
  }

  function findAllWidgetsForPage(req, res) {
     const pageId = req.params['pid'];
    // pageModel
    //   .findPageById(pageId)
    //   .then(function(page) {
    //     let semi = page.widgets;
    //     let widgets = [];
    //     for (let x = 0; x < semi.length; x++) {
    //       widgetModel
    //         .findWidgetById(semi[x]._id)
    //         .then(function (widget) {
    //           widgets.push(widget);
    //           if(x === semi.length-1) {
    //             res.json(widgets);
    //           }
    //         });
    //     }
    //   });
    widgetModel
      .findAllWidgetsForPage(pageId)
      .then(function (widgets) {
        res.json(widgets);
      });
    // const result = [];
    // let count  = 0;
    // for (let x = 0; x < this.widgets.length; x++) {
    //   if (this.widgets[x].pageId === pageId) {
    //     result[count++] = this.widgets[x];
    //   }
    // }
    // res.json(result);
  }

  function findWidgetById(req, res) {
    const widgetId = req.params['wgid'];
    widgetModel
      .findWidgetById(widgetId)
      .then(function (widget) {
        res.json(widget);
      });
    // for (let x = 0; x < this.widgets.length; x++) {
    //   if (this.widgets[x]._id === widgetId) {
    //     res.json(this.widgets[x]);
    //   }
    // }
  }

  function uploadImage(req, res) {
    const widgetId      = req.body.widgetId;
    const width         = req.body.width;
    const myFile        = req.file;

    const userId = req.body.userId;
    const websiteId = req.body.websiteId;
    const pageId = req.body.pageId;

    const originalname  = myFile.originalname; // file name on user's computer
    const filename      = myFile.filename;     // new file name in upload folder
    const path          = myFile.path;         // full path of uploaded file
    const destination   = myFile.destination;  // folder where file is saved to
    const size          = myFile.size;
    const mimetype      = myFile.mimetype;

    widgetModel
      .findWidgetById(widgetId)
      .then(function(widget) {
        widget.widgetType = 'IMAGE';
        widget.url = '/uploads/'+filename;
        widgetModel
          .updateWidget(widget)
          .then(function(widget) {
            const callbackUrl = "/assignment/#/user/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget";
            res.redirect(callbackUrl);
          })
      });
  }

};
