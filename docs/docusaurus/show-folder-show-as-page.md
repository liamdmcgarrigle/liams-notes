---
sidebar_position: 7
title: Show Folder as Page When Clicked
description: How to make a page show when a folder is clicked on the sidebar
---
## Why
The default behavior of a folder in the sidebar is to just act as a container for the documents. Meaning if you click on the folder the current page is not navigated.

While it is not always thought about, and not always desired, sometimes the desired outcome would be to navigate to a specific page when a folder is clicked, such as an overview of the topic covered in the folder.

This effect is easily achieved using the `_category_.json` file within the folder. 
## How

In the `_category_.json` file, add the highlighted lines to the JSON.  

```json
{
    "position": 2,
    "label": "Example Name",
    "collapsible": true,
    "collapsed": false,
    // highlight-start
    "link": {
        "type": "doc",
        "id": "folder/sub-folder/example-doc"
    },
    // highlight-end
    "customProps": {
        "description": "This description is an example"
    }
}
```

The `link` key in the JSON affects this behavior. The `type` of `doc` tells the navigation we want to navigate to a doc. The `id` key is looking for the doc to navigate to. In this case, it would be `"folder/sub-folder/example-doc"`. 

In the ids, you want to think of the "docs" folder as the root and include all folders and subfolders the doc is within. In this case, the path would have been `docs/folder/sub-folder/example-doc` and in the id, we put `folder/sub-folder/example-doc`.

