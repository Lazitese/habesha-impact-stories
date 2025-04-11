
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench } from "lucide-react";

interface CmsPlaceholderProps {
  title: string;
}

const CmsPlaceholder = ({ title }: CmsPlaceholderProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      </div>

      <Card className="w-full">
        <CardHeader className="flex flex-row items-center gap-4">
          <Wrench className="h-8 w-8 text-brand" />
          <CardTitle>Under Construction</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This section is currently being built. Check back soon for updates!</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CmsPlaceholder;
