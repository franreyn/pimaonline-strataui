import React from 'react';
import CallOutWidget from './widgets/CallOutWidget';
import ContentBlock from './grid-components/ContentBlock';
import ColumnOne from './grid-components/ColumnOne';
import { AccordionWidget } from './widgets/AccordionWidget';
import { AccordionItem } from './widgets/AccordionWidget';
import { AccordionContent } from './widgets/AccordionWidget';
import { MediaWidget } from './widgets/MediaWidget';
import { MediaObject } from './widgets/MediaWidget';
import { MediaInfo } from './widgets/MediaWidget';

export default function FirstColContent(): React.ReactElement {
  return (
    <ColumnOne>
      <ContentBlock>
        <h2>Module 1 Overview</h2>
        <blockquote>
          <p>The scariest moment is always just before you start.</p>
          <p>- Stephen King</p>
        </blockquote>
        <CallOutWidget></CallOutWidget>
        <p>In Module One, you will delve into the foundations of rhetoric and rhetorical analysis with a specific focus on its application in the health professions. Rhetoric, in the context of healthcare, plays a crucial role in effective communication, persuasion, and the delivery of impactful messages.</p>
        <p>Simply put, rhetorical analysis is the process of breaking down an argument and evaluating its effectiveness.</p>
        <p>The development of rhetoric is credited to Aristotle (384-322 BC), a Greek philosopher, who described it in his book The Rhetoric. The ancient Greeks considered rhetoric (the art of effective persuasion) to be an essential skill for any leader, and it has been studied all over the world since then. America's founding fathers studied rhetoric and used its principles in writing the Constitution. Today's business leaders, social media influencers, politicians, marketers, and professional speakers all use rhetoric.</p>
        <p>Studying rhetoric will provide you with some practical tools to help you convince your audience, recognize the way other people shape their arguments, and, as a more philosophical benefit, help you gain a new perspective on the human condition.</p>
        <AccordionWidget>
          <AccordionItem>
            <h3>Module Learning Objectives</h3>
            <AccordionContent>
              <p>After successful completion of the module, the student will be able to:</p>
              <ul>
                <li>Identify concepts and terms needed for rhetorical analysis</li>
                <li>Identify rhetorical appeals in an ad</li>
                <li>Evaluate persuasiveness of ads based on ethos, pathos and logos</li>
                <li>Prewrite a rhetorical analysis essay, including the thesis statement</li>
                <li>Analyze each other's writing for the application of ethos, pathos, and logos in peer reviews</li>
                <li>Write a draft of a rhetorical analysis essay</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <h3>Required Readings</h3>
            <AccordionContent>
              <ul>
                <li>Why It Matters: Analysis and Synthesis</li>
                <li>Why It Matters: The Writing Process</li>
                <li>What Is Analysis?</li>
                <li>Introduction to the Keys to Successful Analysis</li>
                <li>Introduction to Types of Analysis</li>
                <li>Introduction to Rhetorical Appeals</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </AccordionWidget>
        <blockquote>
          <p>The ability of writers to imagine what is not the self, to familiarize the strange and mystify the familiar, is the test of their power.</p>
          <p>- Toni Morrison</p>
        </blockquote>
      </ContentBlock>
      <ContentBlock>
        <h2>Videos</h2>
        <MediaWidget>
          <MediaObject>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/3klMM9BkW5o?si=uM-RJ4PpzoNrv5lK" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </MediaObject>
          <MediaInfo>
            <p>How to Use Rhetoric to Get What You Want</p>
          </MediaInfo>
        </MediaWidget>
        <MediaWidget className="reverse">
          <MediaObject>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/oTlOa409BAY?si=s71diVzSvz09WDIO" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </MediaObject>
          <MediaInfo>
            <p>Answer These Questions to Identify Your Own Culture</p>
          </MediaInfo>
        </MediaWidget>
        <table>
          <thead>
            <tr>
              <th>Assignment</th>
              <th>Points</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="#">Module 1 Interactive Readings</a></td>
              <td>0</td>
              <td>TBD</td>
            </tr>
            <tr>
              <td>Reading Review Activity 1: Rhetorical Analysis</td>
              <td>15</td>
              <td>TBD</td>
            </tr>
            <tr>
              <td>Discussion 1A: Ad Analysis</td>
              <td>20</td>
              <td>TBD</td>
            </tr>
            <tr>
              <td>Discussion 1B: Rhetorical Analysis Thesis/Outline</td>
              <td>30</td>
              <td>TBD</td>
            </tr>
            <tr>
              <td>Assignment 1: Rhetorical Analysis Draft</td>
              <td>10</td>
              <td>TBD</td>
            </tr>
          </tbody>
        </table>
      </ContentBlock>
      <ContentBlock>
        <div className="card-horizontal">
          <div className="card-body">
            <p>The writing skills that you learn in this class will not only help you be a better academic writer. These skills can be used in your daily life to make your communication more grounded in logic and reasoning. These ideas date back to Aristotle, but their use and validity extends to present day.</p>
          </div>
          <div className="card-img">
            <figure>
              <img src="https://via.placeholder.com/500x300" alt="" />
              <figcaption>This is an image caption.</figcaption>
            </figure>
          </div>
        </div>
      </ContentBlock>
    </ColumnOne>
  );
};