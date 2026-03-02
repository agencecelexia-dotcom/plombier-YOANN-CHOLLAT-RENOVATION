"use client";

import { useState } from "react";
import { AdminSidebar, type AdminTab } from "@/components/admin/AdminSidebar";
import DashboardTab from "@/components/admin/DashboardTab";
import ContenuTab from "@/components/admin/ContenuTab";
import PhotosTab from "@/components/admin/PhotosTab";
import ServicesTab from "@/components/admin/ServicesTab";
import TemoignagesTab from "@/components/admin/TemoignagesTab";
import ProjetsTab from "@/components/admin/ProjetsTab";

const renderTab = (tab: AdminTab) => {
  switch (tab) {
    case "dashboard": return <DashboardTab />;
    case "contenu": return <ContenuTab />;
    case "photos": return <PhotosTab />;
    case "services": return <ServicesTab />;
    case "temoignages": return <TemoignagesTab />;
    case "projets": return <ProjetsTab />;
  }
};

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<AdminTab>("dashboard");

  return (
    <div className="fixed inset-0 z-50 flex overflow-hidden bg-neutral-50">
      <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-7xl px-6 pb-6 pt-16 lg:p-8">
          {renderTab(activeTab)}
        </div>
      </main>
    </div>
  );
}
