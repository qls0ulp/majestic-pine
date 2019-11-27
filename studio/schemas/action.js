export default {
    "type": "object",
    "name": "action",
    "title": "Action",
    "fields": [
        {
            "type": "string",
            "name": "label",
            "title": "Button Label",
            "description": "The text displayed inside the button",
            "validation": null
        },
        {
            "type": "string",
            "name": "url",
            "title": "URL",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "is_scrolly",
            "title": "Is Scrolly",
            "description": "Gives the button a scroll animation (if the URL is a section ID)",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "is_primary",
            "title": "Is Primary",
            "description": "Gives the button a primary color scheme",
            "validation": null
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "object"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "label"
        }
    }
}