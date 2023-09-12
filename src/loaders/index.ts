import * as React from "react";
import Loading from "@/loaders/Loading";
function DelayedLoading({ delay }: { delay: number }) {
  const [showLoading, setShowLoading] = React.useState(false);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoading(true);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [delay]);

  return showLoading ? <Loading /> : null;
}

function LazyLoading<T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  delay: number
) {
  const LazyComponent = React.lazy(importFunc);
  import App from "./../App";

  return (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
    <React.Suspense fallback={<DelayedLoading delay={delay} />}>
      <App {...props} />
    </React.Suspense>
  );
}
