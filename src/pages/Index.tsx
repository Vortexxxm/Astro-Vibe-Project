
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

const Index = () => {
  const { user, login, register, isLoading } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    birthDate: '',
    gender: '',
  });

  React.useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password);
      toast({
        title: 'مرحباً بك!',
        description: 'تم تسجيل الدخول بنجاح',
      });
    } catch (error) {
      toast({
        title: 'خطأ',
        description: 'البيانات غير صحيحة',
        variant: 'destructive',
      });
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.password || !formData.birthDate) {
      toast({
        title: 'خطأ',
        description: 'يرجى ملء جميع الحقول المطلوبة',
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
        title: 'مرحباً بك في عالم الأبراج!',
        description: `تم إنشاء حسابك بنجاح. برجك هو ${zodiacSign}`,
      });
    } catch (error) {
      toast({
        title: 'خطأ',
        description: 'حدث خطأ أثناء إنشاء الحساب',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarField />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mb-4">
              <div className="text-6xl animate-glow">✨</div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-zodiac-gold to-zodiac-purple bg-clip-text text-transparent mb-2">
              عالم الأبراج
            </h1>
            <p className="text-zodiac-star/80 text-lg">
              اكتشف برجك وتعرف على خصائصك الشخصية
            </p>
          </div>

          {/* Auth Form */}
          <Card className="zodiac-card border-2 border-zodiac-gold/30 bg-black/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-zodiac-gold text-center">ابدأ رحلتك الفلكية</CardTitle>
              <CardDescription className="text-zodiac-star/70 text-center">
                سجل دخولك أو أنشئ حساباً جديداً لاكتشاف عالم برجك
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-black/30">
                  <TabsTrigger value="login" className="data-[state=active]:bg-zodiac-gold/20">
                    تسجيل الدخول
                  </TabsTrigger>
                  <TabsTrigger value="register" className="data-[state=active]:bg-zodiac-gold/20">
                    إنشاء حساب
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email" className="text-zodiac-star">البريد الإلكتروني</Label>
                      <Input
                        id="login-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-black/30 border-zodiac-gold/30 text-white placeholder:text-gray-400"
                        placeholder="ادخل بريدك الإلكتروني"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="login-password" className="text-zodiac-star">كلمة المرور</Label>
                      <Input
                        id="login-password"
                        type="password"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className="bg-black/30 border-zodiac-gold/30 text-white placeholder:text-gray-400"
                        placeholder="ادخل كلمة المرور"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-zodiac-gold hover:bg-zodiac-gold/80 text-black font-bold"
                      disabled={isLoading}
                    >
                      {isLoading ? 'جاري تسجيل الدخول...' : 'دخول'}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="register">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-zodiac-star">الاسم الكامل</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="bg-black/30 border-zodiac-gold/30 text-white placeholder:text-gray-400"
                        placeholder="ادخل اسمك الكامل"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-zodiac-star">البريد الإلكتروني</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-black/30 border-zodiac-gold/30 text-white placeholder:text-gray-400"
                        placeholder="ادخل بريدك الإلكتروني"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-zodiac-star">كلمة المرور</Label>
                      <Input
                        id="password"
                        type="password"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className="bg-black/30 border-zodiac-gold/30 text-white placeholder:text-gray-400"
                        placeholder="ادخل كلمة المرور"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="birthDate" className="text-zodiac-star">تاريخ الميلاد</Label>
                      <Input
                        id="birthDate"
                        type="date"
                        value={formData.birthDate}
                        onChange={(e) => handleInputChange('birthDate', e.target.value)}
                        className="bg-black/30 border-zodiac-gold/30 text-white"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender" className="text-zodiac-star">الجنس (اختياري)</Label>
                      <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                        <SelectTrigger className="bg-black/30 border-zodiac-gold/30 text-white">
                          <SelectValue placeholder="اختر الجنس" />
                        </SelectTrigger>
                        <SelectContent className="bg-black border-zodiac-gold/30">
                          <SelectItem value="male" className="text-white hover:bg-zodiac-gold/20">ذكر</SelectItem>
                          <SelectItem value="female" className="text-white hover:bg-zodiac-gold/20">أنثى</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-zodiac-purple hover:bg-zodiac-purple/80 text-white font-bold"
                      disabled={isLoading}
                    >
                      {isLoading ? 'جاري إنشاء الحساب...' : 'إنشاء حساب'}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center mt-8 text-zodiac-star/60">
            <p>✨ رحلة ممتعة في عالم النجوم والأبراج ✨</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
