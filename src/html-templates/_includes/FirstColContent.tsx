import React from 'react';
import CallOutWidget from './widgets/CallOutWidget';
import ContentBlock from './grid-components/ContentBlock';
import ColumnOne from './grid-components/ColumnOne';
import { AccordionWidget } from './widgets/AccordionWidget';
import { AccordionItem } from './widgets/AccordionWidget';
import { AccordionContent } from './widgets/AccordionWidget';
import { MediaContainerWidget } from './widgets/MediaContainer';
import { MediaObject } from './widgets/MediaContainer';
import { MediaInfo } from './widgets/MediaContainer';

export default function FirstColContent(): React.ReactElement {
  return (
    <ColumnOne>
      <ContentBlock>
        <h2>Welcome to [course name here]</h2>
        <blockquote>Lorem ipsum aliquet quam id dui posuere blandit</blockquote>
        <CallOutWidget></CallOutWidget>
        <p>Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.</p>
        <AccordionWidget>
          <AccordionItem>
            <h4>Accordion 1</h4>
            <AccordionContent>
              <p>Accordion content 1</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <h3>Accordion 2</h3>
            <AccordionContent>
              <p>Accordion content 2</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <h3>Accordion 3</h3>
            <AccordionContent>
              <p>Accordion content 3</p>
            </AccordionContent>
          </AccordionItem>
        </AccordionWidget>
        <blockquote>Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.</blockquote>
      </ContentBlock>
      <ContentBlock>
        <h2>Header</h2>
        <MediaContainerWidget>
          <MediaObject>
            <iframe width="560" height="315"
              src="https://www.youtube.com/embed/Dxz8GPU-E1s?wmode=opaque" title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </MediaObject>
          <MediaInfo>
            <p>This is a description of the video.</p>
          </MediaInfo>
        </MediaContainerWidget>
        <MediaContainerWidget className="reverse">
          <MediaObject>
            <iframe width="560" height="315"
              src="https://www.youtube.com/embed/Dxz8GPU-E1s?wmode=opaque" title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </MediaObject>
          <MediaInfo>
            <p>This is a description of the video.</p>
          </MediaInfo>
        </MediaContainerWidget>
        <table>
          <thead>
            <tr>
              <th>Table Header 1</th>
              <th>Table Header 2</th>
              <th>Table Header 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="#">123</a></td>
              <td>abc</td>
              <td>vcr</td>
            </tr>
            <tr>
              <td>123</td>
              <td>abc</td>
              <td>vcr</td>
            </tr>
            <tr>
              <td>123</td>
              <td>abc</td>
              <td>vcr</td>
            </tr>
            <tr>
              <td>123</td>
              <td>abc</td>
              <td>vcr</td>
            </tr>
            <tr>
              <td>123</td>
              <td>abc</td>
              <td>vcr</td>
            </tr>
            <tr>
              <td>123</td>
              <td>abc</td>
              <td>vcr</td>
            </tr>
          </tbody>
        </table>
        <p>Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.</p>
        <div className="card-horizontal">
          <div className="card-body">
            <p>Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.</p>
          </div>
          <div className="card-img">
            <figure>
              <img src="https://via.placeholder.com/500x300" alt="" />
              <figcaption>Lorem ipsum doloret cadabre.</figcaption>
            </figure>
          </div>
        </div>
      </ContentBlock>
    </ColumnOne>
  );
};