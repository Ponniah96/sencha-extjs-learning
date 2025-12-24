Ext.define("MyExtGenApp.view.terminologies.TerminologiesView", {
  xtype: "terminologiesview",
  cls: "terminologiesview",
  controller: { type: "terminologiescontroller" },
  viewModel: { type: "terminologiesviewmodel" },
  requires: [],
  extend: "Ext.Container",
  scrollable: true,
  html: `<h3>Sencha & Ext JS – Basic Terminologies</h3>

        <h4>Sencha Basics</h4>
        <ul>
            <li><b>Sencha</b> – Company that builds enterprise UI frameworks.</li>
            <li><b>Ext JS</b> – JavaScript framework for desktop-style web apps.</li>
            <li><b>Framework</b> – Structured way to build applications.</li>
            <li><b>CLI</b> – Tool to generate, build and run apps.</li>
            <li><b>Component</b> – Reusable UI building block.</li>
            <li><b>Container</b> – Component that holds other components.</li>
            <li><b>Layout</b> – Controls positioning of components.</li>
            <li><b>Event</b> – User or system action like click or change.</li>
            <li><b>Theme</b> – Controls look and feel of app.</li>
            <li><b>Build Process</b> – Converts code to production-ready output.</li>
        </ul>

        <h4>Ext JS Core Concepts</h4>
        <ul>
            <li><b>Ext Namespace</b> – Root object for all Ext JS classes.</li>
            <li><b>Ext.define</b> – Used to define classes.</li>
            <li><b>View</b> – UI layer of application.</li>
            <li><b>ViewController</b> – Handles events for a view.</li>
            <li><b>ViewModel</b> – Holds data for binding.</li>
            <li><b>MVVM</b> – Model-View-ViewModel architecture.</li>
            <li><b>Model</b> – Defines data structure.</li>
            <li><b>Store</b> – Collection of model records.</li>
            <li><b>Proxy</b> – Handles server communication.</li>
            <li><b>Grid</b> – Displays tabular data.</li>
        </ul>
        
        <hr>
        
      <h3>Prerequisites & Commands to Setup extjs community version</h3>

      <h4>Prerequisites</h4>
      <ul>
          <li>Node.js (v16) - https://nodejs.org/dist/v16.20.2/node-v16.20.2-x64.msi</li>
          <li>npm query string - npm install querystring --save-dev</li>
          <li>Java Development Kit (JDK) (v8 or higher) - https://adoptium.net/temurin/releases/?version=8 </li>
          <li>Get Sencha Extjs Community Version credentials from official website. (Fill all the detials in the form and get credentials(username & password) through registered email)</li>
          <li>Git (for version control)</li>
      </ul>

      <h4>Commands to Setup extjs community version <a href="https://www.youtube.com/watch?v=5_qyVJhNzfw" target="_blank"> (Reference Link)</a> </h4>
      <ul>
          <li>npm login --registry=https://sencha.myget.org/F/community/npm/ --scope=@sencha</li>
          <li>Enter the credentials(username & password) received on registered email.</li>
          <li>npm install -g @sencha/ext-gen</li>
          <li>cd C:\path\to\your\projects\folder</li>
          <li>ext-gen app -i</li>
      </ul>

      <hr>

      <h3>GitHub Commands to Host application on GitHub Pages</h3>

      <h4>GitHub Push Commands</h4>
        <ul>
            <li>git init</li>
            <li>git add .</li>
            <li>git commit -m "Initial commit"</li>
            <li>git branch -M main</li>
            <li>git remote add origin https://github.com/username/repository.git</li>
            <li>git push -u origin main</li>
        </ul>
        <h4>GitHub Pages Setup</h4>
        <ul>
            <li>in app.json file, set the "baseUrl" property to "/repository-name/"</li>
            <li>git run build:desktop</li>
            <li>In index.html change  'base href="/sencha-extjs-learning/"'</li>
            <li>comit changes and push to GitHub</li>
            <li>Go to your repository on GitHub.</li>
            <li>Click on the "Settings" tab.</li>
            <li>In the left sidebar, click on "Pages".</li>
            <li>Under "Source", select the branch you want to use (e.g., main) and the folder (e.g., /root or /docs).</li>
            <li>Click "Save".</li>
            <li>Your site will be published at https://username.github.io/repository/</li>
        </ul>

        `,
});
