import * as React from "react";

import { useNetworkState } from "@/hooks";
import { notification } from "@/hooks/use-notification";

export default function NetworkStatusIndicator() {
  const { online: isOnline, effectiveType, downlink } = useNetworkState();
  const firstUpdate = React.useRef(true);

  React.useLayoutEffect(() => {
    if (downlink < 1 || ["slow-2g", "2g"].includes(effectiveType)) {
      notification({
        status: "warning",
        variant: "lighter",
        title: "Slow Network Detected",
        description:
          "Your connection is unstable. Avoid posting transactions or attachments. Please switch to a better network for a smoother experience.",
      });
    }
  }, [downlink, effectiveType]);

  React.useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (isOnline) {
      notification({
        title: "Network Restored!",
        description: (
          <div className="space-y-1">
            <div>Your internet connection has been successfully restored.</div>
          </div>
        ),
        variant: "stroke",
        status: "success",
      });
    } else {
      notification({
        title: "Oops! You are Offline!",
        description: (
          <div className="space-y-1">
            <div>Please check your network connection.</div>
            <ul className="text-label-sm list-inside !list-disc">
              <li>Try turning on your Wi-Fi</li>
              <li>Check your mobile data settings</li>
              <li>If you are using Wi-Fi, try restarting your router</li>
            </ul>
          </div>
        ),
        variant: "stroke",
        status: "error",
      });
    }
  }, [isOnline]);

  return null;
}
