import React from "react";

export interface PageProps {
  params: {
    lng: string;
  };
}

export interface ParamsProps {
  lng: string;
}
export interface RootLayoutProps {
  children: React.ReactNode;
  params: ParamsProps;
}
