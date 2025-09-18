export default function Loading() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 w-full">
        <div className="animate-pulse space-y-6">
          {/* Header skeleton */}
          <div className="space-y-2">
            <div className="h-8 bg-surface rounded w-1/3"></div>
            <div className="h-4 bg-surface rounded w-1/2"></div>
          </div>
          
          {/* Map skeleton */}
          <div className="h-48 bg-surface rounded-lg"></div>
          
          {/* Button skeleton */}
          <div className="h-12 bg-surface rounded-md"></div>
          
          {/* Task cards skeleton */}
          <div className="space-y-4">
            <div className="h-6 bg-surface rounded w-1/4"></div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-surface rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-primary rounded-full"></div>
                    <div className="h-4 bg-gray-600 rounded w-20"></div>
                  </div>
                  <div className="h-4 bg-accent rounded w-16"></div>
                </div>
                <div className="h-5 bg-gray-600 rounded w-3/4"></div>
                <div className="h-4 bg-gray-600 rounded w-1/2"></div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                    <div className="space-y-1">
                      <div className="h-3 bg-gray-600 rounded w-16"></div>
                      <div className="h-3 bg-gray-600 rounded w-20"></div>
                    </div>
                  </div>
                  <div className="h-8 bg-primary rounded w-16"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
