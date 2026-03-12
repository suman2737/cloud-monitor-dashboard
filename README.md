# Cloud Service Monitor Dashboard

A React-based dashboard to monitor cloud services and incidents.  
This project demonstrates a config-driven UI, role-based access control, and incident management.

## Live Demo
https://elaborate-sopapillas-68199e.netlify.app

## GitHub Repository
https://github.com/suman2737/cloud-monitor-dashboard

---

## Features

### Service Monitoring
- View service health status
- Track uptime percentage
- Monitor incident count per service

### Incident Management
- View incidents in a table
- Filter by:
  - Severity
  - Status
- Acknowledge incidents
- Resolve incidents

### Role-Based Access
- Admin users can view incidents
- Role controlled via localStorage

### Auto Refresh
- Dashboard automatically refreshes every 30 seconds
- Manual refresh option available

### Config Driven UI
The UI is dynamically generated using configuration files:
- `tabsConfig`
- `tableConfig`

This allows easy extension without modifying core components.

---

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Netlify (Deployment)

---

## Project Structure
# Cloud Service Monitor Dashboard

A React-based dashboard to monitor cloud services and incidents.  
This project demonstrates a config-driven UI, role-based access control, and incident management.

## Live Demo
https://elaborate-sopapillas-68199e.netlify.app

## GitHub Repository
https://github.com/suman2737/cloud-monitor-dashboard

---

## Features

### Service Monitoring
- View service health status
- Track uptime percentage
- Monitor incident count per service

### Incident Management
- View incidents in a table
- Filter by:
  - Severity
  - Status
- Acknowledge incidents
- Resolve incidents

### Role-Based Access
- Admin users can view incidents
- Role controlled via localStorage

### Auto Refresh
- Dashboard automatically refreshes every 30 seconds
- Manual refresh option available

### Config Driven UI
The UI is dynamically generated using configuration files:
- `tabsConfig`
- `tableConfig`

This allows easy extension without modifying core components.

---

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Netlify (Deployment)

---

## Project Structure
src
├ components
│ ├ Header.jsx
│ ├ ServiceCard.jsx
│ └ IncidentTable.jsx
│
├ pages
│ ├ ServicesTab.jsx
│ └ IncidentsTab.jsx
│
├ hooks
│ └ useRole.js
│
├ config
│ ├ tabsConfig.js
│ └ tableConfig.js
│
├ data
│ └ mockData.js
│
├ App.jsx
└ App.css

## Installation

Clone the repository

git clone https://github.com/suman2737/cloud-monitor-dashboard.git

Install dependencies

npm install

Run the project

npm run dev

Build the project
npm run build


Preview production build


npm run preview


---

## Deployment

The project is deployed using **Netlify**.

Deployment steps:
1. Push code to GitHub
2. Connect repository to Netlify
3. Configure build settings


Build command: npm run build
Publish directory: dist


---

## Future Improvements

- API integration for real-time data
- Pagination for incident table
- Authentication system
- Service detail pages
- Charts for service metrics

---

## Author

Suman Yadav

Frontend Developer  
React | JavaScript | Web Development
