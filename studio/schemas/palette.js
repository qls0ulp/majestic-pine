export default {
    "type": "object",
    "name": "palette",
    "title": "Palette",
    "fields": [
        {
            "type": "object",
            "name": "sass",
            "title": "SASS",
            "validation": null,
            "fields": [
                {
                    "type": "color",
                    "name": "bg",
                    "title": "BG",
                    "validation": null,
                    "options": {
                        "disableAlpha": true
                    }
                },
                {
                    "type": "color",
                    "name": "accent1",
                    "title": "Accent1",
                    "validation": null,
                    "options": {
                        "disableAlpha": true
                    }
                },
                {
                    "type": "color",
                    "name": "accent2",
                    "title": "Accent2",
                    "validation": null,
                    "options": {
                        "disableAlpha": true
                    }
                },
                {
                    "type": "color",
                    "name": "accent3",
                    "title": "Accent3",
                    "validation": null,
                    "options": {
                        "disableAlpha": true
                    }
                }
            ]
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
    ]
}