import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import StarField from '@/components/StarField';
import { Sparkles, Users, Phone, Mail, User, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Home = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarField />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        {/* Header avec boutons de navigation */}
        {user && (
          <div className="absolute top-4 right-4 flex gap-2">
            <Button
              onClick={() => navigate('/dashboard')}
              variant="outline"
              className="border-zodiac-purple/50 text-zodiac-star hover:bg-zodiac-purple/10 bg-transparent backdrop-blur-sm"
              size="sm"
            >
              <User className="w-4 h-4 mr-2" />
              Mon Profil
            </Button>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-zodiac-gold/30 text-zodiac-star hover:bg-zodiac-gold/10 bg-transparent backdrop-blur-sm"
              size="sm"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Déconnexion
            </Button>
          </div>
        )}

        {/* Header avec Logo et Nom */}
        <div className="text-center mb-12">
          <div className="mb-6 flex justify-center">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden bg-gradient-to-br from-zodiac-gold/30 to-zodiac-purple/30 p-2 border-4 border-zodiac-gold/50">
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-zodiac-gold to-zodiac-purple flex items-center justify-center logo-glow animate-pulse">
                <img 
                  src="/WhatsApp Image 2025-06-19 at 13.22.04_d91f28cc.jpg" 
                  alt="Astro Vibe Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-zodiac-gold via-zodiac-purple to-zodiac-gold bg-clip-text text-transparent mb-4 animate-glow">
            ASTRO VIBE
          </h1>
          
          <p className="text-zodiac-star/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Découvrez l'univers fascinant de l'astrologie et explorez les secrets de votre personnalité à travers votre signe zodiacal
          </p>
        </div>

        {/* Actions principales */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          {!user ? (
            <Button 
              onClick={() => navigate('/')}
              className="bg-zodiac-gold hover:bg-zodiac-gold/80 text-black font-bold text-lg px-8 py-4 h-auto"
              size="lg"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Commencer votre voyage
            </Button>
          ) : (
            <Button 
              onClick={() => navigate('/dashboard')}
              className="bg-zodiac-gold hover:bg-zodiac-gold/80 text-black font-bold text-lg px-8 py-4 h-auto"
              size="lg"
            >
              <User className="w-5 h-5 mr-2" />
              Voir mon profil
            </Button>
          )}
          
          <Button 
            onClick={() => navigate('/contact')}
            variant="outline"
            className="border-zodiac-purple/50 text-zodiac-star hover:bg-zodiac-purple/10 bg-transparent text-lg px-8 py-4 h-auto backdrop-blur-sm"
            size="lg"
          >
            <Mail className="w-5 h-5 mr-2" />
            Nous contacter
          </Button>
        </div>

        {/* Fonctionnalités */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
          <Card className="zodiac-card border-2 border-zodiac-gold/30 bg-black/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zodiac-gold/20 to-zodiac-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-zodiac-gold" />
              </div>
              <h3 className="text-xl font-bold text-zodiac-gold mb-2">12 Signes Zodiacaux</h3>
              <p className="text-zodiac-star/70">Explorez tous les signes astrologiques et leurs caractéristiques uniques</p>
            </CardContent>
          </Card>

          <Card className="zodiac-card border-2 border-zodiac-purple/30 bg-black/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zodiac-purple/20 to-zodiac-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-zodiac-purple" />
              </div>
              <h3 className="text-xl font-bold text-zodiac-purple mb-2">Traits Personnalisés</h3>
              <p className="text-zodiac-star/70">Découvrez vos qualités, défauts et caractéristiques personnelles</p>
            </CardContent>
          </Card>

          <Card className="zodiac-card border-2 border-green-500/30 bg-black/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Support Personnel</h3>
              <p className="text-zodiac-star/70">Une équipe dédiée pour vous accompagner dans votre découverte</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;