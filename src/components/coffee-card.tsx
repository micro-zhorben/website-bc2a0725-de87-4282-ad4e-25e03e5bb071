import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Coffee, Heart } from "lucide-react";

interface CoffeeCardProps {
  name: string;
  description: string;
  roastLevel: string;
  origin: string;
  onSelect: () => void;
  onLike?: () => void;
  isLiked?: boolean;
}

export function CoffeeCard({
  name,
  description,
  roastLevel,
  origin,
  onSelect,
  onLike,
  isLiked = false,
}: CoffeeCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="line-clamp-1">{name}</CardTitle>
          {onLike && (
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground"
              onClick={onLike}
            >
              <Heart
                className={isLiked ? "fill-primary text-primary" : "text-muted-foreground"}
              />
            </Button>
          )}
        </div>
        <Typography.Muted>{origin}</Typography.Muted>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Typography.P className="line-clamp-2">{description}</Typography.P>
        <div className="flex items-center justify-between">
          <Typography.Small className="text-muted-foreground">
            Roast Level: {roastLevel}
          </Typography.Small>
          <Button onClick={onSelect} className="gap-2">
            <Coffee />
            Select
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}