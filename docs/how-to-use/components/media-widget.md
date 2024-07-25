# Media Widget

A responsive wrapper that holds all media content such as videos, iframe or interactive embedded items.

## HTML

To use the media widget, ensure you have the following structure. 

1. `<media-widget>` - wrapper around the media content and media info
2. `<media-object>` - wrapper around the media content
3. `<iframe>` - embedded content
4. `<media-info>` - Optional - container that holds the text content that describes the media.

```html
  <media-widget>
    <media-object>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Dxz8GPU-E1s?wmode=opaque"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    </media-object>
    <media-info>
      <p>This is a description of the video</p>
    </media-info>
  </media-widget>
```

### Reverse Media Info 

You can use the `.reverse` class on the `<media-widget>` tag to make the `<media-info>` content appear before the video instead of at the bottom after the video

```html
 <media-widget class="reverse" >
 </media-widget>
```