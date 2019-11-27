export default {
    "type": "document",
    "name": "home",
    "title": "Home",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Page Title",
            "description": "The title of the page",
            "validation": Rule => Rule.required()
        },
        {
            "type": "object",
            "name": "sidebar",
            "title": "Page Sidebar",
            "validation": null,
            "fields": [
                {
                    "type": "array",
                    "name": "entries",
                    "title": "Sidebar Entries",
                    "description": "The links displayed in the page sidebar",
                    "validation": null,
                    "of": [
                        {
                            "type": "object",
                            "fields": [
                                {
                                    "type": "string",
                                    "name": "title",
                                    "title": "Title",
                                    "description": "The title displayed in the page sidebar",
                                    "validation": null
                                },
                                {
                                    "type": "string",
                                    "name": "url",
                                    "title": "URL",
                                    "description": "the URL (/generic, or /feugiat ...), or section ID (like #intro or #one ...) of the sidebar entry",
                                    "validation": null
                                },
                                {
                                    "type": "boolean",
                                    "name": "is_primary",
                                    "title": "Is Primary",
                                    "description": "Underlines the Sidebar entry initially. note: only one entry can be highlighted at a time, so the first entry with this set will be selected",
                                    "validation": null
                                }
                            ],
                            "preview": {
                                "select": {
                                    "title": "title"
                                }
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "array",
            "name": "sections",
            "title": "Sections",
            "description": "Home sections",
            "validation": null,
            "of": [
                {
                    "type": "intro"
                },
                {
                    "type": "spotlights"
                },
                {
                    "type": "features"
                },
                {
                    "type": "contact"
                }
            ]
        },
        {
            "type": "page_menus",
            "name": "menus",
            "title": "Home Menus",
            "description": "Which menus should this page show up in",
            "validation": null
        },
        {
            "type": "string",
            "name": "template",
            "title": "Template",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "home"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "Home URL Path",
            "description": "The URL path of this page relative to site root. For example, the site root page would be \"/\", and post page would be \"posts/new-post/\"",
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
                    "page"
                ]
            }
        }
    ],
    "singleInstance": true,
    "preview": {
        "select": {
            "title": "title"
        }
    }
}