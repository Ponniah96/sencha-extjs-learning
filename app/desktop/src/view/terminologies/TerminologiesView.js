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

        <section>

  <h1>Dynamics 365 Hands-on Learning Guide</h1>

  <ol>

    <!-- ====================================================== -->
    <!-- 1. Dynamics 365 Trial Version Creation -->
    <!-- ====================================================== -->
    <li>
      <h2>Dynamics 365 Trial Version Creation and URL Setup</h2>

      <ul>
        <li>
          <h3>1.1 Steps to Create Microsoft Work Account</h3>
          <ul>
            <li>Go to <strong>https://signup.microsoft.com</strong></li>
            <li>Choose <strong>Create a work account</strong></li>
            <li>Enter your email address and basic personal details</li>
            <li>Verify your email using the OTP sent by Microsoft</li>
            <li>Complete account setup and sign in</li>
          </ul>

          <img src="images/work-account-signup.png"
               alt="Microsoft Work Account Creation Screen"
               style="max-width:100%;margin-top:10px;">
        </li>

        <li>
          <h3>1.2 Steps to Create Dynamics 365 Trial Version</h3>
          <ul>
            <li>Go to <strong>https://dynamics.microsoft.com</strong></li>
            <li>Click <strong>Try for free</strong></li>
            <li>Select <strong>Dynamics 365 Sales</strong> (trial)</li>
            <li>Sign in using your Microsoft work account</li>
            <li>Wait for environment provisioning to complete</li>
          </ul>

          <img src="images/d365-trial-selection.png"
               alt="Dynamics 365 Trial Selection Screen"
               style="max-width:100%;margin-top:10px;">
        </li>

        <li>
          <h3>1.3 Steps to Get Dynamics 365 URL</h3>
          <ul>
            <li>After setup, open Dynamics 365</li>
            <li>Copy the URL from browser address bar</li>
            <li>URL format will look like:</li>
            <li>
              <code>https://orgxxxx.crm.dynamics.com</code>
            </li>
            <li>This URL will be used in Visual Studio and XrmToolBox</li>
          </ul>
        </li>
      </ul>
    </li>

    <!-- ====================================================== -->
    <!-- 2. Create Custom Tables using Dataverse -->
    <!-- ====================================================== -->
    <li>
      <h2>Create Custom Tables using Dataverse</h2>

      <ul>
        <li>
          <h3>2.1 Steps to Create Custom Table</h3>
          <ul>
            <li>Go to <strong>https://make.powerapps.com</strong></li>
            <li>Select your environment</li>
            <li>Navigate to <strong>Dataverse → Tables</strong></li>
            <li>Click <strong>New Table</strong></li>
            <li>Enter table name: <strong>Customer Feedback</strong></li>
            <li>Save the table</li>
          </ul>
        </li>

        <li>
          <h3>2.2 Steps to Create Columns</h3>
          <ul>
            <li>Add column <strong>Rating</strong> (Whole Number)</li>
            <li>Add column <strong>Feedback Comment</strong> (Multiple Lines of Text)</li>
            <li>Add column <strong>Feedback Status</strong> (Choice)</li>
            <li>Create a <strong>Global Choice</strong> with values:</li>
            <li>
              <ul>
                <li>New (1)</li>
                <li>Reviewed (2)</li>
                <li>Approved (3)</li>
                <li>Rejected (4)</li>
              </ul>
            </li>
          </ul>

          <img src="images/choice-configuration.png"
               alt="Global Choice Configuration"
               style="max-width:100%;margin-top:10px;">
        </li>

        <li>
          <h3>2.3 Steps to Modify Views and Forms</h3>
          <ul>
            <li>Open the table → Forms</li>
            <li>Edit the main form</li>
            <li>Add Rating and Feedback Status fields</li>
            <li>Save and Publish</li>
          </ul>
        </li>

        <li>
          <h3>2.4 Steps to Add Table to Power Apps Navigation</h3>
          <ul>
            <li>Open your Power App</li>
            <li>Edit site map</li>
            <li>Add Customer Feedback table</li>
            <li>Save and Publish the app</li>
          </ul>
        </li>
      </ul>
    </li>

    <!-- ====================================================== -->
    <!-- 3. Create Plugin using C# -->
    <!-- ====================================================== -->
    <li>
      <h2>Create Plugin using C#</h2>

      <ul>
        <li>
          <h3>3.1 Tools Required</h3>
          <ul>
            <li>Visual Studio 2022</li>
            <li>.NET Framework 4.7.1 Developer Pack</li>
            <li>Microsoft.CrmSdk.CoreAssemblies (NuGet)</li>
          </ul>
        </li>

        <li>
          <h3>3.2 Steps to Create Plugin Class</h3>
          <ul>
            <li>Create Class Library (.NET Framework)</li>
            <li>Implement <code>IPlugin</code> interface</li>
            <li>Write business logic in <code>Execute()</code></li>
            <li>Build the project</li>
          </ul>

<pre>
If Rating ≤ 2
→ Set Feedback Status = Reviewed
</pre>

        </li>
      </ul>
    </li>

    <!-- ====================================================== -->
    <!-- 4. Plugin Registration Tool -->
    <!-- ====================================================== -->
    <li>
      <h2>Plugin Registration using XrmToolBox</h2>

      <ul>
        <li>
          <h3>4.1 Install XrmToolBox</h3>
          <ul>
            <li>Download from https://www.xrmtoolbox.com</li>
            <li>Install and open the application</li>
          </ul>
        </li>

        <li>
          <h3>4.2 Connect XrmToolBox to Dynamics 365</h3>
          <ul>
            <li>Select <strong>Microsoft Login Control</strong></li>
            <li>Choose <strong>Office 365</strong></li>
            <li>Login using Dynamics credentials</li>
            <li>Verify connection</li>
          </ul>
        </li>

        <li>
          <h3>4.3 Register Plugin Assembly</h3>
          <ul>
            <li>Open Plugin Registration Tool</li>
            <li>Click Register → Register New Assembly</li>
            <li>Select compiled DLL</li>
            <li>Choose <strong>Sandbox</strong> mode</li>
            <li>Register assembly</li>
          </ul>
        </li>

        <li>
          <h3>4.4 Register Plugin Step</h3>
          <ul>
            <li>Message: Create</li>
            <li>Primary Entity: cr0af_customerfeedback</li>
            <li>Stage: Pre-Operation</li>
            <li>Execution Mode: Synchronous</li>
            <li>Filtering Attributes: All Attributes</li>
          </ul>
        </li>
      </ul>
    </li>

    <!-- ====================================================== -->
    <!-- 5. Execute and Verify -->
    <!-- ====================================================== -->
    <li>
      <h2>Execute Operation and Verify Results</h2>

      <ul>
        <li>Create a new Customer Feedback record</li>
        <li>Set Rating = 1 or 2</li>
        <li>Save the record</li>
        <li>Verify Feedback Status changes to <strong>Reviewed</strong></li>
        <li>Confirm plugin execution is successful</li>
      </ul>

      <img src="images/final-result.png"
           alt="Plugin Execution Result"
           style="max-width:100%;margin-top:10px;">
    </li>

  </ol>

</section>

        `,
});
