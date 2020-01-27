import React from "react";
import about from "../../img/about.svg";
import { Layout } from "./Layout";

export const AboutPage = () => {
  return (
    <Layout>
      <img src={about} alt="sobre" className="static-page-img" />
      <h2>About Reactgram</h2>
      <p>
        React is the most popular frontend library on the market. Built by Facebook, it is based on functional components which 
        are updated automatically when a state update occurs. Designed around a declarative architecture, components 
        created in React are much easier to build, debug and maintain.
      </p>
      <p>
        Focused on real world practices, this course will teach you how to build powerful web applications that are fast and reliable.
      </p>
      <p>
        We will build together an <strong>instagram clone for web totally from scratch</strong> where we will post pictures, 
        search for friends, sign-up, sign-in, update profile, follow and unfollow people and much more. 
        During this course we will learn the most important concepts behind React and how to implement them.
      </p>

      <h2><a href="https://book.reactgram.dev" style={{textDecoration: 'underline'}}>Read the book for FREE here.</a></h2>

      <div style={{display: 'grid', gridTemplateColumns: 'auto auto'}}>
        <div>
          <h3>Basic</h3>
          <ul>
            <li>Basic Tooling</li>
            <li>Hello World in React</li>
            <li>Intro do JSX</li>
            <li>Rendering Elements</li>
            <li>React Components and Props</li>
            <li>Component Lifecycle</li>
            <li>State Management</li>
            <li>State and Props</li>
            <li>Conditional Rendering</li>
            <li>Events in React</li>
            <li>Rendering Lists</li>
            <li>Using Forms</li>
          </ul>
        </div>

        <div>
          <h3>Advanced</h3>
          <ul>
            <li>Container Components</li>
            <li>Managing Routes</li>
            <li>Calling JSON APIs</li>
            <li>User Authentication</li>
            <li>Functional Components</li>
            <li>High-Order Components</li>
            <li>Context API</li>
            <li>React Hooks</li>
            <li>using CSS and SCSS</li>
            <li>Animations with React-Spring</li>
            <li>Production Build</li>
            <li>Deploy to the Cloud</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};
