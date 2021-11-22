(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8771],{50090:function(e,t,o){"use strict";o.r(t),o.d(t,{_frontmatter:function(){return d},default:function(){return l}});var a=o(22122),n=o(19756),i=(o(15007),o(64983)),r=o(99536),s=["components"],d={},c={_frontmatter:d},p=r.Z;function l(e){var t=e.components,o=(0,n.Z)(e,s);return(0,i.mdx)(p,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"services-overview"},"Services overview"),(0,i.mdx)("p",null,"After creating a project, it is time to begin adding services. These services include accessing Adobe APIs, adding events, and enabling Runtime."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Note:")," For information on building a Plugin, please visit the ",(0,i.mdx)("a",{parentName:"p",href:"../plugins/index.md"},"plugins overview")," for a complete guide to creating, updating, and distributing plugins."),(0,i.mdx)("h2",{id:"add-a-service"},"Add a service"),(0,i.mdx)("p",null,"Adding services to an empty project is the same whether you are working in a personal or enterprise project. Adding services to a templated project is similar, with one small variation: services are added to individual workspaces, not to the project as a whole."),(0,i.mdx)("p",null,"To begin adding a service from within a templated project, first select the appropriate workspace to open the ",(0,i.mdx)("strong",{parentName:"p"},"Workspace overview"),". Then, select ",(0,i.mdx)("strong",{parentName:"p"},"+ Add Service")," in the left navigation and choose the service you wish to add from the dropdown. "),(0,i.mdx)("p",null,"In an empty project, select ",(0,i.mdx)("strong",{parentName:"p"},"+ Add to Project")," in the left navigation of the ",(0,i.mdx)("strong",{parentName:"p"},"Project overview")," or select from the quick start buttons."),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobe-dev-console/static/c9f4046562e2bea87423079a5abc586f/cb523/services-add-to-project.webp 320w","/adobe-dev-console/static/c9f4046562e2bea87423079a5abc586f/797b9/services-add-to-project.webp 640w","/adobe-dev-console/static/c9f4046562e2bea87423079a5abc586f/4b075/services-add-to-project.webp 1280w","/adobe-dev-console/static/c9f4046562e2bea87423079a5abc586f/b6811/services-add-to-project.webp 1366w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobe-dev-console/static/c9f4046562e2bea87423079a5abc586f/72799/services-add-to-project.png 320w","/adobe-dev-console/static/c9f4046562e2bea87423079a5abc586f/6af66/services-add-to-project.png 640w","/adobe-dev-console/static/c9f4046562e2bea87423079a5abc586f/21b4d/services-add-to-project.png 1280w","/adobe-dev-console/static/c9f4046562e2bea87423079a5abc586f/ad00e/services-add-to-project.png 1366w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-dev-console/static/c9f4046562e2bea87423079a5abc586f/21b4d/services-add-to-project.png",alt:"services add to project",title:"services add to project",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("h2",{id:"service-specific-workflows"},"Service-specific workflows"),(0,i.mdx)("p",null,"To follow a specific workflow for adding each type of service, please select from the following guides:"),(0,i.mdx)("h3",{id:"add-api"},"Add API"),(0,i.mdx)("p",null,"Using APIs allows your application to makes call to Adobe services by means of a REST API."),(0,i.mdx)("p",null,"Access to some APIs is based on licenses. Meaning either the licenses your company holds or your personal licenses if you are building a personal project. Due to this you may not have access to every API that you wish to use."),(0,i.mdx)("p",null,"APIs can be connected to your app in multiple ways, depending on the API or the type of app that you are building. Occasionally APIs will provide multiple connection options, allowing you to choose the type of connection that works best for your application. To learn more about each of these authentication methods or API connections, read the ",(0,i.mdx)("a",{parentName:"p",href:"../authentication/index.md"},"authentication documentation"),"."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"services-add-api-jwt.md"},"Add an API using Service Account (JWT) authentication")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"services-add-api-oauth.md"},"Add an API using OAuth authentication")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"services-add-api-key.md"},"Add an API using API Key authentication"))),(0,i.mdx)("h3",{id:"add-event"},"Add Event"),(0,i.mdx)("p",null,"Adobe I/O Events allow you to receive notifications of real-time events taking place in Adobe services. To add this service to your project you must register a webhook, to which Adobe I/O Events sends HTTP POST requests containing the details of each event. Using Events, you can build event-driven applications that integrate with Adobe. To learn more about Adobe I/O Events, read the ",(0,i.mdx)("a",{parentName:"p",href:"https://www.adobe.com/go/devs_events"},"Events documentation"),"."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"services-add-event.md"},"Add Event registration to your project or workspace"))),(0,i.mdx)("h3",{id:"enable-runtime"},"Enable Runtime"),(0,i.mdx)("p",null,"Adobe I/O Runtime is Adobe’s serverless computing platform. Runtime enables you to execute functions from the cloud without deploying or configuring a server. This ability provides a flexible, on-demand computing resource that lets you easily access Adobe content, data, and services, orchestrate custom workflows, and respond to events from Adobe I/O Events to create powerful event-driven applications. For more information about Adobe I/O Runtime, read the ",(0,i.mdx)("a",{parentName:"p",href:"https://www.adobe.com/go/devs_runtime"},"Runtime documentation"),"."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Note:")," Adobe I/O Runtime requires a license. Please contact your Adobe sales representative for more details."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"services-enable-runtime.md"},"Enable Runtime for your project or workspace"))),(0,i.mdx)("h2",{id:"remove-a-service"},"Remove a service"),(0,i.mdx)("p",null,"Occasionally you may need to remove a service once it has been added to your project or workspace. This can be done from within the project overview or workspace overview by selecting the service that you wish to remove. Please use the links above to access documentation specific to the type of service that you have added to your project (API or events), as this documentation also includes screenshots and instructions for removing the service."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Note:")," Currently you cannot delete Runtime once it has been enabled for a project or workspace. If you no longer required Runtime, please create a new project and do not enable Runtime."),(0,i.mdx)("h2",{id:"credentials"},"Credentials"),(0,i.mdx)("p",null,"Once you have successfully added APIs to your project or workspace, you can return to the ",(0,i.mdx)("strong",{parentName:"p"},"Project overview")," (or ",(0,i.mdx)("strong",{parentName:"p"},"Workspace overview")," in a templated project) at any time to view the details for that API and any other project services you may have added. You can select the specific API from the left navigation to view its details or remove the API using the ",(0,i.mdx)("strong",{parentName:"p"},"Remove API")," button in the top-right corner."),(0,i.mdx)("p",null,"You can also select the specific credential type from the left navigation to view the ",(0,i.mdx)("strong",{parentName:"p"},"Credential details")," and perform other actions (generate JWT tokens, copy credential details, retrieve client secrets, etc.) as needed. For more information on accessing credentials, please read the ",(0,i.mdx)("a",{parentName:"p",href:"../credentials.md"},"credentials overview"),"."),(0,i.mdx)("p",null,"To view credentials for events, select the specific event registration from the left navigation and select the ",(0,i.mdx)("strong",{parentName:"p"},"Credentials")," tab. For more information on working with events, including viewing event credentials, follow the guide for ",(0,i.mdx)("a",{parentName:"p",href:"services-add-event.md"},"adding Events to your project or workspace"),"."),(0,i.mdx)("h2",{id:"insights"},"Insights"),(0,i.mdx)("p",null,"Adobe Developer Console automatically generates valuable insights related to API and Runtime usage for each enterprise project or for each workspace when working in a templated project. API insights are also generated for personal projects, however because Runtime cannot be added to personal projects, there are no Runtime usage insights available."),(0,i.mdx)("p",null,"To learn more about insights, read the ",(0,i.mdx)("a",{parentName:"p",href:"../insights.md"},"insights overview"),"."),(0,i.mdx)("h2",{id:"next-steps"},"Next steps"),(0,i.mdx)("p",null,"You can continue to add as many services as you need by following the various ",(0,i.mdx)("a",{parentName:"p",href:"#service-specific-workflows"},"workflow guides")," found in this document."),(0,i.mdx)("p",null,"Once you have completed development on your project and are ready to submit your application for approval, please read the ",(0,i.mdx)("a",{parentName:"p",href:"../projects/approval.md"},"project approval guide")," to get started."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-services-index-md-760422add76785ea3258.js.map