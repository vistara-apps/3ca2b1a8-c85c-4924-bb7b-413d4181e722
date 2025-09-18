'use client';

import { Button } from '@/components/Button';
import { AppShell } from '@/components/AppShell';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <AppShell>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-6xl mb-4">😵</div>
          <h2 className="text-2xl font-bold text-text-primary">
            Something went wrong!
          </h2>
          <p className="text-text-secondary max-w-md">
            We encountered an error while loading Errandly. This might be a temporary issue.
          </p>
          <div className="space-y-2">
            <Button onClick={reset} className="w-full">
              Try again
            </Button>
            <Button 
              variant="outline" 
              onClick={() => window.location.href = '/'}
              className="w-full"
            >
              Go to homepage
            </Button>
          </div>
          {error.message && (
            <details className="mt-4 text-left">
              <summary className="text-sm text-text-secondary cursor-pointer">
                Technical details
              </summary>
              <pre className="mt-2 text-xs text-red-400 bg-surface p-2 rounded overflow-auto">
                {error.message}
              </pre>
            </details>
          )}
        </div>
      </div>
    </AppShell>
  );
}
