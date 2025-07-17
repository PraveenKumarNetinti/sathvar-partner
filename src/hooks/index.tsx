import * as React from "react";

function isShallowEqual<T extends Record<string, any>>(
  object1: T,
  object2: T,
): boolean {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}

type NetworkInformation = {
  downlink?: number;
  downlinkMax?: number;
  effectiveType?: string;
  rtt?: number;
  saveData?: boolean;
  type?: string;
  addEventListener: (
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ) => void;
  removeEventListener: (
    type: string,
    listener: EventListenerOrEventListenerObject,
  ) => void;
} | null;

const getConnection = (): NetworkInformation => {
  return (
    (navigator as any)?.connection ||
    (navigator as any)?.mozConnection ||
    (navigator as any)?.webkitConnection ||
    null
  );
};

const useNetworkStateSubscribe = (callback: () => void): (() => void) => {
  window.addEventListener("online", callback, { passive: true });
  window.addEventListener("offline", callback, { passive: true });

  const connection = getConnection();

  if (connection) {
    connection.addEventListener("change", callback, { passive: true });
  }

  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);

    if (connection) {
      connection.removeEventListener("change", callback);
    }
  };
};

const getNetworkStateServerSnapshot = (): never => {
  throw Error("useNetworkState is a client-only hook");
};

export function useNetworkState() {
  const cache = React.useRef<Record<string, any>>({});

  const getSnapshot = (): Record<string, any> => {
    const online = navigator.onLine;
    const connection = getConnection();

    const nextState = {
      online,
      downlink: connection?.downlink,
      downlinkMax: connection?.downlinkMax,
      effectiveType: connection?.effectiveType,
      rtt: connection?.rtt,
      saveData: connection?.saveData,
      type: connection?.type,
    };

    if (isShallowEqual(cache.current, nextState)) {
      return cache.current;
    } else {
      cache.current = nextState;
      return nextState;
    }
  };

  return React.useSyncExternalStore(
    useNetworkStateSubscribe,
    getSnapshot,
    getNetworkStateServerSnapshot,
  );
}

function isPlainObject(value: unknown): value is Record<string, any> {
  return Object.prototype.toString.call(value) === "[object Object]";
}

export function useObjectState<T extends Record<string, any>>(
  initialValue: T,
): [T, (arg: Partial<T> | ((prevState: T) => Partial<T>)) => void] {
  const [state, setState] = React.useState(initialValue);

  const handleUpdate = React.useCallback(
    (arg: Partial<T> | ((prevState: T) => Partial<T>)) => {
      setState((prevState) => {
        const newState = typeof arg === "function" ? arg(prevState) : arg;

        if (isPlainObject(newState)) {
          return { ...prevState, ...newState };
        }

        return prevState;
      });
    },
    [],
  );

  return [state, handleUpdate];
}
