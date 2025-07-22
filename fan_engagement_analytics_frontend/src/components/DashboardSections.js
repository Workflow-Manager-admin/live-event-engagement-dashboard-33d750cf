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
 *   metrics: single object with keys for all 16 metrics, plus new cards.
 */
function DashboardSections({ metrics }) {
  // The new metrics below can be derived, mocked, or added in App.js as placeholders.
  // popularPolls: [{label, votes}], skippedPolls (number), uniqueRespondentsPerPoll (number or array), repeatedPolls (number)
  // For now, use metrics.popularPolls, metrics.skippedPolls, metrics.uniqueRespondentsPerPoll, metrics.repeatedPolls.

  return (
    <div className="dashboard-sections-root">
      <section className="dashboard-section">
        <CollapsiblePanel title="Poll Metrics" defaultOpen>
          <div className="dashboard-grid">
            <DashboardCard title="Polls Generated" value={metrics.pollsGenerated}>
              <BarChart
                data={metrics.pollsGeneratedHistory || [3, 4, 5, 3, 6]}
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
            <DashboardCard title="Avg Approval Time" value={metrics.avgApprovalTime + "s"}>
              <BarChart
                data={metrics.approvalTimesHistory || [90, 65, 87, 120, 101]}
                labels={["E1", "E2", "E3", "E4", "E5"]}
                colors={["var(--accent)"]}
              />
            </DashboardCard>
            <DashboardCard title="Approval Rate" value={metrics.approvalRate + "%"}>
              <CircularProgress
                value={metrics.approvalRate}
                label="Approval"
              />
            </DashboardCard>
            <DashboardCard title="Rejection Reasons" value="">
              <WordCloud words={metrics.rejectionReasons} />
            </DashboardCard>
            <DashboardCard title="Skipped Polls" value={metrics.skippedPolls ?? 8}>
              <BarChart
                data={metrics.skippedPollsHistory || [2, 4, 3, 8, 2]}
                labels={["Mon", "Tue", "Wed", "Thu", "Fri"]}
                colors={["#e4ae3a"]}
              />
            </DashboardCard>
          </div>
        </CollapsiblePanel>
      </section>
      <section className="dashboard-section">
        <CollapsiblePanel title="Viewer Engagement" defaultOpen>
          <div className="dashboard-grid">
            <DashboardCard title="Participation Rate" value={metrics.participationRate + "%"}>
              <CircularProgress value={metrics.participationRate} label="Participation" color="#76f542" />
            </DashboardCard>
            <DashboardCard title="Votes Cast" value={metrics.votesCast}>
              <BarChart data={metrics.votesCastHistory || [80, 92, 101, 59, 123]} labels={["Mon", "Tue", "Wed", "Thu", "Fri"]} />
            </DashboardCard>
            <DashboardCard title="Avg Votes per Poll" value={metrics.avgVotesPerPoll}>
              <CircularProgress value={metrics.avgVotesPerPoll * 10} label="per Poll" />
            </DashboardCard>
            <DashboardCard title="Peak Participation" value={metrics.peakParticipation}>
              <BarChart data={metrics.peakParticipationByEvent || [42, 57, 38, 61]} labels={["E1", "E2", "E3", "E4"]} />
            </DashboardCard>
            <DashboardCard title="Device Breakdown">
              <DeviceBreakdownChart data={metrics.deviceBreakdown} />
            </DashboardCard>
            <DashboardCard title="Popular Polls">
              <BarChart
                data={metrics.popularPolls?.map(p => p.votes) || [254, 188, 171]}
                labels={metrics.popularPolls?.map(p => p.label) || ["Q1", "Q2", "Q3"]}
                colors={["#2563eb", "#f59e42", "#64748b"]}
              />
            </DashboardCard>
            <DashboardCard title="Unique Respondents per Poll" value={metrics.uniqueRespondentsPerPoll ?? 123}>
              <CircularProgress value={metrics.uniqueRespondentsPerPollRate ?? 65} label="Unique %" color="#3478e3" />
            </DashboardCard>
            <DashboardCard title="Number of Repeated Polls" value={metrics.repeatedPolls ?? 12}>
              <CircularProgress value={metrics.repeatedPollsRate ?? 10} label="Repeats %" color="#a757f5" />
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
              <BarChart data={metrics.votesPerState?.map(r => r.votes)} labels={metrics.votesPerState?.map(r => r.state)} />
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
