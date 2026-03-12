export const services = [

{
 id:1,
 name:"Auth Service",
 status:"Healthy",
 uptime:"99.99%",
 incidents:1
},

{
 id:2,
 name:"Payments",
 status:"Degraded",
 uptime:"98.1%",
 incidents:3
}

]

export const incidents = [

{
 id:"INC-1",
 title:"Database latency spike",
 serviceName:"Payments",
 severity:"High",
 status:"Open",
 assignee:"John",
 createdAt:Date.now()-500000
},

{
 id:"INC-2",
 title:"Auth timeout",
 serviceName:"Auth Service",
 severity:"Critical",
 status:"Acknowledged",
 assignee:"Sarah",
 createdAt:Date.now()-200000
}

]