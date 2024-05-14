"use client";
import { useGetCalls } from "@/hooks/useGetCalls";

const UpcomingTime = () => {
  const { upcomingCalls } = useGetCalls();

  return (
    <>
      {upcomingCalls.length > 0 && (
        <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
          {upcomingCalls.length > 0
            ? `Upcoming ${upcomingCalls[0].state?.startsAt?.toLocaleString()}`
            : undefined}
        </h2>
      )}
    </>
  );
};

export default UpcomingTime;
