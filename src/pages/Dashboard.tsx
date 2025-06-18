
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { zodiacSigns } from '@/utils/zodiacUtils';
import StarField from '@/components/StarField';
import ZodiacIcon from '@/components/ZodiacIcon';
import { LogOut } from 'lucide-react';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  if (!user) return null;

  const userZodiac = zodiacSigns[user.zodiacSign];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const exploreZodiac = () => {
    navigate(`/zodiac/${user.zodiacSign}`);
  };

  const allZodiacSigns = Object.entries(zodiacSigns);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarField />
      
      <div className="relative z-10 min-h-screen p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-zodiac-gold">
              مرحباً {user.name}
            </h1>
            <p className="text-zodiac-star/70">اكتشف عالم برجك الفلكي</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-zodiac-gold/30 text-zodiac-star hover:bg-zodiac-gold/20"
          >
            <LogOut className="w-4 h-4 ml-2" />
            تسجيل الخروج
          </Button>
        </div>

        {/* User's Zodiac Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="zodiac-card border-2 border-zodiac-gold/50 bg-black/20 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <ZodiacIcon sign={user.zodiacSign} size="xl" animated />
              </div>
              <CardTitle className="text-4xl font-bold text-zodiac-gold">
                برجك: {userZodiac.name}
              </CardTitle>
              <CardDescription className="text-zodiac-star/80 text-lg">
                {userZodiac.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-4 rounded-lg border border-green-500/30">
                  <h3 className="font-bold text-green-400 mb-2">✨ الإيجابيات</h3>
                  <ul className="text-zodiac-star/80 text-sm space-y-1">
                    {userZodiac.traits.positive.slice(0, 3).map((trait, index) => (
                      <li key={index}>• {trait}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 p-4 rounded-lg border border-red-500/30">
                  <h3 className="font-bold text-red-400 mb-2">⚠️ نقاط للتحسين</h3>
                  <ul className="text-zodiac-star/80 text-sm space-y-1">
                    {userZodiac.traits.negative.slice(0, 3).map((trait, index) => (
                      <li key={index}>• {trait}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-zodiac-purple/20 to-zodiac-gold/20 p-4 rounded-lg border border-zodiac-purple/30">
                  <h3 className="font-bold text-zodiac-purple mb-2">🌟 الخصائص</h3>
                  <ul className="text-zodiac-star/80 text-sm space-y-1">
                    {userZodiac.traits.characteristics.slice(0, 3).map((trait, index) => (
                      <li key={index}>• {trait}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <Button
                onClick={exploreZodiac}
                className="bg-zodiac-gold hover:bg-zodiac-gold/80 text-black font-bold text-lg px-8 py-3"
              >
                اكتشف المزيد عن برجك 🔍
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* All Zodiac Signs */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-zodiac-star text-center mb-8">
            استكشف جميع الأبراج الفلكية
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allZodiacSigns.map(([key, zodiac]) => (
              <Card
                key={key}
                className="zodiac-card border border-zodiac-gold/30 bg-black/20 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => navigate(`/zodiac/${key}`)}
              >
                <CardContent className="p-4 text-center">
                  <div className="flex justify-center mb-2">
                    <ZodiacIcon sign={key} size="md" />
                  </div>
                  <h3 className="font-bold text-zodiac-gold">{zodiac.name}</h3>
                  <p className="text-zodiac-star/70 text-sm">{zodiac.symbol}</p>
                  <p className="text-zodiac-star/60 text-xs mt-1">
                    {zodiac.startDate.replace('-', '/')} - {zodiac.endDate.replace('-', '/')}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
