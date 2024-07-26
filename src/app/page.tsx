"use client";

import GetTime from "@/action/gettime";
import { formatDateTime } from "@/utils/method";
import { useState } from "react";

export default function Home() {
  const [localTime, setLocalTime] = useState<Date | null>(null);
  const [serverTime, setServeTime] = useState<Date | null>(null);
  const [databaseTime, setDatabaseTime] = useState<Date | null>(null);

  const settime = async () => {
    setLocalTime(new Date());
    const resonse = await GetTime();
    setServeTime(resonse.serverTime);
    setDatabaseTime(resonse.databaseTime);
  };

  return (
    <main className="bg-[#e1e9eb] p-12">
      <div className="flex gap-4 items-center justify-evenly">
        <div className="bg-[#2e8ee2] px-2 py-1 rounded shadow text-white">
          Server DateTime:
          {serverTime == null ? "" : formatDateTime(serverTime)}
        </div>
        <div className="bg-[#2e8ee2] px-2 py-1 rounded shadow text-white">
          Datebase DateTime:
          {databaseTime == null ? "" : formatDateTime(databaseTime)}
        </div>
        <div className="bg-[#2e8ee2] px-2 py-1 rounded shadow text-white">
          Local DateTime: {localTime == null ? "" : formatDateTime(localTime)}
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <button
          onClick={settime}
          className="bg-blue-500 bg-gradient-to-t from-[#2377d4] to-[#96d0f5] text-white  px-2 py-1 text-lg rounded-md"
        >
          Get Time
        </button>
      </div>
    </main>
  );
}
