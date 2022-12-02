import { Dispatch, SetStateAction } from "react";

export interface showingPageProps {
  showingPage: string;
  setShowingPage: Dispatch<SetStateAction<string>>;
}
