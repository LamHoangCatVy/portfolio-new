import { useEffect, useState } from "react";

export default function Clock({ timezone }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-6 text-sm text-gray-400 text-center">
      🕒 Local time:{" "}
      <span className="text-blue-400 font-mono text-base">
        {time.toLocaleTimeString()}
      </span>{" "}
      – {timezone}
    </div>
  );
}
