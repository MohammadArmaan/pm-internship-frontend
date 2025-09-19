import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Search, 
  MapPin, 
  Building2, 
  Star, 
  Loader2,
  X,
  Plus,
  User,
  GraduationCap,
  Heart
} from "lucide-react";
import { apiService, UserProfile, InternshipRecommendation } from "@/services/api";

const Recommend = () => {
  const [sectors, setSectors] = useState<string[]>([]);
  const [locations, setLocations] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<InternshipRecommendation[]>([]);
  const [formData, setFormData] = useState<UserProfile>({
    name: "",
    age: 18,
    education: "",
    skills: [],
    interests: [],
    preferred_sectors: [],
    preferred_locations: [],
  });
  const [skillInput, setSkillInput] = useState("");
  const [interestInput, setInterestInput] = useState("");

  useEffect(() => {
    loadFormData();
  }, []);

  const loadFormData = async () => {
    try {
      const [sectorsData, locationsData] = await Promise.all([
        apiService.getSectors(),
        apiService.getLocations(),
      ]);
      setSectors(sectorsData);
      setLocations(locationsData);
    } catch (error) {
      toast({
        title: "Error loading data",
        description: "Failed to load sectors and locations. Please try again.",
        variant: "destructive",
      });
    }
  };

  const addSkill = () => {
    if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, skillInput.trim()]
      }));
      setSkillInput("");
    }
  };

  const removeSkill = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill)
    }));
  };

  const addInterest = () => {
    if (interestInput.trim() && !formData.interests.includes(interestInput.trim())) {
      setFormData(prev => ({
        ...prev,
        interests: [...prev.interests, interestInput.trim()]
      }));
      setInterestInput("");
    }
  };

  const removeInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.filter(i => i !== interest)
    }));
  };

  const handleSectorChange = (sector: string) => {
    setFormData(prev => ({
      ...prev,
      preferred_sectors: prev.preferred_sectors.includes(sector)
        ? prev.preferred_sectors.filter(s => s !== sector)
        : [...prev.preferred_sectors, sector]
    }));
  };

  const handleLocationChange = (location: string) => {
    setFormData(prev => ({
      ...prev,
      preferred_locations: prev.preferred_locations.includes(location)
        ? prev.preferred_locations.filter(l => l !== location)
        : [...prev.preferred_locations, location]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.education || formData.skills.length === 0) {
      toast({
        title: "Incomplete form",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const result = await apiService.getRecommendations(formData);
      setRecommendations(result);
      toast({
        title: "Success!",
        description: `Found ${result.length} internship recommendations for you.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get recommendations. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Find Your Perfect
              <span className="text-gradient block">Internship</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get AI-powered internship recommendations tailored to your skills, interests, and career goals.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <Card className="p-6 shadow-card border-border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Info */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <User className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold">Personal Information</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="age">Age</Label>
                        <Input
                          id="age"
                          type="number"
                          min="16"
                          max="35"
                          value={formData.age}
                          onChange={(e) => setFormData(prev => ({ ...prev, age: parseInt(e.target.value) || 18 }))}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="education">Education *</Label>
                      <Input
                        id="education"
                        value={formData.education}
                        onChange={(e) => setFormData(prev => ({ ...prev, education: e.target.value }))}
                        placeholder="e.g., B.Tech Computer Science, MBA, 12th Grade"
                        required
                      />
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold">Skills *</h3>
                    </div>
                    
                    <div className="flex gap-2">
                      <Input
                        value={skillInput}
                        onChange={(e) => setSkillInput(e.target.value)}
                        placeholder="Add a skill (e.g., Python, Marketing, Design)"
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                      />
                      <Button type="button" onClick={addSkill} size="icon">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {formData.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="pr-1">
                          {skill}
                          <X
                            className="ml-1 h-3 w-3 cursor-pointer"
                            onClick={() => removeSkill(skill)}
                          />
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Interests */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Heart className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold">Interests</h3>
                    </div>
                    
                    <div className="flex gap-2">
                      <Input
                        value={interestInput}
                        onChange={(e) => setInterestInput(e.target.value)}
                        placeholder="Add an interest (e.g., AI, Healthcare, Environment)"
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addInterest())}
                      />
                      <Button type="button" onClick={addInterest} size="icon">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {formData.interests.map((interest) => (
                        <Badge key={interest} variant="outline" className="pr-1">
                          {interest}
                          <X
                            className="ml-1 h-3 w-3 cursor-pointer"
                            onClick={() => removeInterest(interest)}
                          />
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Preferences */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label className="flex items-center gap-2 mb-4">
                        <Building2 className="h-4 w-4" />
                        Preferred Sectors
                      </Label>
                      <div className="space-y-2 max-h-40 overflow-y-auto">
                        {sectors.map((sector) => (
                          <label key={sector} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.preferred_sectors.includes(sector)}
                              onChange={() => handleSectorChange(sector)}
                              className="rounded border-gray-300"
                            />
                            <span className="text-sm">{sector}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <Label className="flex items-center gap-2 mb-4">
                        <MapPin className="h-4 w-4" />
                        Preferred Locations
                      </Label>
                      <div className="space-y-2 max-h-40 overflow-y-auto">
                        {locations.map((location) => (
                          <label key={location} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.preferred_locations.includes(location)}
                              onChange={() => handleLocationChange(location)}
                              className="rounded border-gray-300"
                            />
                            <span className="text-sm">{location}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Finding Internships...
                      </>
                    ) : (
                      <>
                        <Search className="mr-2 h-5 w-5" />
                        Get Recommendations
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Results Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <Card className="p-6 shadow-card border-border">
                <h3 className="text-lg font-semibold mb-4">Your Recommendations</h3>
                
                {recommendations.length === 0 ? (
                  <div className="text-center py-8">
                    <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Complete the form to get your personalized internship recommendations.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {recommendations.map((internship, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="p-4 hover:shadow-card transition-all border-border hover:border-primary/20">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="font-semibold text-foreground">{internship.title}</h4>
                            {internship.match_score && (
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 text-accent fill-accent" />
                                <span className="text-sm font-medium">{(internship.match_score * 100).toFixed(0)}%</span>
                              </div>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="secondary">{internship.sector}</Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {internship.location}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{internship.description}</p>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Recommend;