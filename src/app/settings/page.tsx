import OverviewForm from "@/components/forms/OverviewForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { FC } from "react";

interface SettingsPageProps {}

const SettingsPage: FC<SettingsPageProps> = ({}) => {
  return (
    <div>
      <div className="mb-5 text-3xl font-semibold">Settings</div>
      <Tabs defaultValue="overview">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="socialLinks">Social Links</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <OverviewForm />
        </TabsContent>

        <TabsContent value="socialLinks">
          <div>social</div>
        </TabsContent>

        <TabsContent value="teams">
          <div>team</div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
