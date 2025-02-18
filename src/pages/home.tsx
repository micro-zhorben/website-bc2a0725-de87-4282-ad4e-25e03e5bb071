import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Typography } from "@/components/ui/typography";
import { PreferenceForm } from "@/components/preference-form";
import { CoffeeCard } from "@/components/coffee-card";
import { RecommendationDialog } from "@/components/recommendation-dialog";
import { Separator } from "@/components/ui/separator";

// Mock data - in a real app, this would come from an API
const coffeeRecommendations = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    description: "Bright and complex with floral notes, bergamot, and citrus undertones. Perfect for those who appreciate nuanced flavors.",
    roastLevel: "Light",
    origin: "Ethiopia",
    rating: 5,
    brewingNotes: [
      "Best brewed with pour-over method",
      "Water temperature: 195-205°F",
      "Grind size: Medium-fine",
      "Brewing time: 3-4 minutes"
    ]
  },
  {
    id: 2,
    name: "Colombian Supremo",
    description: "Well-balanced with caramel sweetness, hints of nuts, and a smooth chocolate finish. A crowd-pleasing classic.",
    roastLevel: "Medium",
    origin: "Colombia",
    rating: 4,
    brewingNotes: [
      "Versatile for various brewing methods",
      "Water temperature: 195-205°F",
      "Grind size: Medium",
      "Brewing time: 4-5 minutes"
    ]
  },
  {
    id: 3,
    name: "Sumatra Mandheling",
    description: "Full-bodied with earthy tones, cedar, and dark chocolate notes. Perfect for those who love bold flavors.",
    roastLevel: "Dark",
    origin: "Indonesia",
    rating: 4,
    brewingNotes: [
      "Excellent for French press",
      "Water temperature: 195-205°F",
      "Grind size: Coarse",
      "Brewing time: 4 minutes"
    ]
  }
];

export function Home() {
  const [selectedCoffee, setSelectedCoffee] = useState(coffeeRecommendations[0]);
  const [likedCoffees, setLikedCoffees] = useState<number[]>([]);

  const handlePreferenceSubmit = (values: any) => {
    // In a real app, this would call an API to get personalized recommendations
    console.log("Preferences submitted:", values);
  };

  const handleLike = (coffeeId: number) => {
    setLikedCoffees(prev => 
      prev.includes(coffeeId) 
        ? prev.filter(id => id !== coffeeId)
        : [...prev, coffeeId]
    );
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <header className="container mx-auto mb-8 flex items-center justify-between">
        <div>
          <Typography.H1>AI Coffee Recommender</Typography.H1>
          <Typography.Muted>Discover your perfect brew with AI-powered recommendations</Typography.Muted>
        </div>
        <ModeToggle />
      </header>

      <main className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-[400px,1fr]">
          <section className="rounded-lg border bg-card p-6 shadow-sm">
            <PreferenceForm onSubmit={handlePreferenceSubmit} />
          </section>

          <section className="space-y-6">
            <div>
              <Typography.H2>Your Personalized Recommendations</Typography.H2>
              <Typography.Muted>Based on your preferences and brewing style</Typography.Muted>
            </div>

            <Separator />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {coffeeRecommendations.map((coffee) => (
                <CoffeeCard
                  key={coffee.id}
                  name={coffee.name}
                  description={coffee.description}
                  roastLevel={coffee.roastLevel}
                  origin={coffee.origin}
                  onSelect={() => setSelectedCoffee(coffee)}
                  onLike={() => handleLike(coffee.id)}
                  isLiked={likedCoffees.includes(coffee.id)}
                />
              ))}
            </div>
          </section>
        </div>

        <RecommendationDialog
          coffee={selectedCoffee}
          onClose={() => setSelectedCoffee(coffeeRecommendations[0])}
        />
      </main>
    </div>
  );
}