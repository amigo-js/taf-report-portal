const axios = require('axios').default

// for demo
// const accessToken = 'fa916f91-3adf-4fda-99d4-fc127f51f46c'
// const baseUrl = 'https://demo.reportportal.io'
// const axiosInstance = axios.create({
//   baseUrl,
//   headers: { Authorization: `Bearer ${accessToken}` },
// });


// for local host
const accessToken = '0ed9c760-7dc9-445c-90f4-505b78e67c35'
const baseUrl = 'http://localhost:8080'
const axiosInstance = axios.create({
  baseUrl,
  headers: { Authorization: `Bearer ${accessToken}` },
});


let RandomNum = Math.floor(100 + Math.random() * 900);
let RandomNumWidget = Math.floor(100 + Math.random() * 900);

describe("Verify the report portal endpoints", () => {

  it("should create a new dashboard", async () => {
    let response = await axiosInstance.post(`${baseUrl}/api/v1/default_personal/dashboard`, {
      "description": "VA Test dashboard2",
      "name": "VA dashboard " + RandomNum,
      "share": true
    })
        .then((response) => (response))
        .catch((err) => console.log(err));
  }); 

  it("should create and assigne a widget to dashboard", async () => {
    // creating dashboard
    let createDashboard = await axiosInstance.post(`${baseUrl}/api/v1/default_personal/dashboard`, {
      "description": "VA Test dashboard2",
      "name": "VA dashboard " + RandomNum,
      "share": true
    })
    .then(async (createDashboard) =>  {
      console.log(createDashboard)  
      // creating widget
      let createWidget = await axiosInstance.post(`${baseUrl}/api/v1/default_personal/widget`, {
        "contentParameters": {
          "contentFields": [
            "statistics$executions$total",
            "statistics$executions$passed",
            "statistics$executions$failed",
            "statistics$executions$skipped",
            "statistics$defects$product_bug$pb001",
            "statistics$defects$automation_bug$ab001",
            "statistics$defects$system_issue$si001",
            "statistics$defects$to_investigate$ti001"
          ],
          "itemsCount": 1,
          "widgetOptions": {}
        },
        "description": "Nice widget",
        "filterIds": [
          18
        ],
        "name": "Nice test widget " + RandomNum,
        "share": true,
        "widgetType": "oldLineChart"
      })
          .then(async (createWidget) =>  {
            console.log(createWidget)
            // Assigning widget to dashboard
            let assignWidgetToDashboard = await axiosInstance.put(`${baseUrl}/api/v1/default_personal/dashboard/${createDashboard}/add`, {
              "addWidget": {
                "share": true,
                "widgetId": createWidget.data.id,
                "widgetName": "string",
                "widgetOptions": {},
                "widgetPosition": {
                  "positionX": 0,
                  "positionY": 0
                },
                "widgetSize": {
                  "height": 40,
                  "width": 40
                },
                "widgetType": "string"
              }
            })
                .then((assignWidgetToDashboard) => console.log(assignWidgetToDashboard))
                .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
    })

    it("should create new dashboard and then delete it", async () => {
    // creating dashboard
      let createDashboard = await axiosInstance.post(`${baseUrl}/api/v1/default_personal/dashboard`, {
        "description": "VA Test dashboard2",
        "name": "VA dashboard " + RandomNum,
        "share": true
      })
      .then(async (createDashboard) =>  {
        console.log(createDashboard)
        // deleting dashboard
            let deleteDashboard = await axiosInstance.put(`${baseUrl}/api/v1/default_personal/dashboard/${createDashboard}`)
                .then((deleteDashboard) => console.log(deleteDashboard))
                .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
    })
  })


  it("should create a new widget", async () => {
    // creating widget
    let createWidget = await axiosInstance.post(`${baseUrl}/api/v1/default_personal/widget`, {
      "contentParameters": {
        "contentFields": [
          "statistics$executions$total",
          "statistics$executions$passed",
          "statistics$executions$failed",
          "statistics$executions$skipped",
          "statistics$defects$product_bug$pb001",
          "statistics$defects$automation_bug$ab001",
          "statistics$defects$system_issue$si001",
          "statistics$defects$to_investigate$ti001"
        ],
        "itemsCount": 1,
        "widgetOptions": {}
      },
      "description": "Nice widget",
      "filterIds": [
        18
      ],
      "name": "Nice test widget " + RandomNum,
      "share": true,
      "widgetType": "oldLineChart"
    })
  }); 

  it("should create new widget and then udpate it", async () => {
      // creating widget
    let createWidget = await axiosInstance.post(`${baseUrl}/api/v1/default_personal/widget`, {
      "contentParameters": {
        "contentFields": [
          "statistics$executions$total",
          "statistics$executions$passed",
          "statistics$executions$failed",
          "statistics$executions$skipped",
          "statistics$defects$product_bug$pb001",
          "statistics$defects$automation_bug$ab001",
          "statistics$defects$system_issue$si001",
          "statistics$defects$to_investigate$ti001"
        ],
        "itemsCount": 1,
        "widgetOptions": {}
      },
      "description": "Nice widget",
      "filterIds": [
        18
      ],
      "name": "Nice test widget " + Math.random(),
      "share": true,
      "widgetType": "oldLineChart"
    })
    .then(async (createWidget) =>  {
      console.log(createWidget)
        // updating widget
          let modifyWidget = await axiosInstance.put(`${baseUrl}/api/v1/default_personal/widget/${createWidget}`, {
            "contentParameters": {
              "contentFields": [
                "someString"
              ],
              "itemsCount": 0,
              "widgetOptions": {}
            },
            "description": "string",
            "filterIds": [
              0
            ],
            "name": "modifedWidget",
            "share": true,
            "widgetType": "oldLineChart"
          })
              .then((modifyWidget) => console.log(modifyWidget))
              .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    })



    it("Login into Report Portal", async () => {
      const login = await axios.post(baseUrl, {
        body: {
          login: 'default',
          password: '1q2w3e'
        }
      }
      ).then((response) => (response))
      .catch((err) => console.log(err));

    })

    it("Logout into Report Portal", async () => {
      const logout = await axios.post(baseUrl, {
        url:"/logout"
      }
      ).then((response) => (response))
      .catch((err) => console.log(err));

    })
})
