"use client";
import AttendanceProgress from "./AttendanceProgress";
import AttendanceToolbar from "./AttendanceToolbar";
import AttendanceSummary from "./AttendanceSummary";
import AttendanceList from "./AttendanceList";
import AttendanceStartCard from "./AttendanceStartCard";
import { useAttendance } from "@/lib/hooks/useAttendance";

export default function AttendanceSession() {

  const {
    started,
    startAttendance,
  } = useAttendance();

  if (!started) {
    return (
      <AttendanceStartCard
        onStart={startAttendance}
      />
    );
  }

  return (
    <div className="mt-8 space-y-6">

    <AttendanceProgress />

    <AttendanceToolbar />

    <AttendanceSummary />

    <AttendanceList />

  </div>
  );
}