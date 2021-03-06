define({ "api": [
  {
    "type": "post",
    "url": "/",
    "title": "",
    "name": "GetUser",
    "group": "Test__apiGroup",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "apidoc/views.py",
    "groupTitle": "Test__apiGroup",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000/index/"
      }
    ]
  }
] });
