 (function (g, e, n, es, ys) {
    g['_genesysJs'] = e;
    g[e] = g[e] || function () {
      (g[e].q = g[e].q || []).push(arguments)
    };
    g[e].t = 1 * new Date();
    g[e].c = es;
    ys = document.createElement('script'); ys.async = 1; ys.src = n; ys.charset = 'utf-8'; document.head.appendChild(ys);
  })(window, 'Genesys', 'https://apps.mypurecloud.com/genesys-bootstrap/genesys.min.js', {
    environment: 'use1',
    deploymentId: '16c252a6-a8e4-4824-8d86-7508f9d7252d'
  });


/* Event Subscriptions */
/*Genesys("subscribe", "Launcher.ready" , function(o){
  console.log("The queue works!");
  });
Genesys("subscribe", "Messenger.opened", function(o){
  console.log("Messenger Opened!");
  });
Genesys("subscribe", "Messenger.closed", function(o){
  console.log("Messenger Closed!");
});
*/

Genesys("subscribe", "Conversations.started", function(o){
  console.log("Conversation Started");
  updatePE();
});


function updatePE(){
  Genesys("command", "Journey.record", { eventName: "form_submitted", customAttributes: {
    test1: "valu1", 
    email: "sean.kallipolites@genesys.com", 
    workPhone: "8609830390", 
    givenName: "Sean",
    familyName: "Kallipolites",
    name: "Sean N Kallipolites"
  }, 
    traitsMapper: [{"fieldName": "email","fieldName": "givenName", "fieldName": "familyName", "fieldName": "name"}] });
  console.log("Updated PE");
};

