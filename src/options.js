export const options = {
  "main": {
    "name": "Main settings", // tab name
    "options": [
      {
        "name": "role", // option attr name
        "value": [
          "shop_manager"
        ], // defalut option value
        "title": "Who can manage", // option title
        "description": "Who can manage", // option description
        "type": "select", // option type
        "multiple": true,
        "order": 10, // option sort order
        "values": [ // select values
          {
            "label": "Shop Manager",
            "value": "shop_manager"
          },
          {
            "label": "Translator",
            "value": "translator"
          },
          {
            "label": "Customer",
            "value": "customer"
          },
          {
            "label": "Subscriber",
            "value": "subscriber"
          },
          {
            "label": "Editor",
            "value": "editor"
          }
        ],
      },
      {
        "name": "cur",
        "value": "$",
        "title": "Currency",
        "description": "Description here",
        "type": "text", // input type text
        "multiple": false,
        "order": 30,
      },
      {
        "name": "time",
        "value": 1,
        "title": "AM/PM time Format",
        "description": "AM/PM time Format",
        "type": "checkbox", // input type checkbox
        "multiple": false,
        "order": 20,
        "values": [
          {
            "label": "",
            "value": false
          }
        ]
      },
    ]
  },
  "email": {
    "name": "Email",  // tab name
    "options": [
      {
        "name": "", // option attr name - empty for switch
        "value": "", // option attr value - empty for switch
        "title": "Shortcodes", // option title
        "description": "description for this", // option description 
        "type": "switch", // option view type bootstrap switch
        "multiple": true,
        "order": 40, // sort order
        "values": [
          {
            "label": "New booking", // switch label
            "name": "e_new", // switch name
            "value": "", // switch value
			      "options" : [ // these options appear and can be edited if this switch is enabled
							{
								"name" : "e_new_title",
								"value" : "",
								"title" : "",
								"description" : "",
								"type" : "text",
								"multiple" : false,
								"order" : 10,
							},
							{
								"name" : "e_new_template",
								"value" : "",
								"title" : "",
								"description" : "",
								"type" : "editor",
								"multiple" : false,
								"order" : 20,
							}
					  ]
          },
          {
            "label": "Reminder", // switch label
            "name": "e_rem", // switch name
            "value": 1, // switch value
			      "options" : [
							{
								"name" : "e_rem_title",
								"value" : "Reminder Title",
								"title" : "",
								"description" : "",
								"type" : "text",
								"multiple" : false,
								"order" : 10,
							},
							{
								"name" : "e_rem_template",
								"value" : "<p>Hello <strong>world!</strong></p>",
								"title" : "",
								"description" : "",
								"type" : "editor",
								"multiple" : false,
								"order" : 20,
							}
					  ]
          },
          {
            "label": "Register", // switch label
            "name": "e_reg", // switch name
            "value": "", // switch value
			      "options" : [
							{
								"name" : "e_reg_title",
								"value" : "",
								"title" : "",
								"description" : "",
								"type" : "text",
								"multiple" : false,
								"order" : 10,
							},
							{
								"name" : "e_reg_template",
								"value" : "",
								"title" : "",
								"description" : "",
								"type" : "editor",
								"multiple" : false,
								"order" : 20,
							}
					  ]
          }
        ]
      }
    ]
  },
}