"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[7785],{87120:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var i=a(87462),n=(a(67294),a(3905));a(16758);const l={},r="Polkadot Light Client in C++",o={unversionedId:"Applications/c++polkadot-light-client",id:"Applications/c++polkadot-light-client",title:"Polkadot Light Client in C++",description:"- Team Name: Equilibrium",source:"@site/docs/Applications/c++polkadot-light-client.md",sourceDirName:"Applications",slug:"/Applications/c++polkadot-light-client",permalink:"/Grants-Program/Applications/c++polkadot-light-client",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"BrightTreasury",permalink:"/Grants-Program/Applications/bright_treasury"},next:{title:"cScale",permalink:"/Grants-Program/Applications/cScale"}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Project Details",id:"project-details",level:3},{value:"Cryptography",id:"cryptography",level:4},{value:"Embedding Runtime",id:"embedding-runtime",level:4},{value:"Specifications for multichain support",id:"specifications-for-multichain-support",level:4},{value:"JSON-RPC service APIs",id:"json-rpc-service-apis",level:4},{value:"Components specifications / selection",id:"components-specifications--selection",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview",level:3},{value:"Milestone 1 \u2014 Substrate Module Research",id:"milestone-1--substrate-module-research",level:3},{value:"Future Plans",id:"future-plans",level:2}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"polkadot-light-client-in-c"},"Polkadot Light Client in C++"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Team Name:")," Equilibrium"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Payment Address:")," 0x4126272BA14F7a124b1B98633678e0e5F87Ec478"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tee/master#level_slider-levels"},"Level"),":")," 2")),(0,n.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,n.kt)("p",null,"This project is to create a C++ implementation of a Light Client for Substrate-based chains.\nOn a high level, the C++ Light Client will allow users (via JSON-RPC) to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Query chain state within the client (on synced chain state, including runtime code)"),(0,n.kt)("li",{parentName:"ul"},"Route user transactions to peers and track results\n")),(0,n.kt)("h3",{id:"project-details"},"Project Details"),(0,n.kt)("p",null,"We will deliver a detailed specification of a light client for the implementation based on the research done in the time frame specified in this proposal. The actual implementation will be performed in the next phase."),(0,n.kt)("p",null,"The specification includes:"),(0,n.kt)("h4",{id:"cryptography"},"Cryptography"),(0,n.kt)("p",null,"Define primitives / library requirements such as blake2 hashing for proof verification",(0,n.kt)("br",{parentName:"p"}),"\n","Check library availabilities and provide estimates for missing libraries"),(0,n.kt)("h4",{id:"embedding-runtime"},"Embedding Runtime"),(0,n.kt)("p",null,"Define runtime environment requirements (Browser / NodeJS application / Other?)","*",(0,n.kt)("br",{parentName:"p"}),"\n","Select runtimes such as wasmedge and/or emscripten cross-compilation for desktop / server and/or browser",(0,n.kt)("br",{parentName:"p"}),"\n","Define embedding environment interface such as bindings in JavaScript"),(0,n.kt)("h4",{id:"specifications-for-multichain-support"},"Specifications for multichain support"),(0,n.kt)("p",null,"Specify scope and support for Parachain and Relay chain"),(0,n.kt)("h4",{id:"json-rpc-service-apis"},"JSON-RPC service APIs"),(0,n.kt)("p",null,"Define APIs to be supported","*","\n(submitting transactions, watching transactions / blocks / accounts, etc)"),(0,n.kt)("p",null,"As the RPC API is currently unstable (see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/w3f/PSPs/issues/41"},"PSPs#41"),"), specification must be written first."),(0,n.kt)("h4",{id:"components-specifications--selection"},"Components specifications / selection"),(0,n.kt)("p",null,"Networking (likely cpp-libp2p)",(0,n.kt)("br",{parentName:"p"}),"\n","Database (likely SQLite)"),(0,n.kt)("p",null,"*","Web3 Foundation input required"),(0,n.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,n.kt)("p",null,"This is an alternate implementation to the WASM light node in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/paritytech/smoldot/"},"Smoldot"),"."),(0,n.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,n.kt)("h3",{id:"team-members"},"Team members"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Vaclav Barta"),(0,n.kt)("li",{parentName:"ul"},"Mark Henderson")),(0,n.kt)("h3",{id:"contact"},"Contact"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact Name:")," Mark Henderson"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,n.kt)("a",{parentName:"li",href:"mailto:mark@equilibrium.co"},"mark@equilibrium.co")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Website:")," ",(0,n.kt)("a",{parentName:"li",href:"https://equilibrium.co/"},"https://equilibrium.co/"))),(0,n.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Registered Address:")," Leip\xe4tehdas, Kaikukatu 4, 6th floor 00530 Helsinki, Finland"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Equilibrium Group Oy")),(0,n.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Vaclav Barta is a Senior Software Developer at Equilibrium. Having implemented C++ projects for companies from Akamai to Deutsche Bank, currently creating smart contract pipelines from C to WebAssembly for XRPL Foundation."),(0,n.kt)("li",{parentName:"ul"},"Mark Henderson is the VP of Engineering at Equilibrium. He has led the team starting with the original Rust IPFS grant in late 2019, through engagements with many of the largest names in Web3, and is now circling back to finish the critical work the team started with the original Ziggurat proposal. Core contributor to OrbitDB, Rust IPFS, and Ziggurat.")),(0,n.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/eqlabs"},"https://github.com/eqlabs"))),(0,n.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,n.kt)("p",null,"Equilibrium discussed with David Hawig on different implementation on Polkadot host, C++, AssemblyScript and Zig. After initial research, Equilibrium has decided to apply for the C++ implementation of the light node."),(0,n.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,n.kt)("p",null,"To achieve the final implementation, the project is broken down into 2 phases:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Phase 0: Initial research for C++ Light Client specification"),(0,n.kt)("li",{parentName:"ul"},"Phase 1: Light Client implementation")),(0,n.kt)("p",null,"This proposal is only for Phase 0 and will culminate with the delivery of a detailed specification for the light client implementation in Phase 1."),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 5 weeks"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Costs:")," $34000 USD")),(0,n.kt)("h3",{id:"milestone-1--substrate-module-research"},"Milestone 1 \u2014 Substrate Module Research"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated duration:")," 5 weeks"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:")," 1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," $34000 USD")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,n.kt)("td",{parentName:"tr",align:null},"License"),(0,n.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / MIT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,n.kt)("td",{parentName:"tr",align:null},"Format"),(0,n.kt)("td",{parentName:"tr",align:null},"Markdown (mdBook)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,n.kt)("td",{parentName:"tr",align:null},"Published"),(0,n.kt)("td",{parentName:"tr",align:null},"GitHub, GitHub Pages")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1."),(0,n.kt)("td",{parentName:"tr",align:null},"Cryptography"),(0,n.kt)("td",{parentName:"tr",align:null},"security advantages over connecting to 3rd-party node, limitations compared to full client")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2."),(0,n.kt)("td",{parentName:"tr",align:null},"Runtime environment requirements"),(0,n.kt)("td",{parentName:"tr",align:null},"for browser and Node.js")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"3."),(0,n.kt)("td",{parentName:"tr",align:null},"JSON-RPC APIs"),(0,n.kt)("td",{parentName:"tr",align:null},"minimal run-time access interface")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"4."),(0,n.kt)("td",{parentName:"tr",align:null},"Dependencies"),(0,n.kt)("td",{parentName:"tr",align:null},"libraries for cryptography, networking, build")))),(0,n.kt)("h2",{id:"future-plans"},"Future Plans"),(0,n.kt)("p",null,"From here we would move on to the implementation of the light client node in Phase 1. We expect Phase 1 to be completed by a larger team at Equilibrium."))}u.isMDXComponent=!0}}]);