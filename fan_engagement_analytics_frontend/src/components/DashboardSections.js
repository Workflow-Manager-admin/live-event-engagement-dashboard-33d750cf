import React from "react";
import DashboardCard from "./DashboardCard";
import CollapsiblePanel from "./CollapsiblePanel";
import BarChart from "./BarChart";
import CircularProgress from "./CircularProgress";
import DeviceBreakdownChart from "./DeviceBreakdownChart";
import GeoMap from "./GeoMap";
import HeatMap from "./HeatMap";
import WordCloud from "./WordCloud";
import "./DashboardSections.css";

/**
 * PUBLIC_INTERFACE
 * DashboardSections: grid layout and all dashboard cards/chart visualizations.
 * Props:
 *   metrics: single object with keys for all 16 metrics.
 */
function DashboardSections({ metrics }) {
  // Section splits:
  // 1) Poll Metrics: [pollsGenerated, avgPollsPerEvent, pollsApproved, pollsRejected, avgApprovalTime, approvalRate, rejectionReasons]
  // 2) Viewer Engagement: [participationRate, votesCast, avgVotesPerPoll, peakParticipation, deviceBreakdown, topPolls, engagementHeatmap, wordCloud]
  // 3) System Insights: [geoBreakdown, sessionHeatmap, votesPerState, engagementOverTime]
  // Layout: 3 responsive sections, mobile stacks.

  return (
    <div className="dashboard-sections-root">
      <section className="dashboard-section">
        <CollapsiblePanel title="Poll Metrics" defaultOpen>
          <div className="dashboard-grid">
            <DashboardCard title="Polls Generated" value={metrics.pollsGenerated}>
              <BarChart
                data={metrics.pollsGeneratedHistory || [3,4,5,3,6]}
                labels={["Mon", "Tue", "Wed", "Thu", "Fri"]}
              />
            </DashboardCard>
            <DashboardCard title="Avg Polls per Event" value={metrics.avgPollsPerEvent}>
              <CircularProgress
                value={metrics.avgPollsPerEvent}
                label="Per Event"
              />
            </DashboardCard>
            <DashboardCard title="Polls Approved" value={metrics.pollsApproved}>
              <CircularProgress
                value={metrics.approvalRate}
                label="Approval Rate"
                color="var(--accent)"
              />
            </DashboardCard>
            <DashboardCard title="Polls Rejected" value={metrics.pollsRejected}>
              <CircularProgress
                value={100 - metrics.approvalRate}
                label="Rejection Rate"
                color="#e34646"
              />
            </DashboardCard>
            <DashboardCard title="Avg Approval Time" value={metrics.avgApprovalTime + 's'}>
              <BarChart
                data={metrics.approvalTimesHistory || [90,65,87,120,101]}
                labels={["E1","E2","E3","E4","E5"]}
                colors={["var(--accent)"]}
              />
            </DashboardCard>
            <DashboardCard title="Approval Rate" value={metrics.approvalRate + '%'}>
              <CircularProgress
                value={metrics.approvalRate}
                label="Approval"
              />
            </DashboardCard>
            <DashboardCard title="Rejection Reasons" value="">
              <WordCloud words={metrics.rejectionReasons} />
            </DashboardCard>
          </div>
        </CollapsiblePanel>
      </section>
      <section className="dashboard-section">
        <CollapsiblePanel title="Viewer Engagement" defaultOpen>
          <div className="dashboard-grid">
            <DashboardCard title="Participation Rate" value={metrics.participationRate + "%"}>
              <CircularProgress value={metrics.participationRate} label="Participation" color="#76f542"/>
            </DashboardCard>
            <DashboardCard title="Votes Cast" value={metrics.votesCast}>
              <BarChart data={metrics.votesCastHistory || [80,92,101,59,123]} labels={["Mon","Tue","Wed","Thu","Fri"]}/>
            </DashboardCard>
            <DashboardCard title="Avg Votes per Poll" value={metrics.avgVotesPerPoll}>
              <CircularProgress value={metrics.avgVotesPerPoll * 10} label="per Poll" />
            </DashboardCard>
            <DashboardCard title="Peak Participation" value={metrics.peakParticipation}>
              <BarChart data={metrics.peakParticipationByEvent || [42, 57, 38, 61]} labels={["E1", "E2", "E3", "E4"]}/>
            </DashboardCard>
            <DashboardCard title="Device Breakdown">
              <DeviceBreakdownChart data={metrics.deviceBreakdown} />
            </DashboardCard>
            <DashboardCard title="Top Polls">
              <BarChart data={metrics.topPolls?.map(p=>p.votes)} labels={metrics.topPolls?.map(p=>p.label)} />
            </DashboardCard>
            <DashboardCard title="Engagement Heatmap">
              <HeatMap data={metrics.engagementHeatmap} />
            </DashboardCard>
            <DashboardCard title="Word Cloud">
              <WordCloud words={metrics.wordCloud} />
            </DashboardCard>
          </div>
        </CollapsiblePanel>
      </section>
      <section className="dashboard-section">
        <CollapsiblePanel title="System Insights" defaultOpen={false}>
          <div className="dashboard-grid">
            <DashboardCard title="Geo Breakdown">
              <GeoMap data={metrics.geoBreakdown} />
            </DashboardCard>
            <DashboardCard title="Session Heatmap">
              <HeatMap data={metrics.sessionHeatmap} />
            </DashboardCard>
            <DashboardCard title="Votes per State">
              <BarChart data={metrics.votesPerState?.map(r=>r.votes)} labels={metrics.votesPerState?.map(r=>r.state)} />
            </DashboardCard>
            <DashboardCard title="Engagement Over Time">
              <BarChart data={metrics.engagementOverTime} labels={metrics.engagementOverTimeLabel} />
            </DashboardCard>
          </div>
        </CollapsiblePanel>
      </section>
    </div>
  );
}

export default DashboardSections;
