export default {
    "type": "object",
    "name": "section",
    "title": "section",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Section Title",
            "description": "The bold text displayed at the top of the section (Also used by the CMS, even if no title is displayed in the section)",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "section_id",
            "title": "Section ID",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "background_style",
            "title": "Background Style",
            "description": "The color scheme used for the section",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "style1",
                    "style2",
                    "style3",
                    "style4"
                ]
            }
        },
        {
            "type": "string",
            "name": "component",
            "title": "Section Component",
            "hidden": true,
            "validation": Rule => Rule.required()
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
            "title": "title"
        }
    }
}