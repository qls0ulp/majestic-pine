export default {
    "type": "document",
    "name": "page",
    "title": "page",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Page Title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "image",
            "name": "content_img_path",
            "title": "Content Image",
            "description": "The image displayed in the content section of the page",
            "validation": null
        },
        {
            "type": "object",
            "name": "home_spotlights",
            "title": "Home Spotlights",
            "validation": null,
            "fields": [
                {
                    "type": "boolean",
                    "name": "enabled",
                    "title": "enabled",
                    "description": "If the page is desplayed in the home spotlights section",
                    "validation": null
                },
                {
                    "type": "number",
                    "name": "weight",
                    "title": "Home Spotlight Index",
                    "description": "The index of the page in the home spotlight",
                    "validation": Rule => Rule.integer()
                },
                {
                    "type": "markdown",
                    "name": "excerpt",
                    "title": "Page Excerpt",
                    "description": "The text displayed in the home spotlight",
                    "validation": null
                },
                {
                    "type": "object",
                    "name": "home_img",
                    "title": "Home Spotlight Image",
                    "description": "The image displayed in the home spotlight",
                    "validation": null,
                    "fields": [
                        {
                            "type": "image",
                            "name": "path",
                            "title": "image",
                            "validation": null
                        },
                        {
                            "type": "string",
                            "name": "data_position",
                            "title": "Image Data Position",
                            "description": "Controls the place of the image in its container (bottom left, top right, center center, etc.)",
                            "initialValue": "top center",
                            "validation": null
                        },
                        {
                            "type": "string",
                            "name": "url",
                            "title": "URL",
                            "validation": null
                        }
                    ]
                }
            ]
        },
        {
            "type": "page_menus",
            "name": "menus",
            "title": "page Menus",
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
                    "page"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "page URL Path",
            "description": "The URL path of this page relative to site root. For example, the site root page would be \"/\", and post page would be \"posts/new-post/\"",
            "validation": Rule => Rule.required()
        },
        {
            "type": "markdown",
            "name": "content",
            "title": "Content",
            "description": "Page content",
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
                    "page"
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