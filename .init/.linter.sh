#!/bin/bash
cd /home/kavia/workspace/code-generation/live-event-engagement-dashboard-33d750cf/fan_engagement_analytics_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

