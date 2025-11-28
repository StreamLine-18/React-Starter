# 🏆 React Mini Hackathon Leaderboard

A real-time leaderboard app to track team progress during the React Mini Hackathon event.

## Features

### Main Page (/)
- **Live Timer**: Start/pause/reset the hackathon timer
- **Real-time Leaderboard**: Auto-updates every second
- **Team Rankings**: Top 3 teams get special gold/silver/bronze styling
- **Phase Progress**: Visual indicators for each team's completed phases

### Admin Panel (/admin)
- Add new teams with theme selection
- Update team progress in real-time
- Toggle phase completion
- Edit completion times
- Remove teams
- Clear all data

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open two browser windows:
   - Main display: `http://localhost:5173/`
   - Admin panel: `http://localhost:5173/admin`

## How to Use

### For Event Organizers:
1. Open the main page on a projector/big screen
2. Click "Start Hackathon" to begin the timer
3. Open the admin panel on your laptop
4. Add teams and update their progress as they complete phases
5. The main leaderboard updates automatically!

### For Participants:
- Watch the main screen to see your team's ranking
- See which phases you've completed
- Track your time and score in real-time

## Scoring System

- Phase 1 completed: 100 points
- Phase 2 completed: 100 points
- Phase 3 completed: 100 points
- Time bonus: 200 - (time in minutes) points
- All phases completed: +50 bonus points

**Maximum possible score**: 550 points (all phases + 0 minutes + bonus)

## Technical Details

- Built with React + Vite + React Router
- Uses localStorage for data persistence
- Auto-refreshes leaderboard every second
- Responsive design for mobile and desktop
