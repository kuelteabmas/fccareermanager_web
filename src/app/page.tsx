import MainDashboard from "@/components/Dashboard/MainDashboard";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title:
    "EA FC / FIFA Career Manager Repository Tracker",
  description: "EA FC / FIFA Career Manager Repository Tracker",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <MainDashboard />
      </DefaultLayout>
    </>
  );
}
