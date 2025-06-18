
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { zodiacSigns } from '@/utils/zodiacUtils';
import StarField from '@/components/StarField';
import ZodiacIcon from '@/components/ZodiacIcon';
import { LogOut, Search, Sparkles, Users } from 'lucide-react';

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
      
      <div className="relative z-10 min-h-screen p-3 sm:p-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 gap-4">
          <div className="text-center sm:text-right">
            <h1 className="text-2xl sm:text-3xl font-bold text-zodiac-gold">
              مرحباً {user.name} 👋
            </h1>
            <p className="text-zodiac-star/70 text-sm sm:text-base">اكتشف عالم برجك الفلكي</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-zodiac-gold/30 text-zodiac-star hover:bg-zodiac-gold/10 bg-transparent text-sm backdrop-blur-sm"
            size="sm"
          >
            <LogOut className="w-4 h-4 ml-2" />
            تسجيل الخروج
          </Button>
        </div>

        {/* User's Zodiac Section */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
          <Card className="zodiac-card border-2 border-zodiac-gold/50 bg-black/20 backdrop-blur-sm">
            <CardHeader className="text-center pb-4 sm:pb-6">
              <div className="flex justify-center mb-3 sm:mb-4">
                <ZodiacIcon sign={user.zodiacSign} size="lg" animated />
              </div>
              <CardTitle className="text-2xl sm:text-4xl font-bold text-zodiac-gold">
                برجك: {userZodiac.name}
              </CardTitle>
              <CardDescription className="text-zodiac-star/80 text-sm sm:text-lg px-2">
                {userZodiac.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-3 sm:p-4 rounded-lg border border-green-500/30">
                  <h3 className="font-bold text-green-400 mb-2 flex items-center justify-center gap-2 text-sm sm:text-base">
                    <Sparkles className="w-4 h-4" />
                    الإيجابيات
                  </h3>
                  <ul className="text-zodiac-star/80 text-xs sm:text-sm space-y-1">
                    {userZodiac.traits.positive.slice(0, 3).map((trait, index) => (
                      <li key={index} className="flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full ml-2"></span>
                        {trait}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 p-3 sm:p-4 rounded-lg border border-red-500/30">
                  <h3 className="font-bold text-red-400 mb-2 flex items-center justify-center gap-2 text-sm sm:text-base">
                    ⚠️ نقاط للتحسين
                  </h3>
                  <ul className="text-zodiac-star/80 text-xs sm:text-sm space-y-1">
                    {userZodiac.traits.negative.slice(0, 3).map((trait, index) => (
                      <li key={index} className="flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full ml-2"></span>
                        {trait}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-zodiac-purple/20 to-zodiac-gold/20 p-3 sm:p-4 rounded-lg border border-zodiac-purple/30">
                  <h3 className="font-bold text-zodiac-purple mb-2 flex items-center justify-center gap-2 text-sm sm:text-base">
                    <Users className="w-4 h-4" />
                    الخصائص
                  </h3>
                  <ul className="text-zodiac-star/80 text-xs sm:text-sm space-y-1">
                    {userZodiac.traits.characteristics.slice(0, 3).map((trait, index) => (
                      <li key={index} className="flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-zodiac-purple rounded-full ml-2"></span>
                        {trait}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Button
                onClick={exploreZodiac}
                className="bg-zodiac-gold hover:bg-zodiac-gold/80 text-black font-bold text-sm sm:text-lg px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto"
              >
                <Search className="w-4 h-4 ml-2" />
                اكتشف المزيد عن برجك
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* All Zodiac Signs */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-zodiac-star text-center mb-6 sm:mb-8 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
            استكشف جميع الأبراج الفلكية
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {allZodiacSigns.map(([key, zodiac]) => (
              <Card
                key={key}
                className="zodiac-card border border-zodiac-gold/30 bg-black/20 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:scale-105 hover:border-zodiac-gold/50"
                onClick={() => navigate(`/zodiac/${key}`)}
              >
                <CardContent className="p-3 sm:p-4 text-center">
                  <div className="flex justify-center mb-2">
                    <ZodiacIcon sign={key} size="sm" />
                  </div>
                  <h3 className="font-bold text-zodiac-gold text-xs sm:text-sm">{zodiac.name}</h3>
                  <p className="text-zodiac-star/70 text-xs">{zodiac.symbol}</p>
                  <p className="text-zodiac-star/60 text-xs mt-1">
                    {zodiac.startDate.replace('-', '/')} - {zodiac.endDate.replace('-', '/')}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="max-w-4xl mx-auto mt-8 sm:mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-gradient-to-br from-zodiac-gold/10 to-zodiac-gold/5 p-3 sm:p-4 rounded-lg border border-zodiac-gold/20 text-center">
              <div className="text-lg sm:text-2xl font-bold text-zodiac-gold">12</div>
              <div className="text-xs sm:text-sm text-zodiac-star/70">الأبراج</div>
            </div>
            <div className="bg-gradient-to-br from-zodiac-purple/10 to-zodiac-purple/5 p-3 sm:p-4 rounded-lg border border-zodiac-purple/20 text-center">
              <div className="text-lg sm:text-2xl font-bold text-zodiac-purple">4</div>
              <div className="text-xs sm:text-sm text-zodiac-star/70">العناصر</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 p-3 sm:p-4 rounded-lg border border-green-500/20 text-center">
              <div className="text-lg sm:text-2xl font-bold text-green-400">✨</div>
              <div className="text-xs sm:text-sm text-zodiac-star/70">سحر فلكي</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 p-3 sm:p-4 rounded-lg border border-blue-500/20 text-center">
              <div className="text-lg sm:text-2xl font-bold text-blue-400">🌟</div>
              <div className="text-xs sm:text-sm text-zodiac-star/70">معرفة</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
