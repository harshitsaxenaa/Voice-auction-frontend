# Voice-Auction: AI-Powered Real-Time Voice-enabled Bidding Dashboard 

--> A modern, voice-assisted auction platform that allows users to bid on products seamlessly through voice commands. Featuring real-time data updates, live analytics, intelligent bidding suggestions, and a sleek dashboard inspired by high-frequency trading interfaces.

# Deployed Link: https://voice-auction-frontend.vercel.app

# Features:

1. Voice Agent Integration – Bid using voice commands with seamless interaction (via Omnidimension widget).

2. Real-Time Bidding – Automatically updates product data and bids every 5 seconds.

3. Live Analytics – Displays highest bids across products in animated charts.

4. Smart Feedback – Visual cues for increased bids, animations, and sorting.

5. Search & Sort – Find products and sort by highest/lowest bids.

6. Modern Tech Stack – Fast, scalable frontend with Tailwind + React + Vite, and Flask + Firestore backend.

# Tech Stack:

--> Frontend:	React, Tailwind CSS, Vite, Chart.js

--> Backend:	Flask, Firebase Firestore (NoSQL)

--> Realtime:	setInterval() fetch cycle (5s refresh)

--> Voice Agent:	Omnidimension AI Widget (Script Embedded)

--> Hosting:	Vercel (Frontend), Render (Backend)

# Setup:

__1. Backend (Flask + Firestore)__

Hosted on Render:
https://voice-auction.onrender.com

__2. Frontend (React + Tailwind + Vite)__

Hosted on Vercel:
https://voice-auction-frontend.vercel.app   
   
# Clone frontend repo
```bash
git clone https://github.com/harshitsaxenaa/Voice-auction-frontend.git
```

``` bash
cd voice-auction-frontend
```

__Install dependencies__

```bash
npm install
```

__Run locally__
npm run dev


__3. Omnidimension Voice Agent__
Embedded directly in the app (App.jsx):

html
Copy
Edit
<script
  id="omnidimension-web-widget"
  async
  src="https://backend.omnidim.io/web_widget.js?secret_key=key"
></script>


# Functionality Checklist
 
 --> Add/search/sort products
 
 --> Find full product bidding history, highest bid, product information

 --> Place bid (voice/text)

 --> Highlight rising bids

 --> Update dashboard in real-time

 --> Live graph of highest bids

Made With ❤️ by Harshit










