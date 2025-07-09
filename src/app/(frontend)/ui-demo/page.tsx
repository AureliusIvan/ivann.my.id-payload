import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tooltip } from '@/components/ui/tooltip'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { CheckCircle, AlertCircle, Info } from 'lucide-react'

export default function UIComponentsDemo() {
  return (
    <div className="container mx-auto p-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Enhanced UI Components Demo</h1>
        <p className="text-muted-foreground">
          This page demonstrates the enhanced UI components with animations and better interactions.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Enhanced Buttons</CardTitle>
          <CardDescription>
            Buttons now have improved hover effects, scaling animations, and better focus states.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button>Default Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>New UI Components</CardTitle>
          <CardDescription>
            New components include badges, tooltips, alerts, and loading spinners.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Badges</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Alerts</h3>
            <div className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>
                  This is an informational alert with enhanced styling.
                </AlertDescription>
              </Alert>
              <Alert variant="success">
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>
                  Your operation was completed successfully!
                </AlertDescription>
              </Alert>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Loading Spinners</h3>
            <div className="flex items-center gap-4">
              <LoadingSpinner size="sm" />
              <LoadingSpinner size="md" />
              <LoadingSpinner size="lg" />
              <div className="flex items-center gap-2">
                <LoadingSpinner size="sm" />
                <span className="text-sm">Loading...</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
