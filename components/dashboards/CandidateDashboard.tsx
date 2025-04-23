"use client"

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { SectionCards } from "@/components/section-cards";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import candidateData from "@/app/dashboard/data/candidate.json";
import { useProfile } from "@/context/ProfileContext";

export default function CandidateDashboard() {
  const profile = useProfile();
  const userObj = {
    name: profile.name || profile.email || profile.user_email || "Unbekannt",
    email: profile.email || profile.user_email || "Unbekannt",
    avatar: "/avatars/shadcn.jpg",
  };

  return (
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={candidateData.table} />
            </div>
          </div>
        </div>
  );
} 