"use client";

import { useState } from "react";

export function useAttendance() {

  const [started, setStarted] = useState(false);

  function startAttendance() {
    setStarted(true);
  }

  function finishAttendance() {
    setStarted(false);
  }

  return {
    started,
    startAttendance,
    finishAttendance,
  };
}