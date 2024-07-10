# Tables

Use the *Tabs Widget* to organize and separate related information into their own individual tabs. Best used when there are multiple tabs.

## HTML

Use `<tabs-widget>` tag to wrap your entire tab widget. 

Use `<tab-title>` tab located inside the `<label>` tag to add the title text of the tabs.

Use `<tab-content>` [content inside] `</tab-content>` to edit what appears inside the tabs.


### Important Considerations

1. Follow the structure of the HTML for the tabs. This means adding the HTML tags in the example, in the correct order. 
2. Verify that you have a "hide" tab at the end of the group of tabs.

## Example

```html
      <tabs-widget>
        <input />
        <label>
          <tab-title>Tab Title 1</tab-title>
        </label>
        <tab-content>
          <h4>Tab 1 Heading Inside</h4>
          <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as
            short as a couple of sentences.</p>
        </tab-content>
        <input />
        <label>
          <tab-title>Tab Title 2</tab-title>
        </label>
        <tab-content>
          <h4>Tab 2 Heading Inside</h4>
          <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as
            short as a couple of sentences.</p>
        </tab-content>
        <input />
        <label>
          <tab-title>Hide</tab-title>
        </label>
        <tab-content></tab-content>
      </tabs-widget>
```