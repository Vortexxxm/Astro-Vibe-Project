
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { zodiacSigns } from '@/utils/zodiacUtils';
import StarField from '@/components/StarField';
import ZodiacIcon from '@/components/ZodiacIcon';
import { ArrowLeft } from 'lucide-react';

const ZodiacDetails = () => {
  const { sign } = useParams<{ sign: string }>();
  const navigate = useNavigate();

  if (!sign || !zodiacSigns[sign]) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-zodiac-star">
          <h1 className="text-2xl font-bold mb-4">Signe non trouvé</h1>
          <Button onClick={() => navigate('/dashboard')}>
            Retour au tableau de bord
          </Button>
        </div>
      </div>
    );
  }

  const zodiac = zodiacSigns[sign];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarField />
      
      <div className="relative z-10 min-h-screen p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            onClick={() => navigate('/dashboard')}
            variant="outline"
            className="border-zodiac-gold/30 text-zodiac-star hover:bg-zodiac-gold/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-zodiac-gold">
              Signe {zodiac.name}
            </h1>
            <p className="text-zodiac-star/70">({zodiac.startDate.replace('-', '/')} - {zodiac.endDate.replace('-', '/')})</p>
          </div>
          <div className="w-20"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Info Card */}
          <Card className="zodiac-card border-2 border-zodiac-gold/50 bg-black/20 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <ZodiacIcon sign={sign} size="xl" animated />
              </div>
              <CardTitle className="text-4xl font-bold text-zodiac-gold">
                {zodiac.name} {zodiac.symbol}
              </CardTitle>
              <CardDescription className="text-zodiac-star/80 text-lg">
                Élément: {zodiac.element}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-zodiac-star text-center text-lg leading-relaxed">
                {zodiac.description}
              </p>
            </CardContent>
          </Card>

          {/* Traits Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Positive Traits */}
            <Card className="zodiac-card bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-green-400 text-center">
                  ✨ Qualités positives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {zodiac.traits.positive.map((trait, index) => (
                    <li key={index} className="flex items-center text-zodiac-star/90">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                      {trait}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Negative Traits */}
            <Card className="zodiac-card bg-gradient-to-br from-red-500/10 to-red-600/10 border-red-500/30">
              <CardHeader>
                <CardTitle className="text-red-400 text-center">
                  ⚠️ Points à améliorer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {zodiac.traits.negative.map((trait, index) => (
                    <li key={index} className="flex items-center text-zodiac-star/90">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-3 animate-pulse"></span>
                      {trait}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Characteristics */}
            <Card className="zodiac-card bg-gradient-to-br from-zodiac-purple/10 to-zodiac-gold/10 border-zodiac-purple/30">
              <CardHeader>
                <CardTitle className="text-zodiac-purple text-center">
                  🌟 Caractéristiques distinctives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {zodiac.traits.characteristics.map((trait, index) => (
                    <li key={index} className="flex items-center text-zodiac-star/90">
                      <span className="w-2 h-2 bg-zodiac-purple rounded-full mr-3 animate-pulse"></span>
                      {trait}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Element & Colors */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="zodiac-card border-zodiac-gold/30 bg-black/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-zodiac-gold text-center">
                  🔥 Élément naturel
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl mb-4">
                  {zodiac.element === 'Feu' && '🔥'}
                  {zodiac.element === 'Terre' && '🌍'}
                  {zodiac.element === 'Air' && '💨'}
                  {zodiac.element === 'Eau' && '💧'}
                </div>
                <p className="text-zodiac-star text-xl font-bold">{zodiac.element}</p>
              </CardContent>
            </Card>

            <Card className="zodiac-card border-zodiac-gold/30 bg-black/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-zodiac-gold text-center">
                  🎨 Couleurs porte-bonheur
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-4">
                  {zodiac.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-16 h-16 rounded-full border-2 border-zodiac-gold/50 animate-pulse"
                      style={{ backgroundColor: color }}
                      title={color}
                    ></div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation */}
          <div className="flex justify-center space-x-4">
            <Button
              onClick={() => navigate('/dashboard')}
              className="bg-zodiac-gold hover:bg-zodiac-gold/80 text-black font-bold"
            >
              Retour au tableau de bord
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZodiacDetails;
