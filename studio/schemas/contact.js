export default {
    "type": "object",
    "name": "contact",
    "title": "Contact Section",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The bold text displayed at the top of the section (Also used by the CMS, even if no title is displayed in the section)",
            "initialValue": "Contact Section",
            "validation": Rule => Rule.required()
        },
        {
            "type": "markdown",
            "name": "text",
            "title": "Section Text",
            "description": "The text displayed below the section title",
            "validation": null
        },
        {
            "type": "string",
            "name": "section_id",
            "title": "Section Id",
            "initialValue": "three",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "background_style",
            "title": "Background Style",
            "description": "The color scheme used for the section",
            "initialValue": "style1",
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
            "type": "array",
            "name": "contact_list",
            "title": "Contact Methods",
            "description": "A list of contact methods",
            "validation": null,
            "of": [
                {
                    "type": "object",
                    "fields": [
                        {
                            "type": "string",
                            "name": "title",
                            "title": "Contact method title",
                            "validation": Rule => Rule.required()
                        },
                        {
                            "type": "text",
                            "name": "text",
                            "title": "Content Method Text",
                            "description": "The text displayed below the contact method title",
                            "validation": null
                        },
                        {
                            "type": "string",
                            "name": "url",
                            "title": "URL",
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
        },
        {
            "type": "object",
            "name": "social",
            "title": "Social Media",
            "validation": null,
            "fields": [
                {
                    "type": "string",
                    "name": "title",
                    "title": "Social Media Section Title",
                    "validation": null
                },
                {
                    "type": "array",
                    "name": "social_icons",
                    "title": "Social Icons",
                    "description": "A list of social media",
                    "validation": null,
                    "of": [
                        {
                            "type": "object",
                            "fields": [
                                {
                                    "type": "string",
                                    "name": "title",
                                    "title": "Icon Title",
                                    "validation": null
                                },
                                {
                                    "type": "string",
                                    "name": "icon",
                                    "title": "Icon",
                                    "description": "Font Awesome icon",
                                    "validation": null
                                },
                                {
                                    "type": "string",
                                    "name": "url",
                                    "title": "URL",
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
            "type": "string",
            "name": "component",
            "title": "Component",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "Contact"
                ]
            }
        },
        {
            "type": "string",
            "name": "type",
            "title": "Reference Type Name",
            "description": "Name of the Stackbit object model, used by fields of type reference",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "contact"
                ]
            }
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