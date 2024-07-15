# Tables

Use the *Tabs Widget* to organize and separate related information into their own individual tabs. Best used when there are multiple tabs.

## HTML

Use `<tabs-widget>` tag to wrap your entire tab widget. 

Use `<tab-item>` tag to wrap each tab.

Use `<tab-title>` tag to add the text of the clickable space of the tab.

Use `<tab-content>` [content inside] `</tab-content>` to edit what appears inside the tab.


### Important Considerations

1. Follow the structure of the HTML for the tabs. This means adding the HTML tags in the example, in the correct order. 
2. Only use the tabs widget when you are using more than 2 tabs. Tabs widgets with one tab are not best practice.

## Example

```html
            <tabs-widget>
        <tab-item>
          <tab-title>Tab Title 1</tab-title>
        <tab-content>
          <h4>Tab 1 Heading Inside</h4>
          <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as
            short as a couple of sentences.</p>
          </tab-content>
        </tab-item>
        <tab-item>        
            <tab-title>Tab Title 2</tab-title>
          <tab-content>
            <h4>Tab 2 Heading Inside</h4>
            <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as
              short as a couple of sentences.</p>
          </tab-content>
        </tab-item>
      </tabs-widget>
```