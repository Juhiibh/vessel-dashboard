import { useEffect } from "react";

function ArchitecturePage() {
  useEffect(() => {
    window.location.replace("/architecture.html");
  }, []);

  return null;
}

export default ArchitecturePage;
