import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { getZodiacSign } from '@/utils/zodiacUtils';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import StarField from '@/components/StarField';
import { Eye, EyeOff, Mail, Lock, User, Calendar, Heart } from 'lucide-react';

const Index = () => {
  const { user, login, register, isLoading } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    birthDate: '',
    gender: '',
  });

  React.useEffect(() => {
    if (user) {
      navigate('/home');
    }
  }, [user, navigate]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      toast({
        title: 'Erreur',
        description: 'Veuillez remplir tous les champs requis',
        variant: 'destructive',
      });
      return;
    }

    try {
      await login(formData.email, formData.password);
      toast({
        title: 'Bienvenue !',
        description: 'Connexion réussie',
      });
      navigate('/home');
    } catch (error) {
      toast({
        title: 'Erreur',
        description: 'Données incorrectes',
        variant: 'destructive',
      });
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.password || !formData.birthDate) {
      toast({
        title: 'Erreur',
        description: 'Veuillez remplir tous les champs requis',
        variant: 'destructive',
      });
      return;
    }

    if (formData.password.length < 6) {
      toast({
        title: 'Erreur',
        description: 'Le mot de passe doit contenir au moins 6 caractères',
        variant: 'destructive',
      });
      return;
    }

    try {
      const zodiacSign = getZodiacSign(formData.birthDate);
      await register({
        name: formData.name,
        email: formData.email,
        birthDate: formData.birthDate,
        gender: formData.gender,
        zodiacSign,
        password: formData.password,
      });
      
      toast({
        title: 'Bienvenue dans Astro Vibe !',
        description: `Votre compte a été créé avec succès. Votre signe est ${zodiacSign}`,
      });
      navigate('/home');
    } catch (error) {
      toast({
        title: 'Erreur',
        description: "Une erreur s'est produite lors de la création du compte",
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarField />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-3 sm:p-4">
        <div className="w-full max-w-sm sm:max-w-md">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="mb-3 sm:mb-4 flex justify-center">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-gradient-to-br from-zodiac-gold/20 to-zodiac-purple/20 p-1 animate-pulse border-2 border-zodiac-gold/30">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-zodiac-gold to-zodiac-purple flex items-center justify-center">
                  <img 
                    src="/WhatsApp Image 2025-06-19 at 13.22.04_d91f28cc.jpg" 
                    alt="Astro Vibe Logo" 
                    className="w-full h-full object-cover rounded-full logo-glow"
                  />
                </div>
              </div>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-zodiac-gold to-zodiac-purple bg-clip-text text-transparent mb-2">
              Astro Vibe
            </h1>
            <p className="text-zodiac-star/80 text-sm sm:text-lg px-2">
              Découvrez votre signe et vos traits de personnalité
            </p>
          </div>

          {/* Auth Form */}
          <Card className="zodiac-card border-2 border-zodiac-gold/30 bg-black/20 backdrop-blur-sm">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-zodiac-gold text-center text-lg sm:text-xl">Commencez votre voyage astral</CardTitle>
              <CardDescription className="text-zodiac-star/70 text-center text-xs sm:text-sm px-2">
                Connectez-vous ou créez un compte pour découvrir votre univers zodiacal
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-black/30 mb-4 sm:mb-6">
                  <TabsTrigger 
                    value="login" 
                    className="data-[state=active]:bg-zodiac-gold/20 text-xs sm:text-sm"
                  >
                    Connexion
                  </TabsTrigger>
                  <TabsTrigger 
                    value="register" 
                    className="data-[state=active]:bg-zodiac-gold/20 text-xs sm:text-sm"
                  >
                    Inscription
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="login" className="space-y-0">
                  <form onSubmit={handleLogin} className="space-y-3 sm:space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email" className="text-zodiac-star text-xs sm:text-sm flex items-center gap-2">
                        <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                        Email
                      </Label>
                      <Input
                        id="login-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-black/30 border-zodiac-gold/30 text-white placeholder:text-gray-400 h-10 sm:h-11 text-sm"
                        placeholder="Entrez votre email"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="login-password" className="text-zodiac-star text-xs sm:text-sm flex items-center gap-2">
                        <Lock className="w-3 h-3 sm:w-4 sm:h-4" />
                        Mot de passe
                      </Label>
                      <div className="relative">
                        <Input
                          id="login-password"
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={(e) => handleInputChange('password', e.target.value)}
                          className="bg-black/30 border-zodiac-gold/30 text-white placeholder:text-gray-400 h-10 sm:h-11 text-sm pr-10"
                          placeholder="Entrez votre mot de passe"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-zodiac-gold hover:bg-zodiac-gold/80 text-black font-bold h-10 sm:h-11 text-sm sm:text-base"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Connexion...' : 'Se connecter ✨'}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="register" className="space-y-0">
                  <form onSubmit={handleRegister} className="space-y-3 sm:space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-zodiac-star text-xs sm:text-sm flex items-center gap-2">
                        <User className="w-3 h-3 sm:w-4 sm:h-4" />
                        Nom complet
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="bg-black/30 border-zodiac-gold/30 text-white placeholder:text-gray-400 h-10 sm:h-11 text-sm"
                        placeholder="Entrez votre nom complet"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-zodiac-star text-xs sm:text-sm flex items-center gap-2">
                        <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-black/30 border-zodiac-gold/30 text-white placeholder:text-gray-400 h-10 sm:h-11 text-sm"
                        placeholder="Entrez votre email"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-zodiac-star text-xs sm:text-sm flex items-center gap-2">
                        <Lock className="w-3 h-3 sm:w-4 sm:h-4" />
                        Mot de passe
                      </Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={(e) => handleInputChange('password', e.target.value)}
                          className="bg-black/30 border-zodiac-gold/30 text-white placeholder:text-gray-400 h-10 sm:h-11 text-sm pr-10"
                          placeholder="6 caractères minimum"
                          required
                          minLength={6}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="birthDate" className="text-zodiac-star text-xs sm:text-sm flex items-center gap-2">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        Date de naissance
                      </Label>
                      <Input
                        id="birthDate"
                        type="date"
                        value={formData.birthDate}
                        onChange={(e) => handleInputChange('birthDate', e.target.value)}
                        className="bg-black/30 border-zodiac-gold/30 text-white h-10 sm:h-11 text-sm"
                        required
                        max={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender" className="text-zodiac-star text-xs sm:text-sm flex items-center gap-2">
                        <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                        Genre (optionnel)
                      </Label>
                      <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                        <SelectTrigger className="bg-black/30 border-zodiac-gold/30 text-white h-10 sm:h-11 text-sm">
                          <SelectValue placeholder="Choisir le genre" />
                        </SelectTrigger>
                        <SelectContent className="bg-black border-zodiac-gold/30">
                          <SelectItem value="male" className="text-white hover:bg-zodiac-gold/20">Homme</SelectItem>
                          <SelectItem value="female" className="text-white hover:bg-zodiac-gold/20">Femme</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-zodiac-purple hover:bg-zodiac-purple/80 text-white font-bold h-10 sm:h-11 text-sm sm:text-base"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Création du compte...' : 'Créer un compte 🌟'}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center mt-6 sm:mt-8 text-zodiac-star/60 px-4">
            <p className="text-xs sm:text-sm">✨ Un voyage fascinant dans l'univers des étoiles ✨</p>
            <div className="flex justify-center items-center mt-2 text-xs text-zodiac-star/40">
              <span>Fait avec</span>
              <Heart className="w-3 h-3 mx-1 text-red-400" />
              <span>pour vous</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;