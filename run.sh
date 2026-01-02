#!/bin/bash

echo "🚀 Starting Frontend (React - localhost:5173)"
cd frontend || exit
npm install
npm run dev &
FRONTEND_PID=$!

echo "🚀 Starting Backend (Node - localhost:5000)"
cd ../backend || exit
npm install
npm run dev &
BACKEND_PID=$!

echo "✅ Frontend & Backend are running"
echo "Frontend PID: $FRONTEND_PID"
echo "Backend PID: $BACKEND_PID"

# Wait for both processes
wait $FRONTEND_PID $BACKEND_PID
