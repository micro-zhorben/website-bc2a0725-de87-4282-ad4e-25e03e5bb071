import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Coffee, Star } from "lucide-react";

interface RecommendationDialogProps {
  coffee: {
    name: string;
    description: string;
    roastLevel: string;
    origin: string;
    rating: number;
    brewingNotes: string[];
  };
  onClose?: () => void;
}

export function RecommendationDialog({
  coffee,
  onClose,
}: RecommendationDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Coffee />
          View Recommendation
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{coffee.name}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Origin: {coffee.origin}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Typography.P>{coffee.description}</Typography.P>
          
          <div className="flex items-center gap-2">
            <Typography.Small className="text-muted-foreground">Rating:</Typography.Small>
            <div className="flex">
              {Array.from({ length: coffee.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-primary text-primary"
                />
              ))}
            </div>
          </div>

          <div>
            <Typography.Small className="font-medium">Brewing Notes:</Typography.Small>
            <Typography.List>
              {coffee.brewingNotes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </Typography.List>
          </div>

          <Button variant="secondary" className="w-full" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}