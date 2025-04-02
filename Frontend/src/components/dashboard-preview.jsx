export default function DashboardPreview() {
  return (
    <div className="bg-card rounded-xl overflow-hidden">
      <div className="h-10 bg-muted flex items-center px-4 border-b border-border">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold">Event Dashboard</h3>
            <p className="text-sm text-muted-foreground">Welcome back, Admin</p>
          </div>
          <div className="flex gap-2">
            <div className="h-8 w-8 rounded-full bg-primary/20"></div>
            <div className="h-8 w-24 rounded-md bg-primary/20"></div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-muted p-4 rounded-lg">
            <div className="h-4 w-24 bg-muted-foreground/20 rounded mb-2"></div>
            <div className="h-8 w-16 bg-muted-foreground/30 rounded"></div>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <div className="h-4 w-24 bg-muted-foreground/20 rounded mb-2"></div>
            <div className="h-8 w-16 bg-muted-foreground/30 rounded"></div>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <div className="h-4 w-24 bg-muted-foreground/20 rounded mb-2"></div>
            <div className="h-8 w-16 bg-muted-foreground/30 rounded"></div>
          </div>
        </div>

        <div className="bg-muted p-4 rounded-lg mb-6">
          <div className="h-4 w-32 bg-muted-foreground/20 rounded mb-4"></div>
          <div className="flex items-center gap-2 mb-2">
            <div className="h-4 w-4 rounded-full bg-primary"></div>
            <div className="h-4 w-24 bg-muted-foreground/20 rounded"></div>
            <div className="h-4 w-16 bg-muted-foreground/20 rounded ml-auto"></div>
          </div>
          <div className="h-24 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-muted p-4 rounded-lg">
            <div className="h-4 w-24 bg-muted-foreground/20 rounded mb-4"></div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/20"></div>
                <div>
                  <div className="h-3 w-20 bg-muted-foreground/30 rounded"></div>
                  <div className="h-3 w-16 bg-muted-foreground/20 rounded mt-1"></div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/20"></div>
                <div>
                  <div className="h-3 w-20 bg-muted-foreground/30 rounded"></div>
                  <div className="h-3 w-16 bg-muted-foreground/20 rounded mt-1"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <div className="h-4 w-24 bg-muted-foreground/20 rounded mb-4"></div>
            <div className="h-32 bg-gradient-to-br from-primary/30 to-primary/5 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

